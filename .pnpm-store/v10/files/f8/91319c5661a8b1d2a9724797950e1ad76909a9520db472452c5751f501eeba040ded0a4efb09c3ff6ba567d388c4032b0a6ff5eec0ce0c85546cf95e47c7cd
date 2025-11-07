import { INTERNAL_Snapshot as Snapshot } from 'valtio/vanilla';
type SnapshotOrUndefined<T> = Snapshot<T> | undefined;
type Snapshots<T> = Snapshot<T>[];
/**
 * proxyWithHistory
 *
 * This creates a new proxy with history support.
 * It includes following properties:
 * - value: any value (does not have to be an object)
 * - history: an array holding the history of snapshots
 * - historyIndex: the history index to the current snapshot
 * - canUndo: a function to return true if undo is available
 * - undo: a function to go back history
 * - canRedo: a function to return true if redo is available
 * - redo: a function to go forward history
 * - saveHistory: a function to save history
 *
 * [Notes]
 * Suspense/promise is not supported.
 *
 * @example
 * import { proxyWithHistory } from 'valtio/utils'
 * const state = proxyWithHistory({
 *   count: 1,
 * })
 *
 * @deprecated Please use the `valtio-history` package. eg.
 * import { proxyWithHistory } from 'valtio-history'
 */
export declare function proxyWithHistory_DEPRECATED<V>(initialValue: V, skipSubscribe?: boolean): {
    value: V;
    history: {
        wip: SnapshotOrUndefined<V>;
        snapshots: Snapshots<V>;
        index: number;
    } & {
        $$valtioSnapshot: {
            wip: SnapshotOrUndefined<V>;
            snapshots: Snapshots<V>;
            index: number;
        };
    };
    clone: <T>(obj: T) => T;
    canUndo: () => boolean;
    undo: () => void;
    canRedo: () => boolean;
    redo: () => void;
    saveHistory: () => void;
    subscribe: () => () => void;
};
export {};
declare type Awaited<T> = T extends Promise<infer V> ? V : T;