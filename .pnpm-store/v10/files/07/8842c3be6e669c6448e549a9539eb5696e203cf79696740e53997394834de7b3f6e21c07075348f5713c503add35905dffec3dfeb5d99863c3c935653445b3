"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaceRadialLabels = void 0;
const g_1 = require("@antv/g");
const id_1 = require("../utils/id");
const position_1 = require("../utils/position");
const size_1 = require("../utils/size");
const vector_1 = require("../utils/vector");
const base_transform_1 = require("./base-transform");
/**
 * <zh/> 根据径向布局自动调整节点标签样式，包括位置和旋转角度
 *
 * <en/> Automatically adjust the style of node labels according to the radial layout, including position and rotation angle
 */
class PlaceRadialLabels extends base_transform_1.BaseTransform {
    constructor(context, options) {
        super(context, Object.assign({}, PlaceRadialLabels.defaultOptions, options));
    }
    get ref() {
        return this.context.model.getRootsData()[0];
    }
    afterLayout() {
        var _a;
        const refPoint = (0, position_1.positionOf)(this.ref);
        const { graph, model } = this.context;
        const data = model.getData();
        (_a = data.nodes) === null || _a === void 0 ? void 0 : _a.forEach((datum) => {
            var _a;
            if ((0, id_1.idOf)(datum) === (0, id_1.idOf)(this.ref))
                return;
            const radian = (0, vector_1.rad)((0, vector_1.subtract)((0, position_1.positionOf)(datum), refPoint));
            const isLeft = Math.abs(radian) > Math.PI / 2;
            const isLeaf = !datum.children || datum.children.length === 0;
            const nodeId = (0, id_1.idOf)(datum);
            const node = (_a = this.context.element) === null || _a === void 0 ? void 0 : _a.getElement(nodeId);
            if (!node || !node.isVisible())
                return;
            const nodeHalfWidth = (0, size_1.parseSize)(graph.getElementRenderStyle(nodeId).size)[0] / 2;
            const offset = (isLeaf ? 1 : -1) * (nodeHalfWidth + this.options.offset);
            const labelTransform = [
                ['translate', offset * Math.cos(radian), offset * Math.sin(radian)],
                ['rotate', isLeft ? (0, g_1.rad2deg)(radian) + 180 : (0, g_1.rad2deg)(radian)],
            ];
            model.updateNodeData([
                {
                    id: (0, id_1.idOf)(datum),
                    style: {
                        labelTextAlign: isLeft === isLeaf ? 'right' : 'left',
                        labelTextBaseline: 'middle',
                        labelTransform,
                    },
                },
            ]);
        });
        graph.draw();
    }
}
exports.PlaceRadialLabels = PlaceRadialLabels;
PlaceRadialLabels.defaultOptions = {
    offset: 5,
};
//# sourceMappingURL=place-radial-labels.js.map