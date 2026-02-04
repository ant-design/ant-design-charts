import { getBounds } from './bounds';
function onLine(line, point) {
    return (point[0] <= Math.max(line[0][0], line[1][0]) &&
        point[0] <= Math.min(line[0][0], line[1][0]) &&
        point[1] <= Math.max(line[0][1], line[1][1]) &&
        point[1] <= Math.min(line[0][1], line[1][1]));
}
function direction(a, b, c) {
    var val = (b[1] - a[1]) * (c[0] - b[0]) - (b[0] - a[0]) * (c[1] - b[1]);
    if (val === 0)
        return 0;
    return val < 0 ? 2 : 1;
}
function isIntersect(line1, line2) {
    var dir1 = direction(line1[0], line1[1], line2[0]);
    var dir2 = direction(line1[0], line1[1], line2[1]);
    var dir3 = direction(line2[0], line2[1], line1[0]);
    var dir4 = direction(line2[0], line2[1], line1[1]);
    if (dir1 !== dir2 && dir3 !== dir4)
        return true;
    if (dir1 === 0 && onLine(line1, line2[0]))
        return true;
    if (dir2 === 0 && onLine(line1, line2[1]))
        return true;
    if (dir3 === 0 && onLine(line2, line1[0]))
        return true;
    if (dir4 === 0 && onLine(line2, line1[1]))
        return true;
    return false;
}
export function isPointInsideRectangle(polygon, point) {
    var n = polygon.length;
    if (n < 3)
        return false;
    var lineToInfinity = [point, [9999, point[1]]];
    var count = 0;
    var i = 0;
    do {
        var side = [polygon[i], polygon[(i + 1) % n]];
        if (isIntersect(side, lineToInfinity)) {
            if (direction(side[0], point, side[1]) === 0)
                return onLine(side, point);
            count++;
        }
        i = (i + 1) % n;
    } while (i !== 0);
    return !!(count & 1);
}
export function isRectangleBInsideA(rectA, rectB) {
    return rectB.every(function (point) { return isPointInsideRectangle(rectA, point); });
}
/**
 * 检测 child 是否完全在 container 内部
 */
export function contain(container, child, margin) {
    var x1 = container.x1, x2 = container.x2, y1 = container.y1, y2 = container.y2;
    var parent = [
        [x1, y1],
        [x2, y1],
        [x2, y2],
        [x1, y2],
    ];
    var element = getBounds(child, margin);
    return isRectangleBInsideA(parent, element);
}
//# sourceMappingURL=contain.js.map