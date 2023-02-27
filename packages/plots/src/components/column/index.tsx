import React, { forwardRef } from 'react';
import { ColumnOptions } from '@antv/g2plot';
import { BaseConfig, CommonConfig } from '../../interface';
import { BaseChart } from '../base';

export type ColumnConfig = CommonConfig<BaseConfig<ColumnOptions>>;

const ColumnChart = forwardRef((props: ColumnConfig, ref) => <BaseChart {...props} chartType="Column" ref={ref} />);

export default ColumnChart;
