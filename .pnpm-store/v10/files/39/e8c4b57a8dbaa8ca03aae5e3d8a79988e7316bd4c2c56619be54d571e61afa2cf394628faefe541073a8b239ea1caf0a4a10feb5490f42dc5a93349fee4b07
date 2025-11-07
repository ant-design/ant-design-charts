import { Graph } from '@antv/graphlib';
/*
 * Constructs a graph that can be used to sort a layer of nodes. The graph will
 * contain all base and subgraph nodes from the request layer in their original
 * hierarchy and any edges that are incident on these nodes and are of the type
 * requested by the "relationship" parameter.
 *
 * Nodes from the requested rank that do not have parents are assigned a root
 * node in the output graph, which is set in the root graph attribute. This
 * makes it easy to walk the hierarchy of movable nodes during ordering.
 *
 * Pre-conditions:
 *
 *    1. Input graph is a DAG
 *    2. Base nodes in the input graph have a rank attribute
 *    3. Subgraph nodes in the input graph has minRank and maxRank attributes
 *    4. Edges have an assigned weight
 *
 * Post-conditions:
 *
 *    1. Output graph has all nodes in the movable rank with preserved
 *       hierarchy.
 *    2. Root nodes in the movable layer are made children of the node
 *       indicated by the root attribute of the graph.
 *    3. Non-movable nodes incident on movable nodes, selected by the
 *       relationship parameter, are included in the graph (without hierarchy).
 *    4. Edges incident on movable nodes, selected by the relationship
 *       parameter, are added to the output graph.
 *    5. The weights for copied edges are aggregated as need, since the output
 *       graph is not a multi-graph.
 */
export const buildLayerGraph = (g, rank, direction) => {
    const root = createRootNode(g);
    const result = new Graph({
        tree: [
            {
                id: root,
                children: [],
                data: {},
            },
        ],
    });
    g.getAllNodes().forEach((v) => {
        const parent = g.getParent(v.id);
        if (v.data.rank === rank ||
            (v.data.minRank <= rank && rank <= v.data.maxRank)) {
            if (!result.hasNode(v.id)) {
                result.addNode(Object.assign({}, v));
            }
            if ((parent === null || parent === void 0 ? void 0 : parent.id) && !result.hasNode(parent === null || parent === void 0 ? void 0 : parent.id)) {
                result.addNode(Object.assign({}, parent));
            }
            result.setParent(v.id, (parent === null || parent === void 0 ? void 0 : parent.id) || root);
            // This assumes we have only short edges!
            g.getRelatedEdges(v.id, direction).forEach((e) => {
                const u = e.source === v.id ? e.target : e.source;
                if (!result.hasNode(u)) {
                    result.addNode(Object.assign({}, g.getNode(u)));
                }
                const edge = result
                    .getRelatedEdges(u, 'out')
                    .find(({ target }) => target === v.id);
                const weight = edge !== undefined ? edge.data.weight : 0;
                if (!edge) {
                    result.addEdge({
                        id: e.id,
                        source: u,
                        target: v.id,
                        data: {
                            weight: e.data.weight + weight,
                        },
                    });
                }
                else {
                    result.updateEdgeData(edge.id, Object.assign(Object.assign({}, edge.data), { weight: e.data.weight + weight }));
                }
            });
            // console.log(v);
            if (v.data.hasOwnProperty('minRank')) {
                result.updateNodeData(v.id, Object.assign(Object.assign({}, v.data), { borderLeft: v.data.borderLeft[rank], borderRight: v.data.borderRight[rank] }));
            }
        }
    });
    return result;
};
const createRootNode = (g) => {
    let v;
    while (g.hasNode((v = `_root${Math.random()}`)))
        ;
    return v;
};
//# sourceMappingURL=build-layer-graph.js.map