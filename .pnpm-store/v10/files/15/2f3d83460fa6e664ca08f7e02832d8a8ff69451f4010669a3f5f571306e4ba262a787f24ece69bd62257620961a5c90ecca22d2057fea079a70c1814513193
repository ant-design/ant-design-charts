import type { DisplayObjectConfig } from '../dom';
import type { BaseStyleProps, ParsedBaseStyleProps } from '../types';
import { DisplayObject } from './DisplayObject';
export interface PolygonStyleProps extends BaseStyleProps {
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
    isClosed?: boolean;
    isBillboard?: boolean;
    isSizeAttenuation?: boolean;
}
export interface ParsedPolygonStyleProps extends ParsedBaseStyleProps {
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
    isClosed?: boolean;
    isBillboard?: boolean;
    isSizeAttenuation?: boolean;
}
export declare class Polygon extends DisplayObject<PolygonStyleProps, ParsedPolygonStyleProps> {
    static PARSED_STYLE_LIST: Set<string>;
    private markerStartAngle;
    private markerEndAngle;
    /**
     * markers placed at the mid
     */
    private markerMidList;
    constructor({ style, ...rest }?: DisplayObjectConfig<PolygonStyleProps>);
    attributeChangedCallback<Key extends keyof PolygonStyleProps>(attrName: Key, oldValue: PolygonStyleProps[Key], newValue: PolygonStyleProps[Key], prevParsedValue: ParsedPolygonStyleProps[Key], newParsedValue: ParsedPolygonStyleProps[Key]): void;
    private transformMarker;
    private placeMarkerMid;
}
//# sourceMappingURL=Polygon.d.ts.map