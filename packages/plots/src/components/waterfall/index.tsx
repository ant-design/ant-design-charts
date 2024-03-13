import React, {forwardRef} from 'react';
import type {ForwardRefExoticComponent, PropsWithoutRef, RefAttributes} from 'react';
import { BaseChart } from '../base';

import type { WaterfallOptions } from '../../core';
import type {Chart, CommonConfig} from '../../interface';

export type WaterfallConfig = CommonConfig<WaterfallOptions>;

const WaterfallChart: ForwardRefExoticComponent<PropsWithoutRef<WaterfallConfig> & RefAttributes<Chart>> = forwardRef<Chart, WaterfallConfig>((props, ref) =>
  <BaseChart {...props} chartType="Waterfall" ref={ref}/>);

export default WaterfallChart;
