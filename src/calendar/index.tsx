import React, { useEffect, useImperativeHandle, forwardRef } from 'react';
import { Calendar as G2plotCalendar, CalendarConfig as G2plotProps } from '@antv/g2plot';
import useChart from '../hooks/useChart';
import { ErrorBoundary } from '../base';

export interface CalendarConfig extends G2plotProps {
  chartRef?: React.MutableRefObject<G2plotCalendar | undefined>;
  style?: React.CSSProperties;
  className?: string;
}

const CalendarChart = forwardRef((props: CalendarConfig, ref) => {
  const { chartRef, style = {}, className, ...rest } = props;

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
      <div className={className} style={style} ref={container} />
    </ErrorBoundary>
  );
});

// CalendarChart.defaultProps = G2plotCalendar.getDefaultOptions();

export default CalendarChart;
