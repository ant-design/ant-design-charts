import type { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react';
import { DualAxesOptions } from '../../core';
import { Chart, CommonConfig } from '../../interface';
import { makeChartComp } from '../../util/makeChartComp';

export type DualAxesConfig = CommonConfig<DualAxesOptions>;

const DualAxesChart: ForwardRefExoticComponent<PropsWithoutRef<DualAxesConfig> & RefAttributes<Chart>> =
  makeChartComp<DualAxesConfig>('DualAxes');

export default DualAxesChart;
