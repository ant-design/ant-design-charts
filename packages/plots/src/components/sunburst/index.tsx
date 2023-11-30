import React from 'react';
import { SunburstOptions } from '../../core';
import { CommonConfig } from '../../interface';
import { BaseChart } from '../base';

export type SunburstConfig = CommonConfig<SunburstOptions>;

const SunburstChart = (props: SunburstConfig) => <BaseChart {...props} chartType="Sunburst" />;

export default SunburstChart;
