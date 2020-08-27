import React, { useEffect, useImperativeHandle, forwardRef } from 'react';
import { Pie as G2plotPie, PieOptions as G2plotProps } from 'g2plot-v2';
import useChart from '../hooks/useChart-v2';
import { ErrorBoundary } from '../base';
import ChartLoading from '../util/createLoading';

export interface PieConfig extends G2plotProps {
  chartRef?: React.MutableRefObject<G2plotPie | undefined>;
  style?: React.CSSProperties;
  className?: string;
  loading?: boolean;
  loadingTemplate?: React.ReactElement;
  errorTemplate?: (e: Error) => React.ReactNode;
}

const PieChart = forwardRef((props: PieConfig, ref) => {
  const {
    chartRef,
    style = {
      height: '100%',
    },
    className,
    loading,
    loadingTemplate,
    errorTemplate,
    ...rest
  } = props;
  const { chart, container } = useChart<G2plotPie, PieConfig>(G2plotPie, rest);

  useEffect(() => {
    if (chartRef) {
      chartRef.current = chart.current;
    }
  }, [chart.current]);
  useImperativeHandle(ref, () => ({
    getChart: () => chart.current,
  }));
  return (
    <ErrorBoundary errorTemplate={errorTemplate}>
      {loading && <ChartLoading loadingTemplate={loadingTemplate} />}
      <div className={className} style={style} ref={container} />
    </ErrorBoundary>
  );
});

export default PieChart;
