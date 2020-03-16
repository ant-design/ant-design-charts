import React, { useContext, useEffect } from 'react';
import { GroupColumn, GroupColumnConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ConfigContext, ErrorBoundary } from '../base';

export interface GroupColumnConfig extends G2plotProps {
  chartRef?: React.MutableRefObject<GroupColumn | undefined>;
  style?: React.CSSProperties;
  className?: string;
}

const TechGroupColumn: React.FC<GroupColumnConfig> = (props: GroupColumnConfig) => {
  const { chartRef, style = {}, className, ...rest } = props;

  const { chart, container } = useChart<GroupColumn, GroupColumnConfig>(GroupColumn, rest);

  useEffect(() => {
    if (chartRef) {
      chartRef.current = chart.current;
    }
  }, [chart.current]);

  return <div className={className} style={style} ref={container} />;
};

const GroupColumnChart = (props: GroupColumnConfig) => {
  const config = useContext(ConfigContext);
  return (
    <ErrorBoundary>
      <TechGroupColumn {...config} {...props} />
    </ErrorBoundary>
  );
};

GroupColumnChart.defaultProps = GroupColumn.getDefaultOptions();

export default GroupColumnChart;
