import type { DisplayObject } from '../../../shapes';
import type { Point } from '../../../types';
import type { SeriesAttr } from '../../../util';
import { Bounds, getBounds } from './bounds';

type Line = [Point, Point];

function onLine(line: Line, point: Point): boolean {
  return (
    point[0] <= Math.max(line[0][0], line[1][0]) &&
    point[0] <= Math.min(line[0][0], line[1][0]) &&
    point[1] <= Math.max(line[0][1], line[1][1]) &&
    point[1] <= Math.min(line[0][1], line[1][1])
  );
}

function direction(a: Point, b: Point, c: Point): number {
  const val = (b[1] - a[1]) * (c[0] - b[0]) - (b[0] - a[0]) * (c[1] - b[1]);
  if (val === 0) return 0;
  return val < 0 ? 2 : 1;
}

function isIntersect(line1: Line, line2: Line): boolean {
  const dir1 = direction(line1[0], line1[1], line2[0]);
  const dir2 = direction(line1[0], line1[1], line2[1]);
  const dir3 = direction(line2[0], line2[1], line1[0]);
  const dir4 = direction(line2[0], line2[1], line1[1]);

  if (dir1 !== dir2 && dir3 !== dir4) return true;
  if (dir1 === 0 && onLine(line1, line2[0])) return true;
  if (dir2 === 0 && onLine(line1, line2[1])) return true;
  if (dir3 === 0 && onLine(line2, line1[0])) return true;
  if (dir4 === 0 && onLine(line2, line1[1])) return true;

  return false;
}

export function isPointInsideRectangle(polygon: Point[], point: Point): boolean {
  const n = polygon.length;
  if (n < 3) return false;

  const lineToInfinity: Line = [point, [9999, point[1]]];
  let count = 0;
  let i = 0;
  do {
    const side: Line = [polygon[i], polygon[(i + 1) % n]];
    if (isIntersect(side, lineToInfinity)) {
      if (direction(side[0], point, side[1]) === 0) return onLine(side, point);
      count++;
    }
    i = (i + 1) % n;
  } while (i !== 0);

  return !!(count & 1);
}

export function isRectangleBInsideA(rectA: Point[], rectB: Point[]) {
  return rectB.every((point) => isPointInsideRectangle(rectA, point));
}

/**
 * 检测 child 是否完全在 container 内部
 */
export function contain(container: Bounds, child: DisplayObject<any>, margin?: SeriesAttr) {
  const { x1, x2, y1, y2 } = container;
  const parent: Point[] = [
    [x1, y1],
    [x2, y1],
    [x2, y2],
    [x1, y2],
  ];

  const element = getBounds(child, margin);

  return isRectangleBInsideA(parent, element);
}
