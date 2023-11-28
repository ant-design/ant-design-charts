import React from 'react';
import { ViolinOptions } from '../../core';
import { CommonConfig } from '../../interface';
import { BaseChart } from '../base';

export type ViolinConfig = CommonConfig<ViolinOptions>;

const ViolinChart = (props: ViolinConfig) => {
  return <BaseChart {...props} chartType="Violin" />;
};

export default ViolinChart;
