import React from 'react';
import { TinyColumnOptions } from '../../../core';
import { CommonConfig } from '../../../interface';
import { BaseChart } from '../../base';

export type TinyLineConfig = CommonConfig<TinyColumnOptions>;

const TinyLineChart = (props: TinyLineConfig) => <BaseChart {...props} chartType="TinyColumn" />;

export default TinyLineChart;
