import React, { useEffect, useImperativeHandle, forwardRef } from 'react';
import { GroupedRose as G2plotGroupedRose, GroupedRoseConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ErrorBoundary } from '../base';

export interface GroupedRoseConfig extends Omit<G2plotProps, 'tooltip'> {
  chartRef?: React.MutableRefObject<G2plotGroupedRose | undefined>;
  style?: React.CSSProperties;
  className?: string;
}

const GroupedRoseChart = forwardRef((props: GroupedRoseConfig, ref) => {
  const { chartRef, style = {}, className, ...rest } = props;
  const { chart, container } = useChart<G2plotGroupedRose, GroupedRoseConfig>(
    G2plotGroupedRose,
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

GroupedRoseChart.defaultProps = G2plotGroupedRose.getDefaultOptions();

export default GroupedRoseChart;
