import { midPoint } from '../util/mid-point';

export const lineToCubic = (x1: number, y1: number, x2: number, y2: number) => {
  const t = 0.5;
  const mid = midPoint([x1, y1], [x2, y2], t);
  return [...mid, x2, y2, x2, y2];
};
