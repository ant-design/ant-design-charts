import { feasibleTreeWithLayer as feasibleTree } from './feasible-tree';
import { networkSimplex } from './network-simplex';
import { longestPath, longestPathWithLayer } from './util';
/*
 * Assigns a rank to each node in the input graph that respects the "minlen"
 * constraint specified on edges between nodes.
 *
 * This basic structure is derived from Gansner, et al., "A Technique for
 * Drawing Directed Graphs."
 *
 * Pre-conditions:
 *
 *    1. Graph must be a connected DAG
 *    2. Graph nodes must be objects
 *    3. Graph edges must have "weight" and "minlen" attributes
 *
 * Post-conditions:
 *
 *    1. Graph nodes will have a "rank" attribute based on the results of the
 *       algorithm. Ranks can start at any index (including negative), we'll
 *       fix them up later.
 */
export const rank = (g, ranker) => {
    switch (ranker) {
        case 'network-simplex':
            networkSimplexRanker(g);
            break;
        case 'tight-tree':
            tightTreeRanker(g);
            break;
        case 'longest-path':
            longestPathRanker(g);
            break;
        // default: networkSimplexRanker(g);
        default:
            tightTreeRanker(g);
    }
};
// A fast and simple ranker, but results are far from optimal.
const longestPathRanker = longestPath;
const tightTreeRanker = (g) => {
    longestPathWithLayer(g);
    feasibleTree(g);
};
const networkSimplexRanker = (g) => {
    networkSimplex(g);
};
//# sourceMappingURL=index.js.map