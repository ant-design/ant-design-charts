"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphView = void 0;
const traverse_1 = require("./utils/traverse");
const defaultFilter = () => true;
class GraphView {
    graph;
    nodeFilter;
    edgeFilter;
    // caches
    cacheEnabled;
    inEdgesMap = new Map();
    outEdgesMap = new Map();
    bothEdgesMap = new Map();
    allNodesMap = new Map();
    allEdgesMap = new Map();
    constructor(options) {
        this.graph = options.graph;
        const nodeFilter = options.nodeFilter || defaultFilter;
        const edgeFilter = options.edgeFilter || defaultFilter;
        this.nodeFilter = nodeFilter;
        this.edgeFilter = (edge) => {
            const { source, target } = this.graph.getEdgeDetail(edge.id);
            if (!nodeFilter(source) || !nodeFilter(target)) {
                return false;
            }
            return edgeFilter(edge, source, target);
        };
        if (options.cache === 'auto') {
            this.cacheEnabled = true;
            this.startAutoCache();
        }
        else if (options.cache === 'manual') {
            this.cacheEnabled = true;
        }
        else {
            this.cacheEnabled = false;
        }
    }
    /**
     * Clear all cache data. Therefore `getAllNodes()` will return `[]`.
     * If you want to disable caching, use `graphView.cacheEnabled = false` instead.
     */
    clearCache = () => {
        this.inEdgesMap.clear();
        this.outEdgesMap.clear();
        this.bothEdgesMap.clear();
        this.allNodesMap.clear();
        this.allEdgesMap.clear();
    };
    /**
     * Fully refresh all cache data to the current graph state.
     */
    refreshCache = () => {
        this.clearCache();
        this.updateCache(this.graph.getAllNodes().map((node) => node.id));
    };
    /**
     * Instead of a fully refreshment, this method partially update the cache data by specifying
     * involved(added, removed, updated) nodes. It's more efficient when handling small changes
     * on a large graph.
     */
    updateCache = (involvedNodeIds) => {
        const involvedEdgeIds = new Set();
        involvedNodeIds.forEach((id) => {
            // Collect all involved old edges.
            const oldEdgesSet = this.bothEdgesMap.get(id);
            if (oldEdgesSet) {
                oldEdgesSet.forEach((edge) => involvedEdgeIds.add(edge.id));
            }
            if (!this.hasNode(id)) {
                // When an involved node becomes unvisitable:
                // 1. Delete its related edges cache.
                this.inEdgesMap.delete(id);
                this.outEdgesMap.delete(id);
                this.bothEdgesMap.delete(id);
                // 2. Delete it from the allNodesMap.
                this.allNodesMap.delete(id);
            }
            else {
                // When an involved node becomes or stays visitable:
                // 1. Collect its new edges.
                const inEdges = this.graph
                    .getRelatedEdges(id, 'in')
                    .filter(this.edgeFilter);
                const outEdges = this.graph
                    .getRelatedEdges(id, 'out')
                    .filter(this.edgeFilter);
                const bothEdges = Array.from(new Set([...inEdges, ...outEdges]));
                bothEdges.forEach((edge) => involvedEdgeIds.add(edge.id));
                // 2. Update its related edges cache.
                this.inEdgesMap.set(id, inEdges);
                this.outEdgesMap.set(id, outEdges);
                this.bothEdgesMap.set(id, bothEdges);
                // 3. Add to allNodesMap.
                this.allNodesMap.set(id, this.graph.getNode(id));
            }
        });
        // Update allEdgesMap.
        involvedEdgeIds.forEach((id) => {
            if (this.hasEdge(id)) {
                this.allEdgesMap.set(id, this.graph.getEdge(id));
            }
            else {
                this.allEdgesMap.delete(id);
            }
        });
    };
    startAutoCache() {
        this.refreshCache();
        this.graph.on('changed', this.handleGraphChanged);
    }
    stopAutoCache() {
        this.graph.off('changed', this.handleGraphChanged);
    }
    handleGraphChanged = (event) => {
        // Collect all involved nodes.
        const involvedNodeIds = new Set();
        event.changes.forEach((change) => {
            switch (change.type) {
                case 'NodeAdded':
                    involvedNodeIds.add(change.value.id);
                    break;
                case 'NodeDataUpdated':
                    involvedNodeIds.add(change.id);
                    break;
                case 'EdgeAdded':
                    involvedNodeIds.add(change.value.source);
                    involvedNodeIds.add(change.value.target);
                    break;
                case 'EdgeUpdated':
                    if (change.propertyName === 'source' ||
                        change.propertyName === 'target') {
                        involvedNodeIds.add(change.oldValue);
                        involvedNodeIds.add(change.newValue);
                    }
                    break;
                case 'EdgeDataUpdated':
                    if (event.graph.hasEdge(change.id)) {
                        const edge = event.graph.getEdge(change.id);
                        involvedNodeIds.add(edge.source);
                        involvedNodeIds.add(edge.target);
                    }
                    break;
                case 'EdgeRemoved':
                    involvedNodeIds.add(change.value.source);
                    involvedNodeIds.add(change.value.target);
                    break;
                case 'NodeRemoved':
                    involvedNodeIds.add(change.value.id);
                    break;
                default:
                    break;
            }
        });
        // Update their caches.
        this.updateCache(involvedNodeIds);
    };
    // ================= Node =================
    checkNodeExistence(id) {
        this.getNode(id);
    }
    hasNode(id) {
        if (!this.graph.hasNode(id))
            return false;
        const node = this.graph.getNode(id);
        return this.nodeFilter(node);
    }
    areNeighbors(firstNodeId, secondNodeId) {
        this.checkNodeExistence(firstNodeId);
        return this.getNeighbors(secondNodeId).some((neighbor) => neighbor.id === firstNodeId);
    }
    getNode(id) {
        const node = this.graph.getNode(id);
        if (!this.nodeFilter(node)) {
            throw new Error('Node not found for id: ' + id);
        }
        return node;
    }
    getRelatedEdges(id, direction) {
        this.checkNodeExistence(id);
        if (this.cacheEnabled) {
            if (direction === 'in') {
                return this.inEdgesMap.get(id);
            }
            else if (direction === 'out') {
                return this.outEdgesMap.get(id);
            }
            else {
                return this.bothEdgesMap.get(id);
            }
        }
        const edges = this.graph.getRelatedEdges(id, direction);
        return edges.filter(this.edgeFilter);
    }
    getDegree(id, direction) {
        return this.getRelatedEdges(id, direction).length;
    }
    getSuccessors(id) {
        const outEdges = this.getRelatedEdges(id, 'out');
        const targets = outEdges.map((edge) => this.getNode(edge.target));
        return Array.from(new Set(targets));
    }
    getPredecessors(id) {
        const inEdges = this.getRelatedEdges(id, 'in');
        const sources = inEdges.map((edge) => this.getNode(edge.source));
        return Array.from(new Set(sources));
    }
    getNeighbors(id) {
        const predecessors = this.getPredecessors(id);
        const successors = this.getSuccessors(id);
        return Array.from(new Set([...predecessors, ...successors]));
    }
    // ================= Edge =================
    hasEdge(id) {
        if (!this.graph.hasEdge(id))
            return false;
        const edge = this.graph.getEdge(id);
        return this.edgeFilter(edge);
    }
    getEdge(id) {
        const edge = this.graph.getEdge(id);
        if (!this.edgeFilter(edge)) {
            throw new Error('Edge not found for id: ' + id);
        }
        return edge;
    }
    getEdgeDetail(id) {
        const edge = this.getEdge(id);
        return {
            edge,
            source: this.getNode(edge.source),
            target: this.getNode(edge.target),
        };
    }
    // ================= Tree =================
    hasTreeStructure(treeKey) {
        return this.graph.hasTreeStructure(treeKey);
    }
    getRoots(treeKey) {
        return this.graph.getRoots(treeKey).filter(this.nodeFilter);
    }
    getChildren(id, treeKey) {
        this.checkNodeExistence(id);
        return this.graph.getChildren(id, treeKey).filter(this.nodeFilter);
    }
    getParent(id, treeKey) {
        this.checkNodeExistence(id);
        const parent = this.graph.getParent(id, treeKey);
        if (!parent || !this.nodeFilter(parent))
            return null;
        return parent;
    }
    // ================= Graph =================
    getAllNodes() {
        if (this.cacheEnabled) {
            return Array.from(this.allNodesMap.values());
        }
        return this.graph.getAllNodes().filter(this.nodeFilter);
    }
    getAllEdges() {
        if (this.cacheEnabled) {
            return Array.from(this.allEdgesMap.values());
        }
        return this.graph.getAllEdges().filter(this.edgeFilter);
    }
    bfs(id, fn, direction = 'out') {
        const navigator = {
            in: this.getPredecessors.bind(this),
            out: this.getSuccessors.bind(this),
            both: this.getNeighbors.bind(this),
        }[direction];
        (0, traverse_1.doBFS)([this.getNode(id)], new Set(), fn, navigator);
    }
    dfs(id, fn, direction = 'out') {
        const navigator = {
            in: this.getPredecessors.bind(this),
            out: this.getSuccessors.bind(this),
            both: this.getNeighbors.bind(this),
        }[direction];
        (0, traverse_1.doDFS)(this.getNode(id), new Set(), fn, navigator);
    }
}
exports.GraphView = GraphView;
//# sourceMappingURL=graphView.js.map