import React, { useContext, useEffect } from 'react';
import { WordCloud, WordCloudConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ConfigContext, ErrorBoundary } from '../base';

export interface WordCloudConfig extends G2plotProps {
  chartRef?: React.MutableRefObject<WordCloud | undefined>;
  style?: React.CSSProperties;
  className?: string;
}

const TechWordCloud: React.FC<WordCloudConfig> = (props: WordCloudConfig) => {
  const { chartRef, style = {}, className, ...rest } = props;

  const { chart, container } = useChart<WordCloud, WordCloudConfig>(WordCloud, rest);

  useEffect(() => {
    if (chartRef) {
      chartRef.current = chart.current;
    }
  }, [chart.current]);

  return <div className={className} style={style} ref={container} />;
};

const WordCloudChart = (props: WordCloudConfig) => {
  const config = useContext(ConfigContext);
  return (
    <ErrorBoundary>
      <TechWordCloud {...config} {...props} />
    </ErrorBoundary>
  );
};

WordCloudChart.defaultProps = WordCloud.getDefaultOptions();

export default WordCloudChart;
