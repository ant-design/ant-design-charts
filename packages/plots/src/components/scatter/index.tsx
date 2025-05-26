import type { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react';
import type { ScatterOptions } from '../../core';
import type { Chart, CommonConfig } from '../../interface';
import { makeChartComp } from '../../util/makeChartComp';

export type ScatterConfig = CommonConfig<ScatterOptions>;

const ScatterChart: ForwardRefExoticComponent<PropsWithoutRef<ScatterConfig> & RefAttributes<Chart>> =
  makeChartComp<ScatterConfig>('Scatter');

export default ScatterChart;
