import { AABB } from '@antv/g';
import type { Node, Padding, Point, TriangleDirection } from '../types';
/**
 * <zh/> 获取包围盒的宽度
 *
 * <en/> Retrieves the width of a bounding box
 * @param bbox - <zh/> 包围盒 | <en/> Bounding box
 * @returns <zh/> 包围盒的宽度 | <en/> Width of box
 */
export declare function getBBoxWidth(bbox: AABB): number;
/**
 * <zh/> 获取包围盒的高度
 *
 * <en/> Retrieve the height of a bounding box
 * @param bbox - <zh/> 包围盒 | <en/> Bounding box
 * @returns <zh/> 包围盒的高度 | <en/> Height of box
 */
export declare function getBBoxHeight(bbox: AABB): number;
/**
 * <zh/> 获取包围盒的尺寸
 * @param bbox - <zh/> 包围盒 | <en/> Bounding box
 * @returns <zh/> 包围盒的尺寸 | <en/> Size of box
 */
export declare function getBBoxSize(bbox: AABB): [number, number];
/**
 * <zh/> 获取节点的包围盒，兼容节点为点的情况
 *
 * <en/> Get the bounding box of the node, compatible with the case where the node is a point
 * @param node - <zh/> 节点或者点 | <en/> node or point
 * @param padding - <zh/> 内边距 | <en/> padding
 * @returns <zh/> 包围盒 | <en/> bounding box
 */
export declare function getNodeBBox(node: Point | Node, padding?: Padding): AABB;
/**
 * <zh/> 获取单点的包围盒
 *
 * <en/> Get the bounding box of a single point
 * @param point - <zh/> 点 | <en/> Point
 * @returns <zh/> 包围盒 | <en/> Bounding box
 */
export declare function getPointBBox(point: Point): AABB;
/**
 * <zh/> 获取扩大后的包围盒
 *
 * <en/> Get the expanded bounding box
 * @param bbox - <zh/> 包围盒 | <en/> Bounding box
 * @param padding - <zh/> 内边距 | <en/> Padding
 * @returns <zh/> 扩大后的包围盒 | <en/> The expanded bounding box
 */
export declare function getExpandedBBox(bbox: AABB, padding: Padding): AABB;
/**
 * <zh/> 计算整体包围盒
 *
 * <en/> Calculate the overall bounding box
 * @param bboxes - <zh/> 包围盒列表 | <en/> List of bounding boxes
 * @returns <zh/> 整体包围盒 | <en/> Overall bounding box
 */
export declare function getCombinedBBox(bboxes: AABB[]): AABB;
/**
 * <zh/> 判断 bbox1 是否完全包含在 bbox2 内
 *
 * <en/> Determine whether bbox1 is completely contained in bbox2
 * @param bbox1 - <zh/> 目标包围盒 | <en/> Target bounding box
 * @param bbox2 - <zh/> 参考包围盒 | <en/> Reference bounding box
 * @returns <zh/> 如果 bbox1 完全包含在 bbox2 内返回 true，否则返回 false | <en/> Returns true if bbox1 is completely contained in bbox2, false otherwise
 */
export declare function isBBoxInside(bbox1: AABB, bbox2: AABB): boolean;
/**
 * <zh/> 判断点是否在给定的包围盒内
 *
 * <en/> Whether the point is contained in the given box
 * @param point - <zh/> 点 | <en/> Point
 * @param bbox - <zh/> 包围盒 | <en/> Bounding box
 * @returns  <zh/> 如果点在包围盒内返回 true，否则返回 false | <en/> Returns true if the point is inside the bounding box, false otherwise
 */
export declare function isPointInBBox(point: Point, bbox: AABB): boolean;
/**
 * <zh/> 判断点是否在给定的包围盒的边界或边界的延长线上
 *
 * <en/> Whether the point is on the boundary or extension line of the given box
 * @param point - <zh/> 点 | <en/> Point
 * @param bbox - <zh/> 包围盒 | <en/> Bounding box
 * @param extended - <zh/> 是否判断边界的延长线 | <en/> Whether to judge the extension line of the boundary
 * @returns <zh/> 如果点在包围盒的边界或边界的延长线上返回 true，否则返回 false | <en/> Returns true if the point is on the boundary or extension line of the bounding box, false otherwise
 */
export declare function isPointOnBBoxBoundary(point: Point, bbox: AABB, extended?: boolean): boolean;
/**
 * <zh/> 判断点是否在给定的包围盒外
 *
 * <en/> Whether the point is outside the given box
 * @param point - <zh/> 点 | <en/> Point
 * @param bbox - <zh/> 包围盒 | <en/> Bounding box
 * @returns <zh/> 如果点在包围盒外返回 true，否则返回 false | <en/> Returns true if the point is outside the bounding box, false otherwise
 */
export declare function isPointOutsideBBox(point: Point, bbox: AABB): boolean;
/**
 * <zh/> 判断点是否位于包围盒中心
 *
 * <en/> When the point is at the center of the bounding box
 * @param point - <zh/> 点 | <en/> Point
 * @param bbox - <zh/> 包围盒 | <en/> Bounding box
 * @returns <zh/> 如果点在包围盒中心返回 true，否则返回 false | <en/> Returns true if the point is at the center of the bounding box, false otherwise
 */
export declare function isPointBBoxCenter(point: Point, bbox: AABB): boolean;
/**
 * <zh/> 获取包围盒上离点 `p` 最近的边
 *
 * <en/> Get a side of the boundary which is nearest to the point `p`
 * @param bbox - <zh/> 包围盒 | <en/> Bounding box
 * @param p - <zh/> 点 | <en/> Point
 * @returns <zh/> 离点 `p` 最近的边 | <en/> The side nearest to the point `p`
 */
export declare function getNearestBoundarySide(p: Point, bbox: AABB): 'left' | 'right' | 'top' | 'bottom';
/**
 * <zh/> 获取包围盒上离点 `p` 最近的边界点
 *
 * <en/> Get a point on the boundary nearest to the point `p`
 * @param bbox - <zh/> 包围盒 | <en/> Bounding box
 * @param p - <zh/> 点 | <en/> Point
 * @returns <zh/> 离点 `p` 最近的点 | <en/> The point nearest to the point `p`
 */
export declare function getNearestBoundaryPoint(p: Point, bbox: AABB): Point;
/**
 * The triangle center point of the bounding box
 * @param bbox - bounding box
 * @param direction - direction
 * @returns Point
 */
export declare function getTriangleCenter(bbox: AABB, direction: TriangleDirection): Point;
/**
 * Get incircle radius
 * @param bbox - bounding box
 * @param direction - direction
 * @returns number
 */
export declare function getIncircleRadius(bbox: AABB, direction: TriangleDirection): number;
/**
 * <zh/> 获取包围盒的四条边，顺序依次为上、右、下、左
 *
 * <en/> Get the four segments of the bounding box, in order from top, right, bottom, left
 * @param bbox - <zh/> 包围盒 | <en/> Bounding box
 * @returns <zh/> 包围盒的四条边 | <en/> The four segments of the bounding box
 */
export declare function getBBoxSegments(bbox: AABB): [Point, Point][];
