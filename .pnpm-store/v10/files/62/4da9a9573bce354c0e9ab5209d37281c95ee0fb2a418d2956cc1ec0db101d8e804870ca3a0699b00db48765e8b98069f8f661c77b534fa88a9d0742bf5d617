/*
 * A function that takes a layering (an array of layers, each with an array of
 * ordererd nodes) and a graph and returns a weighted crossing count.
 *
 * Pre-conditions:
 *
 *    1. Input graph must be simple (not a multigraph), directed, and include
 *       only simple edges.
 *    2. Edges in the input graph must have assigned weights.
 *
 * Post-conditions:
 *
 *    1. The graph and layering matrix are left unchanged.
 *
 * This algorithm is derived from Barth, et al., "Bilayer Cross Counting."
 */
import { zipObject } from '../util';
const twoLayerCrossCount = (g, northLayer, southLayer) => {
    // Sort all of the edges between the north and south layers by their position
    // in the north layer and then the south. Map these edges to the position of
    // their head in the south layer.
    const southPos = zipObject(southLayer, southLayer.map((v, i) => i));
    const unflat = northLayer.map((v) => {
        const unsort = g.getRelatedEdges(v, 'out').map((e) => {
            return { pos: southPos[e.target] || 0, weight: e.data.weight };
        });
        return unsort === null || unsort === void 0 ? void 0 : unsort.sort((a, b) => a.pos - b.pos);
    });
    const southEntries = unflat.flat().filter((entry) => entry !== undefined);
    // Build the accumulator tree
    let firstIndex = 1;
    while (firstIndex < southLayer.length)
        firstIndex <<= 1;
    const treeSize = 2 * firstIndex - 1;
    firstIndex -= 1;
    const tree = Array(treeSize).fill(0, 0, treeSize);
    // Calculate the weighted crossings
    let cc = 0;
    southEntries === null || southEntries === void 0 ? void 0 : southEntries.forEach((entry) => {
        if (entry) {
            let index = entry.pos + firstIndex;
            tree[index] += entry.weight;
            let weightSum = 0;
            while (index > 0) {
                if (index % 2) {
                    weightSum += tree[index + 1];
                }
                index = (index - 1) >> 1;
                tree[index] += entry.weight;
            }
            cc += entry.weight * weightSum;
        }
    });
    return cc;
};
export const crossCount = (g, layering) => {
    let cc = 0;
    for (let i = 1; i < (layering === null || layering === void 0 ? void 0 : layering.length); i += 1) {
        cc += twoLayerCrossCount(g, layering[i - 1], layering[i]);
    }
    return cc;
};
//# sourceMappingURL=cross-count.js.map