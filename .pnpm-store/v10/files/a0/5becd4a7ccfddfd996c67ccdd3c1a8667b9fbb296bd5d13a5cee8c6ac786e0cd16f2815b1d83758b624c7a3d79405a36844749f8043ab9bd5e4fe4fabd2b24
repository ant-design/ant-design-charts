import type { IAnimation } from '@antv/g-lite';
import type { AnimationTimeline } from './AnimationTimeline';
import type { KeyframeEffect } from './KeyframeEffect';
/**
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Animation/Animation
 */
export declare class Animation implements IAnimation {
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Animation/effect
     */
    effect: KeyframeEffect;
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Animation/timeline
     */
    timeline: AnimationTimeline;
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Animation/id
     */
    id: string;
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Animation/pending
     */
    get pending(): boolean;
    private currentTimePending;
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Animation/playState
     */
    private _idle;
    private _paused;
    private _finishedFlag;
    get playState(): AnimationPlayState;
    /**
     * record previos state
     */
    private oldPlayState;
    private _holdTime;
    private readyPromise;
    private finishedPromise;
    private resolveReadyPromise;
    private rejectReadyPromise;
    private resolveFinishedPromise;
    private rejectFinishedPromise;
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Animation/ready
     * @example
      animation.pause();
      animation.ready.then(function() {
        // Displays 'running'
        alert(animation.playState);
      });
      animation.play();
     */
    get ready(): Promise<any>;
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Animation/finished
     * @example
      Promise.all(
        elem.getAnimations().map(
          function(animation) {
            return animation.finished
          }
        )
      ).then(
        function() {
          return elem.remove();
        }
      );
     */
    get finished(): Promise<any>;
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Animation/onfinish
     */
    onfinish: ((this: Animation, ev: AnimationPlaybackEvent) => any) | null;
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Animation/oncancel
     */
    oncancel: ((this: Animation, ev: AnimationPlaybackEvent) => any) | null;
    /**
     * get called after each frame when running
     */
    onframe: ((this: Animation, ev: AnimationPlaybackEvent) => any) | null;
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Animation/currentTime
     */
    private _currentTime;
    get currentTime(): number | null;
    set currentTime(newTime: number | null);
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Animation/startTime
     */
    private _startTime;
    get startTime(): number | null;
    set startTime(newTime: number | null);
    private _playbackRate;
    get playbackRate(): number;
    set playbackRate(value: number);
    get _isFinished(): boolean;
    _totalDuration: number;
    get totalDuration(): number;
    _inEffect: boolean;
    _inTimeline: boolean;
    get _needsTick(): boolean;
    constructor(effect: KeyframeEffect, timeline: AnimationTimeline);
    /**
     * state machine,
     * resolve/reject ready/finished Promise according to current state
     */
    updatePromises(): false | Promise<any>;
    play(): void;
    pause(): void;
    finish(): void;
    cancel(): void;
    reverse(): void;
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Animation/updatePlaybackRate
     */
    updatePlaybackRate(playbackRate: number): void;
    targetAnimations(): IAnimation[];
    markTarget(): void;
    unmarkTarget(): void;
    tick(timelineTime: number, isAnimationFrame: boolean): void;
    private rewind;
    persist(): void;
    addEventListener<K extends keyof AnimationEventMap>(type: K, listener: (this: Animation, ev: AnimationEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof AnimationEventMap>(type: K, listener: (this: Animation, ev: AnimationEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    dispatchEvent(event: Event): boolean;
    onremove: ((this: Animation, ev: Event) => any) | null;
    commitStyles(): void;
    private ensureAlive;
    private tickCurrentTime;
    private fireEvents;
}
//# sourceMappingURL=Animation.d.ts.map