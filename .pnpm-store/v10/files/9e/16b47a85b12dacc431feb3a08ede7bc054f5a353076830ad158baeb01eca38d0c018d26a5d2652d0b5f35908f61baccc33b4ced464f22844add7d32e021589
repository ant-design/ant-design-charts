"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollapseExpandCombo = void 0;
const constants_1 = require("../constants");
const collapsibility_1 = require("../utils/collapsibility");
const edge_1 = require("../utils/edge");
const id_1 = require("../utils/id");
const base_transform_1 = require("./base-transform");
const utils_1 = require("./utils");
/**
 * <zh/> 处理组合的收起和展开
 *
 * <en/> Process the collapse and expand of combos
 */
class CollapseExpandCombo extends base_transform_1.BaseTransform {
    beforeDraw(input, context) {
        if (context.stage === 'visibility')
            return input;
        if (!this.context.model.model.hasTreeStructure(constants_1.COMBO_KEY))
            return input;
        const { model } = this.context;
        const { add, update } = input;
        // combo 添加和更新的顺序为先子后父，因此采用倒序遍历
        // The order of adding and updating combos is first child and then parent, so reverse traversal is used
        const combos = [...input.update.combos.entries(), ...input.add.combos.entries()];
        while (combos.length) {
            const [id, combo] = combos.pop();
            if ((0, collapsibility_1.isCollapsed)(combo)) {
                const descendants = model.getDescendantsData(id);
                const descendantIds = descendants.map(id_1.idOf);
                const { internal, external } = (0, edge_1.getSubgraphRelatedEdges)(descendantIds, (id) => model.getRelatedEdgesData(id));
                // 移除所有后代元素 / Remove all descendant elements
                descendants.forEach((descendant) => {
                    const descendantId = (0, id_1.idOf)(descendant);
                    // 不再处理当前 combo 的后代 combo
                    // No longer process the descendant combo of the current combo
                    const comboIndex = combos.findIndex(([id]) => id === descendantId);
                    if (comboIndex !== -1)
                        combos.splice(comboIndex, 1);
                    const elementType = model.getElementType(descendantId);
                    (0, utils_1.reassignTo)(input, 'remove', elementType, descendant);
                });
                // 如果是内部边/节点 销毁
                // If it is an internal edge/node, destroy it
                internal.forEach((edge) => (0, utils_1.reassignTo)(input, 'remove', 'edge', edge));
                // 如果是外部边，连接到收起对象上
                // If it is an external edge, connect to the collapsed object
                external.forEach((edge) => {
                    var _a;
                    const id = (0, id_1.idOf)(edge);
                    const edgeElement = (_a = this.context.element) === null || _a === void 0 ? void 0 : _a.getElement(id);
                    if (edgeElement)
                        update.edges.set(id, edge);
                    else
                        add.edges.set(id, edge);
                });
            }
            else {
                const children = model.getChildrenData(id);
                const childrenIds = children.map(id_1.idOf);
                const { edges } = (0, edge_1.getSubgraphRelatedEdges)(childrenIds, (id) => model.getRelatedEdgesData(id));
                [...children, ...edges].forEach((descendant) => {
                    var _a;
                    const id = (0, id_1.idOf)(descendant);
                    const elementType = model.getElementType(id);
                    const element = (_a = this.context.element) === null || _a === void 0 ? void 0 : _a.getElement(id);
                    // 如果节点不存在，则添加到新增列表，如果存在，添加到更新列表
                    // If the node does not exist, add it to the new list, if it exists, add it to the update list
                    if (element)
                        (0, utils_1.reassignTo)(input, 'update', elementType, descendant);
                    else
                        (0, utils_1.reassignTo)(input, 'add', elementType, descendant);
                    // 继续展开子节点 / Continue to expand child nodes
                    if (elementType === 'combo')
                        combos.push([id, descendant]);
                });
            }
        }
        return input;
    }
}
exports.CollapseExpandCombo = CollapseExpandCombo;
//# sourceMappingURL=collapse-expand-combo.js.map