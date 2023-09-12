import React from 'react';
import { GaugeOptions } from '../../core';
import { CommonConfig } from '../../interface';
import { BaseChart } from '../base';

export type GaugeConfig = CommonConfig<GaugeOptions>;

const GaugeChart = (props: GaugeConfig) => <BaseChart {...props} chartType="Gauge" />;

export default GaugeChart;
