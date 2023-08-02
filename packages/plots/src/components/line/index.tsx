import React from 'react';
import { LineOptions } from '../../g2-core';
import { CommonConfig } from '../../interface';
import { BaseChart } from '../base';

export type LineConfig = CommonConfig<LineOptions>;

const LineChart = (props: LineConfig) => <BaseChart {...props} chartType="Line" />;

export default LineChart;
