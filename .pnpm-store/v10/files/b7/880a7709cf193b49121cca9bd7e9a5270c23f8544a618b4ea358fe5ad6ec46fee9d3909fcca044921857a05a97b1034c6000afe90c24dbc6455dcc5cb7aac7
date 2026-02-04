import type { AABB } from '@antv/g';
import type { Point, PointObject } from '../types';
import type { LineSegment } from './line';
/**
 * <zh/> 将对象坐标转换为数组坐标
 * <en/> Convert object coordinates to array coordinates
 * @param point - <zh/> 对象坐标 | <en/> object coordinates
 * @returns <zh/> 数组坐标 | <en/> array coordinates
 */
export declare function parsePoint(point: PointObject): Point;
/**
 * <zh/> 将数组坐标转换为对象坐标
 *
 * <en/> Convert array coordinates to object coordinates
 * @param point - <zh/> 数组坐标 | <en/> array coordinates
 * @returns <zh/> 对象坐标 | <en/> object coordinates
 */
export declare function toPointObject(point: Point): PointObject;
/**
 * <zh/> 根据 X 轴坐标排序
 * <en/> Sort by X-axis coordinates
 * @param points - <zh/> 点集 | <en/> point set
 * @returns <zh/> 排序后的点集 | <en/> sorted point set
 */
export declare function sortByX(points: Point[]): Point[];
/**
 * <zh/> 点集去重
 *
 * <en/> Deduplicate point set
 * @param points - <zh/> 点集 | <en/> pointset
 * @returns <zh/> 去重后的点集 | <en/> deduplicated pointset
 */
export declare function deduplicate(points: Point[]): Point[];
/**
 * <zh/> 对点格式化，精确到 `digits` 位的数字
 *
 * <en/> Round the point to the given precision
 * @param point - <zh/> 要舍入的点 | <en/> the point to round
 * @param digits - <zh/> 小数点后的位数 | <en/> the number of digits after the decimal point
 * @returns <zh/> 舍入后的点 | <en/> the rounded point
 */
export declare function round(point: Point, digits?: number): Point;
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
export declare function moveTo(p: Point, ref: Point, distance: number, reverse?: boolean): Point;
/**
 * <zh/> 判断两个点是否在同一水平线上
 *
 * <en/> whether two points are on the same horizontal line
 * @param p1 - <zh/> 第一个点 | <en/> the first point
 * @param p2 - <zh/> 第二个点 | <en/> the second point
 * @returns <zh/> 返回两个点是否在同一水平线上 | <en/> is horizontal or not
 */
export declare function isHorizontal(p1: Point, p2: Point): boolean;
/**
 * <zh/> 判断两个点是否在同一垂直线上
 *
 * <en/> whether two points are on the same vertical line
 * @param p1 - <zh/> 第一个点 | <en/> the first point
 * @param p2 - <zh/> 第二个点 | <en/> the second point
 * @returns <zh/> 返回两个点是否在同一垂直线上 | <en/> is vertical or not
 */
export declare function isVertical(p1: Point, p2: Point): boolean;
/**
 * <zh/> 判断两个点是否正交，即是否在同一水平线或垂直线上
 *
 * <en/> Judges whether two points are orthogonal, that is, whether they are on the same horizontal or vertical line
 * @param p1 - <zh/> 第一个点 | <en/> the first point
 * @param p2 - <zh/> 第二个点 | <en/> the second point
 * @returns <zh/> 是否正交 | <en/> whether orthogonal or not
 */
export declare function isOrthogonal(p1: Point, p2: Point): boolean;
/**
 * <zh/> 判断是否三点共线
 *
 * <en/> Judge whether three points are collinear
 * @param p1 - <zh/> 第一个点 | <en/> the first point
 * @param p2 - <zh/> 第二个点 | <en/> the second point
 * @param p3 - <zh/> 第三个点 | <en/> the third point
 * @returns <zh/> 是否三点共线 | <en/> whether three points are collinear
 */
export declare function isCollinear(p1: Point, p2: Point, p3: Point): boolean;
/**
 * <zh/> 计算一个点相对于另一个点的中心对称点
 *
 * <en/> Calculate the center symmetric point of a point relative to another point
 * @param p - <zh/> 要计算的点 | <en/> the point to calculate
 * @param center - <zh/> 中心点 | <en/> the center point
 * @returns <zh/> 中心对称点 | <en/> the center symmetric point
 */
