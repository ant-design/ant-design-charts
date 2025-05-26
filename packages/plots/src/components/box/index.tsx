import type { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react';
import type { BoxOptions } from '../../core';
import type { Chart, CommonConfig } from '../../interface';
import { makeChartComp } from '../../util/makeChartComp';

export type BoxConfig = CommonConfig<BoxOptions>;

const BoxChart: ForwardRefExoticComponent<PropsWithoutRef<BoxConfig> & RefAttributes<Chart>> =
  makeChartComp<BoxConfig>('Box');

export default BoxChart;
