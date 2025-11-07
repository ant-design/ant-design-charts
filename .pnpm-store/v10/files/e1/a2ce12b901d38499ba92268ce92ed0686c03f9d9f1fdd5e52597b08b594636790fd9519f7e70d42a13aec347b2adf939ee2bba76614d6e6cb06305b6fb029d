import { normalizePath } from '../process/normalize-path';
import type { PathCommand, PathArray, LengthFactory, PathLengthFactoryOptions } from '../types';
import { segmentLineFactory } from './segment-line-factory';
import { segmentArcFactory } from './segment-arc-factory';
import { segmentCubicFactory } from './segment-cubic-factory';
import { segmentQuadFactory } from './segment-quad-factory';

/**
 * Returns a {x,y} point at a given length
 * of a shape, the shape total length and
 * the shape minimum and maximum {x,y} coordinates.
 */
export function pathLengthFactory(
  pathInput: string | PathArray,
  distance?: number,
  options?: Partial<PathLengthFactoryOptions>,
): LengthFactory {
  const path = normalizePath(pathInput);
  const distanceIsNumber = typeof distance === 'number';
  let isM: boolean;
  let data: number[] = [];
  let pathCommand: PathCommand;
  let x = 0;
  let y = 0;
  let mx = 0;
  let my = 0;
  let seg;
  const MIN = [];
  const MAX = [];
  let length = 0;
  let min = { x: 0, y: 0 };
  let max = min;
  let point = min;
  let POINT = min;
  let LENGTH = 0;

  for (let i = 0, ll = path.length; i < ll; i += 1) {
    seg = path[i];
    [pathCommand] = seg;
    isM = pathCommand === 'M';
    data = !isM ? [x, y].concat(seg.slice(1)) : data;

    // this segment is always ZERO
    /* istanbul ignore else */
    if (isM) {
      // remember mx, my for Z
      [, mx, my] = seg;
      min = { x: mx, y: my };
      max = min;
      length = 0;

      if (distanceIsNumber && distance < 0.001) {
        POINT = min;
      }
    } else if (pathCommand === 'L') {
      ({ length, min, max, point } = segmentLineFactory(data[0], data[1], data[2], data[3], (distance || 0) - LENGTH));
    } else if (pathCommand === 'A') {
      ({ length, min, max, point } = segmentArcFactory(
        data[0],
        data[1],
        data[2],
        data[3],
        data[4],
        data[5],
        data[6],
        data[7],
        data[8],
        (distance || 0) - LENGTH,
        options || {},
      ));
    } else if (pathCommand === 'C') {
      ({ length, min, max, point } = segmentCubicFactory(
        data[0],
        data[1],
        data[2],
        data[3],
        data[4],
        data[5],
        data[6],
        data[7],
        (distance || 0) - LENGTH,
        options || {},
      ));
    } else if (pathCommand === 'Q') {
      ({ length, min, max, point } = segmentQuadFactory(
        data[0],
        data[1],
        data[2],
        data[3],
        data[4],
        data[5],
        (distance || 0) - LENGTH,
        options || {},
      ));
    } else if (pathCommand === 'Z') {
      data = [x, y, mx, my];
      ({ length, min, max, point } = segmentLineFactory(data[0], data[1], data[2], data[3], (distance || 0) - LENGTH));
    }

    if (distanceIsNumber && LENGTH < distance && LENGTH + length >= distance) {
      POINT = point;
    }

    MAX.push(max);
    MIN.push(min);
    LENGTH += length;

    [x, y] = pathCommand !== 'Z' ? seg.slice(-2) : [mx, my];
  }

  // native `getPointAtLength` behavior when the given distance
  // is higher than total length
  if (distanceIsNumber && distance >= LENGTH) {
    POINT = { x, y };
  }

  return {
    length: LENGTH,
    point: POINT,
    min: {
      x: Math.min.apply(
        null,
        MIN.map((n) => n.x),
      ),
      y: Math.min.apply(
        null,
        MIN.map((n) => n.y),
      ),
    },
    max: {
      x: Math.max.apply(
        null,
        MAX.map((n) => n.x),
      ),
      y: Math.max.apply(
        null,
        MAX.map((n) => n.y),
      ),
    },
  };
}
