import React from 'react';
import { ScatterOptions } from '../../core';
import { CommonConfig } from '../../interface';
import { BaseChart } from '../base';

export type ScatterConfig = CommonConfig<ScatterOptions>;

const ScatterChart = (props: ScatterConfig) => <BaseChart {...props} chartType="Scatter" />;

export default ScatterChart;
