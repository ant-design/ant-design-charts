import type { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react';
import type { RoseOptions } from '../../core';
import type { Chart, CommonConfig } from '../../interface';
import { makeChartComp } from '../../util/makeChartComp';

export type RoseConfig = CommonConfig<RoseOptions>;

const RoseChart: ForwardRefExoticComponent<PropsWithoutRef<RoseConfig> & RefAttributes<Chart>> =
  makeChartComp<RoseConfig>('Rose');

export default RoseChart;
