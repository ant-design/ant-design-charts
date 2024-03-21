import React, {forwardRef} from 'react';
import type {ForwardRefExoticComponent, PropsWithoutRef, RefAttributes} from 'react';
import type {TreemapOptions} from '../../core';
import type {Chart, CommonConfig} from '../../interface';
import { BaseChart } from '../base';

export type TreemapConfig = CommonConfig<TreemapOptions>;

const TreemapChart: ForwardRefExoticComponent<PropsWithoutRef<TreemapConfig> & RefAttributes<Chart>> = forwardRef<
  Chart,
  TreemapConfig
>((props, ref) => <BaseChart {...props} chartType="Treemap" ref={ref}/>);

export default TreemapChart;
