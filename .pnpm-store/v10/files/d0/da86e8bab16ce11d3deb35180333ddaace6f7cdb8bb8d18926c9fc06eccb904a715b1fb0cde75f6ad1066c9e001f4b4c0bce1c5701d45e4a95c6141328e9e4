"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseAnchor = parseAnchor;
const math_1 = require("./math");
/**
 * <zh/> 解析原点（锚点）
 *
 * <en/> Parse the origin/anchor
 * @param anchor - <zh/> 原点 | <en/> Anchor
 * @returns <zh/> 标准原点 | <en/> Standard anchor
 */
function parseAnchor(anchor) {
    const parsedAnchor = (typeof anchor === 'string' ? anchor.split(' ').map((v) => parseFloat(v)) : anchor.slice(0, 2));
    if (!(0, math_1.isBetween)(parsedAnchor[0], 0, 1) || !(0, math_1.isBetween)(parsedAnchor[1], 0, 1)) {
        return [0.5, 0.5];
    }
    return parsedAnchor;
}
//# sourceMappingURL=anchor.js.map