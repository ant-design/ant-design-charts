"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mid = exports.calcBBox = exports.angleBetween = exports.angleWithQuadrant = exports.angle = exports.dist = exports.add = exports.sub = void 0;
function sub([x1, y1], [x2, y2]) {
    return [x1 - x2, y1 - y2];
}
exports.sub = sub;
function add([x1, y1], [x2, y2]) {
    return [x1 + x2, y1 + y2];
}
exports.add = add;
function dist([x0, y0], [x1, y1]) {
    return Math.sqrt(Math.pow((x0 - x1), 2) + Math.pow((y0 - y1), 2));
}
exports.dist = dist;
/**
 * Calculate angle of vector [x, y].
 */
function angle([x, y]) {
    return Math.atan2(y, x);
}
exports.angle = angle;
/**
 * Calculate angle of [x, y], then + Math.PI / 2.
 * Because of the difference between `Geometric coordinate system` and `Visualization coordinate system`.
 * @returns
 */
function angleWithQuadrant([x, y]) {
    return angle([x, y]) + Math.PI / 2;
}
exports.angleWithQuadrant = angleWithQuadrant;
function angleBetween(v0, v1) {
    const a0 = angle(v0);
    const a1 = angle(v1);
    if (a0 < a1)
        return a1 - a0;
    return Math.PI * 2 - (a0 - a1);
}
exports.angleBetween = angleBetween;
function calcBBox(points) {
    let minX = Infinity;
    let maxX = -Infinity;
    let minY = Infinity;
    let maxY = -Infinity;
    for (const [x, y] of points) {
        minX = Math.min(x, minX);
        maxX = Math.max(x, maxX);
        minY = Math.min(y, minY);
        maxY = Math.max(y, maxY);
    }
    const width = maxX - minX;
    const height = maxY - minY;
    return [minX, minY, width, height];
}
exports.calcBBox = calcBBox;
/**
 * Get the center of two points.
 */
function mid([x1, y1], [x2, y2]) {
    return [(x1 + x2) / 2, (y1 + y2) / 2];
}
exports.mid = mid;
//# sourceMappingURL=vector.js.map