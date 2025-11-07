import { Worker, MessagePort } from 'node:worker_threads';
import { ResponseMessage } from '../types';
import { TaskInfo } from '../task_queue';
type ResponseCallback = (response: ResponseMessage) => void;
declare abstract class AsynchronouslyCreatedResource {
    onreadyListeners: (() => void)[] | null;
    markAsReady(): void;
    isReady(): boolean;
    onReady(fn: () => void): void;
    abstract currentUsage(): number;
}
export declare class AsynchronouslyCreatedResourcePool<T extends AsynchronouslyCreatedResource> {
    pendingItems: Set<T>;
    readyItems: Set<T>;
    maximumUsage: number;
    onAvailableListeners: ((item: T) => void)[];
    constructor(maximumUsage: number);
    add(item: T): void;
    delete(item: T): void;
    findAvailable(): T | null;
    [Symbol.iterator](): Generator<T, void, unknown>;
    get size(): number;
    maybeAvailable(item: T): void;
    onAvailable(fn: (item: T) => void): void;
}
export declare class WorkerInfo extends AsynchronouslyCreatedResource {
    worker: Worker;
    taskInfos: Map<number, TaskInfo>;
    idleTimeout: NodeJS.Timeout | null;
    port: MessagePort;
    sharedBuffer: Int32Array;
    lastSeenResponseCount: number;
    onMessage: ResponseCallback;
    constructor(worker: Worker, port: MessagePort, onMessage: ResponseCallback);
    destroy(): void;
    clearIdleTimeout(): void;
    ref(): WorkerInfo;
    unref(): WorkerInfo;
    _handleResponse(message: ResponseMessage): void;
    postTask(taskInfo: TaskInfo): void;
    processPendingMessages(): void;
    isRunningAbortableTask(): boolean;
    currentUsage(): number;
}
export {};
