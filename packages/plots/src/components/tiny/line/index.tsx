import React, {forwardRef} from 'react';
import type {ForwardRefExoticComponent, PropsWithoutRef, RefAttributes} from 'react';
import type {TinyLineOptions} from '../../../core';
import type {Chart, CommonConfig} from '../../../interface';
import { BaseChart } from '../../base';

export type TinyLineConfig = CommonConfig<TinyLineOptions>;

const TinyLineChart: ForwardRefExoticComponent<PropsWithoutRef<TinyLineConfig> & RefAttributes<Chart>> = forwardRef<
  Chart,
  TinyLineConfig
>((props, ref) => <BaseChart {...props} chartType="TinyLine" ref={ref}/>);

export default TinyLineChart;
