import type { CSSKeywordValue } from './CSSKeywordValue';
import type { CSSUnitValue } from './CSSNumericValue';
import { CSSStyleValue, CSSStyleValueType } from './CSSStyleValue';
import type { Nested, ParenLess } from './types';
export interface LinearColorStop {
    offset: CSSUnitValue;
    color: string;
}
export interface LinearGradient {
    angle: CSSUnitValue;
    steps: LinearColorStop[];
}
export interface RadialGradient {
    cx: CSSUnitValue;
    cy: CSSUnitValue;
    size?: CSSUnitValue | CSSKeywordValue;
    steps: LinearColorStop[];
}
export declare enum GradientType {
    Constant = 0,
    LinearGradient = 1,
    RadialGradient = 2
}
export declare class CSSGradientValue extends CSSStyleValue {
    type: GradientType;
    value: LinearGradient | RadialGradient;
    constructor(type: GradientType, value: LinearGradient | RadialGradient);
    clone(): CSSGradientValue;
    buildCSSText(n: Nested, p: ParenLess, result: string): string;
    getType(): CSSStyleValueType;
}
//# sourceMappingURL=CSSGradientValue.d.ts.map