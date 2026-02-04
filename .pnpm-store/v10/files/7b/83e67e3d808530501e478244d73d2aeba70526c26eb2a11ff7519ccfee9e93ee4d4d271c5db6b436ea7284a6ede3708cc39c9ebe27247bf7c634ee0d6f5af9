import type { AbsoluteArray, AbsoluteSegment, CurveArray, PathArray } from '@antv/util';
import type { DisplayObjectConfig } from '../dom';
import { Point } from '../shapes';
import { Rectangle } from '../shapes/Rectangle';
import type { BaseStyleProps, ParsedBaseStyleProps } from '../types';
import { DisplayObject } from './DisplayObject';
export interface PathStyleProps extends BaseStyleProps {
    d?: string | PathArray;
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
export interface PathSegmentBBox {
    x: number;
    y: number;
    width: number;
    height: number;
}
export interface PathSegment {
    command: 'M' | 'L' | 'V' | 'H' | 'C' | 'S' | 'Q' | 'T' | 'A' | 'Z';
    currentPoint: [number, number];
    prePoint: [number, number];
    nextPoint: [number, number];
    startTangent: [number, number];
    endTangent: [number, number];
    params: AbsoluteSegment;
    arcParams: PathArcParams;
    /**
     * Used for hit test.
     */
    box: PathSegmentBBox;
    /**
     * Convert A to C.
     */
    cubicParams: [number, number, number, number, number, number];
}
export interface PathArcParams {
    cx: number;
    cy: number;
    rx: number;
    ry: number;
    startAngle: number;
    endAngle: number;
    xRotation: number;
    arcFlag: number;
    sweepFlag: number;
}
export interface ParsedPathStyleProps extends ParsedBaseStyleProps {
    d: {
        absolutePath: AbsoluteArray;
        hasArc: boolean;
        segments: PathSegment[];
        polygons: [number, number][][];
        polylines: [number, number][][];
        curve: CurveArray;
        totalLength: number;
        rect: Rectangle;
    };
    markerStart?: DisplayObject | null;
    markerMid?: DisplayObject | null;
    markerEnd?: DisplayObject | null;
    markerStartOffset?: number;
    markerEndOffset?: number;
    isBillboard?: boolean;
    isSizeAttenuation?: boolean;
}
export declare class Path extends DisplayObject<PathStyleProps, ParsedPathStyleProps> {
    static PARSED_STYLE_LIST: Set<string>;
    private markerStartAngle;
    private markerEndAngle;
    /**
     * markers placed at the mid
     */
    private markerMidList;
    constructor({ style, ...rest }?: DisplayObjectConfig<PathStyleProps>);
    attributeChangedCallback<Key extends keyof PathStyleProps>(attrName: Key, oldValue: PathStyleProps[Key], newValue: PathStyleProps[Key], prevParsedValue: ParsedPathStyleProps[Key], newParsedValue: ParsedPathStyleProps[Key]): void;
    private transformMarker;
    private placeMarkerMid;
    /**
     * Returns the total length of the path.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/SVGGeometryElement/getTotalLength
     */
    getTotalLength(): number;
    /**
     * Returns the point at a given distance along the path.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/SVGGeometryElement/getPointAtLength
     */
    getPointAtLength(distance: number, inWorldSpace?: boolean): Point;
    /**
     * Returns the point at a given ratio of the total length in path.
     */
    getPoint(ratio: number, inWorldSpace?: boolean): Point;
    /**
     * Get start tangent vector
     */
    getStartTangent(): number[][];
    /**
     * Get end tangent vector
     */
    getEndTangent(): number[][];
}
//# sourceMappingURL=Path.d.ts.map