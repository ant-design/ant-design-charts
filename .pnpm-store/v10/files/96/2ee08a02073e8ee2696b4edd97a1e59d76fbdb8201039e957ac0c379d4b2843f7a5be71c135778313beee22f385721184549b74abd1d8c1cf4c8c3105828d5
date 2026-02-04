"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parsePoint = parsePoint;
exports.toPointObject = toPointObject;
exports.sortByX = sortByX;
exports.deduplicate = deduplicate;
exports.round = round;
exports.moveTo = moveTo;
exports.isHorizontal = isHorizontal;
exports.isVertical = isVertical;
exports.isOrthogonal = isOrthogonal;
exports.isCollinear = isCollinear;
exports.getSymmetricPoint = getSymmetricPoint;
exports.getPolygonIntersectPoint = getPolygonIntersectPoint;
exports.isPointInPolygon = isPointInPolygon;
exports.getRectIntersectPoint = getRectIntersectPoint;
exports.getEllipseIntersectPoint = getEllipseIntersectPoint;
exports.findNearestPoints = findNearestPoints;
exports.findNearestLine = findNearestLine;
exports.getDistanceToLine = getDistanceToLine;
exports.findNearestPointOnLine = findNearestPointOnLine;
exports.centerOf = centerOf;
exports.sortByClockwise = sortByClockwise;
exports.getBoundingPoints = getBoundingPoints;
const util_1 = require("@antv/util");
const bbox_1 = require("./bbox");
const line_1 = require("./line");
const position_1 = require("./position");
const vector_1 = require("./vector");
/**
 * <zh/> 将对象坐标转换为数组坐标
 * <en/> Convert object coordinates to array coordinates
 * @param point - <zh/> 对象坐标 | <en/> object coordinates
 * @returns <zh/> 数组坐标 | <en/> array coordinates
 */
function parsePoint(point) {
    var _a;
    return [point.x, point.y, (_a = point.z) !== null && _a !== void 0 ? _a : 0];
}
/**
 * <zh/> 将数组坐标转换为对象坐标
 *
 * <en/> Convert array coordinates to object coordinates
 * @param point - <zh/> 数组坐标 | <en/> array coordinates
 * @returns <zh/> 对象坐标 | <en/> object coordinates
 */
function toPointObject(point) {
    var _a;
    return { x: point[0], y: point[1], z: (_a = point[2]) !== null && _a !== void 0 ? _a : 0 };
}
/**
 * <zh/> 根据 X 轴坐标排序
 * <en/> Sort by X-axis coordinates
 * @param points - <zh/> 点集 | <en/> point set
 * @returns <zh/> 排序后的点集 | <en/> sorted point set
 */
function sortByX(points) {
    return points.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
}
/**
 * <zh/> 点集去重
 *
 * <en/> Deduplicate point set
 * @param points - <zh/> 点集 | <en/> pointset
 * @returns <zh/> 去重后的点集 | <en/> deduplicated pointset
 */
function deduplicate(points) {
    const set = new Set();
    return points.filter((p) => {
        const key = p.join(',');
        if (set.has(key))
            return false;
        set.add(key);
        return true;
    });
}
/**
 * <zh/> 对点格式化，精确到 `digits` 位的数字
 *
 * <en/> Round the point to the given precision
 * @param point - <zh/> 要舍入的点 | <en/> the point to round
 * @param digits - <zh/> 小数点后的位数 | <en/> the number of digits after the decimal point
 * @returns <zh/> 舍入后的点 | <en/> the rounded point
 */
function round(point, digits = 0) {
    return point.map((p) => parseFloat(p.toFixed(digits)));
}
/**
 * <zh/> 移动点，将点朝向参考点移动一定的距离
 *
 * <en/> Move `p` point along the line starting from `ref` to this point by a certain `distance`
 * @param p - <zh/> 要移动的点 | <en/> the point to move
 * @param ref - <zh/> 参考点 | <en/> the reference point
 * @param distance - <zh/> 移动的距离 | <en/> the distance to move
 * @param reverse
 * @returns <zh/> 移动后的点 | <en/> the moved point
 */
