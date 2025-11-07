import type { CSSColorPercent, CSSColorRGBComp } from './CSSColorValue';
import { CSSColorValue } from './CSSColorValue';
import type { Nested, ParenLess } from './types';
/**
 * The CSSRGB class represents the CSS rgb()/rgba() functions.
 *
 * @see https://drafts.css-houdini.org/css-typed-om-1/#cssrgb
 */
export declare class CSSRGB extends CSSColorValue {
    r: CSSColorRGBComp;
    g: CSSColorRGBComp;
    b: CSSColorRGBComp;
    alpha: CSSColorPercent;
    /**
     * 'transparent' & 'none' has the same rgba data
     */
    isNone: boolean;
    constructor(r: CSSColorRGBComp, g: CSSColorRGBComp, b: CSSColorRGBComp, alpha?: CSSColorPercent, 
    /**
     * 'transparent' & 'none' has the same rgba data
     */
    isNone?: boolean);
    clone(): CSSRGB;
    buildCSSText(n: Nested, p: ParenLess, result: string): string;
}
//# sourceMappingURL=CSSRGB.d.ts.map