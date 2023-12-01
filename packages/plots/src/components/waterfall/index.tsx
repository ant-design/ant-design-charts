import React from 'react';
import { BaseChart } from '../base';

import type { WaterfallOptions } from '../../core';
import type { CommonConfig } from '../../interface';

export type WaterfallConfig = CommonConfig<WaterfallOptions>;

const WaterfallChart = (props: WaterfallConfig) => <BaseChart {...props} chartType="Waterfall" />;

export default WaterfallChart;
