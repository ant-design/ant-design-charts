import { dfs, minBy, simplify } from '../util';
import { feasibleTree } from './feasible-tree';
import { longestPath as initRank, slack } from './util';
/*
 * The network simplex algorithm assigns ranks to each node in the input graph
 * and iteratively improves the ranking to reduce the length of edges.
 *
 * Preconditions:
 *
 *    1. The input graph must be a DAG.
 *    2. All nodes in the graph must have an object value.
 *    3. All edges in the graph must have "minlen" and "weight" attributes.
 *
 * Postconditions:
 *
 *    1. All nodes in the graph will have an assigned "rank" attribute that has
 *       been optimized by the network simplex algorithm. Ranks start at 0.
 *
 *
 * A rough sketch of the algorithm is as follows:
 *
 *    1. Assign initial ranks to each node. We use the longest path algorithm,
 *       which assigns ranks to the lowest position possible. In general this
 *       leads to very wide bottom ranks and unnecessarily long edges.
 *    2. Construct a feasible tight tree. A tight tree is one such that all
 *       edges in the tree have no slack (difference between length of edge
 *       and minlen for the edge). This by itself greatly improves the assigned
 *       rankings by shorting edges.
 *    3. Iteratively find edges that have negative cut values. Generally a
 *       negative cut value indicates that the edge could be removed and a new
 *       tree edge could be added to produce a more compact graph.
 *
 * Much of the algorithms here are derived from Gansner, et al., "A Technique
 * for Drawing Directed Graphs." The structure of the file roughly follows the
 * structure of the overall algorithm.
 */
export const networkSimplex = (og) => {
    const g = simplify(og);
    initRank(g);
    const t = feasibleTree(g);
    initLowLimValues(t);
    initCutValues(t, g);
    let e;
    let f;
    while ((e = leaveEdge(t))) {
        f = enterEdge(t, g, e);
        exchangeEdges(t, g, e, f);
    }
};
/*
 * Initializes cut values for all edges in the tree.
 */
export const initCutValues = (t, g) => {
    let vs = dfs(t, t.getAllNodes(), 'post', false);
    vs = vs.slice(0, (vs === null || vs === void 0 ? void 0 : vs.length) - 1);
    vs.forEach((v) => {
        assignCutValue(t, g, v);
    });
};
const assignCutValue = (t, g, child) => {
    const childLab = t.getNode(child);
    const parent = childLab.data.parent;
    // FIXME: use undirected edge?
    const edge = t
        .getRelatedEdges(child, 'both')
        .find((e) => e.target === parent || e.source === parent);
    edge.data.cutvalue = calcCutValue(t, g, child);
};
/*
 * Given the tight tree, its graph, and a child in the graph calculate and
 * return the cut value for the edge between the child and its parent.
 */
