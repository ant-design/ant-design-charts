import React from 'react';
import { StockOptions } from '../../core';
import { CommonConfig } from '../../interface';
import { BaseChart } from '../base';

export type StockConfig = CommonConfig<StockOptions>;

const StockChart = (props: StockConfig) => <BaseChart {...props} chartType="Stock" />;

export default StockChart;
