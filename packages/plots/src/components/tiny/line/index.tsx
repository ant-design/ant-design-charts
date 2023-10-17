import React from 'react';
import { TinyLineOptions } from '../../../core';
import { CommonConfig } from '../../../interface';
import { BaseChart } from '../../base';

export type TinyLineConfig = CommonConfig<TinyLineOptions>;

const TinyLineChart = (props: TinyLineConfig) => <BaseChart {...props} chartType="TinyLine" />;

export default TinyLineChart;
