import React from 'react';
import { TinyRingOptions } from '../../../core';
import { CommonConfig } from '../../../interface';
import { BaseChart } from '../../base';

export type TinyRingConfig = CommonConfig<TinyRingOptions>;

const TinyRingChart = (props: TinyRingOptions) => <BaseChart {...props} chartType="TinyRing" />;

export default TinyRingChart;
