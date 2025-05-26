import type { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react';
import type { LineOptions } from '../../core';
import type { Chart, CommonConfig } from '../../interface';
import { makeChartComp } from '../../util/makeChartComp';

export type LineConfig = CommonConfig<LineOptions>;

const LineChart: ForwardRefExoticComponent<PropsWithoutRef<LineConfig> & RefAttributes<Chart>> =
  makeChartComp<LineConfig>('Line');

export default LineChart;
