import React from 'react';
import { BarOptions } from '../../core';
import { CommonConfig } from '../../interface';
import { BaseChart } from '../base';

export type BarConfig = CommonConfig<BarOptions>;

const BarChart = (props: BarConfig) => <BaseChart {...props} chartType="Bar" />;

export default BarChart;
