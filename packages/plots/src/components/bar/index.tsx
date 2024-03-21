import React, {forwardRef} from 'react';
import type {ForwardRefExoticComponent, PropsWithoutRef, RefAttributes} from 'react';
import { BarOptions } from '../../core';
import type {CommonConfig, Chart} from '../../interface';
import { BaseChart } from '../base';

export type BarConfig = CommonConfig<BarOptions>;

const BarChart: ForwardRefExoticComponent<PropsWithoutRef<BarConfig> & RefAttributes<Chart>> = forwardRef<
  Chart,
  BarConfig
>((props, ref) => <BaseChart {...props} chartType="Bar" ref={ref}/>);

export default BarChart;
