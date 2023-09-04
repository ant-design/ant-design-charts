import type { BaseOptions, Options } from '../../types/common';

export type HistogramOptions = Options &
  BaseOptions & {
    binField: string;
    binWidth: number;
    binNumber: number;
  };
