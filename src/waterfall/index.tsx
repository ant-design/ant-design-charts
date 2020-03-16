import React, { useContext, useEffect } from 'react';
import { Waterfall, WaterfallConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ConfigContext, ErrorBoundary } from '../base';

export interface WaterfallConfig extends G2plotProps {
  chartRef?: React.MutableRefObject<Waterfall | undefined>;
  style?: React.CSSProperties;
  className?: string;
}

const TechWaterfall: React.FC<WaterfallConfig> = (props: WaterfallConfig) => {
  const { chartRef, style = {}, className, ...rest } = props;

  const { chart, container } = useChart<Waterfall, WaterfallConfig>(Waterfall, rest);

  useEffect(() => {
    if (chartRef) {
      chartRef.current = chart.current;
    }
  }, [chart.current]);

  return <div className={className} style={style} ref={container} />;
};

const WaterfallChart = (props: WaterfallConfig) => {
  const config = useContext(ConfigContext);
  return (
    <ErrorBoundary>
      <TechWaterfall {...config} {...props} />
    </ErrorBoundary>
  );
};

WaterfallChart.defaultProps = Waterfall.getDefaultOptions();

export default WaterfallChart;
