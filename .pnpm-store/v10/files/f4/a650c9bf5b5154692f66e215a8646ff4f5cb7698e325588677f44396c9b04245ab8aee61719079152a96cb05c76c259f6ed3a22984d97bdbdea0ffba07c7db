import type { DisplayObjectConfig } from '../dom';
import { Point } from '../shapes';
import type { BaseStyleProps, ParsedBaseStyleProps } from '../types';
import type { DisplayObject } from './DisplayObject';
import { Polygon } from './Polygon';
export interface PolylineStyleProps extends BaseStyleProps {
    points: ([number, number] | [number, number, number])[];
    /**
     * marker will be positioned at the first point
     */
    markerStart?: DisplayObject | null;
    /**
     * marker will be positioned at the last point
     */
    markerEnd?: DisplayObject | null;
    markerMid?: DisplayObject | null;
    /**
     * offset relative to original position
     */
    markerStartOffset?: number;
    /**
     * offset relative to original position
     */
    markerEndOffset?: number;
    /**
     * Whether the circle is billboard.
     */
    isBillboard?: boolean;
    /**
     * Whether the circle is size attenuation.
     */
    isSizeAttenuation?: boolean;
}
export interface ParsedPolylineStyleProps extends ParsedBaseStyleProps {
    points: {
        points: ([number, number] | [number, number, number])[];
        segments: [number, number][];
        totalLength: number;
    };
    markerStart?: DisplayObject | null;
    markerMid?: DisplayObject | null;
    markerEnd?: DisplayObject | null;
    markerStartOffset?: number;
    markerEndOffset?: number;
    isBillboard?: boolean;
}
/**
 * Polyline inherits the marker-related capabilities of Polygon.
 */
export declare class Polyline extends Polygon {
    static PARSED_STYLE_LIST: Set<string>;
    constructor({ style, ...rest }?: DisplayObjectConfig<PolylineStyleProps>);
    getTotalLength(): number;
    getPointAtLength(distance: number, inWorldSpace?: boolean): Point;
    getPoint(ratio: number, inWorldSpace?: boolean): Point;
    getStartTangent(): number[][];
    getEndTangent(): number[][];
}
//# sourceMappingURL=Polyline.d.ts.map