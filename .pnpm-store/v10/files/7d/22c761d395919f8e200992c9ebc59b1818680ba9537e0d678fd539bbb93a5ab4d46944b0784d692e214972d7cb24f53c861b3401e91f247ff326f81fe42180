import type { MessagePort } from 'node:worker_threads';
import { AsyncResource } from 'node:async_hooks';
import type { WorkerInfo } from '../worker_pool';
import type { AbortSignalAny } from '../abort';
import { kQueueOptions } from '../symbols';
import type { Task, TaskQueue, PiscinaTask } from './common';
export { ArrayTaskQueue } from './array_queue';
export { FixedQueue } from './fixed_queue';
export type TaskCallback = (err: Error, result: any) => void;
export type TransferList = MessagePort extends {
    postMessage: (value: any, transferList: infer T) => any;
} ? T : never;
export type TransferListItem = TransferList extends Array<infer T> ? T : never;
/**
 * Verifies if a given TaskQueue is valid
 *
 * @export
 * @param {*} value
 * @return {*}  {boolean}
 */
export declare function isTaskQueue(value: TaskQueue): boolean;
export declare class TaskInfo extends AsyncResource implements Task {
    callback: TaskCallback;
    task: any;
    transferList: TransferList;
    filename: string;
    name: string;
    taskId: number;
    abortSignal: AbortSignalAny | null;
    abortListener: (() => void) | null;
    workerInfo: WorkerInfo | null;
    created: number;
    started: number;
    constructor(task: any, transferList: TransferList, filename: string, name: string, callback: TaskCallback, abortSignal: AbortSignalAny | null, triggerAsyncId: number);
    releaseTask(): any;
    done(err: Error | null, result?: any): void;
    get [kQueueOptions](): object | null;
    get interface(): PiscinaTask;
}
export { Task, TaskQueue, PiscinaTask };
