import React, {forwardRef} from 'react';
import type {ForwardRefExoticComponent, PropsWithoutRef, RefAttributes} from 'react';
import { BaseChart } from '../base';

import type { ScatterOptions } from '../../core';
import type {Chart, CommonConfig} from '../../interface';

export type ScatterConfig = CommonConfig<ScatterOptions>;

const ScatterChart: ForwardRefExoticComponent<PropsWithoutRef<ScatterConfig> & RefAttributes<Chart>> = forwardRef<
  Chart,
  ScatterConfig
>((props, ref) => <BaseChart {...props} chartType="Scatter" ref={ref}/>);

export default ScatterChart;
