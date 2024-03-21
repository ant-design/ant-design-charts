import React, {forwardRef} from 'react';
import type {ForwardRefExoticComponent, PropsWithoutRef, RefAttributes} from 'react';
import type {GaugeOptions} from '../../core';
import type {Chart, CommonConfig} from '../../interface';
import { BaseChart } from '../base';

export type GaugeConfig = CommonConfig<GaugeOptions>;

const GaugeChart: ForwardRefExoticComponent<PropsWithoutRef<GaugeConfig> & RefAttributes<Chart>> = forwardRef<
  Chart,
  GaugeConfig
>((props: GaugeConfig, ref) => <BaseChart {...props} chartType="Gauge" ref={ref}/>);

export default GaugeChart;
