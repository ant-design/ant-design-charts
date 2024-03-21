import React, { forwardRef } from 'react';
import type { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react';
import { DualAxesOptions } from '../../core';
import { Chart, CommonConfig } from '../../interface';
import { BaseChart } from '../base';

export type DualAxesConfig = CommonConfig<DualAxesOptions>;

const DualAxesChart: ForwardRefExoticComponent<PropsWithoutRef<DualAxesConfig> & RefAttributes<Chart>> = forwardRef<
  Chart,
  DualAxesConfig
>((props, ref) => <BaseChart {...props} chartType="DualAxes" ref={ref} />);

export default DualAxesChart;
