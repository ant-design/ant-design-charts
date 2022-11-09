import React, { useEffect, useImperativeHandle, forwardRef } from 'react';
import { Pie as G2plotPie, PieOptions as G2plotConfig } from '@antv/g2plot';
import useChart from '../../hooks/useChart';
import { getChart } from '../../utils';
import { BaseConfig } from '../../interface';
import ErrorBoundary from '../../errorBoundary';
import ChartLoading from '../../utils/createLoading';

export interface PieConfig extends Omit<G2plotConfig, 'tooltip'>, BaseConfig<G2plotConfig> {}

const PieChart = forwardRef((props: PieConfig, ref) => {
  const {
    chartRef,
    style = {
      height: 'inherit',
    },
    className,
    loading,
    loadingTemplate,
    errorTemplate,
    ...rest
  } = props;
  const { chart, container } = useChart<G2plotPie, PieConfig>(G2plotPie, rest);
  useEffect(() => {
    getChart(chartRef, chart.current);
  }, [chart.current]);
  useImperativeHandle(ref, () => ({
    getChart: () => chart.current,
  }));
  return (
    <ErrorBoundary errorTemplate={errorTemplate}>
      {loading && <ChartLoading loadingTemplate={loadingTemplate} theme={props.theme} />}
      <div className={className} style={style} ref={container} />
    </ErrorBoundary>
  );
});

export default PieChart;