function moveTo(p, ref, distance, reverse = false) {
    if ((0, util_1.isEqual)(p, ref))
        return p;
    const direction = reverse ? (0, vector_1.subtract)(p, ref) : (0, vector_1.subtract)(ref, p);
    const normalizedDirection = (0, vector_1.normalize)(direction);
    const moveVector = [normalizedDirection[0] * distance, normalizedDirection[1] * distance];
    return (0, vector_1.add)((0, vector_1.toVector2)(p), moveVector);
}
/**
 * <zh/> 判断两个点是否在同一水平线上
 *
 * <en/> whether two points are on the same horizontal line
 * @param p1 - <zh/> 第一个点 | <en/> the first point
 * @param p2 - <zh/> 第二个点 | <en/> the second point
 * @returns <zh/> 返回两个点是否在同一水平线上 | <en/> is horizontal or not
 */
function isHorizontal(p1, p2) {
    return p1[1] === p2[1];
}
/**
 * <zh/> 判断两个点是否在同一垂直线上
 *
 * <en/> whether two points are on the same vertical line
 * @param p1 - <zh/> 第一个点 | <en/> the first point
 * @param p2 - <zh/> 第二个点 | <en/> the second point
 * @returns <zh/> 返回两个点是否在同一垂直线上 | <en/> is vertical or not
 */
function isVertical(p1, p2) {
    return p1[0] === p2[0];
}
/**
 * <zh/> 判断两个点是否正交，即是否在同一水平线或垂直线上
 *
 * <en/> Judges whether two points are orthogonal, that is, whether they are on the same horizontal or vertical line
 * @param p1 - <zh/> 第一个点 | <en/> the first point
 * @param p2 - <zh/> 第二个点 | <en/> the second point
 * @returns <zh/> 是否正交 | <en/> whether orthogonal or not
 */
function isOrthogonal(p1, p2) {
    return isHorizontal(p1, p2) || isVertical(p1, p2);
}
/**
 * <zh/> 判断是否三点共线
 *
 * <en/> Judge whether three points are collinear
 * @param p1 - <zh/> 第一个点 | <en/> the first point
 * @param p2 - <zh/> 第二个点 | <en/> the second point
 * @param p3 - <zh/> 第三个点 | <en/> the third point
 * @returns <zh/> 是否三点共线 | <en/> whether three points are collinear
 */
function isCollinear(p1, p2, p3) {
    return (0, line_1.isLinesParallel)([p1, p2], [p2, p3]);
}
/**
 * <zh/> 计算一个点相对于另一个点的中心对称点
 *
 * <en/> Calculate the center symmetric point of a point relative to another point
 * @param p - <zh/> 要计算的点 | <en/> the point to calculate
 * @param center - <zh/> 中心点 | <en/> the center point
 * @returns <zh/> 中心对称点 | <en/> the center symmetric point
 */
function getSymmetricPoint(p, center) {
    return [2 * center[0] - p[0], 2 * center[1] - p[1]];
}
/**
 * <zh/> 获取从多边形中心到给定点的连线与多边形边缘的交点
 *
 * <en/> Gets the intersection point between the line from the center of a polygon to a given point and the polygon's edge
 * @param p - <zh/> 从多边形中心到多边形边缘的连线的外部点 | <en/> The point outside the polygon from which the line to the polygon's center is drawn
 * @param center - <zh/> 多边形中心 | <en/> the center of the polygon
 * @param points - <zh/> 多边形顶点 | <en/> the vertices of the polygon
 * @param isRelativePos - <zh/> 顶点坐标是否相对中心点 | <en/> whether the vertex coordinates are relative to the center point
 * @param useExtendedLine - <zh/> 是否使用延长线 | <en/> whether to use the extended line
 * @returns <zh/> 交点与相交线段 | <en/> intersection and intersecting line segment
 */
