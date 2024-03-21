import React, {forwardRef} from 'react';
import type {ForwardRefExoticComponent, PropsWithoutRef, RefAttributes} from 'react';
import type {TinyProgressOptions} from '../../../core';
import type {Chart, CommonConfig} from '../../../interface';
import { BaseChart } from '../../base';

export type TinyProgressConfig = CommonConfig<TinyProgressOptions>;

const TinyProgressChart: ForwardRefExoticComponent<PropsWithoutRef<TinyProgressConfig> & RefAttributes<Chart>> =
  forwardRef<Chart, TinyProgressConfig>((props, ref) => <BaseChart {...props} chartType="TinyProgress" ref={ref}/>);

export default TinyProgressChart;
