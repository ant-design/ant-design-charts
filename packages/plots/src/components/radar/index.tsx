import type { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react';
import type { RadarOptions } from '../../core';
import type { Chart, CommonConfig } from '../../interface';
import { makeChartComp } from '../../util/makeChartComp';

export type RadarConfig = CommonConfig<RadarOptions>;

const RadarChart: ForwardRefExoticComponent<PropsWithoutRef<RadarConfig> & RefAttributes<Chart>> =
  makeChartComp<RadarConfig>('Radar');

export default RadarChart;
