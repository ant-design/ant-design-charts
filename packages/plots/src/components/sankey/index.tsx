import React from 'react';
import { SankeyOptions } from '../../core';
import { CommonConfig } from '../../interface';
import { BaseChart } from '../base';

export type SankeyConfig = CommonConfig<SankeyOptions>;

const SankeyChart = (props: SankeyConfig) => <BaseChart {...props} chartType="Sankey" />;

export default SankeyChart;
