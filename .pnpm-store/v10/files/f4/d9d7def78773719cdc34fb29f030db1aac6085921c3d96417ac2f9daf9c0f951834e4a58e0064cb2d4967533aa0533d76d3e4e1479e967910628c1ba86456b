import type { DisplayObject } from '../../display-objects';
import { CSSKeywordValue } from '../cssom';
import type { CSSProperty } from '../CSSProperty';
import type { ParsedTransform } from '../parser/transform';
import { mergeTransforms, parseTransformUnmemoize } from '../parser/transform';
/**
 * @see /zh/docs/api/animation#支持变换的属性
 *
 * support the following formats like CSS Transform:
 *
 * scale
 * * scale(x, y)
 * * scaleX(x)
 * * scaleY(x)
 * * scaleZ(z)
 * * scale3d(x, y, z)
 *
 * translate (unit: none, px, %(relative to its bounds))
 * * translate(x, y) eg. translate(0, 0) translate(0, 30px) translate(100%, 100%)
 * * translateX(0)
 * * translateY(0)
 * * translateZ(0)
 * * translate3d(0, 0, 0)
 *
 * rotate (unit: deg rad turn)
 * * rotate(0.5turn) rotate(30deg) rotate(1rad)
 *
 * none
 *
 * unsupported for now:
 * * calc() eg. translate(calc(100% + 10px))
 * * matrix/matrix3d()
 * * skew/skewX/skewY
 * * perspective
 */
export declare class CSSPropertyTransform implements Partial<CSSProperty<CSSKeywordValue | ParsedTransform[], ParsedTransform[]>> {
    parser: typeof parseTransformUnmemoize;
    calculator(name: string, oldParsed: CSSKeywordValue | ParsedTransform[], parsed: CSSKeywordValue | ParsedTransform[], object: DisplayObject): ParsedTransform[];
    mixer: typeof mergeTransforms;
    postProcessor(object: DisplayObject): void;
}
//# sourceMappingURL=CSSPropertyTransform.d.ts.map