"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isLinesParallel = isLinesParallel;
exports.getLinesIntersection = getLinesIntersection;
const math_1 = require("./math");
const vector_1 = require("./vector");
/**
 * <zh/> 判断两条线段是否平行
 *
 * <en/> Judge whether two line segments are parallel
 * @param l1 - <zh/> 第一条线段 | <en/> the first line segment
 * @param l2 - <zh/> 第二条线段 | <en/> the second line segment
 * @returns <zh/> 是否平行 | <en/> whether parallel or not
 */
function isLinesParallel(l1, l2) {
    const [p1, p2] = l1;
    const [p3, p4] = l2;
    const v1 = (0, vector_1.subtract)(p1, p2);
    const v2 = (0, vector_1.subtract)(p3, p4);
    return (0, vector_1.cross)(v1, v2).every((v) => v === 0);
}
/**
 * <zh/> 获取两条线段的交点
 *
 * <en/> Get the intersection of two line segments
 * @param l1 - <zh/> 第一条线段 | <en/> the first line segment
 * @param l2 - <zh/> 第二条线段 | <en/> the second line segment
 * @param extended - <zh/> 是否包含延长线上的交点 | <en/> whether to include the intersection on the extension line
 * @returns <zh/> 交点 | <en/> intersection
 */
function getLinesIntersection(l1, l2, extended = false) {
    if (isLinesParallel(l1, l2))
        return undefined;
    const [p1, p2] = l1;
    const [p3, p4] = l2;
    const t = ((p1[0] - p3[0]) * (p3[1] - p4[1]) - (p1[1] - p3[1]) * (p3[0] - p4[0])) /
        ((p1[0] - p2[0]) * (p3[1] - p4[1]) - (p1[1] - p2[1]) * (p3[0] - p4[0]));
    const u = p4[0] - p3[0]
        ? (p1[0] - p3[0] + t * (p2[0] - p1[0])) / (p4[0] - p3[0])
        : (p1[1] - p3[1] + t * (p2[1] - p1[1])) / (p4[1] - p3[1]);
    if (!extended && (!(0, math_1.isBetween)(t, 0, 1) || !(0, math_1.isBetween)(u, 0, 1)))
        return undefined;
    return [p1[0] + t * (p2[0] - p1[0]), p1[1] + t * (p2[1] - p1[1])];
}
//# sourceMappingURL=line.js.map