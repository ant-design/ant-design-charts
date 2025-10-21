/** Options for worker method result */
export declare type WorkerMethodResultOptions = {
    /** worker method */
    fn: (...params: any[]) => any;
    /** pick transferables from method result */
    pickTransferablesFromResult?: (result: any) => any[];
};
/**
 * Setup worker methods which return transferables. This function should be executed on the worker thread.
 * @param methods an object whose key is method name and whose value is options how to pick transferables from method result
 */
export declare function setupTransferableMethodsOnWorker(methods: {
    [x: string]: WorkerMethodResultOptions;
}): void;
//# sourceMappingURL=on-worker.d.ts.map