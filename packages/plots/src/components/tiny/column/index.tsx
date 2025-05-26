import type { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react';
import type { TinyColumnOptions } from '../../../core';
import type { Chart, CommonConfig } from '../../../interface';
import { makeChartComp } from '../../../util/makeChartComp';

export type TinyColumnConfig = CommonConfig<TinyColumnOptions>;

const TinyLineChart: ForwardRefExoticComponent<PropsWithoutRef<TinyColumnConfig> & RefAttributes<Chart>> =
  makeChartComp<TinyColumnConfig>('TinyColumn');

export default TinyLineChart;
