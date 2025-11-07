export function sub([x1, y1], [x2, y2]) {
    return [x1 - x2, y1 - y2];
}
export function add([x1, y1], [x2, y2]) {
    return [x1 + x2, y1 + y2];
}
export function dist([x0, y0], [x1, y1]) {
    return Math.sqrt(Math.pow((x0 - x1), 2) + Math.pow((y0 - y1), 2));
}
/**
 * Calculate angle of vector [x, y].
 */
export function angle([x, y]) {
    return Math.atan2(y, x);
}
/**
 * Calculate angle of [x, y], then + Math.PI / 2.
 * Because of the difference between `Geometric coordinate system` and `Visualization coordinate system`.
 * @returns
 */
export function angleWithQuadrant([x, y]) {
    return angle([x, y]) + Math.PI / 2;
}
export function angleBetween(v0, v1) {
    const a0 = angle(v0);
    const a1 = angle(v1);
    if (a0 < a1)
        return a1 - a0;
    return Math.PI * 2 - (a0 - a1);
}
export function calcBBox(points) {
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
/**
 * Get the center of two points.
 */
export function mid([x1, y1], [x2, y2]) {
    return [(x1 + x2) / 2, (y1 + y2) / 2];
}
//# sourceMappingURL=vector.js.map