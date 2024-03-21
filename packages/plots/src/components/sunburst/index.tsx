import React, {forwardRef} from 'react';
import type {ForwardRefExoticComponent, PropsWithoutRef, RefAttributes} from 'react';
import { BaseChart } from '../base';

import type { SunburstOptions } from '../../core';
import type {Chart, CommonConfig} from '../../interface';

export type SunburstConfig = CommonConfig<SunburstOptions>;

const SunburstChart: ForwardRefExoticComponent<PropsWithoutRef<SunburstConfig> & RefAttributes<Chart>> = forwardRef<
  Chart,
  SunburstConfig
>((props, ref) => <BaseChart {...props} chartType="Sunburst" ref={ref}/>);

export default SunburstChart;
