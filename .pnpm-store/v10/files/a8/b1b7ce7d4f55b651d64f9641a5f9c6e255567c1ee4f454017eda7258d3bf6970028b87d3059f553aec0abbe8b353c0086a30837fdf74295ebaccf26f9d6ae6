import { Edge, GraphViewOptions, ID, Node, PlainObject } from './types';
export declare class GraphView<N extends PlainObject, E extends PlainObject> {
    private graph;
    private nodeFilter;
    private edgeFilter;
    cacheEnabled: boolean;
    private inEdgesMap;
    private outEdgesMap;
    private bothEdgesMap;
    private allNodesMap;
    private allEdgesMap;
    constructor(options: GraphViewOptions<N, E>);
    /**
     * Clear all cache data. Therefore `getAllNodes()` will return `[]`.
     * If you want to disable caching, use `graphView.cacheEnabled = false` instead.
     */
    clearCache: () => void;
    /**
     * Fully refresh all cache data to the current graph state.
     */
    refreshCache: () => void;
    /**
     * Instead of a fully refreshment, this method partially update the cache data by specifying
     * involved(added, removed, updated) nodes. It's more efficient when handling small changes
     * on a large graph.
     */
    updateCache: (involvedNodeIds: Set<ID> | Array<ID>) => void;
    startAutoCache(): void;
    stopAutoCache(): void;
    private handleGraphChanged;
    private checkNodeExistence;
    hasNode(id: ID): boolean;
    areNeighbors(firstNodeId: ID, secondNodeId: ID): boolean;
    getNode(id: ID): Node<N>;
    getRelatedEdges(id: ID, direction?: 'in' | 'out' | 'both'): Edge<E>[];
    getDegree(id: ID, direction?: 'in' | 'out' | 'both'): number;
    getSuccessors(id: ID): Node<N>[];
    getPredecessors(id: ID): Node<N>[];
    getNeighbors(id: ID): Node<N>[];
    hasEdge(id: ID): boolean;
    getEdge(id: ID): Edge<E>;
    getEdgeDetail(id: ID): {
        edge: Edge<E>;
        source: Node<N>;
        target: Node<N>;
    };
    hasTreeStructure(treeKey: string | undefined): boolean;
    getRoots(treeKey?: string): Node<N>[];
    getChildren(id: ID, treeKey?: string): Node<N>[];
    getParent(id: ID, treeKey?: string): Node<N> | null;
    getAllNodes(): Node<N>[];
    getAllEdges(): Edge<E>[];
    bfs(id: ID, fn: (node: Node<N>) => void, direction?: 'in' | 'out' | 'both'): void;
    dfs(id: ID, fn: (node: Node<N>) => void, direction?: 'in' | 'out' | 'both'): void;
}
