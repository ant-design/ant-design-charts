import React from 'react';
import { BaseChart } from '../base';

import type { LiquidOptions } from '../../core';
import type { CommonConfig } from '../../interface';

export type LiquidConfig = CommonConfig<LiquidOptions>;

const LiquidChart = (props: LiquidConfig) => <BaseChart {...props} chartType="Liquid" />;

export default LiquidChart;
