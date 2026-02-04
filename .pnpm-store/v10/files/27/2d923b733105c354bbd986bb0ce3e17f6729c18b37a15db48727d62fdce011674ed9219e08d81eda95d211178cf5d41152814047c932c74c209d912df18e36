"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRelatedEdge = void 0;
const id_1 = require("../utils/id");
const base_transform_1 = require("./base-transform");
/**
 * 如果更新了节点 / combo，需要更新连接的边
 * If the node / combo is updated, the connected edge and the combo it is in need to be updated
 */
class UpdateRelatedEdge extends base_transform_1.BaseTransform {
    beforeDraw(input, context) {
        const { stage } = context;
        if (stage === 'visibility')
            return input;
        const { model } = this.context;
        const { update: { nodes, edges, combos }, } = input;
        const addRelatedEdges = (_, id) => {
            const relatedEdgesData = model.getRelatedEdgesData(id);
            relatedEdgesData.forEach((edge) => !edges.has((0, id_1.idOf)(edge)) && edges.set((0, id_1.idOf)(edge), edge));
        };
        nodes.forEach(addRelatedEdges);
        combos.forEach(addRelatedEdges);
        return input;
    }
}
exports.UpdateRelatedEdge = UpdateRelatedEdge;
//# sourceMappingURL=update-related-edge.js.map