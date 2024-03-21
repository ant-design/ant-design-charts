import React, {forwardRef} from 'react';
import type {ForwardRefExoticComponent, PropsWithoutRef, RefAttributes} from 'react';
import type {AreaOptions} from '../../core';
import type {CommonConfig, Chart} from '../../interface';
import { BaseChart } from '../base';

export type AreaConfig = CommonConfig<AreaOptions>;

const AreaChart: ForwardRefExoticComponent<PropsWithoutRef<AreaConfig> & RefAttributes<Chart>> = forwardRef<
  Chart,
  AreaConfig
>((props, ref) => <BaseChart {...props} chartType="Area" ref={ref}/>);

export default AreaChart;
