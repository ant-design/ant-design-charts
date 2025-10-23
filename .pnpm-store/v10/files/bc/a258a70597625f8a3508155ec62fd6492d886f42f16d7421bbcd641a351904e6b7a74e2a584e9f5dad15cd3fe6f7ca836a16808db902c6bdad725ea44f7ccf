import { paramsCount } from '../parser/params-count';
import type { PathArray } from '../types';

/**
 * Iterates an array to check if it's an actual `PathArray`.
 */
export function isPathArray(path: string | PathArray): path is PathArray {
  return (
    Array.isArray(path) &&
    path.every((seg) => {
      const lk = seg[0].toLowerCase();
      return paramsCount[lk] === seg.length - 1 && 'achlmqstvz'.includes(lk);
    })
  );
}
