"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseAABB = parseAABB;
exports.isInBounds = isInBounds;
exports.isOverflow = isOverflow;
exports.isOverlap = isOverlap;
// There is a certain error in the calculation of text bounds.
const EPSILON = 1e-2;
function parseAABB(min2) {
    const { min, max } = min2;
    return [
        [min[0], min[1]],
        [max[0], max[1]],
    ];
}
/**
 * Whether the `point` in `bounds`.
 * @param point
 * @param bounds
 * @param threshold
 */
function isInBounds(point, bounds, threshold = EPSILON) {
    const [x, y] = point;
    const [min, max] = bounds;
    return (x >= min[0] - threshold &&
        x <= max[0] + threshold &&
        y >= min[1] - threshold &&
        y <= max[1] + threshold);
}
/**
 * Whether `b1` is overflow from `b2`.
 * @param b1
 * @param b2
 * @param threshold The threshold to determine whether the bounds is overflowed, default is 0.
 */
function isOverflow(b1, b2, threshold = EPSILON) {
    const [min, max] = b1;
    return !(isInBounds(min, b2, threshold) && isInBounds(max, b2, threshold));
}
/**
 * Whether `b1` is overlap with `b2`.
 * @param b1
 * @param b2
 * @returns
 */
function isOverlap(b1, b2) {
    const [min1, max1] = b1;
    const [min2, max2] = b2;
    return (min1[0] < max2[0] &&
        max1[0] > min2[0] &&
        min1[1] < max2[1] &&
        max1[1] > min2[1]);
}
//# sourceMappingURL=bounds.js.map