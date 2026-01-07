import type { DisplayObject } from '../../display-objects';
import type { IElement } from '../../dom';
import type { CSSStyleValue } from '../cssom';
import { CSSUnitValue } from '../cssom';
export declare function parseDimension(unitRegExp: RegExp, string: string): CSSStyleValue | undefined;
/**
 * <length>
 * @see https://developer.mozilla.org/zh-CN/docs/Web/CSS/length
 * length with only absolute unit, eg. 1px
 */
export declare const parseLengthUnmemoize: (css: string) => CSSStyleValue;
export declare const parseLength: (css: string) => CSSStyleValue;
/**
 * <percentage>
 * @see https://developer.mozilla.org/zh-CN/docs/Web/CSS/percentage
 */
export declare const parserPercentageUnmemoize: (css: string) => CSSStyleValue;
export declare const parserPercentage: (css: string) => CSSStyleValue;
/**
 * length with absolute or relative unit,
 * eg. 1px, 0.7em, 50%, calc(100% - 200px);
 *
 * @see https://developer.mozilla.org/zh-CN/docs/Web/CSS/length-percentage
 */
export declare const parseLengthOrPercentageUnmemoize: (css: string) => CSSUnitValue;
export declare const parseLengthOrPercentage: (css: string) => CSSUnitValue;
export declare const parseAngleUnmemoize: (css: string) => CSSUnitValue;
export declare const parseAngle: (css: string) => CSSUnitValue;
/**
 * merge CSSUnitValue
 *
 * @example
 * 10px + 20px = 30px
 * 10deg + 10rad
 * 10% + 20% = 30%
 */
export declare function mergeDimensions(left: CSSUnitValue, right: CSSUnitValue, target: IElement, nonNegative?: boolean, index?: number): [number, number, (value: number) => string];
export declare function convertAngleUnit(value: CSSUnitValue): number;
export declare function parseDimensionArrayFormat(string: string | number | (string | number)[], size?: 2 | 4 | 'even'): number[];
export declare function parseDimensionArray(string: string | (string | number)[]): CSSUnitValue[];
export declare function parseDimensionArrayUnmemoize(string: string | (string | number)[]): CSSUnitValue[];
export declare function convertPercentUnit(valueWithUnit: CSSUnitValue, vec3Index: number, target: DisplayObject, useMin?: boolean): number;
//# sourceMappingURL=dimension.d.ts.map