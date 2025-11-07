import { Coordinate } from '@antv/coord';
import { Path as D3Path } from '@antv/vendor/d3-path';
import { Primitive, Vector2, Vector3 } from '../runtime';
import { Selection } from '../utils/selection';
export declare function applyStyle(selection: Selection, style: Record<string, Primitive>): void;
/**
 * Draw polygon path with points.
 * @param path
 * @param points
 */
export declare function appendPolygon(path: D3Path, points: Vector2[]): D3Path;
export type ArrowOptions = {
    /**
     * Whether show arrow of line.
     */
    arrow?: boolean;
    /**
     * Arrow size, can be a px number, or a percentage string. Default: '40%'
     */
    arrowSize?: number | string;
};
/**
 * Draw arrow between `from` and `to`.
 * @param from
 * @param to
 * @returns
 */
export declare function arrowPoints(from: Vector2, to: Vector2, options: ArrowOptions): [Vector2, Vector2];
/**
 * Draw arc by from -> to, with center and radius.
 * @param path
 * @param from
 * @param to
 * @param center
 * @param radius
 */
export declare function appendArc(path: D3Path, from: Vector2, to: Vector2, center: Vector2, radius: number): D3Path;
/**
 * @todo Fix wrong key point.
 */
export declare function computeGradient(C: string[], X: number[], Y: number[], from?: string | boolean, mode?: 'between' | 'start' | 'end', tpShape?: boolean): string;
export declare function reorder(points: Vector2[]): Vector2[];
export declare function getArcObject(coordinate: Coordinate, points: Vector2[], Y: [number, number]): {
    startAngle: number;
    endAngle: number;
    innerRadius: number;
    outerRadius: number;
};
/**
 * Pick connectStyle from style.
 * @param style
 */
export declare function getConnectStyle(style: Record<string, any>): Record<string, any>;
export declare function toOpacityKey(options: any): string;
export declare function getTransform(coordinate: any, value: any): string;
export declare function getOrigin(points: (Vector2 | Vector3)[]): number[];
