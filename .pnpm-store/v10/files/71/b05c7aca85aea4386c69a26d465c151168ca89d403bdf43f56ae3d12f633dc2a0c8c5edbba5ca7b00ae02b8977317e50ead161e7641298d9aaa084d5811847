"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orth = orth;
exports.getDirection = getDirection;
exports.getBBoxSize = getBBoxSize;
exports.pointToPoint = pointToPoint;
exports.nodeToPoint = nodeToPoint;
exports.pointToNode = pointToNode;
exports.nodeToNode = nodeToNode;
exports.insideNode = insideNode;
exports.freeJoin = freeJoin;
const util_1 = require("@antv/util");
const bbox_1 = require("../bbox");
const point_1 = require("../point");
const vector_1 = require("../vector");
const defaultOptions = {
    padding: 10,
};
/**
 * <zh/> 获取两点之间的正交线段路径
 *
 * <en/> Get orthogonal line segments between two points
 * @param sourcePoint - <zh/> 起始点 | <en/> start point
 * @param targetPoint - <zh/> 终止点 | <en/> end point
 * @param sourceNode - <zh/> 起始节点 | <en/> source node
 * @param targetNode - <zh/> 终止节点 | <en/> target node
 * @param controlPoints - <zh/> 控制点 | <en/> control points
 * @param options - <zh/> 配置项 | <en/> options
 * @returns <zh/> 路径点集 | <en/> vertices
 */
function orth(sourcePoint, targetPoint, sourceNode, targetNode, controlPoints, options) {
    const { padding } = Object.assign(defaultOptions, options);
    const sourceBBox = (0, bbox_1.getNodeBBox)(sourceNode, padding);
    const targetBBox = (0, bbox_1.getNodeBBox)(targetNode, padding);
    const points = [sourcePoint, ...controlPoints, targetPoint];
    // direction of previous route segment
    let direction = null;
    const result = [];
    for (let fromIdx = 0, len = points.length; fromIdx < len - 1; fromIdx++) {
        const toIdx = fromIdx + 1;
        const from = points[fromIdx];
        const to = points[toIdx];
        const isOrth = (0, point_1.isOrthogonal)(from, to);
        let route = null;
        if (fromIdx === 0) {
            if (toIdx === len - 1) {
                // source -> target
                if (sourceBBox.intersects(targetBBox)) {
                    route = insideNode(from, to, sourceBBox, targetBBox);
                }
                else if (!(0, bbox_1.isPointBBoxCenter)(from, sourceBBox) && !(0, bbox_1.isPointBBoxCenter)(to, targetBBox)) {
                    const fromWithPadding = (0, bbox_1.getNearestBoundaryPoint)(from, sourceBBox);
                    const toWithPadding = (0, bbox_1.getNearestBoundaryPoint)(to, targetBBox);
                    route = pointToPoint(fromWithPadding, toWithPadding, getDirection(fromWithPadding, toWithPadding));
                    route.points.unshift(fromWithPadding);
                    route.points.push(toWithPadding);
                }
                else if (!isOrth) {
                    route = nodeToNode(from, to, sourceBBox, targetBBox);
                }
            }
            else {
                // source -> point
                if ((0, bbox_1.isPointInBBox)(to, sourceBBox)) {
                    route = insideNode(from, to, sourceBBox, (0, bbox_1.getNodeBBox)(to, padding), direction);
                }
                else if (!isOrth) {
                    route = nodeToPoint(from, to, sourceBBox);
                }
            }
        }
        else if (toIdx === len - 1) {
            // point -> target
            if ((0, bbox_1.isPointInBBox)(from, targetBBox)) {
                route = insideNode(from, to, (0, bbox_1.getNodeBBox)(from, padding), targetBBox, direction);
            }
            else if (!isOrth) {
                route = pointToNode(from, to, targetBBox, direction);
            }
        }
        else if (!isOrth) {
            // point -> point
            route = pointToPoint(from, to, direction);
        }
        // set direction for next iteration
        if (route) {
            result.push(...route.points);
            direction = route.direction;
        }
        else {
            // orthogonal route and not looped
            direction = getDirection(from, to);
        }
        if (toIdx < len - 1)
            result.push(to);
    }
    return result.map(vector_1.toVector2);
}
/**
 * Direction to opposites direction map
 */
const opposites = {
    N: 'S',
    S: 'N',
    W: 'E',
    E: 'W',
};
/**
 * Direction to radians map
 */
const radians = {
    N: -Math.PI / 2,
    S: Math.PI / 2,
    E: 0,
    W: Math.PI,
};
/**
 * <zh/> 获取两点之间的方向，从 `from` 到 `to` 的方向
 *
 * <en/> Get the direction between two points, the direction from `from` to `to`
 * @param from - <zh/> 起始点 | <en/> start point
 * @param to - <zh/> 终止点 | <en/> end point
 * @returns <zh/> 方向 | <en/> direction
 */
