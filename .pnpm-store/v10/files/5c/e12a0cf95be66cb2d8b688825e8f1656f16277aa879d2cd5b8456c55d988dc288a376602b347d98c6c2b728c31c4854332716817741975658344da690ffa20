import type { Point, PathArray } from '../types';
import { getPropertiesAtPoint } from './get-properties-at-point';

/**
 * Checks if a given point is in the stroke of a path.
 */
export function isPointInStroke(pathInput: string | PathArray, point: Point) {
  const { distance } = getPropertiesAtPoint(pathInput, point);
  return Math.abs(distance) < 0.001; // 0.01 might be more permissive
}
