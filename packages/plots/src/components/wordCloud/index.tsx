import React from 'react';
import { BaseChart } from '../base';

import type { WordCloudOptions } from '../../core';
import type { CommonConfig } from '../../interface';

export type WordCloudConfig = CommonConfig<WordCloudOptions>;

const WordCloudChart = (props: WordCloudConfig) => <BaseChart {...props} chartType="WordCloud" />;

export default WordCloudChart;
