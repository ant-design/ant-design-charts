import type { Point, PathArray, PointProperties } from '../types';
import { parsePathString } from '../parser/parse-path-string';
import { normalizePath } from '../process/normalize-path';
import { getPointAtLength } from './get-point-at-length';
import { getPropertiesAtLength } from './get-properties-at-length';
import { getTotalLength } from './get-total-length';

/**
 * Returns the point and segment in path closest to a given point as well as
 * the distance to the path stroke.
 * @see https://bl.ocks.org/mbostock/8027637
 */
export function getPropertiesAtPoint(pathInput: string | PathArray, point: Point): PointProperties {
  const path = parsePathString(pathInput);
  const normalPath = normalizePath(path);
  const pathLength = getTotalLength(path);
  const distanceTo = (p: Point) => {
    const dx = p.x - point.x;
    const dy = p.y - point.y;
    return dx * dx + dy * dy;
  };
  let precision = 8;
  let scan: Point;
  let scanDistance = 0;
  let closest: Point;
  let bestLength = 0;
  let bestDistance = Infinity;

  // linear scan for coarse approximation
  for (let scanLength = 0; scanLength <= pathLength; scanLength += precision) {
    scan = getPointAtLength(normalPath, scanLength);
    scanDistance = distanceTo(scan);
    if (scanDistance < bestDistance) {
      closest = scan;
      bestLength = scanLength;
      bestDistance = scanDistance;
    }
  }

  // binary search for precise estimate
  precision /= 2;
  let before: Point;
  let after: Point;
  let beforeLength = 0;
  let afterLength = 0;
  let beforeDistance = 0;
  let afterDistance = 0;

  while (precision > 0.5) {
    beforeLength = bestLength - precision;
    before = getPointAtLength(normalPath, beforeLength);
    beforeDistance = distanceTo(before);
    afterLength = bestLength + precision;
    after = getPointAtLength(normalPath, afterLength);
    afterDistance = distanceTo(after);
    if (beforeLength >= 0 && beforeDistance < bestDistance) {
      closest = before;
      bestLength = beforeLength;
      bestDistance = beforeDistance;
    } else if (afterLength <= pathLength && afterDistance < bestDistance) {
      closest = after;
      bestLength = afterLength;
      bestDistance = afterDistance;
    } else {
      precision /= 2;
    }
  }

  const segment = getPropertiesAtLength(path, bestLength);
  const distance = Math.sqrt(bestDistance);

  return { closest, distance, segment };
}
