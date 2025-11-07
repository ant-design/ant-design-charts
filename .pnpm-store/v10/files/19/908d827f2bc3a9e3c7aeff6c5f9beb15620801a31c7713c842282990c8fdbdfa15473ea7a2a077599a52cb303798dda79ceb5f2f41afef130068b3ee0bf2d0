"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPolygonsIntersect = isPolygonsIntersect;
var is_point_in_polygon_1 = require("./is-point-in-polygon");
var isBetween = function (value, min, max) { return value >= min && value <= max; };
function getLineIntersect(p0, p1, p2, p3) {
    var tolerance = 0.001;
    var E = {
        x: p2.x - p0.x,
        y: p2.y - p0.y,
    };
    var D0 = {
        x: p1.x - p0.x,
        y: p1.y - p0.y,
    };
    var D1 = {
        x: p3.x - p2.x,
        y: p3.y - p2.y,
    };
    var kross = D0.x * D1.y - D0.y * D1.x;
    var sqrKross = kross * kross;
    var sqrLen0 = D0.x * D0.x + D0.y * D0.y;
    var sqrLen1 = D1.x * D1.x + D1.y * D1.y;
    var point = null;
    if (sqrKross > tolerance * sqrLen0 * sqrLen1) {
        var s = (E.x * D1.y - E.y * D1.x) / kross;
        var t = (E.x * D0.y - E.y * D0.x) / kross;
        if (isBetween(s, 0, 1) && isBetween(t, 0, 1)) {
            point = {
                x: p0.x + s * D0.x,
                y: p0.y + s * D0.y,
            };
        }
    }
    return point;
}
function parseToLines(points) {
    var lines = [];
    var count = points.length;
    for (var i = 0; i < count - 1; i++) {
        var point = points[i];
        var next = points[i + 1];
        lines.push({
            from: {
                x: point[0],
                y: point[1],
            },
            to: {
                x: next[0],
                y: next[1],
            },
        });
    }
    if (lines.length > 1) {
        var first = points[0];
        var last = points[count - 1];
        lines.push({
            from: {
                x: last[0],
                y: last[1],
            },
            to: {
                x: first[0],
                y: first[1],
            },
        });
    }
    return lines;
}
function lineIntersectPolygon(lines, line) {
    var isIntersect = false;
    lines.forEach(function (l) {
        if (getLineIntersect(l.from, l.to, line.from, line.to)) {
            isIntersect = true;
            return false;
        }
    });
    return isIntersect;
}
function getBBox(points) {
    var xArr = points.map(function (p) { return p[0]; });
    var yArr = points.map(function (p) { return p[1]; });
    return {
        minX: Math.min.apply(null, xArr),
        maxX: Math.max.apply(null, xArr),
        minY: Math.min.apply(null, yArr),
        maxY: Math.max.apply(null, yArr),
    };
}
function intersectBBox(box1, box2) {
    return !(box2.minX > box1.maxX || box2.maxX < box1.minX || box2.minY > box1.maxY || box2.maxY < box1.minY);
}
/**
 * @see https://stackoverflow.com/questions/753140/how-do-i-determine-if-two-convex-polygons-intersect
 */
function isPolygonsIntersect(points1, points2) {
    // 空数组，或者一个点返回 false
    if (points1.length < 2 || points2.length < 2) {
        return false;
    }
    var bbox1 = getBBox(points1);
    var bbox2 = getBBox(points2);
    // 判定包围盒是否相交，比判定点是否在多边形内要快的多，可以筛选掉大多数情况
    if (!intersectBBox(bbox1, bbox2)) {
        return false;
    }
    var isIn = false;
    // 判定点是否在多边形内部，一旦有一个点在另一个多边形内，则返回
    points2.forEach(function (point) {
        if ((0, is_point_in_polygon_1.isPointInPolygon)(points1, point[0], point[1])) {
            isIn = true;
            return false;
        }
    });
    if (isIn) {
        return true;
    }
    // 两个多边形都需要判定
    points1.forEach(function (point) {
        if ((0, is_point_in_polygon_1.isPointInPolygon)(points2, point[0], point[1])) {
            isIn = true;
            return false;
        }
    });
    if (isIn) {
        return true;
    }
    var lines1 = parseToLines(points1);
    var lines2 = parseToLines(points2);
    var isIntersect = false;
    lines2.forEach(function (line) {
        if (lineIntersectPolygon(lines1, line)) {
            isIntersect = true;
            return false;
        }
    });
    return isIntersect;
}
//# sourceMappingURL=is-polygons-intersect.js.map