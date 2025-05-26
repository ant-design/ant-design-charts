import type { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react';
import type { MixOptions } from '../../core';
import type { Chart, CommonConfig } from '../../interface';
import { makeChartComp } from '../../util/makeChartComp';

export type MixConfig = CommonConfig<MixOptions>;

const MixChart: ForwardRefExoticComponent<PropsWithoutRef<MixConfig> & RefAttributes<Chart>> =
  makeChartComp<MixConfig>('Mix');

export default MixChart;
