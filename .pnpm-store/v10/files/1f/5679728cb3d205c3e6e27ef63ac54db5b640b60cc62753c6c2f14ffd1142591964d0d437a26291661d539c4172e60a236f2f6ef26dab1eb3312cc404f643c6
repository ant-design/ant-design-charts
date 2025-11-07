/**
 * 一个去抖的 hook，传入一个 function，返回一个去抖后的 function
 * @param  {(...args:T) => Promise<any>} fn
 * @param  {number} wait?
 */
export declare function useDebounceFn<T extends any[], U = any>(fn: (...args: T) => Promise<any>, wait?: number): {
    run: (...args: any) => Promise<U | undefined>;
    cancel: () => void;
};
