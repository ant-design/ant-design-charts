import React, {forwardRef} from 'react';
import type {ForwardRefExoticComponent, PropsWithoutRef, RefAttributes} from 'react';
import type {PieOptions} from '../../core';
import type {Chart, CommonConfig} from '../../interface';
import { BaseChart } from '../base';

export type PieConfig = CommonConfig<PieOptions>;

const PieChart: ForwardRefExoticComponent<PropsWithoutRef<PieConfig> & RefAttributes<Chart>> = forwardRef<
  Chart,
  PieConfig
>((props, ref) => <BaseChart {...props} chartType="Pie" ref={ref}/>);

export default PieChart;
