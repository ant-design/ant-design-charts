import type { PathArray } from '../types';
import { isAbsoluteArray } from './is-absolute-array';

/**
 * Iterates an array to check if it's a `PathArray`
 * with all segments are in non-shorthand notation
 * with absolute values.
 */
export function isNormalizedArray(path: string | PathArray): path is PathArray {
  return isAbsoluteArray(path) && path.every(([pc]) => 'ACLMQZ'.includes(pc));
}
