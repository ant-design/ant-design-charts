import React, { useEffect, useContext } from 'react';
import { TinyColumn, TinyColumnConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ErrorBoundary, ConfigContext } from '../base';

export interface TinyColumnConfig extends G2plotProps {
  chartRef?: React.MutableRefObject<TinyColumn | undefined>;
  style?: React.CSSProperties;
  className?: string;
}

const TechTinyColumn: React.FC<TinyColumnConfig> = (props: TinyColumnConfig) => {
  const { chartRef, style = {}, className, ...rest } = props;

  const { chart, container } = useChart<TinyColumn, TinyColumnConfig>(TinyColumn, rest);

  useEffect(() => {
    if (chartRef) {
      chartRef.current = chart.current;
    }
  }, [chart.current]);

  return <div className={className} style={style} ref={container} />;
};

const TinyColumnChart = (props: TinyColumnConfig) => {
  const config = useContext(ConfigContext);
  return (
    <ErrorBoundary>
      <TechTinyColumn {...config} {...props} />
    </ErrorBoundary>
  );
};

TinyColumnChart.defaultProps = TinyColumn.getDefaultOptions();

export default TinyColumnChart;
