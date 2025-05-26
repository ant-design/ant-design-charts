import type { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react';
import type { WordCloudOptions } from '../../core';
import type { Chart, CommonConfig } from '../../interface';
import { makeChartComp } from '../../util/makeChartComp';

export type WordCloudConfig = CommonConfig<WordCloudOptions>;

const WordCloudChart: ForwardRefExoticComponent<PropsWithoutRef<WordCloudConfig> & RefAttributes<Chart>> =
  makeChartComp<WordCloudConfig>('WordCloud');

export default WordCloudChart;
