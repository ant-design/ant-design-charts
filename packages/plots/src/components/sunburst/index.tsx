import React from 'react';
import { BaseChart } from '../base';

import type { SunburstOptions } from '../../core';
import type { CommonConfig } from '../../interface';

export type SunburstConfig = CommonConfig<SunburstOptions>;

const SunburstChart = (props: SunburstConfig) => <BaseChart {...props} chartType="Sunburst" />;

export default SunburstChart;
