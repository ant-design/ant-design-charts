import React from 'react';
import { TreemapOptions } from '../../core';
import { CommonConfig } from '../../interface';
import { BaseChart } from '../base';

export type TreemapConfig = CommonConfig<TreemapOptions>;

const TreemapChart = (props: TreemapConfig) => <BaseChart {...props} chartType="Treemap" />;

export default TreemapChart;
