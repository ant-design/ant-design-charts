import React, {forwardRef} from 'react';
import type {ForwardRefExoticComponent, PropsWithoutRef, RefAttributes} from 'react';
import { BaseChart } from '../base';

import type { LiquidOptions } from '../../core';
import type {Chart, CommonConfig} from '../../interface';

export type LiquidConfig = CommonConfig<LiquidOptions>;

const LiquidChart: ForwardRefExoticComponent<PropsWithoutRef<LiquidConfig> & RefAttributes<Chart>> = forwardRef<Chart, LiquidConfig>((props, ref) =>
  <BaseChart {...props} chartType="Liquid" ref={ref}/>);

export default LiquidChart;
