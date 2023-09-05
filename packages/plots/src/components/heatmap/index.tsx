import React from 'react';
import { HeatmapOptions } from '../../core';
import { CommonConfig } from '../../interface';
import { BaseChart } from '../base';

export type HeatmapConfig = CommonConfig<HeatmapOptions>;

const HeatmapChart = (props: HeatmapConfig) => <BaseChart {...props} chartType="Heatmap" />;

export default HeatmapChart;
