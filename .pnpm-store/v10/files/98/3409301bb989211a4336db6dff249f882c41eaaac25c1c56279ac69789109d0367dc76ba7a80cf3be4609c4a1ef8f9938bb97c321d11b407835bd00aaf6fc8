import type { DisplayObjectConfig } from '../dom';
import type { BaseStyleProps, ParsedBaseStyleProps } from '../types';
import { DisplayObject } from './DisplayObject';
export interface ImageStyleProps extends BaseStyleProps {
    x?: number | string;
    y?: number | string;
    z?: number;
    src?: string | HTMLImageElement;
    width?: number | string;
    height?: number | string;
    /**
     * Whether the circle is billboard.
     */
    isBillboard?: boolean;
    /**
     * When isBillboard enabled, whether the circle is size attenuation.
     */
    isSizeAttenuation?: boolean;
    /**
     * When isBillboard enabled, the rotation.
     */
    billboardRotation?: number;
    /**
     * Whether to keep the aspect ratio of the image, under such circumstances, either the width or height can be omitted.
     */
    keepAspectRatio?: boolean;
}
export interface ParsedImageStyleProps extends ParsedBaseStyleProps {
    x: number;
    y: number;
    z?: number;
    src?: string | HTMLImageElement;
    width?: number;
    height?: number;
    isBillboard?: boolean;
    billboardRotation?: number;
    isSizeAttenuation?: boolean;
    keepAspectRatio?: boolean;
}
export declare class Image extends DisplayObject<ImageStyleProps, ParsedImageStyleProps> {
    static PARSED_STYLE_LIST: Set<string>;
    constructor(options?: DisplayObjectConfig<ImageStyleProps>);
}
//# sourceMappingURL=Image.d.ts.map