function getDirection(from, to) {
    const [fx, fy] = from;
    const [tx, ty] = to;
    if (fx === tx) {
        return fy > ty ? 'N' : 'S';
    }
    if (fy === ty) {
        return fx > tx ? 'W' : 'E';
    }
    return null;
}
/**
 * <zh/> 获取包围盒的尺寸，根据方向返回宽度或者高度
 *
 * <en/> Get the size of the bounding box, return the width or height according to the direction
 * @param bbox - <zh/> 包围盒 | <en/> bounding box
 * @param direction - <zh/> 方向 | <en/> direction
 * @returns <zh/> 尺寸 | <en/> size
 */
function getBBoxSize(bbox, direction) {
    return direction === 'N' || direction === 'S' ? (0, bbox_1.getBBoxHeight)(bbox) : (0, bbox_1.getBBoxWidth)(bbox);
}
/**
 * <zh/> 从一个点到另一个点计算正交路由
 *
 * <en/> Calculate orthogonal route from one point to another
 * @param from - <zh/> 起始点 | <en/> start point
 * @param to - <zh/> 终止点 | <en/> end point
 * @param direction - <zh/> 前一条线段的方向 | <en/> direction of the previous segment
 * @returns <zh/> 正交路由 | <en/> orthogonal route
 */
function pointToPoint(from, to, direction) {
    const p1 = [from[0], to[1]];
    const p2 = [to[0], from[1]];
    const d1 = getDirection(from, p1);
    const d2 = getDirection(from, p2);
    const opposite = direction ? opposites[direction] : null;
    const p = d1 === direction || (d1 !== opposite && d2 !== direction) ? p1 : p2;
    return { points: [p], direction: getDirection(p, to) };
}
/**
 * <zh/> 从节点到点计算正交路由
 *
 * <en/> Calculate orthogonal route from node to point
 * @param from - <zh/> 起始点 | <en/> start point
 * @param to - <zh/> 终止点 | <en/> end point
 * @param fromBBox - <zh/> 起始节点的包围盒 | <en/> bounding box of the start node
 * @returns <zh/> 正交路由 | <en/> orthogonal route
 */
function nodeToPoint(from, to, fromBBox) {
    if ((0, bbox_1.isPointBBoxCenter)(from, fromBBox)) {
        const p = freeJoin(from, to, fromBBox);
        return { points: [p], direction: getDirection(p, to) };
    }
    else {
        const fromWithPadding = (0, bbox_1.getNearestBoundaryPoint)(from, fromBBox);
        const isHorizontal = ['left', 'right'].includes((0, bbox_1.getNearestBoundarySide)(from, fromBBox));
        const p = isHorizontal ? [to[0], fromWithPadding[1]] : [fromWithPadding[0], to[1]];
        return { points: [p], direction: getDirection(p, to) };
    }
}
/**
 * <zh/> 从点到节点计算正交路由
 *
 * <en/> Calculate orthogonal route from point to node
 * @param from - <zh/> 起始点 | <en/> start point
 * @param to - <zh/> 终止点 | <en/> end point
 * @param toBBox - <zh/> 终止节点的包围盒 | <en/> bounding box of the end node
 * @param direction - <zh/> 前一条线段的方向 | <en/> direction of the previous segment
 * @returns <zh/> 正交路由 | <en/> orthogonal route
 */
function pointToNode(from, to, toBBox, direction) {
    const toWithPadding = (0, bbox_1.isPointBBoxCenter)(to, toBBox) ? to : (0, bbox_1.getNearestBoundaryPoint)(to, toBBox);
    const points = [
        [toWithPadding[0], from[1]],
        [from[0], toWithPadding[1]],
    ];
    const freePoints = points.filter((p) => (0, bbox_1.isPointOutsideBBox)(p, toBBox) && !(0, bbox_1.isPointOnBBoxBoundary)(p, toBBox, true));
    const freeDirectionPoints = freePoints.filter((p) => getDirection(p, from) !== direction);
    if (freeDirectionPoints.length > 0) {
        // Pick a point which bears the same direction as the previous segment.
        const p = freeDirectionPoints.find((p) => getDirection(from, p) === direction) || freeDirectionPoints[0];
        return {
            points: [p],
            direction: getDirection(p, to),
        };
    }
    else {
        // Here we found only points which are either contained in the element or they would create
        // a link segment going in opposites direction from the previous one.
        // We take the point inside element and move it outside the element in the direction the
        // route is going. Now we can join this point with the current end (using freeJoin).
        const p = (0, util_1.difference)(points, freePoints)[0];
        const p2 = (0, point_1.moveTo)(to, p, getBBoxSize(toBBox, direction) / 2);
        const p1 = freeJoin(p2, from, toBBox);
        return {
            points: [p1, p2],
            direction: getDirection(p2, to),
        };
    }
}
/**
 * <zh/> 从节点到节点计算正交路由
 *
 * <en/> Calculate orthogonal route from node to node
 * @param from - <zh/> 起始点 | <en/> start point
 * @param to - <zh/> 终止点 | <en/> end point
 * @param fromBBox - <zh/> 起始节点的包围盒 | <en/> bounding box of the start node
 * @param toBBox - <zh/> 终止节点的包围盒 | <en/> bounding box of the end node
 * @returns <zh/> 正交路由 | <en/> orthogonal route
 */
