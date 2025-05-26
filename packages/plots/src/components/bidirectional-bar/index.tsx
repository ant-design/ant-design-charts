import type { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react';
import type { BidirectionalBarOptions } from '../../core';
import type { Chart, CommonConfig } from '../../interface';
import { makeChartComp } from '../../util/makeChartComp';

export type BidirectionalBarConfig = CommonConfig<BidirectionalBarOptions>;

const BidirectionalBarChart: ForwardRefExoticComponent<PropsWithoutRef<BidirectionalBarConfig> & RefAttributes<Chart>> =
  makeChartComp<BidirectionalBarConfig>('BidirectionalBar');

export default BidirectionalBarChart;
