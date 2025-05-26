import type { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react';
import { BarOptions } from '../../core';
import type { Chart, CommonConfig } from '../../interface';
import { makeChartComp } from '../../util/makeChartComp';

export type BarConfig = CommonConfig<BarOptions>;

const BarChart: ForwardRefExoticComponent<PropsWithoutRef<BarConfig> & RefAttributes<Chart>> = makeChartComp<BarConfig>(
  'Bar'
);

export default BarChart;
