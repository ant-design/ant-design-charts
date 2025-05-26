import type { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react';
import type { TinyAreaOptions } from '../../../core';
import type { Chart, CommonConfig } from '../../../interface';
import { makeChartComp } from '../../../util/makeChartComp';

export type TinyAreaConfig = CommonConfig<TinyAreaOptions>;

const TinyAreaChart: ForwardRefExoticComponent<PropsWithoutRef<TinyAreaConfig> & RefAttributes<Chart>> =
  makeChartComp<TinyAreaConfig>('TinyArea');

export default TinyAreaChart;
