import React from 'react';
import { PieOptions } from '../../core';
import { CommonConfig } from '../../interface';
import { BaseChart } from '../base';

export type PieConfig = CommonConfig<PieOptions>;

const PieChart = (props: PieConfig) => <BaseChart {...props} chartType="Pie" />;

export default PieChart;
