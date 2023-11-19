import React from 'react';
import { BaseChart } from '../base';

import { ParallelOptions } from '../../core';
import { CommonConfig } from '../../interface';

export type ParallelConfig = CommonConfig<ParallelOptions>;

const ParallelChart = (props: ParallelConfig) => <BaseChart {...props} hartType="Parallel" />;

export default ParallelChart;
