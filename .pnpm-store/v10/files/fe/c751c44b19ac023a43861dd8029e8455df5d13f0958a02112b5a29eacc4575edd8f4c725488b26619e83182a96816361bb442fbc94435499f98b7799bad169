import { TickMethod } from '../types';
import { findTickInterval } from '../utils';

export const d3Time: TickMethod<Date> = (min, max, count, interval, utc: boolean) => {
  const r = min > max;
  const lo = r ? max : min;
  const hi = r ? min : max;
  const [tickInterval, step] = findTickInterval(lo, hi, count, interval, utc);
  const ticks = tickInterval.range(lo, new Date(+hi + 1), step, true);
  return r ? ticks.reverse() : ticks;
};
