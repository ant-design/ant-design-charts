import type { DisplayObject } from '../../../shapes';
import { getBounds } from './bounds';

/**
 * Detect whether line-line collision.
 * From: https://stackoverflow.com/questions/563198/how-do-you-detect-where-two-line-segments-intersect
 */
function lineToLine(line1: number[], line2: number[]) {
  const [x0, y0, x1, y1] = line1;
  const [x2, y2, x3, y3] = line2;
  const s10x = x1 - x0;
  const s10y = y1 - y0;
  const s32x = x3 - x2;
  const s32y = y3 - y2;

  const denom = s10x * s32y - s32x * s10y;
  if (denom === 0) return false;
  const denomPositive = denom > 0;

  const s02x = x0 - x2;
  const s02y = y0 - y2;
  const sNum = s10x * s02y - s10y * s02x;
  if (sNum < 0 === denomPositive) return false;

  const tNum = s32x * s02y - s32y * s02x;
  if (tNum < 0 === denomPositive) return false;

  if (sNum > denom === denomPositive || tNum > denom === denomPositive) return false;

  return true;
}

function intersectBoxLine(box: number[] /** 八个顶点 */, line: number[]): boolean {
  const lines = [
    [box[0], box[1], box[2], box[3]],
    [box[2], box[3], box[4], box[5]],
    [box[4], box[5], box[6], box[7]],
    [box[6], box[7], box[0], box[1]],
  ];

  return lines.some((boxLine) => lineToLine(line, boxLine));
}

export const IntersectUtils = { lineToLine, intersectBoxLine, getBounds };

/**
 * 检测两个 DisplayObject 是否相交
 */
export function intersect(a: DisplayObject<any>, b: DisplayObject<any>, margin?: number[]) {
  const p = getBounds(a, margin).flat(1);
  const q = getBounds(b, margin).flat(1);

  const linesP = [
    [p[0], p[1], p[2], p[3]],
    [p[0], p[1], p[4], p[5]],
    [p[4], p[5], p[6], p[7]],
    [p[2], p[3], p[6], p[7]],
  ];

  for (const line of linesP) {
    if (intersectBoxLine(q, line)) return true;
  }

  return false;
}
