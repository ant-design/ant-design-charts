import React, { useEffect, useImperativeHandle, forwardRef } from 'react';
import {
  PercentStackedColumn as G2plotPercentStackedColumn,
  PercentStackedColumnConfig as G2plotProps,
} from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ErrorBoundary } from '../base';

export interface PercentStackedColumnConfig extends Omit<G2plotProps, 'tooltip'> {
  chartRef?: React.MutableRefObject<G2plotPercentStackedColumn | undefined>;
  style?: React.CSSProperties;
  className?: string;
}

const PercentStackedColumnChart = forwardRef((props: PercentStackedColumnConfig, ref) => {
  const { chartRef, style = {}, className, ...rest } = props;

  const { chart, container } = useChart<G2plotPercentStackedColumn, PercentStackedColumnConfig>(
    G2plotPercentStackedColumn,
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

PercentStackedColumnChart.defaultProps = G2plotPercentStackedColumn.getDefaultOptions();

export default PercentStackedColumnChart;
