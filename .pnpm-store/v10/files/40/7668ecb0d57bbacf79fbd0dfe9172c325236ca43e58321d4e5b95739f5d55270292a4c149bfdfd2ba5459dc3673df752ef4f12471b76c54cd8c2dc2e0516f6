import type { Point } from '../../../types';
export type PointObject = Record<string, number>;
export type BBox = [number, number, number, number];
export type FormatTuple = [string, string];
export declare const formatUtil: {
    toXy<T extends PointObject>(pointset: T[] | Point[], format?: FormatTuple): T[] | Point[];
    fromXy(coordinates: Point[], format?: FormatTuple): Point[] | PointObject[];
};
export type PointConverter = typeof formatUtil;
