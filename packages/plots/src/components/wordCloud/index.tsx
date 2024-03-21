import React, {forwardRef} from 'react';
import type {ForwardRefExoticComponent, PropsWithoutRef, RefAttributes} from 'react';
import { BaseChart } from '../base';

import type { WordCloudOptions } from '../../core';
import type {Chart, CommonConfig} from '../../interface';

export type WordCloudConfig = CommonConfig<WordCloudOptions>;

const WordCloudChart: ForwardRefExoticComponent<PropsWithoutRef<WordCloudConfig> & RefAttributes<Chart>> = forwardRef<
  Chart,
  WordCloudConfig
>((props, ref) => <BaseChart {...props} chartType="WordCloud" ref={ref}/>);

export default WordCloudChart;
