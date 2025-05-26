import type { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react';
import type { WaterfallOptions } from '../../core';
import type { Chart, CommonConfig } from '../../interface';
import { makeChartComp } from '../../util/makeChartComp';

export type WaterfallConfig = CommonConfig<WaterfallOptions>;

const WaterfallChart: ForwardRefExoticComponent<PropsWithoutRef<WaterfallConfig> & RefAttributes<Chart>> =
  makeChartComp<WaterfallConfig>('Waterfall');

export default WaterfallChart;
