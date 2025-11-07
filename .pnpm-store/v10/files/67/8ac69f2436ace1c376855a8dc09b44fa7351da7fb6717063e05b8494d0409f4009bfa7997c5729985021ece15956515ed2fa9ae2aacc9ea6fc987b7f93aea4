/**
 * proxySet
 *
 * This is to create a proxy which mimic the native Set behavior.
 * The API is the same as Set API
 *
 * @example
 * import { proxySet } from 'valtio/utils'
 * const state = proxySet([1,2,3])
 * //can be used inside a proxy as well
 * const state = proxy({
 *   count: 1,
 *   set: proxySet()
 * })
 */
export declare function proxySet<T>(initialValues?: Iterable<T> | null): Set<T> & {
    $$valtioSnapshot: Omit<Set<T>, 'add' | 'delete' | 'clear'>;
};
