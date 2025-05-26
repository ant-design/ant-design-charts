import type { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react';
import type { VennOptions } from '../../core';
import type { Chart, CommonConfig } from '../../interface';
import { makeChartComp } from '../../util/makeChartComp';

export type VennConfig = CommonConfig<VennOptions>;

const VennChart: ForwardRefExoticComponent<PropsWithoutRef<VennConfig> & RefAttributes<Chart>> =
  makeChartComp<VennConfig>('Venn');

export default VennChart;
