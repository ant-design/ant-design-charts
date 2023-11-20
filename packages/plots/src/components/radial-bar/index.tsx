import React from 'react';
import { SankeyOptions } from '../../core';
import { CommonConfig } from '../../interface';
import { BaseChart } from '../base';

export type SankeyConfig = CommonConfig<SankeyOptions>;

const RadialBar = (props: SankeyConfig) => <BaseChart {...props} chartType="RadialBar" />;

export default RadialBar;
