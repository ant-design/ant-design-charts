import type { PathArray, AbsoluteArray } from '../types';
import { isPathArray } from './is-path-array';

/**
 * Iterates an array to check if it's a `PathArray`
 * with all absolute values.
 */
export function isAbsoluteArray(path: string | PathArray): path is AbsoluteArray {
  return (
    isPathArray(path) &&
    // @ts-ignore -- `isPathArray` also checks if it's `Array`
    path.every(([x]) => x === x.toUpperCase())
  );
}
