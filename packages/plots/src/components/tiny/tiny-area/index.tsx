import React from 'react';
import { TinyAreaOptions } from '../../../core';
import { CommonConfig } from '../../../interface';
import { BaseChart } from '../../base';

export type TinyLineConfig = CommonConfig<TinyAreaOptions>;

const TinyAreaChart = (props: TinyLineConfig) => <BaseChart {...props} chartType="TinyArea" />;

export default TinyAreaChart;
