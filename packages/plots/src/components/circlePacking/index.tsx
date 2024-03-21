import React, {forwardRef} from 'react';
import type {ForwardRefExoticComponent, PropsWithoutRef, RefAttributes} from 'react';
import type {CirclePackingOptions} from '../../core';
import type {Chart, CommonConfig} from '../../interface';
import { BaseChart } from '../base';

export type CirclePackingConfig = CommonConfig<CirclePackingOptions>;

const CirclePackingChart: ForwardRefExoticComponent<PropsWithoutRef<CirclePackingConfig> & RefAttributes<Chart>> =
  forwardRef<Chart, CirclePackingConfig>((props, ref) => <BaseChart {...props} chartType="CirclePacking" ref={ref}/>);

export default CirclePackingChart;
