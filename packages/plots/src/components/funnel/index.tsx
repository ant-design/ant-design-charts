import type { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react';
import type { FunnelOptions } from '../../core';
import type { Chart, CommonConfig } from '../../interface';
import { makeChartComp } from '../../util/makeChartComp';

export type FunnelConfig = CommonConfig<FunnelOptions>;

const FunnelChart: ForwardRefExoticComponent<PropsWithoutRef<FunnelConfig> & RefAttributes<Chart>> =
  makeChartComp<FunnelConfig>('Funnel');

export default FunnelChart;
