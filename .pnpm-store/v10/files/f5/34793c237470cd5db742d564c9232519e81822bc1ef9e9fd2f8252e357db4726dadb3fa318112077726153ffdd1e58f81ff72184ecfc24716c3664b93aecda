import { __read } from "tslib";
/**
 * @param vec
 * @param s
 */
export function scale(vec, s) {
    return [vec[0] * s, vec[1] * s];
}
export function add(vec1, vec2) {
    return [vec1[0] + vec2[0], vec1[1] + vec2[1]];
}
export function sub(vec1, vec2) {
    return [vec1[0] - vec2[0], vec1[1] - vec2[1]];
}
export function min(vec1, vec2) {
    return [Math.min(vec1[0], vec2[0]), Math.min(vec1[1], vec2[1])];
}
export function max(vec1, vec2) {
    return [Math.max(vec1[0], vec2[0]), Math.max(vec1[1], vec2[1])];
}
export function distance(vec1, vec2) {
    return Math.sqrt(Math.pow((vec1[0] - vec2[0]), 2) + Math.pow((vec1[1] - vec2[1]), 2));
}
export function normalize(vec) {
    if (vec[0] === 0 && vec[1] === 0)
        return [0, 0];
    var len = Math.sqrt(Math.pow(vec[0], 2) + Math.pow(vec[1], 2));
    return [vec[0] / len, vec[1] / len];
}
/**
 * 将给定向量围绕指定点旋转指定角度
 * @param vec
 * @param origin 旋转中心
 * @param angle 旋转角度，弧度制
 */
export function rotate(vec, origin, angle) {
    var _a = __read(vec, 2), x = _a[0], y = _a[1];
    var _b = __read(origin, 2), ox = _b[0], oy = _b[1];
    var dx = x - ox;
    var dy = y - oy;
    var sin = Math.sin(angle);
    var cos = Math.cos(angle);
    return [dx * cos - dy * sin + ox, dx * sin + dy * cos + oy];
}
export function vertical(vec, flag) {
    return flag ? [vec[1], -vec[0]] : [-vec[1], vec[0]];
}
//# sourceMappingURL=matrix.js.map