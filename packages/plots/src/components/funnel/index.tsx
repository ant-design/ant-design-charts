import React, { forwardRef } from 'react';
import type { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react';
import type { FunnelOptions } from '../../core';
import type { Chart, CommonConfig } from '../../interface';
import { BaseChart } from '../base';

export type FunnelConfig = CommonConfig<FunnelOptions>;

const FunnelChart: ForwardRefExoticComponent<PropsWithoutRef<FunnelConfig> & RefAttributes<Chart>> = forwardRef<
  Chart,
  FunnelConfig
>((props, ref) => <BaseChart {...props} chartType="Funnel" ref={ref} />);

export default FunnelChart;
