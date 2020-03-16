import React, { useContext, useEffect } from 'react';
import { Rose, RoseConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ConfigContext, ErrorBoundary } from '../base';

export interface RoseConfig extends G2plotProps {
  chartRef?: React.MutableRefObject<Rose | undefined>;
  style?: React.CSSProperties;
  className?: string;
}

const TechRose: React.FC<RoseConfig> = (props: RoseConfig) => {
  const { chartRef, style = {}, className, ...rest } = props;

  const { chart, container } = useChart<Rose, RoseConfig>(Rose, rest);

  useEffect(() => {
    if (chartRef) {
      chartRef.current = chart.current;
    }
  }, [chart.current]);

  return <div className={className} style={style} ref={container} />;
};

const RoseChart = (props: RoseConfig) => {
  const config = useContext(ConfigContext);
  return (
    <ErrorBoundary>
      <TechRose {...config} {...props} />
    </ErrorBoundary>
  );
};

RoseChart.defaultProps = Rose.getDefaultOptions();

export default RoseChart;
