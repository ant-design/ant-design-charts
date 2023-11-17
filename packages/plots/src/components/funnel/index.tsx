import React from 'react';
import { FunnelOptions } from '../../core';
import { CommonConfig } from '../../interface';
import { BaseChart } from '../base';

export type FunnelConfig = CommonConfig<FunnelOptions>;

const FunnelChart = (props: FunnelConfig) => <BaseChart {...props} chartType="Funnel" />;

export default FunnelChart;
