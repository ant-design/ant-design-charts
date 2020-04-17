import React, { useEffect, useImperativeHandle, forwardRef } from 'react';
import { Column as G2plotColumn, ColumnConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ErrorBoundary } from '../base';

export interface ColumnConfig extends G2plotProps {
  chartRef?: React.MutableRefObject<G2plotColumn | undefined>;
  style?: React.CSSProperties;
  className?: string;
}

const ColumnChart = forwardRef((props: ColumnConfig, ref) => {
  const { chartRef, style = {}, className, ...rest } = props;

  const { chart, container } = useChart<G2plotColumn, ColumnConfig>(G2plotColumn, rest);

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

ColumnChart.defaultProps = G2plotColumn.getDefaultOptions();

export default ColumnChart;
