import { TickMethod } from '../types';
import { prettyNumber } from '../utils/pretty-number';

/**
 * 创建分割点
 * @param min 左区间
 * @param max 右区间
 * @param n 分割点个数
 * @returns 计算后的 ticks
 * @see R pretty https://svn.r-project.org/R/trunk/src/appl/pretty.c
 * @see R pretty https://www.rdocumentation.org/packages/base/versions/3.5.2/topics/pretty
 */
export const rPretty: TickMethod = (min, max, m = 5) => {
  if (min === max) {
    return [min];
  }

  const n = m < 0 ? 0 : Math.round(m);
  if (n === 0) return [];

  // high.u.bias
  const h = 1.5;
  // u5.bias
  const h5 = 0.5 + 1.5 * h;
  // 反正我也不会调参，跳过所有判断步骤
  const d = max - min;
  const c = d / n;

  // 当d非常小的时候触发，但似乎没什么用
  // const min_n = Math.floor(n / 3);
  // const shrink_sml = Math.pow(2, 5);
  // if (Math.log10(d) < -2) {
  //   c = (_.max([ Math.abs(max), Math.abs(min) ]) * shrink_sml) / min_n;
  // }

  const base = 10 ** Math.floor(Math.log10(c));
  let unit = base;
  if (2 * base - c < h * (c - unit)) {
    unit = 2 * base;
    if (5 * base - c < h5 * (c - unit)) {
      unit = 5 * base;
      if (10 * base - c < h * (c - unit)) {
        unit = 10 * base;
      }
    }
  }
  const nu = Math.ceil(max / unit);
  const ns = Math.floor(min / unit);

  const hi = Math.max(nu * unit, max);
  const lo = Math.min(ns * unit, min);

  const size = Math.floor((hi - lo) / unit) + 1;
  const ticks = new Array(size);
  for (let i = 0; i < size; i += 1) {
    ticks[i] = prettyNumber(lo + i * unit);
  }

  return ticks;
};
