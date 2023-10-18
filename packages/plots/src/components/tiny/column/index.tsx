import React from 'react';
import { TinyColumnOptions } from '../../../core';
import { CommonConfig } from '../../../interface';
import { BaseChart } from '../../base';

export type TinyColumnConfig = CommonConfig<TinyColumnOptions>;

const TinyLineChart = (props: TinyColumnConfig) => <BaseChart {...props} chartType="TinyColumn" />;

export default TinyLineChart;
