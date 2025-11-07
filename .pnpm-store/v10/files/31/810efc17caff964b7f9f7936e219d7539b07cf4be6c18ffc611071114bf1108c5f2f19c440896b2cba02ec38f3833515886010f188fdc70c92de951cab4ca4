import type { Point } from '../../../types';
import type { BBox } from './format';
export declare class Grid {
    private _cells;
    private _cellSize;
    private _reverseCellSize;
    constructor(points: Point[], cellSize: number);
    cellPoints(x: number, y: number): Point[];
    rangePoints(bbox: BBox): Point[];
    removePoint(point: Point): Point[];
    private trunc;
    coordToCellNum(x: number): number;
    extendBbox(bbox: BBox, scaleFactor: number): BBox;
}
export declare function grid(points: Point[], cellSize: number): Grid;