function getPolygonIntersectPoint(p, center, points, isRelativePos = true, useExtendedLine = false) {
    for (let i = 0; i < points.length; i++) {
        let start = points[i];
        let end = points[(i + 1) % points.length];
        if (isRelativePos) {
            start = (0, vector_1.add)(center, start);
            end = (0, vector_1.add)(center, end);
        }
        const refP = useExtendedLine ? getSymmetricPoint(p, center) : p;
        const intersect = (0, line_1.getLinesIntersection)([center, refP], [start, end]);
        if (intersect) {
            return {
                point: intersect,
                line: [start, end],
            };
        }
    }
    return {
        point: center,
        line: undefined,
    };
}
/**
 * <zh/> 判断点是否在多边形内部
 *
 * <en/> Whether point is inside the polygon (ray algo)
 * @param point - <zh/> 点 | <en/> point
 * @param points - <zh/> 多边形顶点 | <en/> polygon vertices
 * @param start - <zh/> 起始索引 | <en/> start index
 * @param end - <zh/> 结束索引 | <en/> end index
 * @returns <zh/> 是否在多边形内部 | <en/> whether inside the polygon
 */
function isPointInPolygon(point, points, start, end) {
    const x = point[0];
    const y = point[1];
    let inside = false;
    if (start === undefined)
        start = 0;
    if (end === undefined)
        end = points.length;
    const len = end - start;
    for (let i = 0, j = len - 1; i < len; j = i++) {
        const xi = points[i + start][0];
        const yi = points[i + start][1];
        const xj = points[j + start][0];
        const yj = points[j + start][1];
        const intersect = yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;
        if (intersect)
            inside = !inside;
    }
    return inside;
}
/**
 * <zh/> 获取给定点到矩形中心的连线与矩形边缘的交点
 *
 * <en/> Gets the intersection point between the line from the center of a rectangle to a given point and the rectangle's edge
 * @param p - <zh/> 从矩形中心到矩形边缘的连线的外部点 | <en/> The point outside the rectangle from which the line to the rectangle's center is drawn
 * @param bbox - <zh/> 矩形包围盒 | <en/> the bounding box of the rectangle
 * @param useExtendedLine - <zh/> 是否使用延长线 | <en/> whether to use the extended line
 * @returns <zh/> 交点 | <en/> intersection
 */
function getRectIntersectPoint(p, bbox, useExtendedLine = false) {
    const center = (0, position_1.getXYByPlacement)(bbox, 'center');
    const corners = [
        (0, position_1.getXYByPlacement)(bbox, 'left-top'),
        (0, position_1.getXYByPlacement)(bbox, 'right-top'),
        (0, position_1.getXYByPlacement)(bbox, 'right-bottom'),
        (0, position_1.getXYByPlacement)(bbox, 'left-bottom'),
    ];
    return getPolygonIntersectPoint(p, center, corners, false, useExtendedLine).point;
}
/**
 * <zh/> 获取给定点到椭圆中心的连线与椭圆边缘的交点
 *
 * <en/> Gets the intersection point between the line from the center of an ellipse to a given point and the ellipse's edge
 * @param p - <zh/> 从椭圆中心到椭圆边缘的连线的外部点 | <en/> The point outside the ellipse from which the line to the ellipse's center is drawn
 * The point outside the ellipse from which the line to the ellipse's center is drawn.
 * @param bbox - <zh/> 椭圆包围盒 | <en/> the bounding box of the ellipse
 * @param useExtendedLine - <zh/> 是否使用延长线 | <en/> whether to use the extended line
 * @returns <zh/> 交点 | <en/> intersection
 */
function getEllipseIntersectPoint(p, bbox, useExtendedLine = false) {
    const center = bbox.center;
    const refP = useExtendedLine ? getSymmetricPoint(p, center) : p;
    const vec = (0, vector_1.subtract)(refP, bbox.center);
    const angle = Math.atan2(vec[1], vec[0]);
    if (isNaN(angle))
        return center;
    const rx = (0, bbox_1.getBBoxWidth)(bbox) / 2;
    const ry = (0, bbox_1.getBBoxHeight)(bbox) / 2;
    const intersectX = center[0] + rx * Math.cos(angle);
    const intersectY = center[1] + ry * Math.sin(angle);
    return [intersectX, intersectY];
}
/**
 * <zh/> 从两组点中找到距离最近的两个点
 * @param group1 - <zh/> 第一组点 | <en/> the first group of points
 * @param group2 - <zh/> 第二组点 | <en/> the second group of points
 * @returns <zh/> 距离最近的两个点 | <en/> the nearest two points
 */
