import type { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react';
import type { BulletOptions } from '../../core';
import type { Chart, CommonConfig } from '../../interface';
import { makeChartComp } from '../../util/makeChartComp';

export type BulletConfig = CommonConfig<BulletOptions>;

const BulletChart: ForwardRefExoticComponent<PropsWithoutRef<BulletConfig> & RefAttributes<Chart>> =
  makeChartComp<BulletConfig>('Bullet');

export default BulletChart;
