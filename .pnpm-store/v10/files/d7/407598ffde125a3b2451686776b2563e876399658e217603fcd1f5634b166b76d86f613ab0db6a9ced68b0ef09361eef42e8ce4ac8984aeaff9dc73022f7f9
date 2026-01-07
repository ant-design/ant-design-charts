import type { DisplayObject } from '../../display-objects';
import type { CSSGradientValue, CSSRGB } from '../cssom';
import { CSSKeywordValue } from '../cssom';
import type { CSSProperty } from '../CSSProperty';
import type { Pattern } from '../parser/color';
import { mergeColors } from '../parser/color';
export declare class CSSPropertyColor implements Partial<CSSProperty<CSSRGB | CSSGradientValue[] | Pattern | CSSKeywordValue, CSSRGB | CSSGradientValue[] | Pattern>> {
    parser: (colorStr: string | Pattern) => CSSRGB | CSSGradientValue[] | Pattern;
    calculator(name: string, oldParsed: CSSRGB | CSSGradientValue[] | CSSKeywordValue | Pattern, parsed: CSSRGB | CSSGradientValue[] | CSSKeywordValue | Pattern, object: DisplayObject): CSSRGB | CSSGradientValue[] | Pattern;
    mixer: typeof mergeColors;
}
//# sourceMappingURL=CSSPropertyColor.d.ts.map