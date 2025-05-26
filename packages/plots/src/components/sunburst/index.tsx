import type { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react';
import type { SunburstOptions } from '../../core';
import type { Chart, CommonConfig } from '../../interface';
import { makeChartComp } from '../../util/makeChartComp';

export type SunburstConfig = CommonConfig<SunburstOptions>;

const SunburstChart: ForwardRefExoticComponent<PropsWithoutRef<SunburstConfig> & RefAttributes<Chart>> =
  makeChartComp<SunburstConfig>('Sunburst');

export default SunburstChart;
