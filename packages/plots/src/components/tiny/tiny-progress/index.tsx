import React from 'react';
import { TinyProgressOptions } from '../../../core';
import { CommonConfig } from '../../../interface';
import { BaseChart } from '../../base';

export type TinyLineConfig = CommonConfig<TinyProgressOptions>;

const TinyProgressChart = (props: TinyProgressOptions) => <BaseChart {...props} chartType="TinyProgress" />;

export default TinyProgressChart;
