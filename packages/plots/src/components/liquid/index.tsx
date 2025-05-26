import type { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react';
import type { LiquidOptions } from '../../core';
import type { Chart, CommonConfig } from '../../interface';
import { makeChartComp } from '../../util/makeChartComp';
export type LiquidConfig = CommonConfig<LiquidOptions>;

const LiquidChart: ForwardRefExoticComponent<PropsWithoutRef<LiquidConfig> & RefAttributes<Chart>> =
  makeChartComp<LiquidConfig>('Liquid');

export default LiquidChart;
