import React, { forwardRef } from 'react';
import type { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react';
import type { MixOptions } from '../../core';
import type { Chart, CommonConfig } from '../../interface';
import { BaseChart } from '../base';

export type MixConfig = CommonConfig<MixOptions>;

const MixChart: ForwardRefExoticComponent<PropsWithoutRef<MixConfig> & RefAttributes<Chart>> = forwardRef<
  Chart,
  MixConfig
>((props, ref) => <BaseChart {...props} chartType="Mix" ref={ref} />);

export default MixChart;
