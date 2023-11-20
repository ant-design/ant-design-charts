import React from 'react';
import { CirclePackingOptions } from '../../core';
import { CommonConfig } from '../../interface';
import { BaseChart } from '../base';

export type CirclePackingConfig = CommonConfig<CirclePackingOptions>;

const CirclePackingChart = (props: CirclePackingConfig) => <BaseChart {...props} chartType="CirclePacking" />;

export default CirclePackingChart;
