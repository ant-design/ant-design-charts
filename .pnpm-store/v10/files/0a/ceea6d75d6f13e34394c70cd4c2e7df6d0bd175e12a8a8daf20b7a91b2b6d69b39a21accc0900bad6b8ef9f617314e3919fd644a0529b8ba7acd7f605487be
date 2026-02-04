"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parsePlacement = parsePlacement;
const math_1 = require("./math");
/**
 * <zh/> 解析位置
 *
 * <en/> Parse position
 * @param placement - <zh/> 位置 | <en/> placement
 * @returns <zh/> 相对位置 | <en/> relative placement
 */
function parsePlacement(placement) {
    if (Array.isArray(placement)) {
        return (0, math_1.isBetween)(placement[0], 0, 1) && (0, math_1.isBetween)(placement[1], 0, 1) ? placement : [0.5, 0.5];
    }
    const direction = placement.split('-');
    const x = direction.includes('left') ? 0 : direction.includes('right') ? 1 : 0.5;
    const y = direction.includes('top') ? 0 : direction.includes('bottom') ? 1 : 0.5;
    return [x, y];
}
//# sourceMappingURL=placement.js.map