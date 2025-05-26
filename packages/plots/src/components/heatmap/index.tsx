import type { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react';
import type { HeatmapOptions } from '../../core';
import type { Chart, CommonConfig } from '../../interface';
import { makeChartComp } from '../../util/makeChartComp';

export type HeatmapConfig = CommonConfig<HeatmapOptions>;

const HeatmapChart: ForwardRefExoticComponent<PropsWithoutRef<HeatmapConfig> & RefAttributes<Chart>> =
  makeChartComp<HeatmapConfig>('Heatmap');

export default HeatmapChart;
