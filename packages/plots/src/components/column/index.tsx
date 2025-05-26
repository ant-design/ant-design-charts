import type { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react';
import type { ColumnOptions } from '../../core';
import type { Chart, CommonConfig } from '../../interface';
import { makeChartComp } from '../../util/makeChartComp';

export type ColumnConfig = CommonConfig<ColumnOptions>;

const ColumnChart: ForwardRefExoticComponent<PropsWithoutRef<ColumnConfig> & RefAttributes<Chart>> =
  makeChartComp<ColumnConfig>('Column');

export default ColumnChart;
