import type { Graph } from './graph';
/**
 * Supported node/edge ID type.
 *
 * "1" and 1 are treated as different IDs.
 */
export type ID = string | number;
export type PlainObject = Record<string, unknown>;
export interface Node<D extends PlainObject> {
    /**
     * Every node in a graph must have a unique ID.
     */
    id: ID;
    /**
     * Node data should be an object with string key and any value.
     */
    data: D;
}
export interface Edge<D extends PlainObject> {
    /**
     * Every edge in a graph must have a unique ID.
     */
    id: ID;
    /**
     * The ID of the starting node of the edge.
     */
    source: ID;
    /**
     * The ID of the ending node of the edge.
     */
    target: ID;
    /**
     * Edge data should be an object with string key and any value.
     */
    data: D;
}
/**
 * TreeData is a nested data structure that contains nodes represent a tree.
 */
export interface TreeData<D> {
    /**
     * Tree node IDs must be unique within the whole graph, not only the current tree.
     */
    id: ID;
    /**
     * An object with string key and any value.
     */
    data: D;
    /**
     * Children nodes. Each node itself is a TreeData object, allowing for an arbitrary depth of nesting.
     */
    children?: TreeData<D>[];
}
/** Options to create a graph. */
export interface GraphOptions<N extends PlainObject, E extends PlainObject> {
    /**
     * An array of node data representing the initial nodes.
     *
     * Each node must have a unique ID.
     *
     * @example
     * [
     *   { id: 1, color: 'red' },
     *   { id: 2, color: 'blue' },
     * ]
     */
    nodes?: Node<N>[];
    /**
     * An array of edge data representing the initial edges.
     *
     * Each edge must have a unique ID.
     *
     * The source and target of each edge must be present in `nodes`.
     *
     * @example
     * [
     *   { id: 9, source: 1, target: 2, weight: 10 },
     * ]
     */
    edges?: Edge<E>[];
    tree?: TreeData<N> | TreeData<N>[];
    /**
     * A listener function which will be called with a {@link GraphChangedEvent} whenever a graph change happened.
     */
    onChanged?: (event: GraphChangedEvent<N, E>) => void;
}
export type TreeIndices<N> = Map<string | undefined, {
    parentMap: Map<ID, N>;
    childrenMap: Map<ID, Set<N>>;
}>;
export interface GraphChangedEvent<N extends PlainObject, E extends PlainObject> {
    /**
     * The {@link Graph} instance which triggered this event.
     */
    graph: Graph<N, E>;
    /**
     * Atomic changes that have occurred in the graph since the last time `graph.onChanged` was triggered.
     *
     * `changes` are ordered by the time they occurred.
     *
     * Each change object is a smallest unit of change that can be made to a graph, including addition, removal, or modification of nodes or edges.
     *
     * You can call {@link Graph.reduceChanges} to reduce them.
     */
    changes: GraphChange<N, E>[];
}
export type GraphChange<N extends PlainObject, E extends PlainObject> = NodeAdded<N> | NodeRemoved<N> | NodeDataUpdated<N> | EdgeAdded<E> | EdgeRemoved<E> | EdgeUpdated<E> | EdgeDataUpdated<E> | TreeStructureAttached | TreeStructureDetached | TreeStructureChanged;
export type NodeAdded<D extends PlainObject> = {
    type: 'NodeAdded';
    value: Node<D>;
};
export type NodeRemoved<D extends PlainObject> = {
    type: 'NodeRemoved';
    value: Node<D>;
};
export type NodeDataUpdated<D extends PlainObject> = {
    type: 'NodeDataUpdated';
    id: ID;
    propertyName?: PropertyKey;
    oldValue: any;
    newValue: any;
};
export type EdgeAdded<D extends PlainObject> = {
    type: 'EdgeAdded';
    value: Edge<D>;
};
export type EdgeRemoved<D extends PlainObject> = {
    type: 'EdgeRemoved';
    value: Edge<D>;
};
export type EdgeUpdated<D extends PlainObject> = {
    type: 'EdgeUpdated';
    id: ID;
    propertyName: 'source' | 'target';
    oldValue: ID;
    newValue: ID;
};
export type EdgeDataUpdated<D extends PlainObject> = {
    type: 'EdgeDataUpdated';
    id: ID;
    propertyName?: PropertyKey;
    oldValue: any;
    newValue: any;
};
export type TreeStructureAttached = {
    type: 'TreeStructureAttached';
    treeKey: string | undefined;
};
export type TreeStructureDetached = {
    type: 'TreeStructureDetached';
    treeKey: string | undefined;
};
export type TreeStructureChanged = {
    type: 'TreeStructureChanged';
    treeKey: string | undefined;
    nodeId: ID;
    oldParentId?: ID;
    newParentId: ID;
};
/** Options to create a GraphView */
export interface GraphViewOptions<N extends PlainObject, E extends PlainObject> {
    /** The original Graph */
    graph: Graph<N, E>;
    nodeFilter?: (node: Node<N>) => boolean;
    edgeFilter?: (edge: Edge<E>, source: Node<N>, target: Node<N>) => boolean;
    /**
     * Cache mode of the GraphView. Defaults to 'none'.
     *
     * - `none`: Use no cache. Filters are applied when reading data. Fast to create but a bit
     * slow to read data.
     *
     * - `auto`: Automatically cache data when view created or graph changed. Fast to read
     * data but takes time to build up cache. You should call `stopAutoCache()` to avoid
     * unnecessary updates if the GraphView is no longer active.
     *
     * - `manual` Manage cache manually. `clearCache()` `refreshCache()` `updateCache()`
     * might be useful.
     */
    cache?: 'none' | 'auto' | 'manual';
}
