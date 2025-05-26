import type { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react';
import type { StockOptions } from '../../core';
import type { Chart, CommonConfig } from '../../interface';
import { makeChartComp } from '../../util/makeChartComp';

export type StockConfig = CommonConfig<StockOptions>;

const StockChart: ForwardRefExoticComponent<PropsWithoutRef<StockConfig> & RefAttributes<Chart>> =
  makeChartComp<StockConfig>('Stock');

export default StockChart;
