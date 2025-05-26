import type { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react';
import type { TinyProgressOptions } from '../../../core';
import type { Chart, CommonConfig } from '../../../interface';
import { makeChartComp } from '../../../util/makeChartComp';

export type TinyProgressConfig = CommonConfig<TinyProgressOptions>;

const TinyProgressChart: ForwardRefExoticComponent<PropsWithoutRef<TinyProgressConfig> & RefAttributes<Chart>> =
  makeChartComp<TinyProgressConfig>('TinyProgress');

export default TinyProgressChart;
