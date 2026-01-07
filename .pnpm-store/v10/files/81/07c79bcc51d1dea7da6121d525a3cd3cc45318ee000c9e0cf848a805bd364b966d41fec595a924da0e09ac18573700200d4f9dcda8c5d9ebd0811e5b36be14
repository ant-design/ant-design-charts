/*
 * A greedy heuristic for finding a feedback arc set for a graph. A feedback
 * arc set is a set of edges that can be removed to make a graph acyclic.
 * The algorithm comes from: P. Eades, X. Lin, and W. F. Smyth, "A fast and
 * effective heuristic for the feedback arc set problem." This implementation
 * adjusts that from the paper to allow for weighted edges.
 *
 * @see https://github.com/dagrejs/dagre/blob/master/lib/greedy-fas.js
 */
import { Graph } from '@antv/graphlib';
import RawList from './data/list';
class List extends RawList {
}
const DEFAULT_WEIGHT_FN = () => 1;
export const greedyFAS = (g, weightFn) => {
    var _a;
    if (g.getAllNodes().length <= 1)
        return [];
    const state = buildState(g, weightFn || DEFAULT_WEIGHT_FN);
    const results = doGreedyFAS(state.graph, state.buckets, state.zeroIdx);
    return (_a = results
        .map((e) => g.getRelatedEdges(e.v, 'out').filter(({ target }) => target === e.w))) === null || _a === void 0 ? void 0 : _a.flat();
};
const doGreedyFAS = (g, buckets, zeroIdx) => {
    let results = [];
    const sources = buckets[buckets.length - 1];
    const sinks = buckets[0];
    let entry;
    while (g.getAllNodes().length) {
        while ((entry = sinks.dequeue())) {
            removeNode(g, buckets, zeroIdx, entry);
        }
        while ((entry = sources.dequeue())) {
            removeNode(g, buckets, zeroIdx, entry);
        }
        if (g.getAllNodes().length) {
            for (let i = buckets.length - 2; i > 0; --i) {
                entry = buckets[i].dequeue();
                if (entry) {
                    results = results.concat(removeNode(g, buckets, zeroIdx, entry, true));
                    break;
                }
            }
        }
    }
    return results;
};
const removeNode = (g, buckets, zeroIdx, entry, collectPredecessors) => {
    var _a, _b;
    const results = [];
    if (g.hasNode(entry.v)) {
        (_a = g.getRelatedEdges(entry.v, 'in')) === null || _a === void 0 ? void 0 : _a.forEach((edge) => {
            const weight = edge.data.weight;
            const uEntry = g.getNode(edge.source);
            if (collectPredecessors) {
                // this result not really care about in or out
                results.push({ v: edge.source, w: edge.target, in: 0, out: 0 });
            }
            if (uEntry.data.out === undefined)
                uEntry.data.out = 0;
            // @ts-ignore
            uEntry.data.out -= weight;
            assignBucket(buckets, zeroIdx, Object.assign({ v: uEntry.id }, uEntry.data));
        });
        (_b = g.getRelatedEdges(entry.v, 'out')) === null || _b === void 0 ? void 0 : _b.forEach((edge) => {
            const weight = edge.data.weight;
            const w = edge.target;
            const wEntry = g.getNode(w);
            if (wEntry.data.in === undefined)
                wEntry.data.in = 0;
            // @ts-ignore
            wEntry.data.in -= weight;
            assignBucket(buckets, zeroIdx, Object.assign({ v: wEntry.id }, wEntry.data));
        });
        g.removeNode(entry.v);
    }
    return collectPredecessors ? results : undefined;
};
const buildState = (g, weightFn) => {
    const fasGraph = new Graph();
    let maxIn = 0;
    let maxOut = 0;
    g.getAllNodes().forEach((v) => {
        fasGraph.addNode({
            id: v.id,
            data: { v: v.id, in: 0, out: 0 },
        });
    });
    // Aggregate weights on nodes, but also sum the weights across multi-edges
    // into a single edge for the fasGraph.
    g.getAllEdges().forEach((e) => {
        const edge = fasGraph
            .getRelatedEdges(e.source, 'out')
            .find((edge) => edge.target === e.target);
        const weight = (weightFn === null || weightFn === void 0 ? void 0 : weightFn(e)) || 1;
        if (!edge) {
            fasGraph.addEdge({
                id: e.id,
                source: e.source,
                target: e.target,
                data: {
                    weight,
                },
            });
        }
        else {
            fasGraph.updateEdgeData(edge === null || edge === void 0 ? void 0 : edge.id, Object.assign(Object.assign({}, edge.data), { weight: edge.data.weight + weight }));
        }
        // @ts-ignore
        maxOut = Math.max(maxOut, (fasGraph.getNode(e.source).data.out += weight));
        // @ts-ignore
        maxIn = Math.max(maxIn, (fasGraph.getNode(e.target).data.in += weight));
    });
    const buckets = [];
    const rangeMax = maxOut + maxIn + 3;
    for (let i = 0; i < rangeMax; i++) {
        buckets.push(new List());
    }
    const zeroIdx = maxIn + 1;
    fasGraph.getAllNodes().forEach((v) => {
        assignBucket(buckets, zeroIdx, Object.assign({ v: v.id }, fasGraph.getNode(v.id).data));
    });
    return { buckets, zeroIdx, graph: fasGraph };
};
const assignBucket = (buckets, zeroIdx, entry) => {
    if (!entry.out) {
        buckets[0].enqueue(entry);
    }
    else if (!entry['in']) {
        buckets[buckets.length - 1].enqueue(entry);
    }
    else {
        buckets[entry.out - entry['in'] + zeroIdx].enqueue(entry);
    }
};
//# sourceMappingURL=greedy-fas.js.map