import type { IDocument, IAnimationTimeline, IElement, IAnimation } from '@antv/g-lite';
import { Animation } from './Animation';
export declare function compareAnimations(leftAnimation: IAnimation, rightAnimation: IAnimation): number;
/**
 * @see https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/web-animations-js/index.d.ts
 */
export declare class AnimationTimeline implements IAnimationTimeline {
    private document;
    /**
     * all active animations
     */
    animations: Animation[];
    private ticking;
    private timelineTicking;
    private hasRestartedThisFrame;
    animationsWithPromises: Animation[];
    private inTick;
    private pendingEffects;
    currentTime: number | null;
    private rafId;
    private rafCallbacks;
    private frameId;
    constructor(document: IDocument);
    getAnimations(): Animation[];
    isTicking(): boolean;
    play(target: IElement, keyframes: Keyframe[] | PropertyIndexedKeyframes | null, options?: number | KeyframeAnimationOptions): Animation;
    applyDirtiedAnimation(animation: Animation): void;
    restart(): boolean;
    destroy(): void;
    applyPendingEffects(): void;
    private updateAnimationsPromises;
    private discardAnimations;
    private restartWebAnimationsNextTick;
    private webAnimationsNextTick;
    private processRafCallbacks;
    private rAF;
    private requestAnimationFrame;
    tick(t: number, isAnimationFrame: boolean, updatingAnimations: IAnimation[]): Animation[][];
}
//# sourceMappingURL=AnimationTimeline.d.ts.map