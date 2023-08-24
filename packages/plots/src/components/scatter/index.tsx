import React from 'react';
import { BaseChart } from '../base';

import type { ScatterOptions } from '../../core';
import type { CommonConfig } from '../../interface';

export type ScatterConfig = CommonConfig<ScatterOptions>;

const ScatterChart = (props: ScatterConfig) => <BaseChart {...props} chartType="Scatter" />;

export default ScatterChart;
