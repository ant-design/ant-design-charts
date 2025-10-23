import type { PathArray, PathLengthFactoryOptions } from '../types';
import { pathLengthFactory } from './path-length-factory';

/**
 * Returns the shape total length, or the equivalent to `shape.getTotalLength()`.
 *
 * The `normalizePath` version is lighter, faster, more efficient and more accurate
 * with paths that are not `curveArray`.
 */
export function getTotalLength(pathInput: string | PathArray, options?: Partial<PathLengthFactoryOptions>) {
  return pathLengthFactory(pathInput, undefined, { ...options, bbox: false, length: true }).length;
}
