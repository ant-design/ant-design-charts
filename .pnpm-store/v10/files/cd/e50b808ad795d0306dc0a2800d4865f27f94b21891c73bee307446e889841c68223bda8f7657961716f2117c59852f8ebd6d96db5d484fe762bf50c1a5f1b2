import type { Histogram } from 'node:perf_hooks';
import type { HistogramSummary } from './types';
export declare const READY = "_WORKER_READY";
/**
 * True if the object implements the Transferable interface
 *
 * @export
 * @param {unknown} value
 * @return {*}  {boolean}
 */
export declare function isTransferable(value: unknown): boolean;
/**
 * True if object implements Transferable and has been returned
 * by the Piscina.move() function
 *
 * TODO: narrow down the type of value
 * @export
 * @param {(unknown & PiscinaMovable)} value
 * @return {*}  {boolean}
 */
export declare function isMovable(value: any): boolean;
export declare function markMovable(value: {}): void;
export declare const commonState: {
    isWorkerThread: boolean;
    workerData: undefined;
};
export declare function createHistogramSummary(histogram: Histogram): HistogramSummary;
export declare function toHistogramIntegerNano(milliseconds: number): number;
export declare function maybeFileURLToPath(filename: string): string;
export declare function getAvailableParallelism(): number;
