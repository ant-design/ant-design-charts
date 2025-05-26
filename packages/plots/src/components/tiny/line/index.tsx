import type { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react';
import type { TinyLineOptions } from '../../../core';
import type { Chart, CommonConfig } from '../../../interface';
import { makeChartComp } from '../../../util/makeChartComp';

export type TinyLineConfig = CommonConfig<TinyLineOptions>;

const TinyLineChart: ForwardRefExoticComponent<PropsWithoutRef<TinyLineConfig> & RefAttributes<Chart>> =
  makeChartComp<TinyLineConfig>('TinyLine');

export default TinyLineChart;