function nodeToNode(from, to, fromBBox, toBBox) {
    let route = nodeToPoint(from, to, fromBBox);
    const p1 = (0, vector_1.toVector3)(route.points[0]);
    if ((0, bbox_1.isPointInBBox)(p1, toBBox)) {
        route = nodeToPoint(to, from, toBBox);
        const p2 = (0, vector_1.toVector3)(route.points[0]);
        if ((0, bbox_1.isPointInBBox)(p2, fromBBox)) {
            const fromBorder = (0, point_1.moveTo)(from, p1, getBBoxSize(fromBBox, getDirection(from, p1)) / 2);
            const toBorder = (0, point_1.moveTo)(to, p2, getBBoxSize(toBBox, getDirection(to, p2)) / 2);
            const midPoint = [(fromBorder[0] + toBorder[0]) / 2, (fromBorder[1] + toBorder[1]) / 2];
            const startRoute = nodeToPoint(from, midPoint, fromBBox);
            const endRoute = pointToNode(midPoint, to, toBBox, startRoute.direction);
            route.points = [startRoute.points[0], endRoute.points[0]];
            route.direction = endRoute.direction;
        }
    }
    return route;
}
/**
 * <zh/> 在两个节点内部计算路由
 *
 * <en/> Calculate route inside two nodes
 * @param from - <zh/> 起始点 | <en/> start point
 * @param to - <zh/> 终止点 | <en/> end point
 * @param fromBBox - <zh/> 起始节点的包围盒 | <en/> bounding box of the start node
 * @param toBBox - <zh/> 终止节点的包围盒 | <en/> bounding box of the end node
 * @param direction - <zh/> 方向 | <en/> direction
 * @returns <zh/> 正交路由 | <en/> orthogonal route
 */
function insideNode(from, to, fromBBox, toBBox, direction) {
    const DEFAULT_OFFSET = 0.01;
    const boundary = (0, bbox_1.getCombinedBBox)([fromBBox, toBBox]);
    const reversed = (0, vector_1.distance)(to, boundary.center) > (0, vector_1.distance)(from, boundary.center);
    const [start, end] = reversed ? [to, from] : [from, to];
    const halfPerimeter = (0, bbox_1.getBBoxHeight)(boundary) + (0, bbox_1.getBBoxWidth)(boundary);
    let p1;
    if (direction) {
        const ref = [
            start[0] + halfPerimeter * Math.cos(radians[direction]),
            start[1] + halfPerimeter * Math.sin(radians[direction]),
        ];
        // `getNearestBoundaryPoint` returns a point on the boundary, so we need to move it a bit to ensure it's outside the element and then get the correct `p2` via `freeJoin`.
        p1 = (0, point_1.moveTo)((0, bbox_1.getNearestBoundaryPoint)(ref, boundary), ref, DEFAULT_OFFSET);
    }
    else {
        p1 = (0, point_1.moveTo)((0, bbox_1.getNearestBoundaryPoint)(start, boundary), start, -DEFAULT_OFFSET);
    }
    let p2 = freeJoin(p1, end, boundary);
    let points = [(0, point_1.round)(p1, 2), (0, point_1.round)(p2, 2)];
    if ((0, util_1.isEqual)((0, point_1.round)(p1), (0, point_1.round)(p2))) {
        const rad = (0, vector_1.angle)((0, vector_1.subtract)(p1, start), [1, 0, 0]) + Math.PI / 2;
        p2 = [end[0] + halfPerimeter * Math.cos(rad), end[1] + halfPerimeter * Math.sin(rad), 0];
        p2 = (0, point_1.round)((0, point_1.moveTo)((0, bbox_1.getNearestBoundaryPoint)(p2, boundary), end, -DEFAULT_OFFSET), 2);
        const p3 = freeJoin(p1, p2, boundary);
        points = [p1, p3, p2];
    }
    return {
        points: reversed ? points.reverse() : points,
        direction: reversed ? getDirection(p1, to) : getDirection(p2, to),
    };
}
/**
 * <zh/> 返回一个点 `p`，使得线段 p,p1 和 p,p2 互相垂直，p 尽可能不在给定的包围盒内
 *
 * <en/> Returns a point `p` where lines p,p1 and p,p2 are perpendicular and p is not contained in the given box
 * @param p1 - <zh/> 点 | <en/> point
 * @param p2 - <zh/> 点 | <en/> point
 * @param bbox - <zh/> 包围盒 | <en/> bounding box
 * @returns <zh/> 点 | <en/> point
 */
function freeJoin(p1, p2, bbox) {
    let p = [p1[0], p2[1]];
    if ((0, bbox_1.isPointInBBox)(p, bbox)) {
        p = [p2[0], p1[1]];
    }
    return p;
}
//# sourceMappingURL=orth.js.map