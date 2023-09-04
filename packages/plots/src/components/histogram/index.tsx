import React from 'react';
import { HistogramOptions } from '../../core';
import { CommonConfig } from '../../interface';
import { BaseChart } from '../base';

export type HistogramConfig = CommonConfig<HistogramOptions>;

const HistogramChart = (props: HistogramConfig) => <BaseChart {...props} chartType="Histogram" />;

export default HistogramChart;
