import type { DisplayObject } from '../../display-objects';
import { CSSUnitValue } from '../cssom';
import type { TransformArray } from '../../types';
export interface ParsedTransform {
    t: string;
    d: CSSUnitValue[];
}
/**
 * none
 * scale(1) scale(1, 2)
 * scaleX(1)
 */
export declare function parseTransform(transform: string | TransformArray): ParsedTransform[];
export declare function parseTransformUnmemoize(transform: string | TransformArray): ParsedTransform[];
export declare function convertItemToMatrix(item: ParsedTransform): number[];
export declare const composeMatrix: (translate: any, scale: any, skew: any, quat: any, perspective: any) => number[];
export declare function mergeTransforms(left: ParsedTransform[], right: ParsedTransform[], target: DisplayObject | null): [number[][], number[][], (d: number[][]) => string];
//# sourceMappingURL=transform.d.ts.map