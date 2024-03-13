import React, {forwardRef} from 'react';
import type {ForwardRefExoticComponent, PropsWithoutRef, RefAttributes} from 'react';
import type {TinyColumnOptions} from '../../../core';
import type {Chart, CommonConfig} from '../../../interface';
import { BaseChart } from '../../base';

export type TinyColumnConfig = CommonConfig<TinyColumnOptions>;

const TinyLineChart: ForwardRefExoticComponent<PropsWithoutRef<TinyColumnConfig> & RefAttributes<Chart>> = forwardRef<Chart, TinyColumnConfig>((props, ref) =>
  <BaseChart {...props} chartType="TinyColumn" ref={ref}/>);

export default TinyLineChart;
