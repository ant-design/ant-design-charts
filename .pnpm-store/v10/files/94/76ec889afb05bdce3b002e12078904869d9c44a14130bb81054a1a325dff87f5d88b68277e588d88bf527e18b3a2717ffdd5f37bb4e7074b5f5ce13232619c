import type { PathArray } from '../types';

/**
 * Rounds the values of a `PathArray` instance to
 * a specified amount of decimals and returns it.
 */
export function roundPath(path: PathArray, round: number | 'off'): PathArray {
  if (round === 'off') return [].concat(path) as PathArray;

  // to round values to the power
  // the `round` value must be integer
  const pow = typeof round === 'number' && round >= 1 ? 10 ** round : 1;

  return path.map((pi) => {
    const values = pi
      .slice(1)
      .map(Number)
      .map((n) => (round ? Math.round(n * pow) / pow : Math.round(n)));
    // @ts-ignore
    return [pi[0]].concat(values);
  }) as PathArray;
}