function findNearestPoints(group1, group2) {
    let minDistance = Infinity;
    let nearestPoints = [group1[0], group2[0]];
    group1.forEach((p1) => {
        group2.forEach((p2) => {
            const dist = (0, vector_1.distance)(p1, p2);
            if (dist < minDistance) {
                minDistance = dist;
                nearestPoints = [p1, p2];
            }
        });
    });
    return nearestPoints;
}
/**
 * <zh/> 从一组线段中找到距离给定点最近的线段
 *
 * <en/> Find the line segment closest to the given point from a group of line segments
 * @param point - <zh/> 给定点 | <en/> the given point
 * @param lines - <zh/> 一组线段 | <en/> a group of line segments
 * @returns <zh/> 距离最近的线段 | <en/> the nearest line segment
 */
function findNearestLine(point, lines) {
    let minDistance = Infinity;
    let nearestLine = [
        [0, 0],
        [0, 0],
    ];
    lines.forEach((line) => {
        const distance = getDistanceToLine(point, line);
        if (distance < minDistance) {
            minDistance = distance;
            nearestLine = line;
        }
    });
    return nearestLine;
}
/**
 * <zh/> 获取点到线段的距离
 *
 * <en/> Get the distance from a point to a line segment
 * @param point - <zh/> 点 | <en/> the point
 * @param line - <zh/> 线段 | <en/> the line segment
 * @returns <zh/> 点到线段的距离 | <en/> the distance from the point to the line segment
 */
function getDistanceToLine(point, line) {
    const nearestPoint = findNearestPointOnLine(point, line);
    return (0, vector_1.distance)(point, nearestPoint);
}
/**
 * <zh/> 获取线段上距离给定点最近的点
 *
 * <en/> Get the point on the line segment closest to the given point
 * @param point - <zh/> 给定点 | <en/> the given point
 * @param line - <zh/> 线段 | <en/> the line segment
 * @returns <zh/> 线段上距离给定点最近的点 | <en/> the point on the line segment closest to the given point
 */
function findNearestPointOnLine(point, line) {
    const [x1, y1] = line[0];
    const [x2, y2] = line[1];
    const [x3, y3] = point;
    const px = x2 - x1;
    const py = y2 - y1;
    // 若线段实际上是一个点 | If the line segment is actually a point
    if (px === 0 && py === 0) {
        return [x1, y1];
    }
    let u = ((x3 - x1) * px + (y3 - y1) * py) / (px * px + py * py);
    if (u > 1) {
        u = 1;
    }
    else if (u < 0) {
        u = 0;
    }
    const x = x1 + u * px;
    const y = y1 + u * py;
    return [x, y];
}
/**
 * <zh/> 获取点集的中心点
 *
 * <en/> Get the center point of a set of points
 * @param points - <zh/> 点集 | <en/> point set
 * @returns <zh/> 中心点 | <en/> center point
 */
function centerOf(points) {
    const totalPosition = points.reduce((acc, p) => (0, vector_1.add)(acc, p), [0, 0]);
    return (0, vector_1.divide)(totalPosition, points.length);
}
/**
 * <zh/> 按顺时针或逆时针方向对点集排序
 *
 * <en/> Sort the point set in a clockwise or counterclockwise direction
 * @param points - <zh/> 点集 | <en/> point set
 * @param clockwise - <zh/> 是否顺时针 | <en/> whether clockwise
 * @returns <zh/> 排序后的点集 | <en/> sorted point set
 */
function sortByClockwise(points, clockwise = true) {
    const center = centerOf(points);
    return points.sort(([x1, y1], [x2, y2]) => {
        const angle1 = Math.atan2(y1 - center[1], x1 - center[0]);
        const angle2 = Math.atan2(y2 - center[1], x2 - center[0]);
        return clockwise ? angle2 - angle1 : angle1 - angle2;
    });
}
/**
 * <zh/> 给定的起点和终点，返回一个由这两个点和它们的对角点组成的数组
 * @param start - <zh/> 起点 | <en/> start point
 * @param end - <zh/> 终点 | <en/> end point
 * @returns <zh/> 由这两个点和它们的对角点组成的数组 | <en/> an array consisting of these two points and their diagonal points
 */
function getBoundingPoints(start, end) {
    return [start, [start[0], end[1]], end, [end[0], start[1]]];
}
//# sourceMappingURL=point.js.map