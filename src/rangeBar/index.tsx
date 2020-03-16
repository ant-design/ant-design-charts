import React, { useContext, useEffect } from 'react';
import { RangeBar, RangeBarConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ConfigContext, ErrorBoundary } from '../base';

export interface RangeBarConfig extends G2plotProps {
  chartRef?: React.MutableRefObject<RangeBar | undefined>;
  style?: React.CSSProperties;
  className?: string;
}

const TechRangeBar: React.FC<RangeBarConfig> = (props: RangeBarConfig) => {
  const { chartRef, style = {}, className, ...rest } = props;

  const { chart, container } = useChart<RangeBar, RangeBarConfig>(RangeBar, rest);

  useEffect(() => {
    if (chartRef) {
      chartRef.current = chart.current;
    }
  }, [chart.current]);

  return <div className={className} style={style} ref={container} />;
};

const RangeBarChart = (props: RangeBarConfig) => {
  const config = useContext(ConfigContext);
  return (
    <ErrorBoundary>
      <TechRangeBar {...config} {...props} />
    </ErrorBoundary>
  );
};

RangeBarChart.defaultProps = RangeBar.getDefaultOptions();

export default RangeBarChart;
