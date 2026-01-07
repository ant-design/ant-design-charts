import type { PathArray } from '@antv/util';
import type { Point } from '../types';
/**
 * <zh/> points 转化为 path 路径
 *
 * <en/> points transform path.
 * @param points Point[]
 * @param isClose boolean
 * @returns path string[][]
 */
export declare function pointsToPath(points: Point[], isClose?: boolean): PathArray;
/**
 * <zh/> 将路径字符串转换为路径段数组
 *
 * <en/> Convert a path string to an array of path segments.
 * @param path - <zh/> 路径字符串 | <en/> path string
 * @returns <zh/> 路径段数组 | <en/> path segment array
 */
export declare function parsePath(path: string): PathArray;
/**
 * <zh/> 将路径转换为点数组
 *
 * <en/> Convert path to points array
 * @param path - <zh/> 路径数组 <en/> path array
 * @returns
 */
export declare function pathToPoints(path: string | PathArray): Point[];
/**
 * <zh/> 生成平滑闭合曲线
 *
 * <en/> Generate smooth closed curves
 * @param points - <zh/> 点集 | <en/> points
 * @returns <zh/> 平滑闭合曲线 | <en/> smooth closed curves
 */
export declare const getClosedSpline: (points: Point[]) => PathArray;
