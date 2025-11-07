import { ShapeComponent as SC } from '../../runtime';
export type ColorOptions = {
    colorAttribute: 'fill' | 'stroke';
    /**
     * Minimum width of each interval.
     */
    minWidth?: number;
    /**
     * Maximum width of each interval.
     */
    maxWidth?: number;
    /**
     * Minimum height of each interval.
     */
    minHeight?: number;
    [key: string]: any;
};
export declare function rect(document: any, points: any, value: any, coordinate: any, style?: Record<string, any>): import("../../utils/selection").G2Element;
/**
 * Render rect in different coordinate.
 * Calc arc path based on control points directly rather startAngle, endAngle, innerRadius,
 * outerRadius. This is not accurate and will cause bug when the range of y scale is [1, 0]
 * for cell geometry.
 */
export declare const Color: SC<ColorOptions>;
