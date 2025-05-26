import type { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react';
import type { CirclePackingOptions } from '../../core';
import type { Chart, CommonConfig } from '../../interface';
import { makeChartComp } from '../../util/makeChartComp';

export type CirclePackingConfig = CommonConfig<CirclePackingOptions>;

const CirclePackingChart: ForwardRefExoticComponent<PropsWithoutRef<CirclePackingConfig> & RefAttributes<Chart>> =
  makeChartComp<CirclePackingConfig>('CirclePacking');

export default CirclePackingChart;
