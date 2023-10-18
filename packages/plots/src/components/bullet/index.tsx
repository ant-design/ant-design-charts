import React from 'react';
import { BulletOptions } from '../../core';
import { CommonConfig } from '../../interface';
import { BaseChart } from '../base';

export type BulletConfig = CommonConfig<BulletOptions>;

const BulletChart = (props: BulletConfig) => <BaseChart {...props} chartType="Bullet" />;

export default BulletChart;
