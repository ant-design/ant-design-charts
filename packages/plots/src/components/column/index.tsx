import React, {forwardRef} from 'react';
import type {ForwardRefExoticComponent, PropsWithoutRef, RefAttributes} from 'react';
import type {ColumnOptions} from '../../core';
import type {Chart, CommonConfig} from '../../interface';
import { BaseChart } from '../base';

export type ColumnConfig = CommonConfig<ColumnOptions>;

const ColumnChart: ForwardRefExoticComponent<PropsWithoutRef<ColumnConfig> & RefAttributes<Chart>> = forwardRef<
  Chart,
  ColumnConfig
>((props, ref) => <BaseChart {...props} chartType="Column" ref={ref}/>);

export default ColumnChart;
