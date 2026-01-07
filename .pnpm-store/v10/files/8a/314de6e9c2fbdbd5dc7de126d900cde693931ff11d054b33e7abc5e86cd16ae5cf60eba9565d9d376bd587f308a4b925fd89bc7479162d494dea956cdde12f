import { Worker, MessagePort } from 'node:worker_threads';
import { EventEmitterAsyncResource } from 'node:events';
import { version } from '../package.json';
import type { Transferable, ResourceLimits, EnvSpecifier } from './types';
import { kQueueOptions, kTransferable, kValue } from './symbols';
import { TaskQueue, ArrayTaskQueue, FixedQueue, PiscinaTask, TransferList, TransferListItem } from './task_queue';
import { AbortSignalAny } from './abort';
interface Options {
    filename?: string | null;
    name?: string;
    minThreads?: number;
    maxThreads?: number;
    idleTimeout?: number;
    maxQueue?: number | 'auto';
    concurrentTasksPerWorker?: number;
    useAtomics?: boolean;
    resourceLimits?: ResourceLimits;
    argv?: string[];
    execArgv?: string[];
    env?: EnvSpecifier;
    workerData?: any;
    taskQueue?: TaskQueue;
    niceIncrement?: number;
    trackUnmanagedFds?: boolean;
    closeTimeout?: number;
    recordTiming?: boolean;
}
interface FilledOptions extends Options {
    filename: string | null;
    name: string;
    minThreads: number;
    maxThreads: number;
    idleTimeout: number;
    maxQueue: number;
    concurrentTasksPerWorker: number;
    useAtomics: boolean;
    taskQueue: TaskQueue;
    niceIncrement: number;
    closeTimeout: number;
    recordTiming: boolean;
}
interface RunOptions {
    transferList?: TransferList;
    filename?: string | null;
    signal?: AbortSignalAny | null;
    name?: string | null;
}
interface CloseOptions {
    force?: boolean;
}
export default class Piscina<T = any, R = any> extends EventEmitterAsyncResource {
    #private;
    constructor(options?: Options);
    /** @deprecated Use run(task, options) instead **/
    runTask(task: T, transferList?: TransferList, filename?: string, abortSignal?: AbortSignalAny): Promise<R>;
    /** @deprecated Use run(task, options) instead **/
    runTask(task: T, transferList?: TransferList, filename?: AbortSignalAny, abortSignal?: undefined): Promise<R>;
    /** @deprecated Use run(task, options) instead **/
    runTask(task: T, transferList?: string, filename?: AbortSignalAny, abortSignal?: undefined): Promise<R>;
    /** @deprecated Use run(task, options) instead **/
    runTask(task: T, transferList?: AbortSignalAny, filename?: undefined, abortSignal?: undefined): Promise<R>;
    run(task: T, options?: RunOptions): Promise<R>;
    close(options?: CloseOptions): Promise<void>;
    destroy(): Promise<void>;
    get maxThreads(): number;
    get minThreads(): number;
    get options(): FilledOptions;
    get threads(): Worker[];
    get queueSize(): number;
    get completed(): number;
    get waitTime(): any;
    get runTime(): any;
    get utilization(): number;
    get duration(): number;
    get needsDrain(): boolean;
    static get isWorkerThread(): boolean;
    static get workerData(): any;
    static get version(): string;
    static get Piscina(): typeof Piscina;
    static get FixedQueue(): typeof FixedQueue;
    static get ArrayTaskQueue(): typeof ArrayTaskQueue;
    static move(val: Transferable | TransferListItem | ArrayBufferView | ArrayBuffer | MessagePort): ArrayBuffer | ArrayBufferView | MessagePort | Transferable;
    static get transferableSymbol(): symbol;
    static get valueSymbol(): symbol;
    static get queueOptionsSymbol(): symbol;
}
export declare const move: typeof Piscina.move;
export declare const isWorkerThread: boolean;
export declare const workerData: any;
export { Piscina, PiscinaTask, TaskQueue, kTransferable as transferableSymbol, kValue as valueSymbol, kQueueOptions as queueOptionsSymbol, version, FixedQueue };
