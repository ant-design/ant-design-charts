import type { DisplayObjectConfig } from '../dom';
import { AABB } from '../shapes';
import type { BaseStyleProps, ParsedBaseStyleProps } from '../types';
import { DisplayObject } from './DisplayObject';
export interface HTMLStyleProps extends BaseStyleProps {
    x?: number | string;
    y?: number | string;
    innerHTML: string | HTMLElement;
    width?: number | string;
    height?: number | string;
}
export interface ParsedHTMLStyleProps extends ParsedBaseStyleProps {
    x: number;
    y: number;
    $el: HTMLElement;
    innerHTML: string | HTMLElement;
    width: number;
    height: number;
}
/**
 * HTML container
 * @see https://github.com/pmndrs/drei#html
 */
export declare class HTML extends DisplayObject<HTMLStyleProps, ParsedHTMLStyleProps> {
    static PARSED_STYLE_LIST: Set<string>;
    constructor({ style, ...rest }?: DisplayObjectConfig<HTMLStyleProps>);
    /**
     * return wrapper HTMLElement
     * * <div> in g-webgl/canvas
     * * <foreignObject> in g-svg
     */
    getDomElement(): HTMLElement;
    /**
     * override with $el.getBoundingClientRect
     * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRect
     *
     * ! The calculation logic of the html element should be consistent with that of the canvas element
     */
    getClientRects(): import("../shapes").Rectangle[];
    getLocalBounds(): AABB;
}
//# sourceMappingURL=HTML.d.ts.map