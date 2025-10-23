import type { DisplayObjectConfig } from '../dom';
import type { BaseStyleProps, ParsedBaseStyleProps } from '../types';
import { DisplayObject } from './DisplayObject';
export interface RectStyleProps extends BaseStyleProps {
    x?: number | string;
    y?: number | string;
    z?: number;
    width: number | string;
    height: number | string;
    isBillboard?: boolean;
    isSizeAttenuation?: boolean;
    /**
     * top-left, top-right, bottom-right, bottom-left
     */
    radius?: number | string | number[];
}
export interface ParsedRectStyleProps extends ParsedBaseStyleProps {
    x?: number;
    y?: number;
    z?: number;
    width: number;
    height: number;
    isBillboard?: boolean;
    isSizeAttenuation?: boolean;
    radius?: [number, number, number, number];
}
export declare class Rect extends DisplayObject<RectStyleProps, ParsedRectStyleProps> {
    static PARSED_STYLE_LIST: Set<string>;
    constructor(options?: DisplayObjectConfig<RectStyleProps>);
}
//# sourceMappingURL=Rect.d.ts.map