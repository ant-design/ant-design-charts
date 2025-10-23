import { TickMethod } from '../types';
import { tickIncrement } from '../utils';
import type { BreakOptions } from '../types';

/**
 *  Insert breaks into ticks and delete the ticks covered by breaks.
 */
export const insertBreaksToTicks = (ticks: number[], breaks?: BreakOptions[]): number[] => {
  if (!breaks?.length) return ticks;
  const edgePoints = [...ticks, ...breaks.flatMap((b) => [b.start, b.end])];
  const uniqueSortedTicks = Array.from(new Set(edgePoints)).sort((a, b) => a - b);
  const filteredTicks = uniqueSortedTicks.filter(
    (tick) => !breaks.some(({ start, end }) => tick > start && tick < end)
  );
  return filteredTicks.length ? filteredTicks : ticks;
};

export const d3Ticks: TickMethod = (begin: number, end: number, count: number, breaks?: BreakOptions[]) => {
  let n;
  let ticks;

  let start = begin;
  let stop = end;

  if (start === stop && count > 0) {
    return [start];
  }

  let step = tickIncrement(start, stop, count);

  if (step === 0 || !Number.isFinite(step)) {
    return [];
  }

  if (step > 0) {
    start = Math.ceil(start / step);
    stop = Math.floor(stop / step);
    ticks = new Array((n = Math.ceil(stop - start + 1)));
    for (let i = 0; i < n; i += 1) {
      ticks[i] = (start + i) * step;
    }
  } else {
    step = -step;
    start = Math.ceil(start * step);
    stop = Math.floor(stop * step);
    ticks = new Array((n = Math.ceil(stop - start + 1)));
    for (let i = 0; i < n; i += 1) {
      ticks[i] = (start + i) / step;
    }
  }

  return insertBreaksToTicks(ticks, breaks);
};
