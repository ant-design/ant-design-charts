import type { AABB } from '@antv/g';
import type { Node, OrthRouterOptions, Point } from '../../types';
export type Direction = 'N' | 'S' | 'W' | 'E' | null;
type Route = {
    points: Point[];
    direction: Direction;
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
export declare function orth(sourcePoint: Point, targetPoint: Point, sourceNode: Node, targetNode: Node, controlPoints: Point[], options: OrthRouterOptions): import("../../types").Vector2[];
/**
 * <zh/> 获取两点之间的方向，从 `from` 到 `to` 的方向
 *
 * <en/> Get the direction between two points, the direction from `from` to `to`
 * @param from - <zh/> 起始点 | <en/> start point
 * @param to - <zh/> 终止点 | <en/> end point
 * @returns <zh/> 方向 | <en/> direction
 */
export declare function getDirection(from: Point, to: Point): Direction | null;
/**
 * <zh/> 获取包围盒的尺寸，根据方向返回宽度或者高度
 *
 * <en/> Get the size of the bounding box, return the width or height according to the direction
 * @param bbox - <zh/> 包围盒 | <en/> bounding box
 * @param direction - <zh/> 方向 | <en/> direction
 * @returns <zh/> 尺寸 | <en/> size
 */
export declare function getBBoxSize(bbox: AABB, direction: Direction): number;
/**
 * <zh/> 从一个点到另一个点计算正交路由
 *
 * <en/> Calculate orthogonal route from one point to another
 * @param from - <zh/> 起始点 | <en/> start point
 * @param to - <zh/> 终止点 | <en/> end point
 * @param direction - <zh/> 前一条线段的方向 | <en/> direction of the previous segment
 * @returns <zh/> 正交路由 | <en/> orthogonal route
 */
export declare function pointToPoint(from: Point, to: Point, direction: Direction): Route;
/**
 * <zh/> 从节点到点计算正交路由
 *
 * <en/> Calculate orthogonal route from node to point
 * @param from - <zh/> 起始点 | <en/> start point
 * @param to - <zh/> 终止点 | <en/> end point
 * @param fromBBox - <zh/> 起始节点的包围盒 | <en/> bounding box of the start node
 * @returns <zh/> 正交路由 | <en/> orthogonal route
 */
export declare function nodeToPoint(from: Point, to: Point, fromBBox: AABB): Route;
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
export declare function pointToNode(from: Point, to: Point, toBBox: AABB, direction: Direction): Route;
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
export declare function nodeToNode(from: Point, to: Point, fromBBox: AABB, toBBox: AABB): Route;
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
export declare function insideNode(from: Point, to: Point, fromBBox: AABB, toBBox: AABB, direction?: Direction): Route;
/**
 * <zh/> 返回一个点 `p`，使得线段 p,p1 和 p,p2 互相垂直，p 尽可能不在给定的包围盒内
 *
 * <en/> Returns a point `p` where lines p,p1 and p,p2 are perpendicular and p is not contained in the given box
 * @param p1 - <zh/> 点 | <en/> point
 * @param p2 - <zh/> 点 | <en/> point
 * @param bbox - <zh/> 包围盒 | <en/> bounding box
 * @returns <zh/> 点 | <en/> point
 */
export declare function freeJoin(p1: Point, p2: Point, bbox: AABB): Point;
export {};