export declare function getSymmetricPoint(p: Point, center: Point): Point;
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
export declare function getPolygonIntersectPoint(p: Point, center: Point, points: Point[], isRelativePos?: boolean, useExtendedLine?: boolean): {
    point: Point;
    line?: LineSegment;
};
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
export declare function isPointInPolygon(point: Point, points: Point[], start?: number, end?: number): boolean;
/**
 * <zh/> 获取给定点到矩形中心的连线与矩形边缘的交点
 *
 * <en/> Gets the intersection point between the line from the center of a rectangle to a given point and the rectangle's edge
 * @param p - <zh/> 从矩形中心到矩形边缘的连线的外部点 | <en/> The point outside the rectangle from which the line to the rectangle's center is drawn
 * @param bbox - <zh/> 矩形包围盒 | <en/> the bounding box of the rectangle
 * @param useExtendedLine - <zh/> 是否使用延长线 | <en/> whether to use the extended line
 * @returns <zh/> 交点 | <en/> intersection
 */
export declare function getRectIntersectPoint(p: Point, bbox: AABB, useExtendedLine?: boolean): Point;
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
export declare function getEllipseIntersectPoint(p: Point, bbox: AABB, useExtendedLine?: boolean): Point;
/**
 * <zh/> 从两组点中找到距离最近的两个点
 * @param group1 - <zh/> 第一组点 | <en/> the first group of points
 * @param group2 - <zh/> 第二组点 | <en/> the second group of points
 * @returns <zh/> 距离最近的两个点 | <en/> the nearest two points
 */
export declare function findNearestPoints(group1: Point[], group2: Point[]): [Point, Point];
/**
 * <zh/> 从一组线段中找到距离给定点最近的线段
 *
 * <en/> Find the line segment closest to the given point from a group of line segments
 * @param point - <zh/> 给定点 | <en/> the given point
 * @param lines - <zh/> 一组线段 | <en/> a group of line segments
 * @returns <zh/> 距离最近的线段 | <en/> the nearest line segment
 */
export declare function findNearestLine(point: Point, lines: LineSegment[]): [Point, Point];
/**
 * <zh/> 获取点到线段的距离
 *
 * <en/> Get the distance from a point to a line segment
 * @param point - <zh/> 点 | <en/> the point
 * @param line - <zh/> 线段 | <en/> the line segment
 * @returns <zh/> 点到线段的距离 | <en/> the distance from the point to the line segment
 */
export declare function getDistanceToLine(point: Point, line: LineSegment): number;
/**
 * <zh/> 获取线段上距离给定点最近的点
 *
 * <en/> Get the point on the line segment closest to the given point
 * @param point - <zh/> 给定点 | <en/> the given point
 * @param line - <zh/> 线段 | <en/> the line segment
 * @returns <zh/> 线段上距离给定点最近的点 | <en/> the point on the line segment closest to the given point
 */
export declare function findNearestPointOnLine(point: Point, line: LineSegment): Point;
/**
 * <zh/> 获取点集的中心点
 *
 * <en/> Get the center point of a set of points
 * @param points - <zh/> 点集 | <en/> point set
 * @returns <zh/> 中心点 | <en/> center point
 */
export declare function centerOf(points: Point[]): Point;
/**
 * <zh/> 按顺时针或逆时针方向对点集排序
 *
 * <en/> Sort the point set in a clockwise or counterclockwise direction
 * @param points - <zh/> 点集 | <en/> point set
 * @param clockwise - <zh/> 是否顺时针 | <en/> whether clockwise
 * @returns <zh/> 排序后的点集 | <en/> sorted point set
 */
export declare function sortByClockwise(points: Point[], clockwise?: boolean): Point[];
/**
 * <zh/> 给定的起点和终点，返回一个由这两个点和它们的对角点组成的数组
 * @param start - <zh/> 起点 | <en/> start point
 * @param end - <zh/> 终点 | <en/> end point
 * @returns <zh/> 由这两个点和它们的对角点组成的数组 | <en/> an array consisting of these two points and their diagonal points
 */
export declare function getBoundingPoints(start: Point, end: Point): Point[];
