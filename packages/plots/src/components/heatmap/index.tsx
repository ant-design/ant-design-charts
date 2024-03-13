import React, {forwardRef} from 'react';
import type {ForwardRefExoticComponent, PropsWithoutRef, RefAttributes} from 'react';
import type {HeatmapOptions} from '../../core';
import type {Chart, CommonConfig} from '../../interface';
import { BaseChart } from '../base';

export type HeatmapConfig = CommonConfig<HeatmapOptions>;

const HeatmapChart: ForwardRefExoticComponent<PropsWithoutRef<HeatmapConfig> & RefAttributes<Chart>> = forwardRef<Chart, HeatmapConfig>((props, ref) =>
  <BaseChart {...props} chartType="Heatmap" ref={ref}/>);

export default HeatmapChart;
