import type { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react';
import type { PieOptions } from '../../core';
import type { Chart, CommonConfig } from '../../interface';
import { makeChartComp } from '../../util/makeChartComp';

export type PieConfig = CommonConfig<PieOptions>;

const PieChart: ForwardRefExoticComponent<PropsWithoutRef<PieConfig> & RefAttributes<Chart>> =
  makeChartComp<PieConfig>('Pie');

export default PieChart;
