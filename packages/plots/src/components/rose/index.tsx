import React, { useEffect, useImperativeHandle, forwardRef } from 'react';
import { Rose as G2plotRose, RoseOptions as G2plotConfig } from '@antv/g2plot';
import useChart from '../../hooks/useChart';
import { getChart } from '../../util';
import { ChartRefConfig, ContainerConfig } from '../../interface';
import ErrorBoundary from '../../errorBoundary';
import ChartLoading from '../../util/createLoading';

export interface RoseConfig extends G2plotConfig, ContainerConfig<G2plotConfig> {
  /**
   * @title 图表实例
   * @description 获取图表实例
   * @title.en_US Chart instance
   * @description.en_US Get chart instance
   */
  chartRef?: ChartRefConfig;
}

const RoseChart = forwardRef((props: RoseConfig, ref) => {
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
  const { chart, container } = useChart<G2plotRose, RoseConfig>(G2plotRose, rest);
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

export default RoseChart;
