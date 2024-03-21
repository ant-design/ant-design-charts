import React, {forwardRef} from 'react';
import type {ForwardRefExoticComponent, PropsWithoutRef, RefAttributes} from 'react';
import type {TinyAreaOptions} from '../../../core';
import type {Chart, CommonConfig} from '../../../interface';
import { BaseChart } from '../../base';

export type TinyAreaConfig = CommonConfig<TinyAreaOptions>;

const TinyAreaChart: ForwardRefExoticComponent<PropsWithoutRef<TinyAreaConfig> & RefAttributes<Chart>> = forwardRef<
  Chart,
  TinyAreaConfig
>((props, ref) => <BaseChart {...props} chartType="TinyArea" ref={ref}/>);

export default TinyAreaChart;
