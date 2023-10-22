import React from 'react';
import { TinyAreaOptions } from '../../../core';
import { CommonConfig } from '../../../interface';
import { BaseChart } from '../../base';

export type TinyAreaConfig = CommonConfig<TinyAreaOptions>;

const TinyAreaChart = (props: TinyAreaConfig) => <BaseChart {...props} chartType="TinyArea" />;

export default TinyAreaChart;
