import React, { useContext, useEffect, useImperativeHandle, forwardRef } from 'react';
import {
  StackedColumn as G2plotStackedColumn,
  StackedColumnConfig as G2plotProps,
} from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ConfigContext, ErrorBoundary } from '../base';

export interface StackedColumnConfig extends G2plotProps {
  chartRef?: React.MutableRefObject<G2plotStackedColumn | undefined>;
  chartStyle?: React.CSSProperties;
  className?: string;
}

const StackedColumnChart = forwardRef((props: StackedColumnConfig, ref) => {
  const config = useContext(ConfigContext);
  const { chartRef, chartStyle = {}, className, ...rest } = Object.assign(config, props);

  const { chart, container } = useChart<G2plotStackedColumn, StackedColumnConfig>(
    G2plotStackedColumn,
    rest,
  );

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

StackedColumnChart.defaultProps = G2plotStackedColumn.getDefaultOptions();

export default StackedColumnChart;
