import React, { forwardRef } from 'react';
import type { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react';
import type { RadialBarOptions } from '../../core';
import type { Chart, CommonConfig } from '../../interface';
import { BaseChart } from '../base';

export type RadialBarConfig = CommonConfig<RadialBarOptions>;

const RadialBar: ForwardRefExoticComponent<PropsWithoutRef<RadialBarConfig> & RefAttributes<Chart>> = forwardRef<
  Chart,
  RadialBarConfig
>((props, ref) => <BaseChart {...props} chartType="RadialBar" ref={ref} />);

export default RadialBar;
