import React from 'react';
import { AreaOptions } from '../../core';
import { CommonConfig } from '../../interface';
import { BaseChart } from '../base';

export type AreaConfig = CommonConfig<AreaOptions>;

const AreaChart = (props: AreaConfig) => <BaseChart {...props} chartType="Area" />;

export default AreaChart;
