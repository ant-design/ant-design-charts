import type { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react';
import type { HistogramOptions } from '../../core';
import type { Chart, CommonConfig } from '../../interface';
import { makeChartComp } from '../../util/makeChartComp';

export type HistogramConfig = CommonConfig<HistogramOptions>;

const HistogramChart: ForwardRefExoticComponent<PropsWithoutRef<HistogramConfig> & RefAttributes<Chart>> =
  makeChartComp<HistogramConfig>('Histogram');

export default HistogramChart;
