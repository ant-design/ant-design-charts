import React from 'react';
import { BaseChart } from '../base';

import type { RadarOptions } from '../../core';
import type { CommonConfig } from '../../interface';

export type RadarConfig = CommonConfig<RadarOptions>;

const RadarChart = (props: RadarConfig) => <BaseChart {...props} chartType="Radar" />;

export default RadarChart;
