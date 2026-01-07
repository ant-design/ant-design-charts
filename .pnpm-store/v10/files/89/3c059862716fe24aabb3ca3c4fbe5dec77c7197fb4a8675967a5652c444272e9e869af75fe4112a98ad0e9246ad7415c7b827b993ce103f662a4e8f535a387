import type { DisplayObject } from '../shapes';
import type { Component } from '../core';
import type { AnimationOption, AnimationResult, GenericAnimation, StandardAnimationOption } from './types';
export declare function parseAnimationOption(option: AnimationOption): StandardAnimationOption;
export declare function onAnimateFinished(animation: AnimationResult, callback: () => void): void;
export declare function onAnimatesFinished(animations: AnimationResult[], callback: () => void): void;
export declare function animate(target: DisplayObject | Component<any>, keyframes: Keyframe[], options: GenericAnimation): import("@antv/g-lite").IAnimation | null;
/**
 * transition source shape to target shape
 * @param source
 * @param target
 * @param options
 * @param after destroy or hide source shape after transition
 */
export declare function transitionShape(source: DisplayObject, target: DisplayObject, options: GenericAnimation, after?: 'destroy' | 'hide'): (import("@antv/g-lite").IAnimation | null)[];
/**
 * execute transition animation on element
 * @description in the current stage, only support the following properties:
 * x, y, width, height, opacity, fill, stroke, lineWidth, radius
 * @param target element to be animated
 * @param state target properties or element
 * @param options transition options
 * @param animate whether to animate
 * @returns transition instance
 */
export declare function transition(target: DisplayObject | Component<any>, state: Record<string, any> | (DisplayObject | Component<any>), options: GenericAnimation): import("@antv/g-lite").IAnimation | null;
