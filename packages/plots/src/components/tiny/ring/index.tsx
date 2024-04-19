import React, { forwardRef } from 'react';
import type { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react';
import { TinyRingOptions } from '../../../core';
import { Chart, CommonConfig } from '../../../interface';
import { BaseChart } from '../../base';

export type TinyRingConfig = CommonConfig<TinyRingOptions>;

const TinyRingChart: ForwardRefExoticComponent<PropsWithoutRef<TinyRingConfig> & RefAttributes<Chart>> = forwardRef<
  Chart,
  TinyRingConfig
>((props, ref) => <BaseChart {...props} chartType="TinyRing" ref={ref} />);

export default TinyRingChart;
