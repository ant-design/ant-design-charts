"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrangeDrawOrder = void 0;
const id_1 = require("../utils/id");
const base_transform_1 = require("./base-transform");
/**
 * <zh/> 调整元素绘制顺序
 *
 * <en/> Adjust the drawing order of elements
 */
class ArrangeDrawOrder extends base_transform_1.BaseTransform {
    beforeDraw(input) {
        const { model } = this.context;
        const combosToAdd = input.add.combos;
        const arrangeCombo = (combos) => {
            // id, data, zIndex
            const order = [];
            combos.forEach((combo, id) => {
                const ancestors = model.getAncestorsData(id, 'combo');
                const path = ancestors.map((ancestor) => (0, id_1.idOf)(ancestor)).reverse();
                // combo 的 zIndex 为距离根 combo 的深度
                // The zIndex of the combo is the depth from the root combo
                order.push([id, combo, path.length]);
            });
            return new Map(order
                // 基于 zIndex 降序排序，优先绘制子 combo / Sort based on zIndex in descending order, draw child combo first
                .sort(([, , zIndex1], [, , zIndex2]) => zIndex2 - zIndex1)
                .map(([id, datum]) => [id, datum]));
        };
        input.add.combos = arrangeCombo(combosToAdd);
        input.update.combos = arrangeCombo(input.update.combos);
        return input;
    }
}
exports.ArrangeDrawOrder = ArrangeDrawOrder;
//# sourceMappingURL=arrange-draw-order.js.map