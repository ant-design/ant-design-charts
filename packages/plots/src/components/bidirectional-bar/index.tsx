import React, { forwardRef } from 'react';
import type { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react';
import type { BidirectionalBarOptions } from '../../core';
import type { Chart, CommonConfig } from '../../interface';
import { BaseChart } from '../base';

export type BidirectionalBarConfig = CommonConfig<BidirectionalBarOptions>;

const BidirectionalBarChart: ForwardRefExoticComponent<PropsWithoutRef<BidirectionalBarConfig> & RefAttributes<Chart>> =
  forwardRef<Chart, BidirectionalBarConfig>((props, ref) => (
    <BaseChart {...props} chartType="BidirectionalBar" ref={ref} />
  ));

export default BidirectionalBarChart;
