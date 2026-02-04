import type { DisplayObject } from '../../display-objects';
import type { GlobalRuntime } from '../../global-runtime';
import type { CSSProperty } from '../CSSProperty';
import { CSSUnitValue } from '../cssom';
import { mergeNumbers } from '../parser';
/**
 * <length> & <percentage>
 */
export declare class CSSPropertyLengthOrPercentage implements Partial<CSSProperty<CSSUnitValue, number>> {
    mixer: typeof mergeNumbers;
    /**
     * according to parent's bounds
     *
     * @example
     * CSS.percent(50) -> CSS.px(0.5 * parent.width)
     */
    calculator(name: string, oldParsed: CSSUnitValue, computed: CSSUnitValue, object: DisplayObject, runtime: GlobalRuntime): number;
}
//# sourceMappingURL=CSSPropertyLengthOrPercentage.d.ts.map