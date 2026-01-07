import type { Data, Line, Scales } from './types';
/**
 * 根据数据获得每条线各点x，y值
 */
export declare function dataToLines(data: Data, scales: Scales): Line[];
/**
 * 根据线的点数据生成折线path
 */
export declare function lineToLinePath(line: Line, reverse?: boolean): any[];
/**
 * 根据点数据生成曲线path
 * @param points 点数据
 * @param reverse 是否倒序生成
 */
export declare function lineToCurvePath(line: Line, reverse?: boolean): any[];
/**
 * 根据baseline将path闭合
 */
export declare function closePathByBaseLine(path: any[], width: number, baseline: number): any;
/**
 * 将多条线的点数据生成区域path
 * 可以是折线或曲线
 */
export declare function linesToAreaPaths(lines: Line[], smooth: boolean, width: number, baseline: number): any[];
/**
 * 生成折线堆叠区域封闭图形路径
 */
export declare function linesToStackAreaPaths(lines: Line[], width: number, baseline: number): any[][];
/**
 * 生成曲线堆叠区域封闭图形路径
 */
export declare function linesToStackCurveAreaPaths(lines: Line[], width: number, baseline: number): any[][];
