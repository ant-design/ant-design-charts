import React, {forwardRef} from 'react';
import type {ForwardRefExoticComponent, PropsWithoutRef, RefAttributes} from 'react';
import type {ViolinOptions} from '../../core';
import type {Chart, CommonConfig} from '../../interface';
import { BaseChart } from '../base';

export type ViolinConfig = CommonConfig<ViolinOptions>;

const ViolinChart: ForwardRefExoticComponent<PropsWithoutRef<ViolinConfig> & RefAttributes<Chart>> = forwardRef<
  Chart,
  ViolinConfig
>((props, ref) => {
  return <BaseChart {...props} chartType="Violin" ref={ref}/>;
});

export default ViolinChart;
