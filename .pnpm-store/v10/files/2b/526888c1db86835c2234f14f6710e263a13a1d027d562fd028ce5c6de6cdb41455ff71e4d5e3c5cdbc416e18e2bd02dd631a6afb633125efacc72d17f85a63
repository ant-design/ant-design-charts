/** Options for worker method params */
export declare type WorkerMethodParamsOptions = {
    /** pick transferables from method params */
    pickTransferablesFromParams?: (params: any) => any[];
};
/**
 * Setup worker methods which receive transferables from worker method params. This function should be executed on the main thread.
 * @param worker worker instance
 * @param methods an object whose key is method name and whose value is options how to pick transferables from method params
 */
export declare function setupTransferableMethodsOnMain<WORKER extends Worker>(worker: WORKER, methods: {
    [x: string]: WorkerMethodParamsOptions;
}): void;
//# sourceMappingURL=on-main.d.ts.map