import { Rect } from '../..';
import type { CSSGradientValue } from '../cssom';
import { CSSRGB } from '../cssom';
/**
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/createPattern
 */
export interface Pattern {
    image: string | CanvasImageSource | Rect;
    repetition?: 'repeat' | 'repeat-x' | 'repeat-y' | 'no-repeat';
    transform?: string;
}
export declare function isCSSGradientValue(object: any): object is CSSGradientValue;
export declare function isPattern(object: any): object is Pattern;
export declare function isCSSRGB(object: any): object is CSSRGB;
/**
 * @see https://github.com/WebKit/WebKit/blob/main/Source/WebCore/css/parser/CSSParser.cpp#L97
 */
export declare const parseColor: (colorStr: string | Pattern) => CSSRGB | CSSGradientValue[] | Pattern;
export declare function mergeColors(left: CSSRGB | CSSGradientValue[] | Pattern, right: CSSRGB | CSSGradientValue[] | Pattern): [number[], number[], (color: number[]) => string] | undefined;
//# sourceMappingURL=color.d.ts.map