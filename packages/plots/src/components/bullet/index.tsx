import React, {forwardRef} from 'react';
import type {ForwardRefExoticComponent, PropsWithoutRef, RefAttributes} from 'react';
import type {BulletOptions} from '../../core';
import type {Chart, CommonConfig} from '../../interface';
import { BaseChart } from '../base';

export type BulletConfig = CommonConfig<BulletOptions>;

const BulletChart: ForwardRefExoticComponent<PropsWithoutRef<BulletConfig> & RefAttributes<Chart>> = forwardRef<Chart, BulletConfig>((props, ref) =>
  <BaseChart {...props} chartType="Bullet" ref={ref}/>);

export default BulletChart;
