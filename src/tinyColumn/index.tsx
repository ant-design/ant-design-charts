import React, { useEffect, useImperativeHandle, forwardRef } from 'react';
import { TinyColumn as G2plotTinyColumn, TinyColumnConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ErrorBoundary } from '../base';

export interface TinyColumnConfig extends G2plotProps {
  chartRef?: React.MutableRefObject<G2plotTinyColumn | undefined>;
  style?: React.CSSProperties;
  className?: string;
}

const TinyColumnChart = forwardRef((props: TinyColumnConfig, ref) => {
  const { chartRef, style = {}, className, ...rest } = props;

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
      <div className={className} style={style} ref={container} />
    </ErrorBoundary>
  );
});

TinyColumnChart.defaultProps = G2plotTinyColumn.getDefaultOptions();

export default TinyColumnChart;
