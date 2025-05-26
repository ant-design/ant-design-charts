import type { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react';
import type { SankeyOptions } from '../../core';
import type { Chart, CommonConfig } from '../../interface';
import { makeChartComp } from '../../util/makeChartComp';

export type SankeyConfig = CommonConfig<SankeyOptions>;

const SankeyChart: ForwardRefExoticComponent<PropsWithoutRef<SankeyConfig> & RefAttributes<Chart>> =
  makeChartComp<SankeyConfig>('Sankey');

export default SankeyChart;
