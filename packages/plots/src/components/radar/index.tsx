import React, { forwardRef } from 'react';
import type { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react';
import { BaseChart } from '../base';

import type { RadarOptions } from '../../core';
import type { Chart, CommonConfig } from '../../interface';

export type RadarConfig = CommonConfig<RadarOptions>;

const RadarChart: ForwardRefExoticComponent<PropsWithoutRef<RadarConfig> & RefAttributes<Chart>> = forwardRef<
  Chart,
  RadarConfig
>((props, ref) => <BaseChart {...props} chartType="Radar" ref={ref} />);

export default RadarChart;
