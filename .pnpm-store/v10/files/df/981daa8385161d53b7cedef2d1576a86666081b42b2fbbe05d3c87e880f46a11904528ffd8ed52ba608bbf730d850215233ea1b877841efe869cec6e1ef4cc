type DeriveGet = <T extends object>(proxyObject: T) => T;
type Subscription = {
    s: object;
    d: object;
    k: string;
    c: () => void;
    n: boolean;
    i: string[];
    p?: Promise<void>;
};
export declare const unstable_deriveSubscriptions: {
    add: (subscription: Subscription) => void;
    remove: (subscription: Subscription) => void;
    list: (derivedObject: object) => Subscription[];
};
/**
 * derive
 *
 * This creates derived properties and attaches them
 * to a new proxy object or an existing proxy object.
 *
 * @example
 * import { proxy } from 'valtio'
 * import { derive } from 'valtio/utils'
 *
 * const state = proxy({
 *   count: 1,
 * })
 *
 * const derivedState = derive({
 *   doubled: (get) => get(state).count * 2,
 * })
 *
 * derive({
 *   tripled: (get) => get(state).count * 3,
 * }, {
 *   proxy: state,
 * })
 */
export declare function derive<T extends object, U extends object>(derivedFns: {
    [K in keyof U]: (get: DeriveGet) => U[K];
}, options?: {
    proxy?: T;
    sync?: boolean;
}): T & U;
/**
 * underive
 *
 * This stops derived properties to evaluate.
 * It will stop all (or specified by `keys` option) subscriptions.
 * If you specify `delete` option, it will delete the properties
 * and you can attach new derived properties.
 *
 * @example
 * import { proxy } from 'valtio'
 * import { derive, underive } from 'valtio/utils'
 *
 * const state = proxy({
 *   count: 1,
 * })
 *
 * const derivedState = derive({
 *   doubled: (get) => get(state).count * 2,
 * })
 *
 * underive(derivedState)
 */
export declare function underive<T extends object, U extends object>(proxyObject: T & U, options?: {
    delete?: boolean;
    keys?: (keyof U)[];
}): void;
export {};
