import React from 'react';
import { VennOptions } from '../../core';
import { CommonConfig } from '../../interface';
import { BaseChart } from '../base';

export type VennConfig = CommonConfig<VennOptions>;

const VennChart = (props: VennConfig) => <BaseChart {...props} chartType="Venn" />;

export default VennChart;
