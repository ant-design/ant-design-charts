import { addDummyNode } from './util';
/*
 * Breaks any long edges in the graph into short segments that span 1 layer
 * each. This operation is undoable with the denormalize function.
 *
 * Pre-conditions:
 *
 *    1. The input graph is a DAG.
 *    2. Each node in the graph has a "rank" property.
 *
 * Post-condition:
 *
 *    1. All edges in the graph have a length of 1.
 *    2. Dummy nodes are added where edges have been split into segments.
 *    3. The graph is augmented with a "dummyChains" attribute which contains
 *       the first dummy in each chain of dummy nodes produced.
 */
const DUMMY_NODE_EDGE = 'edge';
const DUMMY_NODE_EDGE_LABEL = 'edge-label';
const run = (g, dummyChains) => {
    g.getAllEdges().forEach((edge) => normalizeEdge(g, edge, dummyChains));
};
const normalizeEdge = (g, e, dummyChains) => {
    let v = e.source;
    let vRank = g.getNode(v).data.rank;
    const w = e.target;
    const wRank = g.getNode(w).data.rank;
    const labelRank = e.data.labelRank;
    if (wRank === vRank + 1)
        return;
    g.removeEdge(e.id);
    let dummy;
    let nodeData;
    let i;
    for (i = 0, ++vRank; vRank < wRank; ++i, ++vRank) {
        e.data.points = [];
        nodeData = {
            originalEdge: e,
            width: 0,
            height: 0,
            rank: vRank,
        };
        dummy = addDummyNode(g, DUMMY_NODE_EDGE, nodeData, '_d');
        if (vRank === labelRank) {
            nodeData.width = e.data.width;
            nodeData.height = e.data.height;
            nodeData.dummy = DUMMY_NODE_EDGE_LABEL;
            nodeData.labelpos = e.data.labelpos;
        }
        g.addEdge({
            id: `e${Math.random()}`,
            source: v,
            target: dummy,
            data: { weight: e.data.weight },
        });
        if (i === 0) {
            dummyChains.push(dummy);
        }
        v = dummy;
    }
    g.addEdge({
        id: `e${Math.random()}`,
        source: v,
        target: w,
        data: { weight: e.data.weight },
    });
};
const undo = (g, dummyChains) => {
    dummyChains.forEach((v) => {
        let node = g.getNode(v);
        const { data } = node;
        const originalEdge = data.originalEdge;
        let w;
        // Restore original edge.
        if (originalEdge) {
            g.addEdge(originalEdge);
        }
        let currentV = v;
        while (node.data.dummy) {
            w = g.getSuccessors(currentV)[0];
            g.removeNode(currentV);
            originalEdge.data.points.push({
                x: node.data.x,
                y: node.data.y,
            });
            if (node.data.dummy === DUMMY_NODE_EDGE_LABEL) {
                originalEdge.data.x = node.data.x;
                originalEdge.data.y = node.data.y;
                originalEdge.data.width = node.data.width;
                originalEdge.data.height = node.data.height;
            }
            currentV = w.id;
            node = g.getNode(currentV);
        }
    });
};
export { run, undo };
//# sourceMappingURL=normalize.js.map