"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _DirectlyTransferable_value, _ArrayBufferViewTransferable_view, _Piscina_pool;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FixedQueue = exports.version = exports.queueOptionsSymbol = exports.valueSymbol = exports.transferableSymbol = exports.Piscina = exports.workerData = exports.isWorkerThread = exports.move = void 0;
const node_worker_threads_1 = require("node:worker_threads");
const node_events_1 = require("node:events");
const node_path_1 = require("node:path");
const node_util_1 = require("node:util");
const node_perf_hooks_1 = require("node:perf_hooks");
const promises_1 = require("node:timers/promises");
const node_assert_1 = __importDefault(require("node:assert"));
const package_json_1 = require("../package.json");
Object.defineProperty(exports, "version", { enumerable: true, get: function () { return package_json_1.version; } });
const symbols_1 = require("./symbols");
Object.defineProperty(exports, "queueOptionsSymbol", { enumerable: true, get: function () { return symbols_1.kQueueOptions; } });
Object.defineProperty(exports, "transferableSymbol", { enumerable: true, get: function () { return symbols_1.kTransferable; } });
Object.defineProperty(exports, "valueSymbol", { enumerable: true, get: function () { return symbols_1.kValue; } });
const task_queue_1 = require("./task_queue");
Object.defineProperty(exports, "FixedQueue", { enumerable: true, get: function () { return task_queue_1.FixedQueue; } });
const worker_pool_1 = require("./worker_pool");
const abort_1 = require("./abort");
const errors_1 = require("./errors");
const common_1 = require("./common");
const cpuParallelism = (0, common_1.getAvailableParallelism)();
const kDefaultOptions = {
    filename: null,
    name: 'default',
    minThreads: Math.max(Math.floor(cpuParallelism / 2), 1),
    maxThreads: cpuParallelism * 1.5,
    idleTimeout: 0,
    maxQueue: Infinity,
    concurrentTasksPerWorker: 1,
    useAtomics: true,
    taskQueue: new task_queue_1.ArrayTaskQueue(),
    niceIncrement: 0,
    trackUnmanagedFds: true,
    closeTimeout: 30000,
    recordTiming: true
};
const kDefaultRunOptions = {
    transferList: undefined,
    filename: null,
    signal: null,
    name: null
};
const kDefaultCloseOptions = {
    force: false
};
class DirectlyTransferable {
    constructor(value) {
        _DirectlyTransferable_value.set(this, void 0);
        __classPrivateFieldSet(this, _DirectlyTransferable_value, value, "f");
    }
    get [(_DirectlyTransferable_value = new WeakMap(), symbols_1.kTransferable)]() { return __classPrivateFieldGet(this, _DirectlyTransferable_value, "f"); }
    get [symbols_1.kValue]() { return __classPrivateFieldGet(this, _DirectlyTransferable_value, "f"); }
}
class ArrayBufferViewTransferable {
    constructor(view) {
        _ArrayBufferViewTransferable_view.set(this, void 0);
        __classPrivateFieldSet(this, _ArrayBufferViewTransferable_view, view, "f");
    }
    get [(_ArrayBufferViewTransferable_view = new WeakMap(), symbols_1.kTransferable)]() { return __classPrivateFieldGet(this, _ArrayBufferViewTransferable_view, "f").buffer; }
    get [symbols_1.kValue]() { return __classPrivateFieldGet(this, _ArrayBufferViewTransferable_view, "f"); }
}
class ThreadPool {
    constructor(publicInterface, options) {
        var _a;
        this.skipQueue = [];
        this.completed = 0;
        this.start = node_perf_hooks_1.performance.now();
        this.inProcessPendingMessages = false;
        this.startingUp = false;
        this.closingUp = false;
        this.workerFailsDuringBootstrap = false;
        this.destroying = false;
        this.publicInterface = publicInterface;
        this.taskQueue = options.taskQueue || new task_queue_1.ArrayTaskQueue();
        const filename = options.filename ? (0, common_1.maybeFileURLToPath)(options.filename) : null;
        this.options = { ...kDefaultOptions, ...options, filename, maxQueue: 0 };
        if (this.options.recordTiming) {
            this.runTime = (0, node_perf_hooks_1.createHistogram)();
            this.waitTime = (0, node_perf_hooks_1.createHistogram)();
        }
        // The >= and <= could be > and < but this way we get 100 % coverage 🙃
        if (options.maxThreads !== undefined &&
            this.options.minThreads >= options.maxThreads) {
            this.options.minThreads = options.maxThreads;
        }
        if (options.minThreads !== undefined &&
            this.options.maxThreads <= options.minThreads) {
            this.options.maxThreads = options.minThreads;
        }
        if (options.maxQueue === 'auto') {
            this.options.maxQueue = this.options.maxThreads ** 2;
        }
        else {
            this.options.maxQueue = (_a = options.maxQueue) !== null && _a !== void 0 ? _a : kDefaultOptions.maxQueue;
        }
        this.workers = new worker_pool_1.AsynchronouslyCreatedResourcePool(this.options.concurrentTasksPerWorker);
        this.workers.onAvailable((w) => this._onWorkerAvailable(w));
        this.startingUp = true;
        this._ensureMinimumWorkers();
        this.startingUp = false;
        this.needsDrain = false;
    }
    _ensureMinimumWorkers() {
        if (this.closingUp || this.destroying) {
            return;
        }
        while (this.workers.size < this.options.minThreads) {
            this._addNewWorker();
        }
    }
    _addNewWorker() {
        const pool = this;
        const worker = new node_worker_threads_1.Worker((0, node_path_1.resolve)(__dirname, 'worker.js'), {
            env: this.options.env,
            argv: this.options.argv,
            execArgv: this.options.execArgv,
            resourceLimits: this.options.resourceLimits,
            workerData: this.options.workerData,
            trackUnmanagedFds: this.options.trackUnmanagedFds
        });
        const { port1, port2 } = new node_worker_threads_1.MessageChannel();
        const workerInfo = new worker_pool_1.WorkerInfo(worker, port1, onMessage);
        if (this.startingUp) {
            // There is no point in waiting for the initial set of Workers to indicate
            // that they are ready, we just mark them as such from the start.
            workerInfo.markAsReady();
        }
        const message = {
            filename: this.options.filename,
            name: this.options.name,
            port: port2,
            sharedBuffer: workerInfo.sharedBuffer,
            useAtomics: this.options.useAtomics,
            niceIncrement: this.options.niceIncrement
        };
        worker.postMessage(message, [port2]);
        function onMessage(message) {
            const { taskId, result } = message;
            // In case of success: Call the callback that was passed to `runTask`,
            // remove the `TaskInfo` associated with the Worker, which marks it as
            // free again.
            const taskInfo = workerInfo.taskInfos.get(taskId);
            workerInfo.taskInfos.delete(taskId);
            pool.workers.maybeAvailable(workerInfo);
            /* istanbul ignore if */
            if (taskInfo === undefined) {
                const err = new Error(`Unexpected message from Worker: ${(0, node_util_1.inspect)(message)}`);
                pool.publicInterface.emit('error', err);
            }
            else {
                taskInfo.done(message.error, result);
            }
            pool._processPendingMessages();
        }
        function onReady() {
            if (workerInfo.currentUsage() === 0) {
                workerInfo.unref();
            }
            if (!workerInfo.isReady()) {
                workerInfo.markAsReady();
            }
        }
        function onEventMessage(message) {
            pool.publicInterface.emit('message', message);
        }
        worker.on('message', (message) => {
            message instanceof Object && common_1.READY in message ? onReady() : onEventMessage(message);
        });
        worker.on('error', (err) => {
            this._onError(worker, workerInfo, err, false);
        });
        worker.on('exit', (exitCode) => {
            if (this.destroying) {
                return;
            }
            const err = new Error(`worker exited with code: ${exitCode}`);
            // Only error unfinished tasks on process exit, since there are legitimate
            // reasons to exit workers and we want to handle that gracefully when possible.
            this._onError(worker, workerInfo, err, true);
        });
        worker.unref();
        port1.on('close', () => {
            // The port is only closed if the Worker stops for some reason, but we
            // always .unref() the Worker itself. We want to receive e.g. 'error'
            // events on it, so we ref it once we know it's going to exit anyway.
            worker.ref();
        });
        this.workers.add(workerInfo);
    }
    _onError(worker, workerInfo, err, onlyErrorUnfinishedTasks) {
        // Work around the bug in https://github.com/nodejs/node/pull/33394
        worker.ref = () => { };
        const taskInfos = [...workerInfo.taskInfos.values()];
        workerInfo.taskInfos.clear();
        // Remove the worker from the list and potentially start a new Worker to
        // replace the current one.
        this._removeWorker(workerInfo);
        if (workerInfo.isReady() && !this.workerFailsDuringBootstrap) {
            this._ensureMinimumWorkers();
        }
        else {
            // Do not start new workers over and over if they already fail during
            // bootstrap, there's no point.
            this.workerFailsDuringBootstrap = true;
        }
        if (taskInfos.length > 0) {
            // If there are remaining unfinished tasks, call the callback that was
            // passed to `postTask` with the error
            for (const taskInfo of taskInfos) {
                taskInfo.done(err, null);
            }
        }
        else if (!onlyErrorUnfinishedTasks) {
            // If there are no unfinished tasks, instead emit an 'error' event
            this.publicInterface.emit('error', err);
        }
    }
    _processPendingMessages() {
        if (this.inProcessPendingMessages || !this.options.useAtomics) {
            return;
        }
        this.inProcessPendingMessages = true;
        try {
            for (const workerInfo of this.workers) {
                workerInfo.processPendingMessages();
            }
        }
        finally {
            this.inProcessPendingMessages = false;
        }
    }
    _removeWorker(workerInfo) {
        workerInfo.destroy();
        this.workers.delete(workerInfo);
    }
    _onWorkerAvailable(workerInfo) {
        var _a;
        while ((this.taskQueue.size > 0 || this.skipQueue.length > 0) &&
            workerInfo.currentUsage() < this.options.concurrentTasksPerWorker) {
            // The skipQueue will have tasks that we previously shifted off
            // the task queue but had to skip over... we have to make sure
            // we drain that before we drain the taskQueue.
            const taskInfo = this.skipQueue.shift() ||
                this.taskQueue.shift();
            // If the task has an abortSignal and the worker has any other
            // tasks, we cannot distribute the task to it. Skip for now.
            if (taskInfo.abortSignal && workerInfo.taskInfos.size > 0) {
                this.skipQueue.push(taskInfo);
                break;
            }
            const now = node_perf_hooks_1.performance.now();
            (_a = this.waitTime) === null || _a === void 0 ? void 0 : _a.record((0, common_1.toHistogramIntegerNano)(now - taskInfo.created));
            taskInfo.started = now;
            workerInfo.postTask(taskInfo);
            this._maybeDrain();
            return;
        }
        // If Infinity was sent as a parameter, we skip setting the Timeout that clears the worker
        if (this.options.idleTimeout === Infinity) {
            return;
        }
        if (workerInfo.taskInfos.size === 0 &&
            this.workers.size > this.options.minThreads) {
            workerInfo.idleTimeout = setTimeout(() => {
                node_assert_1.default.strictEqual(workerInfo.taskInfos.size, 0);
                if (this.workers.size > this.options.minThreads) {
                    this._removeWorker(workerInfo);
                }
            }, this.options.idleTimeout).unref();
        }
    }
    runTask(task, options) {
        var _a, _b;
        let { filename, name } = options;
        const { transferList = [] } = options;
        if (filename == null) {
            filename = this.options.filename;
        }
        if (name == null) {
            name = this.options.name;
        }
        if (typeof filename !== 'string') {
            return Promise.reject(errors_1.Errors.FilenameNotProvided());
        }
        filename = (0, common_1.maybeFileURLToPath)(filename);
        let signal;
        if (this.closingUp) {
            const closingUpAbortController = new AbortController();
            closingUpAbortController.abort('queue is closing up');
            signal = closingUpAbortController.signal;
        }
        else {
            signal = (_a = options.signal) !== null && _a !== void 0 ? _a : null;
        }
        let resolve;
        let reject;
        // eslint-disable-next-line
        const ret = new Promise((res, rej) => { resolve = res; reject = rej; });
        const taskInfo = new task_queue_1.TaskInfo(task, transferList, filename, name, (err, result) => {
            var _a;
            this.completed++;
            if (taskInfo.started) {
                (_a = this.runTime) === null || _a === void 0 ? void 0 : _a.record((0, common_1.toHistogramIntegerNano)(node_perf_hooks_1.performance.now() - taskInfo.started));
            }
            if (err !== null) {
                reject(err);
            }
            else {
                resolve(result);
            }
            this._maybeDrain();
        }, signal, this.publicInterface.asyncResource.asyncId());
        if (signal !== null) {
            // If the AbortSignal has an aborted property and it's truthy,
            // reject immediately.
            if (signal.aborted) {
                return Promise.reject(new abort_1.AbortError(signal.reason));
            }
            taskInfo.abortListener = () => {
                // Call reject() first to make sure we always reject with the AbortError
                // if the task is aborted, not with an Error from the possible
                // thread termination below.
                reject(new abort_1.AbortError(signal.reason));
                if (taskInfo.workerInfo !== null) {
                    // Already running: We cancel the Worker this is running on.
                    this._removeWorker(taskInfo.workerInfo);
                    this._ensureMinimumWorkers();
                }
                else {
                    // Not yet running: Remove it from the queue.
                    this.taskQueue.remove(taskInfo);
                }
            };
            (0, abort_1.onabort)(signal, taskInfo.abortListener);
        }
        // If there is a task queue, there's no point in looking for an available
        // Worker thread. Add this task to the queue, if possible.
        if (this.taskQueue.size > 0) {
            const totalCapacity = this.options.maxQueue + this.pendingCapacity();
            if (this.taskQueue.size >= totalCapacity) {
                if (this.options.maxQueue === 0) {
                    return Promise.reject(errors_1.Errors.NoTaskQueueAvailable());
                }
                else {
                    return Promise.reject(errors_1.Errors.TaskQueueAtLimit());
                }
            }
            else {
                if (this.workers.size < this.options.maxThreads) {
                    this._addNewWorker();
                }
                this.taskQueue.push(taskInfo);
            }
            this._maybeDrain();
            return ret;
        }
        // Look for a Worker with a minimum number of tasks it is currently running.
        let workerInfo = this.workers.findAvailable();
        // If we want the ability to abort this task, use only workers that have
        // no running tasks.
        if (workerInfo !== null && workerInfo.currentUsage() > 0 && signal) {
            workerInfo = null;
        }
        // If no Worker was found, or that Worker was handling another task in some
        // way, and we still have the ability to spawn new threads, do so.
        let waitingForNewWorker = false;
        if ((workerInfo === null || workerInfo.currentUsage() > 0) &&
            this.workers.size < this.options.maxThreads) {
            this._addNewWorker();
            waitingForNewWorker = true;
        }
        // If no Worker is found, try to put the task into the queue.
        if (workerInfo === null) {
            if (this.options.maxQueue <= 0 && !waitingForNewWorker) {
                return Promise.reject(errors_1.Errors.NoTaskQueueAvailable());
            }
            else {
                this.taskQueue.push(taskInfo);
            }
            this._maybeDrain();
            return ret;
        }
        // TODO(addaleax): Clean up the waitTime/runTime recording.
        const now = node_perf_hooks_1.performance.now();
        (_b = this.waitTime) === null || _b === void 0 ? void 0 : _b.record((0, common_1.toHistogramIntegerNano)(now - taskInfo.created));
        taskInfo.started = now;
        workerInfo.postTask(taskInfo);
        this._maybeDrain();
        return ret;
    }
    pendingCapacity() {
        return this.workers.pendingItems.size *
            this.options.concurrentTasksPerWorker;
    }
    _maybeDrain() {
        const totalCapacity = this.options.maxQueue + this.pendingCapacity();
        const totalQueueSize = this.taskQueue.size + this.skipQueue.length;
        if (totalQueueSize === 0) {
            this.needsDrain = false;
            this.publicInterface.emit('drain');
        }
        if (totalQueueSize >= totalCapacity) {
            this.needsDrain = true;
            this.publicInterface.emit('needsDrain');
        }
    }
    async destroy() {
        this.destroying = true;
        while (this.skipQueue.length > 0) {
            const taskInfo = this.skipQueue.shift();
            taskInfo.done(new Error('Terminating worker thread'));
        }
        while (this.taskQueue.size > 0) {
            const taskInfo = this.taskQueue.shift();
            taskInfo.done(new Error('Terminating worker thread'));
        }
        const exitEvents = [];
        while (this.workers.size > 0) {
            const [workerInfo] = this.workers;
            exitEvents.push((0, node_events_1.once)(workerInfo.worker, 'exit'));
            this._removeWorker(workerInfo);
        }
        try {
            await Promise.all(exitEvents);
        }
        finally {
            this.destroying = false;
        }
    }
    async close(options) {
        this.closingUp = true;
        if (options.force) {
            const skipQueueLength = this.skipQueue.length;
            for (let i = 0; i < skipQueueLength; i++) {
                const taskInfo = this.skipQueue.shift();
                if (taskInfo.workerInfo === null) {
                    taskInfo.done(new abort_1.AbortError('pool is closed'));
                }
                else {
                    this.skipQueue.push(taskInfo);
                }
            }
            const taskQueueLength = this.taskQueue.size;
            for (let i = 0; i < taskQueueLength; i++) {
                const taskInfo = this.taskQueue.shift();
                if (taskInfo.workerInfo === null) {
                    taskInfo.done(new abort_1.AbortError('pool is closed'));
                }
                else {
                    this.taskQueue.push(taskInfo);
                }
            }
        }
        const onPoolFlushed = () => new Promise((resolve) => {
            const numberOfWorkers = this.workers.size;
            if (numberOfWorkers === 0) {
                resolve();
                return;
            }
            let numberOfWorkersDone = 0;
            const checkIfWorkerIsDone = (workerInfo) => {
                if (workerInfo.taskInfos.size === 0) {
                    numberOfWorkersDone++;
                }
                if (numberOfWorkers === numberOfWorkersDone) {
                    resolve();
                }
            };
            for (const workerInfo of this.workers) {
                checkIfWorkerIsDone(workerInfo);
                workerInfo.port.on('message', () => checkIfWorkerIsDone(workerInfo));
            }
        });
        const throwOnTimeOut = async (timeout) => {
            await (0, promises_1.setTimeout)(timeout);
            throw errors_1.Errors.CloseTimeout();
        };
        try {
            await Promise.race([
                onPoolFlushed(),
                throwOnTimeOut(this.options.closeTimeout)
            ]);
        }
        catch (error) {
            this.publicInterface.emit('error', error);
        }
        finally {
            await this.destroy();
            this.publicInterface.emit('close');
            this.closingUp = false;
        }
    }
}
class Piscina extends node_events_1.EventEmitterAsyncResource {
    constructor(options = {}) {
        super({ ...options, name: 'Piscina' });
        _Piscina_pool.set(this, void 0);
        if (typeof options.filename !== 'string' && options.filename != null) {
            throw new TypeError('options.filename must be a string or null');
        }
        if (typeof options.name !== 'string' && options.name != null) {
            throw new TypeError('options.name must be a string or null');
        }
        if (options.minThreads !== undefined &&
            (typeof options.minThreads !== 'number' || options.minThreads < 0)) {
            throw new TypeError('options.minThreads must be a non-negative integer');
        }
        if (options.maxThreads !== undefined &&
            (typeof options.maxThreads !== 'number' || options.maxThreads < 1)) {
            throw new TypeError('options.maxThreads must be a positive integer');
        }
        if (options.minThreads !== undefined && options.maxThreads !== undefined &&
            options.minThreads > options.maxThreads) {
            throw new RangeError('options.minThreads and options.maxThreads must not conflict');
        }
        if (options.idleTimeout !== undefined &&
            (typeof options.idleTimeout !== 'number' || options.idleTimeout < 0)) {
            throw new TypeError('options.idleTimeout must be a non-negative integer');
        }
        if (options.maxQueue !== undefined &&
            options.maxQueue !== 'auto' &&
            (typeof options.maxQueue !== 'number' || options.maxQueue < 0)) {
            throw new TypeError('options.maxQueue must be a non-negative integer');
        }
        if (options.concurrentTasksPerWorker !== undefined &&
            (typeof options.concurrentTasksPerWorker !== 'number' ||
                options.concurrentTasksPerWorker < 1)) {
            throw new TypeError('options.concurrentTasksPerWorker must be a positive integer');
        }
        if (options.useAtomics !== undefined &&
            typeof options.useAtomics !== 'boolean') {
            throw new TypeError('options.useAtomics must be a boolean value');
        }
        if (options.resourceLimits !== undefined &&
            (typeof options.resourceLimits !== 'object' ||
                options.resourceLimits === null)) {
            throw new TypeError('options.resourceLimits must be an object');
        }
        if (options.taskQueue !== undefined && !(0, task_queue_1.isTaskQueue)(options.taskQueue)) {
            throw new TypeError('options.taskQueue must be a TaskQueue object');
        }
        if (options.niceIncrement !== undefined &&
            (typeof options.niceIncrement !== 'number' || (options.niceIncrement < 0 && process.platform !== 'win32'))) {
            throw new TypeError('options.niceIncrement must be a non-negative integer on Unix systems');
        }
        if (options.trackUnmanagedFds !== undefined &&
            typeof options.trackUnmanagedFds !== 'boolean') {
            throw new TypeError('options.trackUnmanagedFds must be a boolean value');
        }
        if (options.closeTimeout !== undefined && (typeof options.closeTimeout !== 'number' || options.closeTimeout < 0)) {
            throw new TypeError('options.closeTimeout must be a non-negative integer');
        }
        __classPrivateFieldSet(this, _Piscina_pool, new ThreadPool(this, options), "f");
    }
    /** @deprecated Use run(task, options) instead **/
    runTask(task, transferList, filename, signal) {
        // If transferList is a string or AbortSignal, shift it.
        if ((typeof transferList === 'object' && !Array.isArray(transferList)) ||
            typeof transferList === 'string') {
            signal = filename;
            filename = transferList;
            transferList = undefined;
        }
        // If filename is an AbortSignal, shift it.
        if (typeof filename === 'object' && !Array.isArray(filename)) {
            signal = filename;
            filename = undefined;
        }
        if (transferList !== undefined && !Array.isArray(transferList)) {
            return Promise.reject(new TypeError('transferList argument must be an Array'));
        }
        if (filename !== undefined && typeof filename !== 'string') {
            return Promise.reject(new TypeError('filename argument must be a string'));
        }
        if (signal !== undefined && typeof signal !== 'object') {
            return Promise.reject(new TypeError('signal argument must be an object'));
        }
        return __classPrivateFieldGet(this, _Piscina_pool, "f").runTask(task, {
            transferList,
            filename: filename || null,
            name: 'default',
            signal: signal || null
        });
    }
    run(task, options = kDefaultRunOptions) {
        if (options === null || typeof options !== 'object') {
            return Promise.reject(new TypeError('options must be an object'));
        }
        const { transferList, filename, name, signal } = options;
        if (transferList !== undefined && !Array.isArray(transferList)) {
            return Promise.reject(new TypeError('transferList argument must be an Array'));
        }
        if (filename != null && typeof filename !== 'string') {
            return Promise.reject(new TypeError('filename argument must be a string'));
        }
        if (name != null && typeof name !== 'string') {
            return Promise.reject(new TypeError('name argument must be a string'));
        }
        if (signal != null && typeof signal !== 'object') {
            return Promise.reject(new TypeError('signal argument must be an object'));
        }
        return __classPrivateFieldGet(this, _Piscina_pool, "f").runTask(task, { transferList, filename, name, signal });
    }
    async close(options = kDefaultCloseOptions) {
        if (options === null || typeof options !== 'object') {
            throw TypeError('options must be an object');
        }
        let { force } = options;
        if (force !== undefined && typeof force !== 'boolean') {
            return Promise.reject(new TypeError('force argument must be a boolean'));
        }
        force !== null && force !== void 0 ? force : (force = kDefaultCloseOptions.force);
        return __classPrivateFieldGet(this, _Piscina_pool, "f").close({
            force
        });
    }
    destroy() {
        return __classPrivateFieldGet(this, _Piscina_pool, "f").destroy();
    }
    get maxThreads() {
        return __classPrivateFieldGet(this, _Piscina_pool, "f").options.maxThreads;
    }
    get minThreads() {
        return __classPrivateFieldGet(this, _Piscina_pool, "f").options.minThreads;
    }
    get options() {
        return __classPrivateFieldGet(this, _Piscina_pool, "f").options;
    }
    get threads() {
        const ret = [];
        for (const workerInfo of __classPrivateFieldGet(this, _Piscina_pool, "f").workers) {
            ret.push(workerInfo.worker);
        }
        return ret;
    }
    get queueSize() {
        const pool = __classPrivateFieldGet(this, _Piscina_pool, "f");
        return Math.max(pool.taskQueue.size - pool.pendingCapacity(), 0);
    }
    get completed() {
        return __classPrivateFieldGet(this, _Piscina_pool, "f").completed;
    }
    get waitTime() {
        if (!__classPrivateFieldGet(this, _Piscina_pool, "f").waitTime) {
            return null;
        }
        return (0, common_1.createHistogramSummary)(__classPrivateFieldGet(this, _Piscina_pool, "f").waitTime);
    }
    get runTime() {
        if (!__classPrivateFieldGet(this, _Piscina_pool, "f").runTime) {
            return null;
        }
        return (0, common_1.createHistogramSummary)(__classPrivateFieldGet(this, _Piscina_pool, "f").runTime);
    }
    get utilization() {
        if (!__classPrivateFieldGet(this, _Piscina_pool, "f").runTime) {
            return 0;
        }
        // count is available as of Node.js v16.14.0 but not present in the types
        const count = __classPrivateFieldGet(this, _Piscina_pool, "f").runTime.count;
        if (count === 0) {
            return 0;
        }
        // The capacity is the max compute time capacity of the
        // pool to this point in time as determined by the length
        // of time the pool has been running multiplied by the
        // maximum number of threads.
        const capacity = this.duration * __classPrivateFieldGet(this, _Piscina_pool, "f").options.maxThreads;
        const totalMeanRuntime = (__classPrivateFieldGet(this, _Piscina_pool, "f").runTime.mean / 1000) * count;
        // We calculate the appoximate pool utilization by multiplying
        // the mean run time of all tasks by the number of runtime
        // samples taken and dividing that by the capacity. The
        // theory here is that capacity represents the absolute upper
        // limit of compute time this pool could ever attain (but
        // never will for a variety of reasons. Multiplying the
        // mean run time by the number of tasks sampled yields an
        // approximation of the realized compute time. The utilization
        // then becomes a point-in-time measure of how active the
        // pool is.
        return totalMeanRuntime / capacity;
    }
    get duration() {
        return node_perf_hooks_1.performance.now() - __classPrivateFieldGet(this, _Piscina_pool, "f").start;
    }
    get needsDrain() {
        return __classPrivateFieldGet(this, _Piscina_pool, "f").needsDrain;
    }
    static get isWorkerThread() {
        return common_1.commonState.isWorkerThread;
    }
    static get workerData() {
        return common_1.commonState.workerData;
    }
    static get version() {
        return package_json_1.version;
    }
    static get Piscina() {
        return Piscina;
    }
    static get FixedQueue() {
        return task_queue_1.FixedQueue;
    }
    static get ArrayTaskQueue() {
        return task_queue_1.ArrayTaskQueue;
    }
    static move(val) {
        if (val != null && typeof val === 'object' && typeof val !== 'function') {
            if (!(0, common_1.isTransferable)(val)) {
                if (node_util_1.types.isArrayBufferView(val)) {
                    val = new ArrayBufferViewTransferable(val);
                }
                else {
                    val = new DirectlyTransferable(val);
                }
            }
            (0, common_1.markMovable)(val);
        }
        return val;
    }
    static get transferableSymbol() { return symbols_1.kTransferable; }
    static get valueSymbol() { return symbols_1.kValue; }
    static get queueOptionsSymbol() { return symbols_1.kQueueOptions; }
}
exports.Piscina = Piscina;
_Piscina_pool = new WeakMap();
exports.default = Piscina;
exports.move = Piscina.move;
exports.isWorkerThread = Piscina.isWorkerThread;
exports.workerData = Piscina.workerData;
//# sourceMappingURL=index.js.map