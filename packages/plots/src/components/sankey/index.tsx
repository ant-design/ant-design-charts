import React, {forwardRef} from 'react';
import type {ForwardRefExoticComponent, PropsWithoutRef, RefAttributes} from 'react';
import type {SankeyOptions} from '../../core';
import type {Chart, CommonConfig} from '../../interface';
import { BaseChart } from '../base';

export type SankeyConfig = CommonConfig<SankeyOptions>;

const SankeyChart: ForwardRefExoticComponent<PropsWithoutRef<SankeyConfig> & RefAttributes<Chart>> = forwardRef<Chart, SankeyConfig>((props, ref) =>
  <BaseChart {...props} chartType="Sankey" ref={ref}/>);

export default SankeyChart;
