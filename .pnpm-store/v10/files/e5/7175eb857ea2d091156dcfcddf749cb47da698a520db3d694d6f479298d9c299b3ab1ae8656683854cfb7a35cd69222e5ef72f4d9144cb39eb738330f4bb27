import type { DisplayObject } from '@antv/g';
import { GuideComponentComponent as GCC, GuideComponentPosition as GCP, GuideComponentPlane, Vector3 } from '../runtime';
export type AxisOptions = {
    position?: GCP;
    plane?: GuideComponentPlane;
    zIndex?: number;
    title?: string | string[];
    direction?: 'left' | 'center' | 'right';
    labelFormatter?: (datum: any, index: number, array: any[]) => string;
    labelFilter?: (datum: any, index: number, array: any[]) => boolean;
    labelRender?: (datum: any, index: number, array: any[]) => string | DisplayObject;
    tickFormatter?: (datum: any, index: number, array: any[], vector: [number, number]) => DisplayObject;
    tickFilter?: (datum: any, index: number, array: any[]) => boolean;
    tickMethod?: (start: number | Date, end: number | Date, tickCount: number) => number[];
    tickCount?: number;
    tickLength?: number | ((datum: any, index: number, array: any[]) => number);
    grid: any;
    important: Record<string, any>;
    /**
     * Rotation origin.
     */
    origin?: Vector3;
    /**
     * EulerAngles of rotation.
     */
    eulerAngles?: Vector3;
    [key: string]: any;
};
export declare function rotateAxis(axis: DisplayObject, options: AxisOptions): void;
export declare const LinearAxis: GCC<AxisOptions>;
export declare const ArcAxis: GCC<AxisOptions>;
