import React, { useContext, useEffect } from 'react';
import { GroupBar, GroupBarConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ConfigContext, ErrorBoundary } from '../base';

export interface GroupBarConfig extends G2plotProps {
  chartRef?: React.MutableRefObject<GroupBar | undefined>;
  style?: React.CSSProperties;
  className?: string;
}

const TechGroupBar: React.FC<GroupBarConfig> = (props: GroupBarConfig) => {
  const { chartRef, style = {}, className, ...rest } = props;

  const { chart, container } = useChart<GroupBar, GroupBarConfig>(GroupBar, rest);

  useEffect(() => {
    if (chartRef) {
      chartRef.current = chart.current;
    }
  }, [chart.current]);

  return <div className={className} style={style} ref={container} />;
};

const GroupBarChart = (props: GroupBarConfig) => {
  const config = useContext(ConfigContext);
  return (
    <ErrorBoundary>
      <TechGroupBar {...config} {...props} />
    </ErrorBoundary>
  );
};

GroupBarChart.defaultProps = GroupBar.getDefaultOptions();

export default GroupBarChart;
