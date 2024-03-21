import React, { forwardRef } from 'react';
import type { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react';
import type { VennOptions } from '../../core';
import type { Chart, CommonConfig } from '../../interface';
import { BaseChart } from '../base';

export type VennConfig = CommonConfig<VennOptions>;

const VennChart: ForwardRefExoticComponent<PropsWithoutRef<VennConfig> & RefAttributes<Chart>> = forwardRef<
  Chart,
  VennConfig
>((props, ref) => <BaseChart {...props} chartType="Venn" ref={ref} />);

export default VennChart;
