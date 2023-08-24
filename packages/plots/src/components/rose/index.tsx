import React from 'react';
import { BaseChart } from '../base';

import type { RoseOptions } from '../../core';
import type { CommonConfig } from '../../interface';

export type RoseConfig = CommonConfig<RoseOptions>;

const RoseChart = (props: RoseConfig) => <BaseChart {...props} chartType="Rose" />;

export default RoseChart;
