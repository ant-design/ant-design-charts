import React, { forwardRef } from 'react';
import type { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react';
import { BaseChart } from '../base';

import type { RoseOptions } from '../../core';
import type { Chart, CommonConfig } from '../../interface';

export type RoseConfig = CommonConfig<RoseOptions>;

const RoseChart: ForwardRefExoticComponent<PropsWithoutRef<RoseConfig> & RefAttributes<Chart>> = forwardRef<
  Chart,
  RoseConfig
>((props, ref) => <BaseChart {...props} chartType="Rose" ref={ref} />);

export default RoseChart;
