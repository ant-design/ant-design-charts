import type { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react';
import type { RadialBarOptions } from '../../core';
import type { Chart, CommonConfig } from '../../interface';
import { makeChartComp } from '../../util/makeChartComp';

export type RadialBarConfig = CommonConfig<RadialBarOptions>;

const RadialBar: ForwardRefExoticComponent<PropsWithoutRef<RadialBarConfig> & RefAttributes<Chart>> =
  makeChartComp<RadialBarConfig>('RadialBar');

export default RadialBar;
