import { Graph } from './graph';
import {
  Edge,
  GraphChangedEvent,
  GraphViewOptions,
  ID,
  Node,
  PlainObject,
} from './types';
import { doBFS, doDFS } from './utils/traverse';

const defaultFilter = () => true;

export class GraphView<N extends PlainObject, E extends PlainObject> {
  private graph: Graph<N, E>;
  private nodeFilter: (node: Node<N>) => boolean;
  private edgeFilter: (edge: Edge<E>) => boolean;

  // caches
  public cacheEnabled: boolean;
  private inEdgesMap: Map<ID, Array<Edge<E>>> = new Map();
  private outEdgesMap: Map<ID, Array<Edge<E>>> = new Map();
  private bothEdgesMap: Map<ID, Array<Edge<E>>> = new Map();
  private allNodesMap: Map<ID, Node<N>> = new Map();
  private allEdgesMap: Map<ID, Edge<E>> = new Map();

  constructor(options: GraphViewOptions<N, E>) {
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
    } else if (options.cache === 'manual') {
      this.cacheEnabled = true;
    } else {
      this.cacheEnabled = false;
    }
  }

  /**
   * Clear all cache data. Therefore `getAllNodes()` will return `[]`.
   * If you want to disable caching, use `graphView.cacheEnabled = false` instead.
   */
  public clearCache = (): void => {
    this.inEdgesMap.clear();
    this.outEdgesMap.clear();
    this.bothEdgesMap.clear();
    this.allNodesMap.clear();
    this.allEdgesMap.clear();
  };

  /**
   * Fully refresh all cache data to the current graph state.
   */
  public refreshCache = (): void => {
    this.clearCache();
    this.updateCache(this.graph.getAllNodes().map((node) => node.id));
  };

  /**
   * Instead of a fully refreshment, this method partially update the cache data by specifying
   * involved(added, removed, updated) nodes. It's more efficient when handling small changes
   * on a large graph.
   */
  public updateCache = (involvedNodeIds: Set<ID> | Array<ID>): void => {
    const involvedEdgeIds = new Set<ID>();
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
      } else {
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
      } else {
        this.allEdgesMap.delete(id);
      }
    });
  };

  public startAutoCache() {
    this.refreshCache();
    this.graph.on('changed', this.handleGraphChanged);
  }

  public stopAutoCache() {
    this.graph.off('changed', this.handleGraphChanged);
  }

  private handleGraphChanged = (event: GraphChangedEvent<N, E>) => {
    // Collect all involved nodes.
    const involvedNodeIds: Set<ID> = new Set();
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
          if (
            change.propertyName === 'source' ||
            change.propertyName === 'target'
          ) {
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
  private checkNodeExistence(id: ID): void {
    this.getNode(id);
  }

  hasNode(id: ID): boolean {
    if (!this.graph.hasNode(id)) return false;
    const node = this.graph.getNode(id);
    return this.nodeFilter(node);
  }

  public areNeighbors(firstNodeId: ID, secondNodeId: ID): boolean {
    this.checkNodeExistence(firstNodeId);
    return this.getNeighbors(secondNodeId).some(
      (neighbor) => neighbor.id === firstNodeId,
    );
  }

  public getNode(id: ID): Node<N> {
    const node = this.graph.getNode(id);
    if (!this.nodeFilter(node)) {
      throw new Error('Node not found for id: ' + id);
    }
    return node;
  }

  public getRelatedEdges(id: ID, direction?: 'in' | 'out' | 'both'): Edge<E>[] {
    this.checkNodeExistence(id);
    if (this.cacheEnabled) {
      if (direction === 'in') {
        return this.inEdgesMap.get(id)!;
      } else if (direction === 'out') {
        return this.outEdgesMap.get(id)!;
      } else {
        return this.bothEdgesMap.get(id)!;
      }
    }
    const edges = this.graph.getRelatedEdges(id, direction);
    return edges.filter(this.edgeFilter);
  }

  public getDegree(id: ID, direction?: 'in' | 'out' | 'both'): number {
    return this.getRelatedEdges(id, direction).length;
  }

  public getSuccessors(id: ID): Node<N>[] {
    const outEdges = this.getRelatedEdges(id, 'out');
    const targets = outEdges.map((edge) => this.getNode(edge.target));
    return Array.from(new Set(targets));
  }

  public getPredecessors(id: ID): Node<N>[] {
    const inEdges = this.getRelatedEdges(id, 'in');
    const sources = inEdges.map((edge) => this.getNode(edge.source));
    return Array.from(new Set(sources));
  }

  public getNeighbors(id: ID): Node<N>[] {
    const predecessors = this.getPredecessors(id);
    const successors = this.getSuccessors(id);
    return Array.from(new Set([...predecessors, ...successors]));
  }

  // ================= Edge =================
  public hasEdge(id: ID): boolean {
    if (!this.graph.hasEdge(id)) return false;
    const edge = this.graph.getEdge(id);
    return this.edgeFilter(edge);
  }

  public getEdge(id: ID): Edge<E> {
    const edge = this.graph.getEdge(id);
    if (!this.edgeFilter(edge)) {
      throw new Error('Edge not found for id: ' + id);
    }
    return edge;
  }

  public getEdgeDetail(id: ID): {
    edge: Edge<E>;
    source: Node<N>;
    target: Node<N>;
  } {
    const edge = this.getEdge(id);
    return {
      edge,
      source: this.getNode(edge.source),
      target: this.getNode(edge.target),
    };
  }

  // ================= Tree =================
  public hasTreeStructure(treeKey: string | undefined): boolean {
    return this.graph.hasTreeStructure(treeKey);
  }

  public getRoots(treeKey?: string): Node<N>[] {
    return this.graph.getRoots(treeKey).filter(this.nodeFilter);
  }

  public getChildren(id: ID, treeKey?: string): Node<N>[] {
    this.checkNodeExistence(id);
    return this.graph.getChildren(id, treeKey).filter(this.nodeFilter);
  }

  public getParent(id: ID, treeKey?: string): Node<N> | null {
    this.checkNodeExistence(id);
    const parent = this.graph.getParent(id, treeKey);
    if (!parent || !this.nodeFilter(parent)) return null;
    return parent;
  }

  // ================= Graph =================
  public getAllNodes(): Node<N>[] {
    if (this.cacheEnabled) {
      return Array.from(this.allNodesMap.values());
    }
    return this.graph.getAllNodes().filter(this.nodeFilter);
  }

  public getAllEdges(): Edge<E>[] {
    if (this.cacheEnabled) {
      return Array.from(this.allEdgesMap.values());
    }
    return this.graph.getAllEdges().filter(this.edgeFilter);
  }

  public bfs(
    id: ID,
    fn: (node: Node<N>) => void,
    direction: 'in' | 'out' | 'both' = 'out',
  ): void {
    const navigator = {
      in: this.getPredecessors.bind(this),
      out: this.getSuccessors.bind(this),
      both: this.getNeighbors.bind(this),
    }[direction];
    doBFS([this.getNode(id)], new Set(), fn, navigator);
  }

  public dfs(
    id: ID,
    fn: (node: Node<N>) => void,
    direction: 'in' | 'out' | 'both' = 'out',
  ): void {
    const navigator = {
      in: this.getPredecessors.bind(this),
      out: this.getSuccessors.bind(this),
      both: this.getNeighbors.bind(this),
    }[direction];
    doDFS(this.getNode(id), new Set(), fn, navigator);
  }
}
