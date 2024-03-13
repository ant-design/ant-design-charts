import React, {forwardRef} from 'react';
import type {ForwardRefExoticComponent, PropsWithoutRef, RefAttributes} from 'react';
import type {StockOptions} from '../../core';
import type {Chart, CommonConfig} from '../../interface';
import { BaseChart } from '../base';

export type StockConfig = CommonConfig<StockOptions>;

const StockChart: ForwardRefExoticComponent<PropsWithoutRef<StockConfig> & RefAttributes<Chart>> = forwardRef<Chart, StockConfig>((props, ref) =>
  <BaseChart {...props} chartType="Stock" ref={ref}/>);

export default StockChart;
