"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEdgeEndsContext = exports.GetEdgeActualEnds = void 0;
const constants_1 = require("../constants");
const exports_1 = require("../exports");
const edge_1 = require("../utils/edge");
const base_transform_1 = require("./base-transform");
/**
 * <zh/> 获取边的实际端点
 *
 * <en/> Get the actual endpoints of the edge
 */
class GetEdgeActualEnds extends base_transform_1.BaseTransform {
    beforeDraw(input) {
        const { add, update } = input;
        const { model } = this.context;
        [...add.edges.entries(), ...update.edges.entries()].forEach(([, edge]) => {
            (0, exports.getEdgeEndsContext)(model, edge);
        });
        return input;
    }
}
exports.GetEdgeActualEnds = GetEdgeActualEnds;
const getEdgeEndsContext = (model, edge) => {
    const { source, target } = edge;
    const sourceNodeData = model.getElementDataById(source);
    const targetNodeData = model.getElementDataById(target);
    const actualSourceNode = (0, edge_1.findActualConnectNodeData)(sourceNodeData, (id) => model.getParentData(id, constants_1.COMBO_KEY));
    const actualTargetNode = (0, edge_1.findActualConnectNodeData)(targetNodeData, (id) => model.getParentData(id, constants_1.COMBO_KEY));
    const sourceNode = (0, exports_1.idOf)(actualSourceNode);
    const targetNode = (0, exports_1.idOf)(actualTargetNode);
    const ends = { sourceNode, targetNode };
    if (edge.style) {
        Object.assign(edge.style, ends);
    }
    else
        edge.style = ends;
    return edge;
};
exports.getEdgeEndsContext = getEdgeEndsContext;
//# sourceMappingURL=get-edge-actual-ends.js.map