"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkerInfo = exports.AsynchronouslyCreatedResourcePool = void 0;
const node_worker_threads_1 = require("node:worker_threads");
const node_assert_1 = __importDefault(require("node:assert"));
const errors_1 = require("../errors");
const symbols_1 = require("../symbols");
class AsynchronouslyCreatedResource {
    constructor() {
        this.onreadyListeners = [];
    }
    markAsReady() {
        const listeners = this.onreadyListeners;
        (0, node_assert_1.default)(listeners !== null);
        this.onreadyListeners = null;
        for (const listener of listeners) {
            listener();
        }
    }
    isReady() {
        return this.onreadyListeners === null;
    }
    onReady(fn) {
        if (this.onreadyListeners === null) {
            fn(); // Zalgo is okay here.
            return;
        }
        this.onreadyListeners.push(fn);
    }
}
class AsynchronouslyCreatedResourcePool {
    constructor(maximumUsage) {
        this.pendingItems = new Set();
        this.readyItems = new Set();
        this.maximumUsage = maximumUsage;
        this.onAvailableListeners = [];
    }
    add(item) {
        this.pendingItems.add(item);
        item.onReady(() => {
            /* istanbul ignore else */
            if (this.pendingItems.has(item)) {
                this.pendingItems.delete(item);
                this.readyItems.add(item);
                this.maybeAvailable(item);
            }
        });
    }
    delete(item) {
        this.pendingItems.delete(item);
        this.readyItems.delete(item);
    }
    findAvailable() {
        let minUsage = this.maximumUsage;
        let candidate = null;
        for (const item of this.readyItems) {
            const usage = item.currentUsage();
            if (usage === 0)
                return item;
            if (usage < minUsage) {
                candidate = item;
                minUsage = usage;
            }
        }
        return candidate;
    }
    *[Symbol.iterator]() {
        yield* this.pendingItems;
        yield* this.readyItems;
    }
    get size() {
        return this.pendingItems.size + this.readyItems.size;
    }
    maybeAvailable(item) {
        /* istanbul ignore else */
        if (item.currentUsage() < this.maximumUsage) {
            for (const listener of this.onAvailableListeners) {
                listener(item);
            }
        }
    }
    onAvailable(fn) {
        this.onAvailableListeners.push(fn);
    }
}
exports.AsynchronouslyCreatedResourcePool = AsynchronouslyCreatedResourcePool;
class WorkerInfo extends AsynchronouslyCreatedResource {
    constructor(worker, port, onMessage) {
        super();
        this.idleTimeout = null; // eslint-disable-line no-undef
        this.lastSeenResponseCount = 0;
        this.worker = worker;
        this.port = port;
        this.port.on('message', (message) => this._handleResponse(message));
        this.onMessage = onMessage;
        this.taskInfos = new Map();
        this.sharedBuffer = new Int32Array(new SharedArrayBuffer(symbols_1.kFieldCount * Int32Array.BYTES_PER_ELEMENT));
    }
    destroy() {
        this.worker.terminate();
        this.port.close();
        this.clearIdleTimeout();
        for (const taskInfo of this.taskInfos.values()) {
            taskInfo.done(errors_1.Errors.ThreadTermination());
        }
        this.taskInfos.clear();
    }
    clearIdleTimeout() {
        if (this.idleTimeout !== null) {
            clearTimeout(this.idleTimeout);
            this.idleTimeout = null;
        }
    }
    ref() {
        this.port.ref();
        return this;
    }
    unref() {
        // Note: Do not call ref()/unref() on the Worker itself since that may cause
        // a hard crash, see https://github.com/nodejs/node/pull/33394.
        this.port.unref();
        return this;
    }
    _handleResponse(message) {
        this.onMessage(message);
        if (this.taskInfos.size === 0) {
            // No more tasks running on this Worker means it should not keep the
            // process running.
            this.unref();
        }
    }
    postTask(taskInfo) {
        (0, node_assert_1.default)(!this.taskInfos.has(taskInfo.taskId));
        const message = {
            task: taskInfo.releaseTask(),
            taskId: taskInfo.taskId,
            filename: taskInfo.filename,
            name: taskInfo.name
        };
        try {
            this.port.postMessage(message, taskInfo.transferList);
        }
        catch (err) {
            // This would mostly happen if e.g. message contains unserializable data
            // or transferList is invalid.
            taskInfo.done(err);
            return;
        }
        taskInfo.workerInfo = this;
        this.taskInfos.set(taskInfo.taskId, taskInfo);
        this.ref();
        this.clearIdleTimeout();
        // Inform the worker that there are new messages posted, and wake it up
        // if it is waiting for one.
        Atomics.add(this.sharedBuffer, symbols_1.kRequestCountField, 1);
        Atomics.notify(this.sharedBuffer, symbols_1.kRequestCountField, 1);
    }
    processPendingMessages() {
        // If we *know* that there are more messages than we have received using
        // 'message' events yet, then try to load and handle them synchronously,
        // without the need to wait for more expensive events on the event loop.
        // This would usually break async tracking, but in our case, we already have
        // the extra TaskInfo/AsyncResource layer that rectifies that situation.
        const actualResponseCount = Atomics.load(this.sharedBuffer, symbols_1.kResponseCountField);
        if (actualResponseCount !== this.lastSeenResponseCount) {
            this.lastSeenResponseCount = actualResponseCount;
            let entry;
            while ((entry = (0, node_worker_threads_1.receiveMessageOnPort)(this.port)) !== undefined) {
                this._handleResponse(entry.message);
            }
        }
    }
    isRunningAbortableTask() {
        // If there are abortable tasks, we are running one at most per Worker.
        if (this.taskInfos.size !== 1)
            return false;
        const [[, task]] = this.taskInfos;
        return task.abortSignal !== null;
    }
    currentUsage() {
        if (this.isRunningAbortableTask())
            return Infinity;
        return this.taskInfos.size;
    }
}
exports.WorkerInfo = WorkerInfo;
//# sourceMappingURL=index.js.map