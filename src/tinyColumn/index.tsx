import React, { useContext, useEffect, useImperativeHandle, forwardRef } from 'react';
import { TinyColumn as G2plotTinyColumn, TinyColumnConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ErrorBoundary, ConfigContext } from '../base';

export interface TinyColumnConfig extends G2plotProps {
  chartRef?: React.MutableRefObject<G2plotTinyColumn | undefined>;
  chartStyle?: React.CSSProperties;
  className?: string;
}

const TinyColumnChart = forwardRef((props: TinyColumnConfig, ref) => {
  const config = useContext(ConfigContext);
  const { chartRef, chartStyle = {}, className, ...rest } = Object.assign(config, props);

  const { chart, container } = useChart<G2plotTinyColumn, TinyColumnConfig>(G2plotTinyColumn, rest);

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

TinyColumnChart.defaultProps = G2plotTinyColumn.getDefaultOptions();

export default TinyColumnChart;
