import { CSSStyleValue, CSSStyleValueType } from './CSSStyleValue';
import { Nested, ParenLess, UnitType } from './types';
export type CSSNumberish = number;
export declare const toCanonicalUnit: (unit: UnitType) => UnitType.kUnknown | UnitType.kNumber | UnitType.kPercentage | UnitType.kPixels | UnitType.kDegrees | UnitType.kSeconds;
/**
 * CSSNumericValue is the base class for numeric and length typed CSS Values.
 * @see https://drafts.css-houdini.org/css-typed-om/#numeric-objects
 * @see https://developer.mozilla.org/en-US/docs/Web/API/CSSNumericValue
 * @see https://chromium.googlesource.com/chromium/src/+/refs/heads/main/third_party/blink/renderer/core/css/cssom/css_numeric_value.idl
 */
/**
 * Represents numeric values that can be expressed as a single number plus a
 * unit (or a naked number or percentage).
 * @see https://drafts.css-houdini.org/css-typed-om/#cssunitvalue
 */
export declare class CSSUnitValue extends CSSStyleValue {
    unit: UnitType;
    value: number;
    constructor(value: number, unitOrName?: UnitType | string);
    clone(): CSSUnitValue;
    equals(other: CSSUnitValue): boolean;
    getType(): CSSStyleValueType;
    convertTo(target_unit: UnitType): CSSUnitValue;
    buildCSSText(n: Nested, p: ParenLess, result: string): string;
}
export declare const Opx: CSSUnitValue;
export declare const Lpx: CSSUnitValue;
export declare const Odeg: CSSUnitValue;
//# sourceMappingURL=CSSNumericValue.d.ts.map