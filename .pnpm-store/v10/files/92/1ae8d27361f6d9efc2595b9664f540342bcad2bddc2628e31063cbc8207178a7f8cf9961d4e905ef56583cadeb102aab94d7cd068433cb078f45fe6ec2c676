import type { CSSUnitValue } from '../cssom';
export declare function numberToString(x: number): string;
/**
 * parse string or number to CSSUnitValue(numeric)
 *
 * eg.
 * * 0 -> CSSUnitValue(0)
 * * '2' -> CSSUnitValue(2)
 */
export declare const parseNumberUnmemoize: (string: string | number) => CSSUnitValue;
export declare const parseNumber: (string: string | number) => CSSUnitValue;
/**
 * separate string to array
 * eg.
 * * [0.5, 0.5] -> [CSSUnitValue, CSSUnitValue]
 */
export declare const parseNumberListUnmemoize: (string: string | number[]) => CSSUnitValue[];
export declare const parseNumberList: (string: string | number[]) => CSSUnitValue[];
export declare function mergeNumbers(left: number, right: number): [number, number, (n: number) => string];
export declare function clampedMergeNumbers(min: number, max: number): (left: number, right: number) => [number, number, (i: number) => string];
export declare function mergeNumberLists(left: number[], right: number[]): [number[], number[], (numberList: number[]) => number[]] | undefined;
//# sourceMappingURL=numeric.d.ts.map