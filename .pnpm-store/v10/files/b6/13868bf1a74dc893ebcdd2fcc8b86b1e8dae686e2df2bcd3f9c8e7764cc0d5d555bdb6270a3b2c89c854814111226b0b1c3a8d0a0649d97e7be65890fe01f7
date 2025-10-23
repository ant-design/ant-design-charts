/* global Keyframe */
import { isNil } from '@antv/util';
import type { DisplayObject } from '../shapes';
import type { Component } from '../core';
import { show, hide } from '../util';
import type { AnimationOption, AnimationResult, GenericAnimation, StandardAnimationOption } from './types';

function isStandardAnimationOption(option: AnimationOption): option is StandardAnimationOption {
  if (typeof option === 'boolean') return false;
  return 'enter' in option && 'update' in option && 'exit' in option;
}

export function parseAnimationOption(option: AnimationOption): StandardAnimationOption {
  // option is false => all animation is false
  // option is { enter: {}, update: {}, exit: {}, ...baseOption } =>
  //    { enter: { ...enter, ...baseOption }, update: { ...update, ...baseOption }, exit: { ...exit, ...baseOption } }
  // option is { enter: {}, update: {}, exit: {} } => option

  if (!option) return { enter: false, update: false, exit: false };

  const keys = ['enter', 'update', 'exit'] as const;
  const baseOption = Object.fromEntries(Object.entries(option).filter(([k]) => !keys.includes(k as any)));

  return Object.fromEntries(
    keys.map((k) => {
      if (isStandardAnimationOption(option)) {
        if (option[k] === false) return [k, false];
        return [k, { ...option[k], ...baseOption }];
      }
      return [k, baseOption];
    })
  );
}

export function onAnimateFinished(animation: AnimationResult, callback: () => void) {
  if (!animation) callback();
  else animation.finished.then(callback);
}

export function onAnimatesFinished(animations: AnimationResult[], callback: () => void) {
  if (animations.length === 0) callback();
  else Promise.all(animations.map((a) => a?.finished)).then(callback);
}

function attr(target: DisplayObject | Component<any>, value: Record<string, any>) {
  if ('update' in target) target.update(value);
  else target.attr(value);
}

export function animate(target: DisplayObject | Component<any>, keyframes: Keyframe[], options: GenericAnimation) {
  if (keyframes.length === 0) return null;
  if (!options) {
    const state = keyframes.slice(-1)[0];
    attr(target, { style: state });
    return null;
  }
  return target.animate(keyframes, options);
}

function identicalTextNode(source: DisplayObject, target: DisplayObject): boolean {
  if (source.nodeName !== 'text' || target.nodeName !== 'text') return false;
  if (source.attributes.text !== target.attributes.text) return false;
  return true;
}

/**
 * transition source shape to target shape
 * @param source
 * @param target
 * @param options
 * @param after destroy or hide source shape after transition
 */
export function transitionShape(
  source: DisplayObject,
  target: DisplayObject,
  options: GenericAnimation,
  after: 'destroy' | 'hide' = 'destroy'
) {
  // If source and target are both text node and with same text,
  // do not apply shape animation.
  if (identicalTextNode(source, target)) {
    source.remove();
    return [null];
  }

  const afterTransition = () => {
    if (after === 'destroy') source.destroy();
    else if (after === 'hide') hide(source);
    if (target.isVisible()) show(target);
  };
  if (!options) {
    afterTransition();
    return [null];
  }
  const { duration = 0, delay = 0 } = options;
  const middle = Math.ceil(+duration / 2);
  const offset = +duration / 4;

  const {
    center: [sx, sy],
  } = source.getGeometryBounds();
  const {
    center: [ex, ey],
  } = target.getGeometryBounds();
  const [mx, my] = [(sx + ex) / 2 - sx, (sy + ey) / 2 - sy];

  const { opacity: so = 1 } = source.style;
  const { opacity: to = 1 } = target.style;

  const st = source.style.transform || '';
  const tt = target.style.transform || '';
  // const st = source.style._transform || '';
  // const tt = target.style._transform || '';

  const sourceAnimation = source.animate(
    [
      { opacity: so, transform: `translate(0, 0) ${st}` },
      { opacity: 0, transform: `translate(${mx}, ${my}) ${st}` },
    ],
    {
      fill: 'both',
      ...options,
      duration: delay + middle + offset,
    }
  );
  const targetAnimation = target.animate(
    [
      { opacity: 0, transform: `translate(${-mx}, ${-my}) ${tt}`, offset: 0.01 },
      { opacity: to, transform: `translate(0, 0) ${tt}` },
    ],
    {
      fill: 'both',
      ...options,
      duration: middle + offset,
      delay: delay + middle - offset,
    }
  );

  onAnimateFinished(targetAnimation, afterTransition);
  return [sourceAnimation, targetAnimation];
}

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
export function transition(
  target: DisplayObject | Component<any>,
  state: Record<string, any> | (DisplayObject | Component<any>),
  options: GenericAnimation
) {
  const from: typeof state = {};
  const to: typeof state = {};
  Object.entries(state).forEach(([key, tarStyle]) => {
    if (!isNil(tarStyle)) {
      // 关闭 CSS 解析后，attr / getAttribute 只能获取到用户显式传入的属性，此时可以
      // 获取解析值，如果仍获取不到（例如 x/y），则使用 0 作为默认值
      const currStyle = target.style[key] || target.parsedStyle[key] || 0; // x/y
      if (currStyle !== tarStyle) {
        from[key] = currStyle;
        to[key] = tarStyle;
      }
    }
  });

  if (!options) {
    attr(target, to);
    return null;
  }

  return animate(target, [from, to], { fill: 'both', ...options });
}
