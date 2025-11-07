import { __awaiter, __rest } from "tslib";
import { isFunction, isNumber } from '@antv/util';
import dagre, { graphlib } from 'dagre';
import { parseSize } from './util/size';
/**
 * <zh/> Dagre 布局
 *
 * <en/> Dagre layout
 */
export class DagreLayout {
    constructor(options) {
        this.id = 'dagre';
        this.options = {};
        Object.assign(this.options, DagreLayout.defaultOptions, options);
    }
    execute(graph, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.genericDagreLayout(false, graph, Object.assign(Object.assign({}, this.options), options));
        });
    }
    assign(graph, options) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.genericDagreLayout(true, graph, Object.assign(Object.assign({}, this.options), options));
        });
    }
    genericDagreLayout(assign, graph, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nodeSize } = options;
            const g = new graphlib.Graph();
            g.setGraph(options);
            g.setDefaultEdgeLabel(() => ({}));
            const nodes = graph.getAllNodes();
            const edges = graph.getAllEdges();
            if ([...nodes, ...edges].some(({ id }) => isNumber(id))) {
                console.error('Dagre layout only support string id, it will convert number to string.');
            }
            graph.getAllNodes().forEach((node) => {
                const { id } = node;
                const data = Object.assign({}, node.data);
                if (nodeSize !== undefined) {
                    const [width, height] = parseSize(isFunction(nodeSize) ? nodeSize(node) : nodeSize);
                    Object.assign(data, { width, height });
                }
                g.setNode(id.toString(), data);
            });
            graph.getAllEdges().forEach(({ id, source, target }) => {
                g.setEdge(source.toString(), target.toString(), { id });
            });
            dagre.layout(g);
            const mapping = { nodes: [], edges: [] };
            g.nodes().forEach((id) => {
                const data = g.node(id);
                mapping.nodes.push({ id, data });
                if (assign)
                    graph.mergeNodeData(id, data);
            });
            g.edges().forEach((edge) => {
                const _a = g.edge(edge), { id } = _a, data = __rest(_a, ["id"]);
                const { v: source, w: target } = edge;
                mapping.edges.push({ id, source, target, data });
                if (assign)
                    graph.mergeEdgeData(id, data);
            });
            return mapping;
        });
    }
}
DagreLayout.defaultOptions = {};
//# sourceMappingURL=dagre.js.map