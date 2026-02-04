import type { DisplayObjectConfig } from '../dom';
import { Point } from '../shapes';
import type { BaseStyleProps, ParsedBaseStyleProps } from '../types';
import { DisplayObject } from './DisplayObject';
export interface LineStyleProps extends BaseStyleProps {
    /**
     * X coordinate of the start of the line.
     */
    x1: number;
    /**
     * Y coordinate of the start of the line.
     */
    y1: number;
    /**
     * X coordinate of the end of the line.
     */
    x2: number;
    /**
     * Y coordinate of the end of the line.
     */
    y2: number;
    /**
     * Z coordinate of the start of the line.
     */
    z1?: number;
    /**
     * Z coordinate of the end of the line.
     */
    z2?: number;
    /**
     * Whether the line is billboard.
     */
    isBillboard?: boolean;
    /**
     * Whether the line is size attenuation.
     */
    isSizeAttenuation?: boolean;
    /**
     * marker will be positioned at x1/y1
     */
    markerStart?: DisplayObject | null;
    /**
     * marker will be positioned at x2/y2
     */
    markerEnd?: DisplayObject | null;
    /**
     * offset relative to original position
     */
    markerStartOffset?: number;
    /**
     * offset relative to original position
     */
    markerEndOffset?: number;
}
export interface ParsedLineStyleProps extends ParsedBaseStyleProps {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    z1?: number;
    z2?: number;
    isBillboard?: boolean;
    isSizeAttenuation?: boolean;
    markerStart?: DisplayObject | null;
    markerEnd?: DisplayObject | null;
    markerStartOffset?: number;
    markerEndOffset?: number;
}
/**
 * Create a line connecting two points.
 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Element/line
 *
 * Also support for using marker.
 */
export declare class Line extends DisplayObject<LineStyleProps, ParsedLineStyleProps> {
    static PARSED_STYLE_LIST: Set<string>;
    private markerStartAngle;
    private markerEndAngle;
    constructor({ style, ...rest }?: DisplayObjectConfig<LineStyleProps>);
    attributeChangedCallback<Key extends keyof LineStyleProps>(attrName: Key, oldValue: LineStyleProps[Key], newValue: LineStyleProps[Key], prevParsedValue: ParsedLineStyleProps[Key], newParsedValue: ParsedLineStyleProps[Key]): void;
    private transformMarker;
    getPoint(ratio: number, inWorldSpace?: boolean): Point;
    getPointAtLength(distance: number, inWorldSpace?: boolean): Point;
    getTotalLength(): number;
}
//# sourceMappingURL=Line.d.ts.map