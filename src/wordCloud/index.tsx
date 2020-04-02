import React, { useEffect, useImperativeHandle, forwardRef } from 'react';
import { WordCloud as G2plotWordCloud, WordCloudConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ErrorBoundary } from '../base';

export interface WordCloudConfig extends G2plotProps {
  chartRef?: React.MutableRefObject<G2plotWordCloud | undefined>;
  chartStyle?: React.CSSProperties;
  className?: string;
}

const WordCloudChart = forwardRef((props: WordCloudConfig, ref) => {
  const { chartRef, chartStyle = {}, className, ...rest } = props;

  const { chart, container } = useChart<G2plotWordCloud, WordCloudConfig>(G2plotWordCloud, rest);

  useEffect(() => {
    if (chartRef) {
      chartRef.current = chart.current;
    }
  }, [chart.current]);
  useImperativeHandle(ref, () => ({
    getChart: () => chart.current,
  }));

  return (
    <ErrorBoundary>
      <div className={className} style={chartStyle} ref={container} />
    </ErrorBoundary>
  );
});

// WordCloudChart.defaultProps = G2plotWordCloud.getDefaultOptions();

export default WordCloudChart;
