import { Nested, ParenLess, UnitCategory, UnitType } from './types';
export declare enum CSSStyleValueType {
    kUnknownType = 0,
    kUnparsedType = 1,
    kKeywordType = 2,
    kUnitType = 3,
    kSumType = 4,
    kProductType = 5,
    kNegateType = 6,
    kInvertType = 7,
    kMinType = 8,
    kMaxType = 9,
    kClampType = 10,
    kTransformType = 11,
    kPositionType = 12,
    kURLImageType = 13,
    kColorType = 14,
    kUnsupportedColorType = 15
}
export declare const unitFromName: (name: string) => UnitType;
export declare const unitTypeToUnitCategory: (type: UnitType) => UnitCategory;
export declare const canonicalUnitTypeForCategory: (category: UnitCategory) => UnitType.kUnknown | UnitType.kNumber | UnitType.kPercentage | UnitType.kPixels | UnitType.kDegrees | UnitType.kSeconds;
/**
 * @see https://chromium.googlesource.com/chromium/src/+/refs/heads/main/third_party/blink/renderer/core/css/css_primitive_value.cc#353
 */
export declare const conversionToCanonicalUnitsScaleFactor: (unit_type: UnitType) => number;
export declare const unitTypeToString: (type: UnitType) => "%" | "" | "em" | "rem" | "px" | "deg" | "rad" | "grad" | "ms" | "s" | "turn";
/**
 * CSSStyleValue is the base class for all CSS values accessible from Typed OM.
 * Values that are not yet supported as specific types are also returned as base CSSStyleValues.
 *
 * Spec @see https://drafts.css-houdini.org/css-typed-om/#stylevalue-objects
 * Docs @see https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleValue
 */
export declare abstract class CSSStyleValue {
    static isAngle(unit: UnitType): unit is UnitType.kDegrees | UnitType.kRadians | UnitType.kGradians | UnitType.kTurns;
    static isLength(type: UnitType): boolean;
    static isRelativeUnit(type: UnitType): type is UnitType.kPercentage | UnitType.kEms | UnitType.kRems;
    static isTime(unit: UnitType): unit is UnitType.kMilliseconds | UnitType.kSeconds;
    protected abstract getType(): CSSStyleValueType;
    abstract buildCSSText(n: Nested, p: ParenLess, result: string): string;
    abstract clone(): CSSStyleValue;
    toString(): string;
    isNumericValue(): boolean;
}
//# sourceMappingURL=CSSStyleValue.d.ts.map