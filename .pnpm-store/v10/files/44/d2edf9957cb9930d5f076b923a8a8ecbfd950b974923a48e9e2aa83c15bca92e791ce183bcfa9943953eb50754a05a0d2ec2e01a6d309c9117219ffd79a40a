import { isNumber, isArray } from '@antv/util';

export type SeriesAttr = number | number[];

export type StandardSeriesAttr = [number, number, number, number];

/**
 * 规范化padding
 */
export function parseSeriesAttr(series?: SeriesAttr): StandardSeriesAttr {
  if (isNumber(series)) {
    return [series, series, series, series];
  }
  if (isArray(series)) {
    const len = (series as number[]).length;

    if (len === 1) {
      return [series[0], series[0], series[0], series[0]];
    }
    if (len === 2) {
      return [series[0], series[1], series[0], series[1]];
    }
    if (len === 3) {
      return [series[0], series[1], series[2], series[1]];
    }
    if (len === 4) {
      return series as StandardSeriesAttr;
    }
  }
  return [0, 0, 0, 0];
}
