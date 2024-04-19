import React, { forwardRef } from 'react';
import type { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react';
import type { HistogramOptions } from '../../core';
import type { Chart, CommonConfig } from '../../interface';
import { BaseChart } from '../base';

export type HistogramConfig = CommonConfig<HistogramOptions>;

const HistogramChart: ForwardRefExoticComponent<PropsWithoutRef<HistogramConfig> & RefAttributes<Chart>> = forwardRef<
  Chart,
  HistogramConfig
>((props, ref) => <BaseChart {...props} chartType="Histogram" ref={ref} />);

export default HistogramChart;
