import type { LengthFactory } from '../types';
import { midPoint } from './mid-point';
import { distanceSquareRoot } from './distance-square-root';

/**
 * Returns a {x,y} point at a given length, the total length and
 * the minimum and maximum {x,y} coordinates of a line (L,V,H,Z) segment.
 */
export function segmentLineFactory(x1: number, y1: number, x2: number, y2: number, distance: number): LengthFactory {
  const length = distanceSquareRoot([x1, y1], [x2, y2]);
  let point = { x: 0, y: 0 };

  if (typeof distance === 'number') {
    if (distance <= 0) {
      point = { x: x1, y: y1 };
    } else if (distance >= length) {
      point = { x: x2, y: y2 };
    } else {
      const [x, y] = midPoint([x1, y1], [x2, y2], distance / length);
      point = { x, y };
    }
  }

  return {
    length,
    point,
    min: {
      x: Math.min(x1, x2),
      y: Math.min(y1, y2),
    },
    max: {
      x: Math.max(x1, x2),
      y: Math.max(y1, y2),
    },
  };
}
