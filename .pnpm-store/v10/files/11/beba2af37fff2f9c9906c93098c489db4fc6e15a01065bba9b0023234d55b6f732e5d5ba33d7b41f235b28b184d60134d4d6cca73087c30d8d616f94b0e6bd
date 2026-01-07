"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sankey = void 0;
const d3_sankey_1 = require("./utils/d3-sankey");
const DEFAULT_OPTIONS = {
    nodeAlign: 'justify',
    nodeWidth: 0.008,
    nodePadding: 0.03,
    nodes: (graph) => graph.nodes,
    links: (graph) => graph.links,
    nodeSort: undefined,
    linkSort: undefined,
    iterations: 6,
};
const ALIGN_METHOD = {
    left: d3_sankey_1.left,
    right: d3_sankey_1.right,
    center: d3_sankey_1.center,
    justify: d3_sankey_1.justify,
};
function getNodeAlignFunction(nodeAlign) {
    const type = typeof nodeAlign;
    if (type === 'string')
        return ALIGN_METHOD[nodeAlign] || d3_sankey_1.justify;
    if (type === 'function')
        return nodeAlign;
    return d3_sankey_1.justify;
}
/**
 * Compute the node and edge position, return a graph representing the Sankey layout. All will be normalized to [[0, 0], [1, 1]]
 * Required graph data (nodes, edges)
 */
const Sankey = (options) => {
    return (data) => {
        const { nodeId, nodeSort, nodeAlign, nodeWidth, nodePadding, nodeDepth, nodes: nodeNodes, links: nodeLinks, linkSort, iterations, } = Object.assign({}, DEFAULT_OPTIONS, options);
        const sankeyProcessor = (0, d3_sankey_1.sankey)()
            .nodeSort(nodeSort)
            .linkSort(linkSort)
            .links(nodeLinks)
            .nodes(nodeNodes)
            .nodeWidth(nodeWidth)
            .nodePadding(nodePadding)
            .nodeDepth(nodeDepth)
            .nodeAlign(getNodeAlignFunction(nodeAlign))
            .iterations(iterations)
            .extent([
            [0, 0],
            [1, 1],
        ]);
        if (typeof nodeId === 'function') {
            sankeyProcessor.nodeId(nodeId);
        }
        const layoutData = sankeyProcessor(data);
        const { nodes: N, links: L } = layoutData;
        const nodes = N.map((node) => {
            const { x0, x1, y0, y1 } = node;
            /* points
             * 3---2
             * |   |
             * 0---1
             */
            return Object.assign(Object.assign({}, node), { x: [x0, x1, x1, x0], y: [y0, y0, y1, y1] });
        });
        const links = L.map((edge) => {
            const { source, target } = edge;
            const sx = source.x1;
            const tx = target.x0;
            const offset = edge.width / 2;
            return Object.assign(Object.assign({}, edge), { x: [sx, sx, tx, tx], y: [
                    edge.y0 + offset,
                    edge.y0 - offset,
                    edge.y1 + offset,
                    edge.y1 - offset,
                ] });
        });
        return { nodes, links };
    };
};
exports.Sankey = Sankey;
exports.Sankey.props = {};
//# sourceMappingURL=sankey.js.map