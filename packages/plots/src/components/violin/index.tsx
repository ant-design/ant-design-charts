import type { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react';
import type { ViolinOptions } from '../../core';
import type { Chart, CommonConfig } from '../../interface';
import { makeChartComp } from '../../util/makeChartComp';

export type ViolinConfig = CommonConfig<ViolinOptions>;

const ViolinChart: ForwardRefExoticComponent<PropsWithoutRef<ViolinConfig> & RefAttributes<Chart>> =
  makeChartComp<ViolinConfig>('Violin');

export default ViolinChart;
