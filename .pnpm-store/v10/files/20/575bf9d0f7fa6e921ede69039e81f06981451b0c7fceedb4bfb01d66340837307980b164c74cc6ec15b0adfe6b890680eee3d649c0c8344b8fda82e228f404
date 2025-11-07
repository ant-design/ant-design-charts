import type { LengthFactory, PathLengthFactoryOptions } from '../types';
import { distanceSquareRoot } from './distance-square-root';

/**
 * Returns the {x,y} coordinates of a point at a
 * given length of a quadratic-bezier segment.
 *
 * @see https://github.com/substack/point-at-length
 */
function getPointAtQuadSegmentLength(
  x1: number,
  y1: number,
  cx: number,
  cy: number,
  x2: number,
  y2: number,
  t: number,
) {
  const t1 = 1 - t;
  return {
    x: t1 ** 2 * x1 + 2 * t1 * t * cx + t ** 2 * x2,
    y: t1 ** 2 * y1 + 2 * t1 * t * cy + t ** 2 * y2,
  };
}

/**
 * Returns a {x,y} point at a given length, the total length and
 * the minimum and maximum {x,y} coordinates of a Q (quadratic-bezier) segment.
 */
export function segmentQuadFactory(
  x1: number,
  y1: number,
  qx: number,
  qy: number,
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

  for (let j = 0; j <= sampleSize; j += 1) {
    t = j / sampleSize;

    ({ x, y } = getPointAtQuadSegmentLength(x1, y1, qx, qy, x2, y2, t));

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

  /* istanbul ignore else */
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
