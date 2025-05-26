import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react';
import type { AreaOptions } from '../../core';
import type { Chart, CommonConfig } from '../../interface';
import { makeChartComp } from '../../util/makeChartComp';

export type AreaConfig = CommonConfig<AreaOptions>;

const AreaChart: ForwardRefExoticComponent<PropsWithoutRef<AreaConfig> & RefAttributes<Chart>> =
  makeChartComp<AreaConfig>('Area');

export default AreaChart;
