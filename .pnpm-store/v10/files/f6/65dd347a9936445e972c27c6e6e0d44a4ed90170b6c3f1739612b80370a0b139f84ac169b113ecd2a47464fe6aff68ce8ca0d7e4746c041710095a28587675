import { INTERNAL_Snapshot as Snapshot } from 'valtio/vanilla';
/**
 * proxyWithComputed (DEPRECATED)
 *
 * @deprecated Please follow "Computed Properties" guide in docs.
 */
export declare function proxyWithComputed_DEPRECATED<T extends object, U extends object>(initialObject: T, computedFns: {
    [K in keyof U]: ((snap: Snapshot<T>) => U[K]) | {
        get: (snap: Snapshot<T>) => U[K];
        set?: (state: T, newValue: U[K]) => void;
    };
}): T & U;
declare type Awaited<T> = T extends Promise<infer V> ? V : T;