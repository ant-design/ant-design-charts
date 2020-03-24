import React, { useContext, useEffect, useImperativeHandle, forwardRef } from 'react';
import {
  GroupedColumn as G2plotGroupedColumn,
  GroupedColumnConfig as G2plotProps,
} from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ConfigContext, ErrorBoundary } from '../base';

export interface GroupedColumnConfig extends G2plotProps {
  chartRef?: React.MutableRefObject<G2plotGroupedColumn | undefined>;
  chartStyle?: React.CSSProperties;
  className?: string;
}

const GroupedColumnChart = forwardRef((props: GroupedColumnConfig, ref) => {
  const config = useContext(ConfigContext);
  const { chartRef, chartStyle = {}, className, ...rest } = Object.assign(config, props);

  const { chart, container } = useChart<G2plotGroupedColumn, GroupedColumnConfig>(
    G2plotGroupedColumn,
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

GroupedColumnChart.defaultProps = G2plotGroupedColumn.getDefaultOptions();

export default GroupedColumnChart;
