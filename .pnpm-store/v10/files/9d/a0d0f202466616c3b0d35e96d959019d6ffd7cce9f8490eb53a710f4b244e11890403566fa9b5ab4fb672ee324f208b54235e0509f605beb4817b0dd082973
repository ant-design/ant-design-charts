"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parsePadding = parsePadding;
exports.getVerticalPadding = getVerticalPadding;
exports.getHorizontalPadding = getHorizontalPadding;
/**
 * <zh/> 解析 padding
 *
 * <en/> parse padding
 * @param padding - <zh/> padding | <en/> padding
 * @returns <zh/> 标准 padding | <en/> standard padding
 */
function parsePadding(padding = 0) {
    if (Array.isArray(padding)) {
        const [top = 0, right = top, bottom = top, left = right] = padding;
        return [top, right, bottom, left];
    }
    return [padding, padding, padding, padding];
}
/**
 * <zh/> 获取在垂直方向上的 padding
 *
 * <en/> get vertical padding
 * @param padding - <zh/> padding | <en/> padding
 * @returns <zh/> 垂直方向上的 padding | <en/> vertical padding
 */
function getVerticalPadding(padding = 0) {
    const parsedPadding = parsePadding(padding);
    return parsedPadding[0] + parsedPadding[2];
}
/**
 * <zh/> 获取在水平方向上的 padding
 *
 * <en/> get horizontal padding
 * @param padding - <zh/> padding | <en/> padding
 * @returns <zh/> 水平方向上的 padding | <en/> horizontal padding
 */
function getHorizontalPadding(padding = 0) {
    const parsedPadding = parsePadding(padding);
    return parsedPadding[1] + parsedPadding[3];
}
//# sourceMappingURL=padding.js.map