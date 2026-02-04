import { rgb2arr } from './rgb2arr';
import { arr2rgb } from './arr2rgb';
import { toRGB } from './torgb';

/**
 * 获取颜色之间的插值
 * @param start
 * @param end
 * @param percent
 * @param index
 * @returns
 */
function getValue(start: number[], end: number[], percent: number, index: number): number {
  return start[index] + (end[index] - start[index]) * percent;
}

/**
 * 计算颜色
 * @param points
 * @param percent
 * @returns
 */
function calColor(points: number[][], percent: number) {
  const fixedPercent = isNaN(Number(percent)) || percent < 0 ? 0 : percent > 1 ? 1 : Number(percent);

  const steps = points.length - 1;

  const step = Math.floor(steps * fixedPercent);

  const left = steps * fixedPercent - step;

  const start = points[step];

  const end = step === steps ? start : points[step + 1];

  return arr2rgb([getValue(start, end, left, 0), getValue(start, end, left, 1), getValue(start, end, left, 2)]);
}

/**
 * 获取渐变函数
 * @param colors 多个颜色
 * @return 颜色值
 */
export function gradient(colors: string | string[]) {
  const colorArray = typeof colors === 'string' ? (colors as string).split('-') : colors;

  const points = colorArray.map((color) => {
    return rgb2arr(color.indexOf('#') === -1 ? toRGB(color) : color);
  });

  // 返回一个函数
  return (percent: number): string => {
    return calColor(points, percent);
  };
}
