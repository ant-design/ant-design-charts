import React, { forwardRef } from 'react';
import type { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react';
import type { LineOptions } from '../../core';
import type { Chart, CommonConfig } from '../../interface';
import { BaseChart } from '../base';

export type LineConfig = CommonConfig<LineOptions>;

const LineChart: ForwardRefExoticComponent<PropsWithoutRef<LineConfig> & RefAttributes<Chart>> = forwardRef<
  Chart,
  LineConfig
>((props, ref) => <BaseChart {...props} chartType="Line" ref={ref} />);

export default LineChart;
