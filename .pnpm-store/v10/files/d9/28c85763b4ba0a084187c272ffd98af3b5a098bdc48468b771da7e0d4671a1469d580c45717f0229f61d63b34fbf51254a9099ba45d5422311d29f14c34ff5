import type { VerticalFactor, Direction } from '../types';

export * from './test';

export function getFactor(...args: Direction[]): VerticalFactor {
  const fn = (str: (typeof args)[number]): VerticalFactor => (str === 'positive' ? -1 : 1);
  return args.reduce((acc, cur) => acc * fn(cur), 1) as unknown as VerticalFactor;
}
