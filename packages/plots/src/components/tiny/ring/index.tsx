import type { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react';
import { TinyRingOptions } from '../../../core';
import { Chart, CommonConfig } from '../../../interface';
import { makeChartComp } from '../../../util/makeChartComp';

export type TinyRingConfig = CommonConfig<TinyRingOptions>;

const TinyRingChart: ForwardRefExoticComponent<PropsWithoutRef<TinyRingConfig> & RefAttributes<Chart>> =
  makeChartComp<TinyRingConfig>('TinyRing');

export default TinyRingChart;
