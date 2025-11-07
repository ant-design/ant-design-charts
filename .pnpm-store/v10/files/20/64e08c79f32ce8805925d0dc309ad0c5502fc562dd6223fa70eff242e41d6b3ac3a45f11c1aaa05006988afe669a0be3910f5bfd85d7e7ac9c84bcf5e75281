import EventEmitter from '@antv/event-emitter';
import { GraphView } from './graphView';
import { doBFS, doDFS } from './utils/traverse';
export class Graph extends EventEmitter {
    nodeMap = new Map();
    edgeMap = new Map();
    inEdgesMap = new Map();
    outEdgesMap = new Map();
    bothEdgesMap = new Map();
    treeIndices = new Map();
    changes = [];
    batchCount = 0;
    /**
     * This function is called with a {@link GraphChangedEvent} each time a graph change happened.
     *
     * `event.changes` contains all the graph changes in order since last `onChanged`.
     */
    onChanged = () => {
        // Do nothing.
    };
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
    constructor(options) {
        super();
        if (!options)
            return;
        if (options.nodes)
            this.addNodes(options.nodes);
        if (options.edges)
            this.addEdges(options.edges);
        if (options.tree)
            this.addTree(options.tree);
        if (options.onChanged)
            this.onChanged = options.onChanged;
    }
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
    batch = (fn) => {
        this.batchCount += 1;
        fn();
        this.batchCount -= 1;
        if (!this.batchCount) {
            this.commit();
        }
    };
    /**
     * Reset changes and dispatch a ChangedEvent.
     */
    commit() {
        const changes = this.changes;
        this.changes = [];
        const event = {
            graph: this,
            changes,
        };
        this.emit('changed', event);
        this.onChanged(event);
    }
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
    reduceChanges(changes) {
        let mergedChanges = [];
        changes.forEach((change) => {
            switch (change.type) {
                case 'NodeRemoved': {
                    // NodeAdded: A added.
                    // NodeDataUpdated: A changed.
                    // TreeStructureChanged: A's parent changed.
                    // NodeRemoved: A removed. 👈🏻 Since A was removed, above three changes may be ignored.
                    let isNewlyAdded = false;
                    mergedChanges = mergedChanges.filter((pastChange) => {
                        if (pastChange.type === 'NodeAdded') {
                            const sameId = pastChange.value.id === change.value.id;
                            if (sameId) {
                                isNewlyAdded = true;
                            }
                            return !sameId;
                        }
                        else if (pastChange.type === 'NodeDataUpdated') {
                            return pastChange.id !== change.value.id;
                        }
                        else if (pastChange.type === 'TreeStructureChanged') {
                            return pastChange.nodeId !== change.value.id;
                        }
                        return true;
                    });
                    if (!isNewlyAdded) {
                        mergedChanges.push(change);
                    }
                    break;
                }
                case 'EdgeRemoved': {
                    // EdgeAdded: A added.
                    // EdgeDataUpdated: A changed.
                    // EdgeDataUpdated: A's source/target changed.
                    // EdgeRemoved: A removed. 👈🏻 Since A was removed, above three changes may be ignored.
                    let isNewlyAdded = false;
                    mergedChanges = mergedChanges.filter((pastChange) => {
                        if (pastChange.type === 'EdgeAdded') {
                            const sameId = pastChange.value.id === change.value.id;
                            if (sameId) {
                                isNewlyAdded = true;
                            }
                            return !sameId;
                        }
                        else if (pastChange.type === 'EdgeDataUpdated' ||
                            pastChange.type === 'EdgeUpdated') {
                            return pastChange.id !== change.value.id;
                        }
                        return true;
                    });
                    if (!isNewlyAdded) {
                        mergedChanges.push(change);
                    }
                    break;
                }
                case 'NodeDataUpdated':
                case 'EdgeDataUpdated':
                case 'EdgeUpdated': {
                    // NodeDataUpdated: { id: A, propertyName: 'foo', oldValue: 1, newValue: 2 }.
                    // NodeDataUpdated: { id: A, propertyName: 'foo', oldValue: 2, newValue: 3 }.
                    // 👆 Could be merged as { id: A, propertyName: 'foo', oldValue: 1, newValue: 3 }.
                    const index = mergedChanges.findIndex((pastChange) => {
                        return (pastChange.type === change.type &&
                            pastChange.id === change.id &&
                            (change.propertyName === undefined ||
                                pastChange.propertyName === change.propertyName));
                    });
                    const existingChange = mergedChanges[index];
                    if (existingChange) {
                        if (change.propertyName !== undefined) {
                            // The incoming change is of the same property of existing change.
                            existingChange.newValue = change.newValue;
                        }
                        else {
                            // The incoming change is a whole data override.
                            mergedChanges.splice(index, 1);
                            mergedChanges.push(change);
                        }
                    }
                    else {
                        mergedChanges.push(change);
                    }
                    break;
                }
                case 'TreeStructureDetached': {
                    // TreeStructureAttached
                    // TreeStructureChanged
                    // TreeStructureDetached 👈🏻 Since the tree struct was detached, above 2 changes may be ignored.
                    mergedChanges = mergedChanges.filter((pastChange) => {
                        if (pastChange.type === 'TreeStructureAttached') {
                            return pastChange.treeKey !== change.treeKey;
                        }
                        else if (pastChange.type === 'TreeStructureChanged') {
                            return pastChange.treeKey !== change.treeKey;
                        }
                        return true;
                    });
                    mergedChanges.push(change);
                    break;
                }
                case 'TreeStructureChanged': {
                    const existingChange = mergedChanges.find((pastChange) => {
                        return (pastChange.type === 'TreeStructureChanged' &&
                            pastChange.treeKey === change.treeKey &&
                            pastChange.nodeId === change.nodeId);
                    });
                    if (existingChange) {
                        existingChange.newParentId =
                            change.newParentId;
                    }
                    else {
                        mergedChanges.push(change);
                    }
                    break;
                }
                default:
                    mergedChanges.push(change);
                    break;
            }
        });
        return mergedChanges;
    }
    // ================= Node =================
    checkNodeExistence(id) {
        this.getNode(id);
    }
    /**
     * Check if a node exists in the graph.
     * @group NodeMethods
     */
    hasNode(id) {
        return this.nodeMap.has(id);
    }
    /**
     * Tell if two nodes are neighbors.
     * @group NodeMethods
     */
    areNeighbors(firstNodeId, secondNodeId) {
        return this.getNeighbors(secondNodeId).some((neighbor) => neighbor.id === firstNodeId);
    }
    /**
     * Get the node data with given ID.
     * @group NodeMethods
     */
    getNode(id) {
        const node = this.nodeMap.get(id);
        if (!node) {
            throw new Error('Node not found for id: ' + id);
        }
        return node;
    }
    /**
     * Given a node ID, find all edges of the node.
     * @param id - ID of the node
     * @param direction - Edge direction, defaults to 'both'.
     * @group NodeMethods
     */
    getRelatedEdges(id, direction) {
        this.checkNodeExistence(id);
        if (direction === 'in') {
            const inEdges = this.inEdgesMap.get(id);
            return Array.from(inEdges);
        }
        else if (direction === 'out') {
            const outEdges = this.outEdgesMap.get(id);
            return Array.from(outEdges);
        }
        else {
            const bothEdges = this.bothEdgesMap.get(id);
            return Array.from(bothEdges);
        }
    }
    /**
     * Get the degree of the given node.
     * @group NodeMethods
     */
    getDegree(id, direction) {
        return this.getRelatedEdges(id, direction).length;
    }
    /**
     * Get all successors of the given node.
     */
    getSuccessors(id) {
        const outEdges = this.getRelatedEdges(id, 'out');
        const targets = outEdges.map((edge) => this.getNode(edge.target));
        return Array.from(new Set(targets));
    }
    /**
     * Get all predecessors of the given node.
     */
    getPredecessors(id) {
        const inEdges = this.getRelatedEdges(id, 'in');
        const sources = inEdges.map((edge) => this.getNode(edge.source));
        return Array.from(new Set(sources));
    }
    /**
     * Given a node ID, find its neighbors.
     * @param id - ID of the node
     * @group NodeMethods
     */
    getNeighbors(id) {
        const predecessors = this.getPredecessors(id);
        const successors = this.getSuccessors(id);
        return Array.from(new Set([...predecessors, ...successors]));
    }
    doAddNode(node) {
        if (this.hasNode(node.id)) {
            throw new Error('Node already exists: ' + node.id);
        }
        this.nodeMap.set(node.id, node);
        this.inEdgesMap.set(node.id, new Set());
        this.outEdgesMap.set(node.id, new Set());
        this.bothEdgesMap.set(node.id, new Set());
        this.treeIndices.forEach((tree) => {
            tree.childrenMap.set(node.id, new Set());
        });
        this.changes.push({ type: 'NodeAdded', value: node });
    }
    /**
     * Add all nodes of the given array, or iterable, into the graph.
     * @group NodeMethods
     */
    addNodes(nodes) {
        this.batch(() => {
            for (const node of nodes) {
                this.doAddNode(node);
            }
        });
    }
    /**
     * Add a single node into the graph.
     * @group NodeMethods
     */
    addNode(node) {
        this.addNodes([node]);
    }
    doRemoveNode(id) {
        const node = this.getNode(id);
        const bothEdges = this.bothEdgesMap.get(id);
        bothEdges?.forEach((edge) => this.doRemoveEdge(edge.id));
        this.nodeMap.delete(id);
        this.treeIndices.forEach((tree) => {
            tree.childrenMap.get(id)?.forEach((child) => {
                tree.parentMap.delete(child.id);
            });
            const parent = tree.parentMap.get(id);
            if (parent)
                tree.childrenMap.get(parent.id)?.delete(node);
            tree.parentMap.delete(id);
            tree.childrenMap.delete(id);
        });
        this.bothEdgesMap.delete(id);
        this.inEdgesMap.delete(id);
        this.outEdgesMap.delete(id);
        this.changes.push({ type: 'NodeRemoved', value: node });
    }
    /**
     * Remove nodes and their attached edges from the graph.
     * @group NodeMethods
     */
    removeNodes(idList) {
        this.batch(() => {
            idList.forEach((id) => this.doRemoveNode(id));
        });
    }
    /**
     * Remove a single node and its attached edges from the graph.
     * @group NodeMethods
     */
    removeNode(id) {
        this.removeNodes([id]);
    }
    updateNodeDataProperty(id, propertyName, value) {
        const node = this.getNode(id);
        this.batch(() => {
            const oldValue = node.data[propertyName];
            const newValue = value;
            node.data[propertyName] = newValue;
            this.changes.push({
                type: 'NodeDataUpdated',
                id,
                propertyName,
                oldValue,
                newValue,
            });
        });
    }
    /**
     * Like Object.assign, merge all properties of `path` to the node data.
     * @param id Node ID.
     * @param patch A data object to merge.
     */
    mergeNodeData(id, patch) {
        this.batch(() => {
            Object.entries(patch).forEach(([propertyName, value]) => {
                this.updateNodeDataProperty(id, propertyName, value);
            });
        });
    }
    updateNodeData(...args) {
        const id = args[0];
        const node = this.getNode(id);
        if (typeof args[1] === 'string') {
            // id, propertyName, value
            this.updateNodeDataProperty(id, args[1], args[2]);
            return;
        }
        let data;
        if (typeof args[1] === 'function') {
            // id, update
            const update = args[1];
            data = update(node.data);
        }
        else if (typeof args[1] === 'object') {
            // id, data
            data = args[1];
        }
        this.batch(() => {
            const oldValue = node.data;
            const newValue = data;
            node.data = data;
            this.changes.push({
                type: 'NodeDataUpdated',
                id,
                oldValue,
                newValue,
            });
        });
    }
    // ================= Edge =================
    checkEdgeExistence(id) {
        if (!this.hasEdge(id)) {
            throw new Error('Edge not found for id: ' + id);
        }
    }
    /**
     * Check if an edge exists in the graph.
     * @group NodeMethods
     */
    hasEdge(id) {
        return this.edgeMap.has(id);
    }
    /**
     * Get the edge data with given ID.
     * @group EdgeMethods
     */
    getEdge(id) {
        this.checkEdgeExistence(id);
        return this.edgeMap.get(id);
    }
    /**
     * Get the edge, the source node, and the target node by an edge ID.
     * @group EdgeMethods
     */
    getEdgeDetail(id) {
        const edge = this.getEdge(id);
        return {
            edge,
            source: this.getNode(edge.source),
            target: this.getNode(edge.target),
        };
    }
    doAddEdge(edge) {
        if (this.hasEdge(edge.id)) {
            throw new Error('Edge already exists: ' + edge.id);
        }
        this.checkNodeExistence(edge.source);
        this.checkNodeExistence(edge.target);
        this.edgeMap.set(edge.id, edge);
        const inEdges = this.inEdgesMap.get(edge.target);
        const outEdges = this.outEdgesMap.get(edge.source);
        const bothEdgesOfSource = this.bothEdgesMap.get(edge.source);
        const bothEdgesOfTarget = this.bothEdgesMap.get(edge.target);
        inEdges.add(edge);
        outEdges.add(edge);
        bothEdgesOfSource.add(edge);
        bothEdgesOfTarget.add(edge);
        this.changes.push({ type: 'EdgeAdded', value: edge });
    }
    /**
     * Add all edges of the given iterable(an array, a set, etc.) into the graph.
     * @group EdgeMethods
     */
    addEdges(edges) {
        this.batch(() => {
            for (const edge of edges) {
                this.doAddEdge(edge);
            }
        });
    }
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
    addEdge(edge) {
        this.addEdges([edge]);
    }
    doRemoveEdge(id) {
        const edge = this.getEdge(id);
        const outEdges = this.outEdgesMap.get(edge.source);
        const inEdges = this.inEdgesMap.get(edge.target);
        const bothEdgesOfSource = this.bothEdgesMap.get(edge.source);
        const bothEdgesOfTarget = this.bothEdgesMap.get(edge.target);
        outEdges.delete(edge);
        inEdges.delete(edge);
        bothEdgesOfSource.delete(edge);
        bothEdgesOfTarget.delete(edge);
        this.edgeMap.delete(id);
        this.changes.push({ type: 'EdgeRemoved', value: edge });
    }
    /**
     * Remove edges whose id was included in the given id list.
     * @group EdgeMethods
     */
    removeEdges(idList) {
        this.batch(() => {
            idList.forEach((id) => this.doRemoveEdge(id));
        });
    }
    /**
     * Remove a single edge of the given id.
     * @group EdgeMethods
     */
    removeEdge(id) {
        this.removeEdges([id]);
    }
    /**
     * Change the source of an edge. The source must be found in current graph.
     * @group EdgeMethods
     */
    updateEdgeSource(id, source) {
        const edge = this.getEdge(id);
        this.checkNodeExistence(source);
        const oldSource = edge.source;
        const newSource = source;
        this.outEdgesMap.get(oldSource).delete(edge);
        this.bothEdgesMap.get(oldSource).delete(edge);
        this.outEdgesMap.get(newSource).add(edge);
        this.bothEdgesMap.get(newSource).add(edge);
        edge.source = source;
        this.batch(() => {
            this.changes.push({
                type: 'EdgeUpdated',
                id,
                propertyName: 'source',
                oldValue: oldSource,
                newValue: newSource,
            });
        });
    }
    /**
     * Change the target of an edge. The target must be found in current graph.
     * @group EdgeMethods
     */
    updateEdgeTarget(id, target) {
        const edge = this.getEdge(id);
        this.checkNodeExistence(target);
        const oldTarget = edge.target;
        const newTarget = target;
        this.inEdgesMap.get(oldTarget).delete(edge);
        this.bothEdgesMap.get(oldTarget).delete(edge);
        this.inEdgesMap.get(newTarget).add(edge);
        this.bothEdgesMap.get(newTarget).add(edge);
        edge.target = target;
        this.batch(() => {
            this.changes.push({
                type: 'EdgeUpdated',
                id,
                propertyName: 'target',
                oldValue: oldTarget,
                newValue: newTarget,
            });
        });
    }
    updateEdgeDataProperty(id, propertyName, value) {
        const edge = this.getEdge(id);
        this.batch(() => {
            const oldValue = edge.data[propertyName];
            const newValue = value;
            edge.data[propertyName] = newValue;
            this.changes.push({
                type: 'EdgeDataUpdated',
                id,
                propertyName,
                oldValue,
                newValue,
            });
        });
    }
    updateEdgeData(...args) {
        const id = args[0];
        const edge = this.getEdge(id);
        if (typeof args[1] === 'string') {
            // id, propertyName, value
            this.updateEdgeDataProperty(id, args[1], args[2]);
            return;
        }
        let data;
        if (typeof args[1] === 'function') {
            // id, update
            const update = args[1];
            data = update(edge.data);
        }
        else if (typeof args[1] === 'object') {
            // id, data
            data = args[1];
        }
        this.batch(() => {
            const oldValue = edge.data;
            const newValue = data;
            edge.data = data;
            this.changes.push({
                type: 'EdgeDataUpdated',
                id,
                oldValue,
                newValue,
            });
        });
    }
    /**
     * @group EdgeMethods
     */
    mergeEdgeData(id, patch) {
        this.batch(() => {
            Object.entries(patch).forEach(([propertyName, value]) => {
                this.updateEdgeDataProperty(id, propertyName, value);
            });
        });
    }
    // ================= Tree =================
    checkTreeExistence(treeKey) {
        if (!this.hasTreeStructure(treeKey)) {
            throw new Error('Tree structure not found for treeKey: ' + treeKey);
        }
    }
    hasTreeStructure(treeKey) {
        return this.treeIndices.has(treeKey);
    }
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
    attachTreeStructure(treeKey) {
        if (this.treeIndices.has(treeKey)) {
            // Already attached.
            return;
        }
        this.treeIndices.set(treeKey, {
            parentMap: new Map(),
            childrenMap: new Map(),
        });
        this.batch(() => {
            this.changes.push({
                type: 'TreeStructureAttached',
                treeKey,
            });
        });
    }
    /**
     * Detach the tree structure of the given tree key from the graph.
     *
     * ```ts
     * graph.detachTreeStructure('Inheritance');
     * graph.getRoots('Inheritance'); // Error!
     * ```
     * @group TreeMethods
     */
    detachTreeStructure(treeKey) {
        this.checkTreeExistence(treeKey);
        this.treeIndices.delete(treeKey);
        this.batch(() => {
            this.changes.push({
                type: 'TreeStructureDetached',
                treeKey,
            });
        });
    }
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
    addTree(tree, treeKey) {
        this.batch(() => {
            this.attachTreeStructure(treeKey);
            // Add Nodes
            const nodes = [];
            const stack = Array.isArray(tree) ? tree : [tree];
            while (stack.length) {
                const node = stack.shift();
                nodes.push(node);
                if (node.children) {
                    stack.push(...node.children);
                }
            }
            this.addNodes(nodes);
            // Set parent for each child node.
            nodes.forEach((parent) => {
                parent.children?.forEach((child) => {
                    this.setParent(child.id, parent.id, treeKey);
                });
            });
        });
    }
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
    getRoots(treeKey) {
        this.checkTreeExistence(treeKey);
        return this.getAllNodes().filter((node) => !this.getParent(node.id, treeKey));
    }
    /**
     * Given a node ID and an optional tree key, get the children of the node in the specified tree structure.
     * @group TreeMethods
     */
    getChildren(id, treeKey) {
        this.checkNodeExistence(id);
        this.checkTreeExistence(treeKey);
        const tree = this.treeIndices.get(treeKey);
        const children = tree.childrenMap.get(id);
        return Array.from(children || []);
    }
    /**
     * Given a node ID and an optional tree key, get the parent of the node in the specified tree structure.
     * If the given node is one of the tree roots, this returns null.
     * @group TreeMethods
     */
    getParent(id, treeKey) {
        this.checkNodeExistence(id);
        this.checkTreeExistence(treeKey);
        const tree = this.treeIndices.get(treeKey);
        return tree.parentMap.get(id) || null;
    }
    /**
     * Returns an array of all the ancestor nodes, staring from the parent to the root.
     */
    getAncestors(id, treeKey) {
        const ancestors = [];
        let current = this.getNode(id);
        let parent;
        // eslint-disable-next-line no-cond-assign
        while ((parent = this.getParent(current.id, treeKey))) {
            ancestors.push(parent);
            current = parent;
        }
        return ancestors;
    }
    /**
     * Set node parent. If this operation causes a circle, it fails with an error.
     * @param id - ID of the child node.
     * @param parent - ID of the parent node. If it is undefined or null, means unset parent for node with id.
     * @param treeKey - Which tree structure the relation is applied to.
     * @group TreeMethods
     */
    setParent(id, parent, treeKey) {
        this.checkTreeExistence(treeKey);
        const tree = this.treeIndices.get(treeKey);
        if (!tree)
            return;
        const node = this.getNode(id);
        const oldParent = tree.parentMap.get(id);
        // Same parent id as old one, skip
        if (oldParent?.id === parent)
            return;
        // New parent is undefined or null, unset parent for the node
        if (parent === undefined || parent === null) {
            if (oldParent) {
                tree.childrenMap.get(oldParent.id)?.delete(node);
            }
            tree.parentMap.delete(id);
            return;
        }
        const newParent = this.getNode(parent);
        // Set parent
        tree.parentMap.set(id, newParent);
        // Set children
        if (oldParent) {
            tree.childrenMap.get(oldParent.id)?.delete(node);
        }
        let children = tree.childrenMap.get(newParent.id);
        if (!children) {
            children = new Set();
            tree.childrenMap.set(newParent.id, children);
        }
        children.add(node);
        this.batch(() => {
            this.changes.push({
                type: 'TreeStructureChanged',
                treeKey,
                nodeId: id,
                oldParentId: oldParent?.id,
                newParentId: newParent.id,
            });
        });
    }
    dfsTree(id, fn, treeKey) {
        const navigator = (nodeId) => this.getChildren(nodeId, treeKey);
        return doDFS(this.getNode(id), new Set(), fn, navigator);
    }
    bfsTree(id, fn, treeKey) {
        const navigator = (nodeId) => this.getChildren(nodeId, treeKey);
        return doBFS([this.getNode(id)], new Set(), fn, navigator);
    }
    // ================= Graph =================
    /**
     * Get all nodes in the graph as an array.
     */
    getAllNodes() {
        return Array.from(this.nodeMap.values());
    }
    /**
     * Get all edges in the graph as an array.
     */
    getAllEdges() {
        return Array.from(this.edgeMap.values());
    }
    bfs(id, fn, direction = 'out') {
        const navigator = {
            in: this.getPredecessors.bind(this),
            out: this.getSuccessors.bind(this),
            both: this.getNeighbors.bind(this),
        }[direction];
        return doBFS([this.getNode(id)], new Set(), fn, navigator);
    }
    dfs(id, fn, direction = 'out') {
        const navigator = {
            in: this.getPredecessors.bind(this),
            out: this.getSuccessors.bind(this),
            both: this.getNeighbors.bind(this),
        }[direction];
        return doDFS(this.getNode(id), new Set(), fn, navigator);
    }
    clone() {
        // Make a shallow copy of nodes and edges.
        const newNodes = this.getAllNodes().map((oldNode) => {
            return { ...oldNode, data: { ...oldNode.data } };
        });
        const newEdges = this.getAllEdges().map((oldEdge) => {
            return { ...oldEdge, data: { ...oldEdge.data } };
        });
        // Create a new graph with shallow copied nodes and edges.
        const newGraph = new Graph({
            nodes: newNodes,
            edges: newEdges,
        });
        // Add tree indices.
        this.treeIndices.forEach(({ parentMap: oldParentMap, childrenMap: oldChildrenMap }, treeKey) => {
            const parentMap = new Map();
            oldParentMap.forEach((parent, key) => {
                parentMap.set(key, newGraph.getNode(parent.id));
            });
            const childrenMap = new Map();
            oldChildrenMap.forEach((children, key) => {
                childrenMap.set(key, new Set(Array.from(children).map((n) => newGraph.getNode(n.id))));
            });
            newGraph.treeIndices.set(treeKey, {
                parentMap: parentMap,
                childrenMap: childrenMap,
            });
        });
        return newGraph;
    }
    toJSON() {
        return JSON.stringify({
            nodes: this.getAllNodes(),
            edges: this.getAllEdges(),
            // FIXME: And tree structures?
        });
    }
    createView(options) {
        return new GraphView({
            graph: this,
            ...options,
        });
    }
}
//# sourceMappingURL=graph.js.map