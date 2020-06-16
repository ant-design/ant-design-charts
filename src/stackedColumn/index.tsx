import React, { useEffect, useImperativeHandle, forwardRef } from 'react';
import {
  StackedColumn as G2plotStackedColumn,
  StackedColumnConfig as G2plotProps,
} from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ErrorBoundary } from '../base';

export interface StackedColumnConfig extends Omit<G2plotProps, 'tooltip'> {
  chartRef?: React.MutableRefObject<G2plotStackedColumn | undefined>;
  style?: React.CSSProperties;
  className?: string;
}

const StackedColumnChart = forwardRef((props: StackedColumnConfig, ref) => {
  const { chartRef, style = {}, className, ...rest } = props;

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
      <div className={className} style={style} ref={container} />
    </ErrorBoundary>
  );
});

StackedColumnChart.defaultProps = G2plotStackedColumn.getDefaultOptions();

export default StackedColumnChart;
