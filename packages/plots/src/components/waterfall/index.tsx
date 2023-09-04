import React from 'react';
import { WaterfallOptions } from '../../core';
import { CommonConfig } from '../../interface';
import { BaseChart } from '../base';

export type WaterfallConfig = CommonConfig<WaterfallOptions>;

const WaterfallChart = (props: WaterfallConfig) => <BaseChart {...props} chartType="Waterfall" />;

export default WaterfallChart;
