import { __awaiter } from "tslib";
const DEFAULTS_LAYOUT_OPTIONS = {
    center: [0, 0],
    width: 300,
    height: 300,
};
/**
 * <zh/> 随机布局
 *
 * <en/> Random layout
 */
export class RandomLayout {
    constructor(options = {}) {
        this.options = options;
        this.id = 'random';
        this.options = Object.assign(Object.assign({}, DEFAULTS_LAYOUT_OPTIONS), options);
    }
    /**
     * Return the positions of nodes and edges(if needed).
     */
    execute(graph, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.genericRandomLayout(false, graph, options);
        });
    }
    /**
     * To directly assign the positions to the nodes.
     */
    assign(graph, options) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.genericRandomLayout(true, graph, options);
        });
    }
    genericRandomLayout(assign, graph, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const mergedOptions = Object.assign(Object.assign({}, this.options), options);
            const { center: propsCenter, width: propsWidth, height: propsHeight, } = mergedOptions;
            const nodes = graph.getAllNodes();
            const layoutScale = 0.9;
            const width = !propsWidth && typeof window !== 'undefined'
                ? window.innerWidth
                : propsWidth;
            const height = !propsHeight && typeof window !== 'undefined'
                ? window.innerHeight
                : propsHeight;
            const center = !propsCenter
                ? [width / 2, height / 2]
                : propsCenter;
            const layoutNodes = [];
            if (nodes) {
                nodes.forEach((node) => {
                    layoutNodes.push({
                        id: node.id,
                        data: {
                            x: (Math.random() - 0.5) * layoutScale * width + center[0],
                            y: (Math.random() - 0.5) * layoutScale * height + center[1],
                        },
                    });
                });
            }
            if (assign) {
                layoutNodes.forEach((node) => graph.mergeNodeData(node.id, {
                    x: node.data.x,
                    y: node.data.y,
                }));
            }
            const result = {
                nodes: layoutNodes,
                edges: graph.getAllEdges(),
            };
            return result;
        });
    }
}
//# sourceMappingURL=random.js.map