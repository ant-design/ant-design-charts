import React from 'react';
import { RadialBarOptions } from '../../core';
import { CommonConfig } from '../../interface';
import { BaseChart } from '../base';

export type RadialBarConfig = CommonConfig<RadialBarOptions>;

const RadialBar = (props: RadialBarConfig) => <BaseChart {...props} chartType="RadialBar" />;

export default RadialBar;
