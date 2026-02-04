import { Graph } from '@antv/graphlib';
import { minBy } from '../util';
import { slack } from './util';
/*
 * Constructs a spanning tree with tight edges and adjusted the input node's
 * ranks to achieve this. A tight edge is one that is has a length that matches
 * its "minlen" attribute.
 *
 * The basic structure for this function is derived from Gansner, et al., "A
 * Technique for Drawing Directed Graphs."
 *
 * Pre-conditions:
 *
 *    1. Graph must be a DAG.
 *    2. Graph must be connected.
 *    3. Graph must have at least one node.
 *    5. Graph nodes must have been previously assigned a "rank" property that
 *       respects the "minlen" property of incident edges.
 *    6. Graph edges must have a "minlen" property.
 *
 * Post-conditions:
 *
 *    - Graph nodes will have their rank adjusted to ensure that all edges are
 *      tight.
 *
 * Returns a tree (undirected graph) that is constructed using only "tight"
 * edges.
 */
const feasibleTree = (g) => {
    const t = new Graph({
        tree: [],
    });
    // Choose arbitrary node from which to start our tree
    const start = g.getAllNodes()[0];
    const size = g.getAllNodes().length;
    t.addNode(start);
    let edge;
    let delta;
    while (tightTree(t, g) < size) {
        edge = findMinSlackEdge(t, g);
        delta = t.hasNode(edge.source) ? slack(g, edge) : -slack(g, edge);
        shiftRanks(t, g, delta);
    }
    return t;
};
/*
 * Finds a maximal tree of tight edges and returns the number of nodes in the
 * tree.
 */
const tightTree = (t, g) => {
    const dfs = (v) => {
        g.getRelatedEdges(v, 'both').forEach((e) => {
            const edgeV = e.source;
            const w = v === edgeV ? e.target : edgeV;
            if (!t.hasNode(w) && !slack(g, e)) {
                t.addNode({
                    id: w,
                    data: {},
                });
                t.addEdge({
                    id: e.id,
                    source: v,
                    target: w,
                    data: {},
                });
                dfs(w);
            }
        });
    };
    t.getAllNodes().forEach((n) => dfs(n.id));
    return t.getAllNodes().length;
};
/*
 * Constructs a spanning tree with tight edges and adjusted the input node's
 * ranks to achieve this. A tight edge is one that is has a length that matches
 * its "minlen" attribute.
 *
 * The basic structure for this function is derived from Gansner, et al., "A
 * Technique for Drawing Directed Graphs."
 *
 * Pre-conditions:
 *
 *    1. Graph must be a DAG.
 *    2. Graph must be connected.
 *    3. Graph must have at least one node.
 *    5. Graph nodes must have been previously assigned a "rank" property that
 *       respects the "minlen" property of incident edges.
 *    6. Graph edges must have a "minlen" property.
 *
 * Post-conditions:
 *
 *    - Graph nodes will have their rank adjusted to ensure that all edges are
 *      tight.
 *
 * Returns a tree (undirected graph) that is constructed using only "tight"
 * edges.
 */
const feasibleTreeWithLayer = (g) => {
    const t = new Graph({ tree: [] });
    // Choose arbitrary node from which to start our tree
    const start = g.getAllNodes()[0];
    const size = g.getAllNodes().length;
    t.addNode(start);
    let edge;
    let delta;
    while (tightTreeWithLayer(t, g) < size) {
        edge = findMinSlackEdge(t, g);
        delta = t.hasNode(edge.source) ? slack(g, edge) : -slack(g, edge);
        shiftRanks(t, g, delta);
    }
    return t;
};
/*
 * Finds a maximal tree of tight edges and returns the number of nodes in the
 * tree.
 */
const tightTreeWithLayer = (t, g) => {
    const dfs = (v) => {
        var _a;
        (_a = g.getRelatedEdges(v, 'both')) === null || _a === void 0 ? void 0 : _a.forEach((e) => {
            const edgeV = e.source;
            const w = v === edgeV ? e.target : edgeV;
            // 对于指定layer的，直接加入tight-tree，不参与调整
            if (!t.hasNode(w) &&
                (g.getNode(w).data.layer !== undefined || !slack(g, e))) {
                t.addNode({
                    id: w,
                    data: {},
                });
                t.addEdge({
                    id: e.id,
                    source: v,
                    target: w,
                    data: {},
                });
                dfs(w);
            }
        });
    };
    t.getAllNodes().forEach((n) => dfs(n.id));
    return t.getAllNodes().length;
};
/*
 * Finds the edge with the smallest slack that is incident on tree and returns
 * it.
 */
const findMinSlackEdge = (t, g) => {
    return minBy(g.getAllEdges(), (e) => {
        if (t.hasNode(e.source) !== t.hasNode(e.target)) {
            return slack(g, e);
        }
        return Infinity;
    });
};
const shiftRanks = (t, g, delta) => {
    t.getAllNodes().forEach((tn) => {
        const v = g.getNode(tn.id);
        if (!v.data.rank)
            v.data.rank = 0;
        v.data.rank += delta;
    });
};
export { feasibleTree, feasibleTreeWithLayer };
//# sourceMappingURL=feasible-tree.js.map