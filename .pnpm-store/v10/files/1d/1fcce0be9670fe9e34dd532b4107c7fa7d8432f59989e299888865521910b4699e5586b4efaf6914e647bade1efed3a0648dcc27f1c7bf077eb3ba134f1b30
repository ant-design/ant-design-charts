import type { PathArray } from '../types';
import { isNormalizedArray } from './is-normalized-array';

/**
 * Iterates an array to check if it's a `PathArray`
 * with all C (cubic bezier) segments.
 *
 * @param {string | PathArray} path the `Array` to be checked
 * @returns {boolean} iteration result
 */
export function isCurveArray(path: string | PathArray): path is PathArray {
  return isNormalizedArray(path) && (path as PathArray).every(([pc]) => 'MC'.includes(pc));
}
