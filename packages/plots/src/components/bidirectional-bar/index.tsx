import React from 'react';
import { BidirectionalBarOptions } from '../../core';
import { CommonConfig } from '../../interface';
import { BaseChart } from '../base';

export type BidirectionalBarConfig = CommonConfig<BidirectionalBarOptions>;

const BidirectionalBarChart = (props: BidirectionalBarConfig) => <BaseChart {...props} chartType="BidirectionalBar" />;

export default BidirectionalBarChart;
