import React from 'react';
import { FunnelOptions } from '../../core';
import { CommonConfig } from '../../interface';
import { BaseChart } from '../base';
import { Funnel } from '../../core/plots/funnel';

export type FunnelConfig = CommonConfig<FunnelOptions>;

const FunnelChart = (props: FunnelConfig) => <BaseChart {...props} chartType="Funnel" />;

export default Object.assign(FunnelChart, Funnel.getFields());
