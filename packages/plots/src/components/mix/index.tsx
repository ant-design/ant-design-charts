import React from 'react';
import { MixOptions } from '../../core';
import { CommonConfig } from '../../interface';
import { BaseChart } from '../base';

export type MixConfig = CommonConfig<MixOptions>;

const MixChart = (props: MixConfig) => <BaseChart {...props} chartType="Mix" />;

export default MixChart;
