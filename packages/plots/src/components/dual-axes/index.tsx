import React from 'react';
import { DualAxesOptions } from '../../core';
import { CommonConfig } from '../../interface';
import { BaseChart } from '../base';

export type DualAxesConfig = CommonConfig<DualAxesOptions>;

const DualAxesChart = (props: DualAxesConfig) => <BaseChart {...props} chartType="DualAxes" />;

export default DualAxesChart;
