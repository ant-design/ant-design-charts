/**
 * Assign or only return the result for the graph who has no nodes or only one node.
 * @param graph original graph
 * @param assign whether assign result to original graph
 * @param center the layout center
 * @returns
 */
export const handleSingleNodeGraph = (graph, assign, center) => {
    const nodes = graph.getAllNodes();
    const edges = graph.getAllEdges();
    if (!(nodes === null || nodes === void 0 ? void 0 : nodes.length)) {
        const result = { nodes: [], edges };
        return result;
    }
    if (nodes.length === 1) {
        if (assign) {
            graph.mergeNodeData(nodes[0].id, {
                x: center[0],
                y: center[1],
            });
        }
        const result = {
            nodes: [
                Object.assign(Object.assign({}, nodes[0]), { data: Object.assign(Object.assign({}, nodes[0].data), { x: center[0], y: center[1] }) }),
            ],
            edges,
        };
        return result;
    }
};
//# sourceMappingURL=common.js.map