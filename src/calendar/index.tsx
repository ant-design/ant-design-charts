import React, { useContext, useEffect, useImperativeHandle, forwardRef } from 'react';
import { Calendar as G2plotCalendar, CalendarConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ErrorBoundary, ConfigContext } from '../base';

export interface CalendarConfig extends G2plotProps {
  chartRef?: React.MutableRefObject<G2plotCalendar | undefined>;
  chartStyle?: React.CSSProperties;
  className?: string;
}

const CalendarChart = forwardRef((props: CalendarConfig, ref) => {
  const config = useContext(ConfigContext);
  const { chartRef, chartStyle = {}, className, ...rest } = Object.assign(config, props);

  const { chart, container } = useChart<G2plotCalendar, CalendarConfig>(G2plotCalendar, rest);

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

// CalendarChart.defaultProps = G2plotCalendar.getDefaultOptions();

export default CalendarChart;
