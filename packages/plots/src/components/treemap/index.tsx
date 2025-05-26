import type { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react';
import type { TreemapOptions } from '../../core';
import type { Chart, CommonConfig } from '../../interface';
import { makeChartComp } from '../../util/makeChartComp';

export type TreemapConfig = CommonConfig<TreemapOptions>;

const TreemapChart: ForwardRefExoticComponent<PropsWithoutRef<TreemapConfig> & RefAttributes<Chart>> =
  makeChartComp<TreemapConfig>('Treemap');

export default TreemapChart;
