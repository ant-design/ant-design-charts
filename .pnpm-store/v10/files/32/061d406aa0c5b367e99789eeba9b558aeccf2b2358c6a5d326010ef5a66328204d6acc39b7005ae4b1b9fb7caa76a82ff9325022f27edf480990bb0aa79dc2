import type { PathArray, PathLengthFactoryOptions } from '../types';
import { pathLengthFactory } from './path-length-factory';

/**
 * Returns [x,y] coordinates of a point at a given length of a shape.
 */
export function getPointAtLength(
  pathInput: string | PathArray,
  distance: number,
  options?: Partial<PathLengthFactoryOptions>,
) {
  return pathLengthFactory(pathInput, distance, { ...options, bbox: false, length: true }).point;
}
