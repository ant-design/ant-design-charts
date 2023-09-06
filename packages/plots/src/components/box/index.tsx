import React from 'react';
import { BoxOptions } from '../../core';
import { CommonConfig } from '../../interface';
import { BaseChart } from '../base';

export type BoxConfig = CommonConfig<BoxOptions>;

const BoxChart = (props: BoxConfig) => <BaseChart {...props} chartType="Box" />;

export default BoxChart;
