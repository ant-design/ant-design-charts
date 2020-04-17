import React, { useEffect, useImperativeHandle, forwardRef } from 'react';
import { RangeColumn as G2plotRangeColumn, RangeColumnConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ErrorBoundary } from '../base';

export interface RangeColumnConfig extends G2plotProps {
  chartRef?: React.MutableRefObject<G2plotRangeColumn | undefined>;
  style?: React.CSSProperties;
  className?: string;
}

const RangeColumnChart = forwardRef((props: RangeColumnConfig, ref) => {
  const { chartRef, style = {}, className, ...rest } = props;

  const { chart, container } = useChart<G2plotRangeColumn, RangeColumnConfig>(
    G2plotRangeColumn,
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

RangeColumnChart.defaultProps = G2plotRangeColumn.getDefaultOptions();

export default RangeColumnChart;
