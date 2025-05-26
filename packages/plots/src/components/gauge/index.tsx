import type { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react';
import type { GaugeOptions } from '../../core';
import type { Chart, CommonConfig } from '../../interface';
import { makeChartComp } from '../../util/makeChartComp';

export type GaugeConfig = CommonConfig<GaugeOptions>;

const GaugeChart: ForwardRefExoticComponent<PropsWithoutRef<GaugeConfig> & RefAttributes<Chart>> =
  makeChartComp<GaugeConfig>('Gauge');

export default GaugeChart;
