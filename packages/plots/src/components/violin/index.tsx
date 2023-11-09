import React from 'react';
import { LineOptions } from '../../core';
import { CommonConfig } from '../../interface';
import { BaseChart } from '../base';

export type ViolinConfig = CommonConfig<LineOptions>;

const ViolinChart = (props: ViolinConfig) => {
  return <BaseChart {...props} chartType="Violin" />;
}

export default ViolinChart;