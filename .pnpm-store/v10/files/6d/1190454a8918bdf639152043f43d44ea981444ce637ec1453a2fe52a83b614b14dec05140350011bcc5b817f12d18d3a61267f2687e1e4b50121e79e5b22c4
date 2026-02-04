"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapNodeSize = void 0;
const util_1 = require("@antv/util");
const centrality_1 = require("../utils/centrality");
const id_1 = require("../utils/id");
const padding_1 = require("../utils/padding");
const scale_1 = require("../utils/scale");
const size_1 = require("../utils/size");
const base_transform_1 = require("./base-transform");
const utils_1 = require("./utils");
/**
 * <zh/> 根据节点重要性调整节点的大小
 *
 * <en/> Map node size based on node importance
 * @remarks
 * <zh/> 在图可视化中，节点的大小通常用于传达节点的重要性或影响力。通过根据节点中心性调整节点的大小，我们可以更直观地展示网络中各个节点的重要性，从而帮助用户更好地理解和分析复杂的网络结构。
 *
 * <en/> In graph visualization, the size of a node is usually used to convey the importance or influence of the node. By adjusting the size of the node based on the centrality of the node, we can more intuitively show the importance of each node in the network, helping users better understand and analyze complex network structures.
 */
class MapNodeSize extends base_transform_1.BaseTransform {
    constructor(context, options) {
        super(context, (0, util_1.deepMix)({}, MapNodeSize.defaultOptions, options));
        this.assignSizeByCentrality = (centrality, minCentrality, maxCentrality, minSize, maxSize, scale) => {
            const domain = [minCentrality, maxCentrality];
            const rangeX = [minSize[0], maxSize[0]];
            const rangeY = [minSize[1], maxSize[1]];
            const rangeZ = [minSize[2], maxSize[2]];
            const interpolate = (centrality, range) => {
                if (typeof scale === 'function') {
                    return scale(centrality, domain, range);
                }
                switch (scale) {
                    case 'linear':
                        return (0, scale_1.linear)(centrality, domain, range);
                    case 'log':
                        return (0, scale_1.log)(centrality, domain, range);
                    case 'pow':
                        return (0, scale_1.pow)(centrality, domain, range, 2);
                    case 'sqrt':
                        return (0, scale_1.sqrt)(centrality, domain, range);
                    default:
                        return range[0];
                }
            };
            return [interpolate(centrality, rangeX), interpolate(centrality, rangeY), interpolate(centrality, rangeZ)];
        };
    }
    beforeDraw(input) {
        const { model } = this.context;
        const nodes = model.getNodeData();
        const maxSize = (0, size_1.parseSize)(this.options.maxSize);
        const minSize = (0, size_1.parseSize)(this.options.minSize);
        const centralities = this.getCentralities(this.options.centrality);
        const maxCentrality = centralities.size > 0 ? Math.max(...centralities.values()) : 0;
        const minCentrality = centralities.size > 0 ? Math.min(...centralities.values()) : 0;
        nodes.forEach((datum) => {
            var _a;
            const size = this.assignSizeByCentrality(centralities.get((0, id_1.idOf)(datum)) || 0, minCentrality, maxCentrality, minSize, maxSize, this.options.scale);
            const element = (_a = this.context.element) === null || _a === void 0 ? void 0 : _a.getElement((0, id_1.idOf)(datum));
            const style = { size };
            this.assignLabelStyle(style, size, datum, element);
            if (!element || !(0, utils_1.isStyleEqual)(style, element.attributes)) {
                (0, utils_1.reassignTo)(input, element ? 'update' : 'add', 'node', (0, util_1.deepMix)(datum, { style }), true);
            }
        });
        return input;
    }
    assignLabelStyle(style, size, datum, element) {
        var _a;
        const configStyle = element ? element.config.style : (_a = this.context.element) === null || _a === void 0 ? void 0 : _a.getElementComputedStyle('node', datum);
        Object.assign(style, (0, util_1.pick)(configStyle, ['labelFontSize', 'labelLineHeight']));
        if (this.options.mapLabelSize) {
            const fontSize = this.getLabelSizeByNodeSize(size, Infinity, Number(style.labelFontSize));
            Object.assign(style, {
                labelFontSize: fontSize,
                labelLineHeight: fontSize + (0, padding_1.getVerticalPadding)(style.labelPadding),
            });
        }
        return style;
    }
    getLabelSizeByNodeSize(size, defaultMaxFontSize, defaultMinFontSize) {
        const fontSize = Math.min(...size) / 2;
        const [minFontSize, maxFontSize] = !Array.isArray(this.options.mapLabelSize)
            ? [defaultMinFontSize, defaultMaxFontSize]
            : this.options.mapLabelSize;
        return Math.min(maxFontSize, Math.max(fontSize, minFontSize));
    }
    getCentralities(centrality) {
        const { model } = this.context;
        const graphData = model.getData();
        if (typeof centrality === 'function')
            return centrality(graphData);
        const getRelatedEdgesData = model.getRelatedEdgesData.bind(model);
        return (0, centrality_1.getNodeCentralities)(graphData, getRelatedEdgesData, centrality);
    }
}
exports.MapNodeSize = MapNodeSize;
MapNodeSize.defaultOptions = {
    centrality: { type: 'degree' },
    maxSize: 80,
    minSize: 20,
    scale: 'linear',
    mapLabelSize: false,
};
//# sourceMappingURL=map-node-size.js.map