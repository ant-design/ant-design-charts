import EventEmitter from '@antv/event-emitter';
import { GraphView } from './graphView';
import { Node, Edge, GraphChange, GraphChangedEvent, GraphOptions, ID, TreeData, PlainObject, GraphViewOptions } from './types';
export declare class Graph<N extends PlainObject, E extends PlainObject> extends EventEmitter {
    private nodeMap;
    private edgeMap;
    private inEdgesMap;
    private outEdgesMap;
    private bothEdgesMap;
    private treeIndices;
    private changes;
    private batchCount;
    /**
     * This function is called with a {@link GraphChangedEvent} each time a graph change happened.
     *
     * `event.changes` contains all the graph changes in order since last `onChanged`.
     */
    onChanged: (event: GraphChangedEvent<N, E>) => void;
    /**
     * Create a new Graph instance.
     * @param options - The options to initialize a graph. See {@link GraphOptions}.
     *
     * ```ts
     * const graph = new Graph({
     *   // Optional, initial nodes.
     *   nodes: [
     *     // Each node has a unique ID.
     *     { id: 'A', foo: 1 },
     *     { id: 'B', foo: 1 },
     *   ],
     *   // Optional, initial edges.
     *   edges: [
     *     { id: 'C', source: 'B', target: 'B', weight: 1 },
     *   ],
     *   // Optional, called with a GraphChangedEvent.
     *   onChanged: (event) => {
     *     console.log(event);
     *   }
     * });
     * ```
     */
    constructor(options?: GraphOptions<N, E>);
    /**
     * Batch several graph changes into one.
     *
     * Make several changes, but dispatch only one ChangedEvent at the end of batch:
     * ```ts
     * graph.batch(() => {
     *   graph.addNodes([]);
     *   graph.addEdges([]);
     * });
     * ```
     *
     * Batches can be nested. Only the outermost batch will dispatch a ChangedEvent:
     * ```ts
     * graph.batch(() => {
     *   graph.addNodes([]);
     *   graph.batch(() => {
     *     graph.addEdges([]);
     *   });
     * });
     * ```
     */
    batch: (fn: () => void) => void;
    /**
     * Reset changes and dispatch a ChangedEvent.
     */
    private commit;
    /**
     * Reduce the number of ordered graph changes by dropping or merging unnecessary changes.
     *
     * For example, if we update a node and remove it in a batch:
     *
     * ```ts
     * graph.batch(() => {
     *   graph.updateNodeData('A', 'foo', 2);
     *   graph.removeNode('A');
     * });
     * ```
     *
     * We get 2 atomic graph changes like
     *
     * ```ts
     * [
     *   { type: 'NodeDataUpdated', id: 'A', propertyName: 'foo', oldValue: 1, newValue: 2 },
     *   { type: 'NodeRemoved', value: { id: 'A', data: { foo: 2 } },
     * ]
     * ```
     *
     * Since node 'A' has been removed, we actually have no need to handle with NodeDataUpdated change.
     *
     * `reduceChanges()` here helps us remove such changes.
     */
    reduceChanges(changes: GraphChange<N, E>[]): GraphChange<N, E>[];
    private checkNodeExistence;
    /**
     * Check if a node exists in the graph.
     * @group NodeMethods
     */
    hasNode(id: ID): boolean;
    /**
     * Tell if two nodes are neighbors.
     * @group NodeMethods
     */
    areNeighbors(firstNodeId: ID, secondNodeId: ID): boolean;
    /**
     * Get the node data with given ID.
     * @group NodeMethods
     */
    getNode(id: ID): Node<N>;
    /**
     * Given a node ID, find all edges of the node.
     * @param id - ID of the node
     * @param direction - Edge direction, defaults to 'both'.
     * @group NodeMethods
     */
    getRelatedEdges(id: ID, direction?: 'in' | 'out' | 'both'): Edge<E>[];
    /**
     * Get the degree of the given node.
     * @group NodeMethods
     */
    getDegree(id: ID, direction?: 'in' | 'out' | 'both'): number;
    /**
     * Get all successors of the given node.
     */
    getSuccessors(id: ID): Node<N>[];
    /**
     * Get all predecessors of the given node.
     */
    getPredecessors(id: ID): Node<N>[];
    /**
     * Given a node ID, find its neighbors.
     * @param id - ID of the node
     * @group NodeMethods
     */
    getNeighbors(id: ID): Node<N>[];
    private doAddNode;
    /**
     * Add all nodes of the given array, or iterable, into the graph.
     * @group NodeMethods
     */
    addNodes(nodes: Iterable<Node<N>>): void;
    /**
     * Add a single node into the graph.
     * @group NodeMethods
     */
    addNode(node: Node<N>): void;
    private doRemoveNode;
    /**
     * Remove nodes and their attached edges from the graph.
     * @group NodeMethods
     */
    removeNodes(idList: ID[]): void;
    /**
     * Remove a single node and its attached edges from the graph.
     * @group NodeMethods
     */
    removeNode(id: ID): void;
    private updateNodeDataProperty;
    /**
     * Like Object.assign, merge all properties of `path` to the node data.
     * @param id Node ID.
     * @param patch A data object to merge.
     */
    mergeNodeData(id: ID, patch: Partial<N>): void;
    /**
     * Update node data. This will replace the whole data object.
     *
     * ```ts
     * updateNodeData(id, data); // Works like `node.data = data`
     * ```
     *
     * @group NodeMethods
     */
    updateNodeData(id: ID, data: N): void;
    /**
     * Update a single property on the node data.
     *
     * To update multiple properties, you could {@link Graph.batch batch} several updates or use {@link Graph.mergeNodeData mergeNodeData}.
     *
     * ```ts
     * updateNodeData(id, key, value); // Works like `node.data[key] = value`
     * ```
     *
     * @group NodeMethods
     */
    updateNodeData<P extends keyof N>(id: ID, propertyName: P, value: N[P]): void;
    /**
     * Update node data by a update function.
     *
     * ```ts
     * updateNodeData(id, oldData => newData);
     * ```
     * @group NodeMethods
     */
    updateNodeData(id: ID, update: (data: N) => N): void;
    private checkEdgeExistence;
    /**
     * Check if an edge exists in the graph.
     * @group NodeMethods
     */
    hasEdge(id: ID): boolean;
    /**
     * Get the edge data with given ID.
     * @group EdgeMethods
     */
    getEdge(id: ID): Edge<E>;
    /**
     * Get the edge, the source node, and the target node by an edge ID.
     * @group EdgeMethods
     */
    getEdgeDetail(id: ID): {
        edge: Edge<E>;
        source: Node<N>;
        target: Node<N>;
    };
    private doAddEdge;
    /**
     * Add all edges of the given iterable(an array, a set, etc.) into the graph.
     * @group EdgeMethods
     */
    addEdges(edges: Iterable<Edge<E>>): void;
    /**
     * Add a single edge pointing from `source` to `target` into the graph.
     *
     * ```ts
     * graph.addNode({ id: 'NodeA' });
     * graph.addNode({ id: 'NodeB' });
     * graph.addEdge({ id: 'EdgeA', source: 'NodeA', target: 'NodeB' });
     * ```
     *
     * If `source` or `target` were not found in the current graph, it throws an Error.
     * @group EdgeMethods
     */
    addEdge(edge: Edge<E>): void;
    private doRemoveEdge;
    /**
     * Remove edges whose id was included in the given id list.
     * @group EdgeMethods
     */
    removeEdges(idList: ID[]): void;
    /**
     * Remove a single edge of the given id.
     * @group EdgeMethods
     */
    removeEdge(id: ID): void;
    /**
     * Change the source of an edge. The source must be found in current graph.
     * @group EdgeMethods
     */
    updateEdgeSource(id: ID, source: ID): void;
    /**
     * Change the target of an edge. The target must be found in current graph.
     * @group EdgeMethods
     */
    updateEdgeTarget(id: ID, target: ID): void;
    private updateEdgeDataProperty;
    /**
     * Update edge data. This will replace the whole data object.
     *
     * ```ts
     * updateEdgeData(id, data); // Works like `edge.data = data`
     * ```
     *
     * @group EdgeMethods
     */
    updateEdgeData(id: ID, data: E): void;
    /**
     * Update a single property on the edge data.
     *
     * To update multiple properties, you could {@link Graph.batch batch} several updates or use {@link Graph.mergeEdgeData mergeNodeData}.
     *
     * ```ts
     * updateEdgeData(id, key, value); // Works like `edge.data[key] = value`
     * ```
     *
     * @group EdgeMethods
     */
    updateEdgeData<P extends keyof E>(id: ID, propertyName: P, value: E[P]): void;
    /**
     * Update edge data by a update function.
     *
     * ```ts
     * updateEdgeData(id, oldData => newData);
     * ```
     * @group EdgeMethods
     */
    updateEdgeData(id: ID, update: (data: E) => E): void;
    /**
     * @group EdgeMethods
     */
    mergeEdgeData(id: ID, patch: Partial<E>): void;
    private checkTreeExistence;
    hasTreeStructure(treeKey: string | undefined): boolean;
    /**
     * Attach a new tree structure representing the hierarchy of all nodes in the graph.
     * @param treeKey A unique key of the tree structure. You can attach multiple tree structures with different keys.
     *
     * ```ts
     * const graph = new Graph({
     *   nodes: [{ id: 1 }, { id: 2 }, { id: 3 }],
     * });
     * graph.attachTreeStructure('Inheritance');
     * graph.setParent(2, 1, 'Inheritance');
     * graph.setParent(3, 1, 'Inheritance');
     * graph.getRoots('Inheritance'); // [1]
     * graph.getChildren(1, 'Inheritance'); // [2,3]
     * ```
     * @group TreeMethods
     */
    attachTreeStructure(treeKey?: string): void;
    /**
     * Detach the tree structure of the given tree key from the graph.
     *
     * ```ts
     * graph.detachTreeStructure('Inheritance');
     * graph.getRoots('Inheritance'); // Error!
     * ```
     * @group TreeMethods
     */
    detachTreeStructure(treeKey?: string): void;
    /**
     * Traverse the given tree data, add each node into the graph, then attach the tree structure.
     *
     * ```ts
     * graph.addTree({
     *   id: 1,
     *   children: [
     *     { id: 2 },
     *     { id: 3 },
     *   ],
     * }, 'Inheritance');
     * graph.getRoots('Inheritance'); // [1]
     * graph.getChildren(1, 'Inheritance'); // [2, 3]
     * graph.getAllNodes(); // [1, 2, 3]
     * graph.getAllEdges(); // []
     * ```
     * @group TreeMethods
     */
    addTree(tree: TreeData<N> | TreeData<N>[], treeKey?: string): void;
    /**
     * Get the root nodes of an attached tree structure.
     *
     * Consider a graph with the following tree structure attached:
     * ```
     * Tree structure:
     *    O     3
     *   / \    |
     *  1   2   4
     * ```
     * `graph.getRoots()` takes all nodes without a parent, therefore [0, 3] was returned.
     *
     * Newly added nodes are also unparented. So they are counted as roots.
     * ```ts
     * graph.addNode({ id: 5 });
     * graph.getRoots(); // [0, 3, 5]
     * ```
     *
     * Here is how the tree structure looks like:
     * ```
     * Tree structure:
     *    O     3  5
     *   / \    |
     *  1   2   4
     * ```
     *
     * By setting a parent, a root node no more be a root.
     * ```ts
     * graph.setParent(5, 2);
     * graph.getRoots(); // [0, 3]
     * ```
     *
     * The tree structure now becomes:
     * ```
     * Tree structure:
     *    O     3
     *   / \    |
     *  1   2   4
     *      |
     *      5
     * ```
     *
     * Removing a node forces its children to be unparented, or roots.
     * ```ts
     * graph.removeNode(0);
     * graph.getRoots(); // [1, 2, 3]
     * ```
     *
     * You might draw the the structure as follow:
     * ```
     * Tree structure:
     *  1   2  3
     *      |  |
     *      5  4
     * ```
     * @group TreeMethods
     */
    getRoots(treeKey?: string): Node<N>[];
    /**
     * Given a node ID and an optional tree key, get the children of the node in the specified tree structure.
     * @group TreeMethods
     */
    getChildren(id: ID, treeKey?: string): Node<N>[];
    /**
     * Given a node ID and an optional tree key, get the parent of the node in the specified tree structure.
     * If the given node is one of the tree roots, this returns null.
     * @group TreeMethods
     */
    getParent(id: ID, treeKey?: string): Node<N> | null;
    /**
     * Returns an array of all the ancestor nodes, staring from the parent to the root.
     */
    getAncestors(id: ID, treeKey?: string): Node<N>[];
    /**
     * Set node parent. If this operation causes a circle, it fails with an error.
     * @param id - ID of the child node.
     * @param parent - ID of the parent node. If it is undefined or null, means unset parent for node with id.
     * @param treeKey - Which tree structure the relation is applied to.
     * @group TreeMethods
     */
    setParent(id: ID, parent?: ID | null, treeKey?: string): void;
    dfsTree(id: ID, fn: (node: Node<N>) => boolean | void, treeKey?: string): boolean;
    bfsTree(id: ID, fn: (node: Node<N>) => boolean | void, treeKey?: string): boolean;
    /**
     * Get all nodes in the graph as an array.
     */
    getAllNodes(): Node<N>[];
    /**
     * Get all edges in the graph as an array.
     */
    getAllEdges(): Edge<E>[];
    bfs(id: ID, fn: (node: Node<N>) => boolean | void, direction?: 'in' | 'out' | 'both'): boolean;
    dfs(id: ID, fn: (node: Node<N>) => boolean | void, direction?: 'in' | 'out' | 'both'): boolean;
    clone(): Graph<N, E>;
    toJSON(): string;
    createView(options: Omit<GraphViewOptions<N, E>, 'graph'>): GraphView<N, E>;
}
