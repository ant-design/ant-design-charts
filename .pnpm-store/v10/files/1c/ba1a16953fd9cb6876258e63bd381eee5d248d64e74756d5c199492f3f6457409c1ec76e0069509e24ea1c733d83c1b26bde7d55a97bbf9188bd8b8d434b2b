import { Interpolate } from '../types';
import { string2rbg } from './color';

/**
 * 返回一个线性插值器，接受数字
 * @param a 任意值
 * @param b 任意值
 * @returns 线性插值器
 */
export const createInterpolateNumber: Interpolate<number> = (a, b) => {
  return (t) => a * (1 - t) + b * t;
};

export const createInterpolateColor: Interpolate<string> = (a, b) => {
  const c1 = string2rbg(a);
  const c2 = string2rbg(b);
  if (c1 === null || c2 === null) return c1 ? () => a : () => b;
  return (t) => {
    const values = new Array(4);
    for (let i = 0; i < 4; i += 1) {
      const from = c1[i];
      const to = c2[i];
      values[i] = from * (1 - t) + to * t;
    }
    const [r, g, b, a] = values as number[];
    return `rgba(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)}, ${a})`;
  };
};

/**
 * 返回一个线性插值器，接受数字和颜色
 * @param a 任意值
 * @param b 任意值
 * @returns 线性插值器
 */
export const createInterpolateValue: Interpolate<number | string> = (a, b) => {
  if (typeof a === 'number' && typeof b === 'number') return createInterpolateNumber(a, b);
  if (typeof a === 'string' && typeof b === 'string') return createInterpolateColor(a, b);
  return () => a;
};

/**
 * 返回一个 round 线性差值器，对输出值进行四舍五入
 * @param a 任意值
 * @param b 任意值
 * @returns 线性插值器
 */
export const createInterpolateRound: Interpolate<number> = (a, b) => {
  const interpolateNumber = createInterpolateNumber(a, b);
  return (t) => Math.round(interpolateNumber(t));
};
