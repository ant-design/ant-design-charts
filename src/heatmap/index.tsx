import React, { useContext, useEffect } from 'react';
import { Heatmap, HeatmapConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ConfigContext, ErrorBoundary } from '../base';

export interface HeatmapConfig extends G2plotProps {
  chartRef?: React.MutableRefObject<Heatmap | undefined>;
  style?: React.CSSProperties;
  className?: string;
}

const TechHeatmap: React.FC<HeatmapConfig> = (props: HeatmapConfig) => {
  const { chartRef, style = {}, className, ...rest } = props;

  const { chart, container } = useChart<Heatmap, HeatmapConfig>(Heatmap, rest);

  useEffect(() => {
    if (chartRef) {
      chartRef.current = chart.current;
    }
  }, [chart.current]);

  return <div className={className} style={style} ref={container} />;
};

const HeatmapChart = (props: HeatmapConfig) => {
  const config = useContext(ConfigContext);
  return (
    <ErrorBoundary>
      <TechHeatmap {...config} {...props} />
    </ErrorBoundary>
  );
};

HeatmapChart.defaultProps = Heatmap.getDefaultOptions();

export default HeatmapChart;
