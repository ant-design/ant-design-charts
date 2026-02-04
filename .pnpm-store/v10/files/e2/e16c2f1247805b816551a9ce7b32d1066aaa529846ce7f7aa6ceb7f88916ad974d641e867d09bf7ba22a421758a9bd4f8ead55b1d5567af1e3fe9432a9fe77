import { IElement, IKeyframeEffect } from '@antv/g-lite';
import type { Animation } from './Animation';
import { AnimationEffectTiming } from './AnimationEffectTiming';
export declare function makeTiming(timingInput: KeyframeEffectOptions, forGroup: boolean): AnimationEffectTiming;
export declare function normalizeTimingInput(timingInput: KeyframeEffectOptions | number | undefined, forGroup: boolean): AnimationEffectTiming;
export declare function numericTimingToObject(timingInput: KeyframeEffectOptions | number): KeyframeEffectOptions;
/**
 * @see https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect
 * @example
  const circleDownKeyframes = new KeyframeEffect(
    circle, // element to animate
    [
      { transform: 'translateY(0)' }, // keyframe
      { transform: 'translateY(100)' } // keyframe
    ],
    { duration: 3000, fill: 'forwards' } // keyframe options
  );
 *
 */
export declare class KeyframeEffect implements IKeyframeEffect {
    composite: CompositeOperation;
    iterationComposite: IterationCompositeOperation;
    target: IElement | null;
    animation: Animation | null;
    timing: AnimationEffectTiming;
    private computedTiming;
    normalizedKeyframes: ComputedKeyframe[];
    private timeFraction;
    private interpolations;
    constructor(target: IElement | null, effectInput: Keyframe[] | PropertyIndexedKeyframes | null, timingInput?: KeyframeEffectOptions | number);
    applyInterpolations(): void;
    update(localTime: number | null): boolean;
    getKeyframes(): ComputedKeyframe[];
    setKeyframes(keyframes: Keyframe[] | PropertyIndexedKeyframes | null): void;
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/AnimationEffect/getComputedTiming
     */
    getComputedTiming(): ComputedEffectTiming;
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/AnimationEffect/getTiming
     */
    getTiming(): EffectTiming;
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/AnimationEffect/updateTiming
     */
    updateTiming(timing?: OptionalEffectTiming): void;
}
//# sourceMappingURL=KeyframeEffect.d.ts.map