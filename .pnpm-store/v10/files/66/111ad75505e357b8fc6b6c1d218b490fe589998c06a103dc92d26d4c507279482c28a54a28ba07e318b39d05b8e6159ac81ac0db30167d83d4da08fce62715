import type { LengthFactory, PathLengthFactoryOptions } from '../types';
import { distanceSquareRoot } from './distance-square-root';

/**
 * Returns a {x,y} point at a given length, the total length and
 * the minimum and maximum {x,y} coordinates of a C (cubic-bezier) segment.
 */
function getPointAtCubicSegmentLength(
  x1: number,
  y1: number,
  c1x: number,
  c1y: number,
  c2x: number,
  c2y: number,
  x2: number,
  y2: number,
  t: number,
) {
  const t1 = 1 - t;
  return {
    x: t1 ** 3 * x1 + 3 * t1 ** 2 * t * c1x + 3 * t1 * t ** 2 * c2x + t ** 3 * x2,
    y: t1 ** 3 * y1 + 3 * t1 ** 2 * t * c1y + 3 * t1 * t ** 2 * c2y + t ** 3 * y2,
  };
}

/**
 * Returns the length of a C (cubic-bezier) segment
 * or an {x,y} point at a given length.
 */
export function segmentCubicFactory(
  x1: number,
  y1: number,
  c1x: number,
  c1y: number,
  c2x: number,
  c2y: number,
  x2: number,
  y2: number,
  distance: number,
  options: Partial<PathLengthFactoryOptions>,
): LengthFactory {
  const { bbox = true, length = true, sampleSize = 10 } = options;
  const distanceIsNumber = typeof distance === 'number';
  let x = x1;
  let y = y1;
  let LENGTH = 0;
  let prev = [x, y, LENGTH];
  let cur: [number, number] = [x, y];
  let t = 0;
  let POINT = { x: 0, y: 0 };
  const POINTS = [{ x, y }];

  if (distanceIsNumber && distance <= 0) {
    POINT = { x, y };
  }

  // bad perf when size = 300
  for (let j = 0; j <= sampleSize; j += 1) {
    t = j / sampleSize;

    ({ x, y } = getPointAtCubicSegmentLength(x1, y1, c1x, c1y, c2x, c2y, x2, y2, t));

    if (bbox) {
      POINTS.push({ x, y });
    }

    if (length) {
      LENGTH += distanceSquareRoot(cur, [x, y]);
    }
    cur = [x, y];

    if (distanceIsNumber && LENGTH >= distance && distance > prev[2]) {
      const dv = (LENGTH - distance) / (LENGTH - prev[2]);

      POINT = {
        x: cur[0] * (1 - dv) + prev[0] * dv,
        y: cur[1] * (1 - dv) + prev[1] * dv,
      };
    }
    prev = [x, y, LENGTH];
  }

  if (distanceIsNumber && distance >= LENGTH) {
    POINT = { x: x2, y: y2 };
  }

  return {
    length: LENGTH,
    point: POINT,
    min: {
      x: Math.min.apply(
        null,
        POINTS.map((n) => n.x),
      ),
      y: Math.min.apply(
        null,
        POINTS.map((n) => n.y),
      ),
    },
    max: {
      x: Math.max.apply(
        null,
        POINTS.map((n) => n.x),
      ),
      y: Math.max.apply(
        null,
        POINTS.map((n) => n.y),
      ),
    },
  };
}