export const calcCutValue = (t, g, child) => {
    const childLab = t.getNode(child);
    const parent = childLab.data.parent;
    // True if the child is on the tail end of the edge in the directed graph
    let childIsTail = true;
    // The graph's view of the tree edge we're inspecting
    let graphEdge = g
        .getRelatedEdges(child, 'out')
        .find((e) => e.target === parent);
    // The accumulated cut value for the edge between this node and its parent
    let cutValue = 0;
    if (!graphEdge) {
        childIsTail = false;
        graphEdge = g
            .getRelatedEdges(parent, 'out')
            .find((e) => e.target === child);
    }
    cutValue = graphEdge.data.weight;
    g.getRelatedEdges(child, 'both').forEach((e) => {
        const isOutEdge = e.source === child;
        const other = isOutEdge ? e.target : e.source;
        if (other !== parent) {
            const pointsToHead = isOutEdge === childIsTail;
            const otherWeight = e.data.weight;
            cutValue += pointsToHead ? otherWeight : -otherWeight;
            if (isTreeEdge(t, child, other)) {
                // FIXME: use undirected edge?
                const otherCutValue = t
                    .getRelatedEdges(child, 'both')
                    .find((e) => e.source === other || e.target === other).data
                    .cutvalue;
                cutValue += pointsToHead ? -otherCutValue : otherCutValue;
            }
        }
    });
    return cutValue;
};
export const initLowLimValues = (tree, root = tree.getAllNodes()[0].id) => {
    dfsAssignLowLim(tree, {}, 1, root);
};
const dfsAssignLowLim = (tree, visited, nextLim, v, parent) => {
    var _a;
    const low = nextLim;
    let useNextLim = nextLim;
    const label = tree.getNode(v);
    visited[v] = true;
    (_a = tree.getNeighbors(v)) === null || _a === void 0 ? void 0 : _a.forEach((w) => {
        if (!visited[w.id]) {
            useNextLim = dfsAssignLowLim(tree, visited, useNextLim, w.id, v);
        }
    });
    label.data.low = low;
    label.data.lim = useNextLim++;
    if (parent) {
        label.data.parent = parent;
    }
    else {
        // TODO should be able to remove this when we incrementally update low lim
        delete label.data.parent;
    }
    return useNextLim;
};
export const leaveEdge = (tree) => {
    return tree.getAllEdges().find((e) => {
        return e.data.cutvalue < 0;
    });
};
export const enterEdge = (t, g, edge) => {
    let v = edge.source;
    let w = edge.target;
    // For the rest of this function we assume that v is the tail and w is the
    // head, so if we don't have this edge in the graph we should flip it to
    // match the correct orientation.
    if (!g.getRelatedEdges(v, 'out').find((e) => e.target === w)) {
        v = edge.target;
        w = edge.source;
    }
    const vLabel = t.getNode(v);
    const wLabel = t.getNode(w);
    let tailLabel = vLabel;
    let flip = false;
    // If the root is in the tail of the edge then we need to flip the logic that
    // checks for the head and tail nodes in the candidates function below.
    if (vLabel.data.lim > wLabel.data.lim) {
        tailLabel = wLabel;
        flip = true;
    }
    const candidates = g.getAllEdges().filter((edge) => {
        return (flip === isDescendant(t.getNode(edge.source), tailLabel) &&
            flip !== isDescendant(t.getNode(edge.target), tailLabel));
    });
    return minBy(candidates, (edge) => {
        return slack(g, edge);
    });
};
/**
 *
 * @param t
 * @param g
 * @param e edge to remove
 * @param f edge to add
 */
export const exchangeEdges = (t, g, e, f) => {
    // FIXME: use undirected edge?
    const existed = t
        .getRelatedEdges(e.source, 'both')
        .find((edge) => edge.source === e.target || edge.target === e.target);
    if (existed) {
        t.removeEdge(existed.id);
    }
    t.addEdge({
        id: `e${Math.random()}`,
        source: f.source,
        target: f.target,
        data: {},
    });
    initLowLimValues(t);
    initCutValues(t, g);
    updateRanks(t, g);
};
const updateRanks = (t, g) => {
    const root = t.getAllNodes().find((v) => {
        return !v.data.parent;
    });
    let vs = dfs(t, root, 'pre', false);
    vs = vs.slice(1);
    vs.forEach((v) => {
        const parent = t.getNode(v).data.parent;
        let edge = g.getRelatedEdges(v, 'out').find((e) => e.target === parent);
        // let edge = g.edgeFromArgs(v, parent);
        let flipped = false;
        if (!edge && g.hasNode(parent)) {
            // edge = g.edgeFromArgs(parent, v)!;
            edge = g.getRelatedEdges(parent, 'out').find((e) => e.target === v);
            flipped = true;
        }
        g.getNode(v).data.rank =
            ((g.hasNode(parent) && g.getNode(parent).data.rank) || 0) +
                (flipped ? edge === null || edge === void 0 ? void 0 : edge.data.minlen : -(edge === null || edge === void 0 ? void 0 : edge.data.minlen));
    });
};
/*
 * Returns true if the edge is in the tree.
 */
const isTreeEdge = (tree, u, v) => {
    // FIXME: use undirected edge?
    return tree
        .getRelatedEdges(u, 'both')
        .find((e) => e.source === v || e.target === v);
};
/*
 * Returns true if the specified node is descendant of the root node per the
 * assigned low and lim attributes in the tree.
 */
const isDescendant = (vLabel, rootLabel) => {
    return (rootLabel.data.low <= vLabel.data.lim &&
        vLabel.data.lim <= rootLabel.data.lim);
};
//# sourceMappingURL=network-simplex.js.map