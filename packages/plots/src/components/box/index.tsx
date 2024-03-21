import React, {forwardRef} from 'react';
import type {ForwardRefExoticComponent, PropsWithoutRef, RefAttributes} from 'react';
import type {BoxOptions} from '../../core';
import type {Chart, CommonConfig} from '../../interface';
import { BaseChart } from '../base';

export type BoxConfig = CommonConfig<BoxOptions>;

const BoxChart: ForwardRefExoticComponent<PropsWithoutRef<BoxConfig> & RefAttributes<Chart>> = forwardRef<
  Chart,
  BoxConfig
>((props, ref) => <BaseChart {...props} chartType="Box" ref={ref}/>);

export default BoxChart;
