import React from 'react';
import { ColumnOptions } from '../../core';
import { CommonConfig } from '../../interface';
import { BaseChart } from '../base';

export type ColumnConfig = CommonConfig<ColumnOptions>;

const ColumnChart = (props: ColumnConfig) => <BaseChart {...props} chartType="Column" />;

export default ColumnChart;
