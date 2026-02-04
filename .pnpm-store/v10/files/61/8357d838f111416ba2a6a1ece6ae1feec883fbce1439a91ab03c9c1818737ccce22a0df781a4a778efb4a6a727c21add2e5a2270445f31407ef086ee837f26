import { roundPath } from '../process/round-path';
import type { PathArray } from '../types';

/**
 * Returns a valid `d` attribute string value created
 * by rounding values and concatenating the `pathArray` segments.
 */
export function path2String(path: PathArray, round: number | 'off' = 'off'): string {
  return roundPath(path, round)
    .map((x) => x[0] + x.slice(1).join(' '))
    .join('');
}
