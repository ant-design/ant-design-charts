import React, { useEffect, useImperativeHandle, forwardRef } from 'react';
import { Column as G2plotColumn, ColumnOptions as G2plotConfig } from '@antv/g2plot';
import { stateProxy, useSnapshot } from 'rc-utils';
import useChart from '../../hooks/useChart';
import { getChart } from '../../utils';
import { BaseConfig } from '../../interface';
import ErrorBoundary from '../../errorBoundary';
import ChartLoading from '../../utils/createLoading';

interface Config extends Omit<G2plotConfig, 'tooltip'>, BaseConfig<G2plotConfig> {}

export interface ColumnConfig {
  config: Config;
  proxy?: (state) => void;
}

const ColumnChart = forwardRef(({ config, proxy }: ColumnConfig, ref) => {
  const { getSnap, state } = stateProxy(config);
  const snapshot = useSnapshot(state);

  const {
    chartRef,
    style = {
      height: 'inherit',
    },
    className,
    loading,
    loadingTemplate,
    errorTemplate,
  } = snapshot;
  const { chart, container } = useChart<G2plotColumn, ColumnConfig['config']>(G2plotColumn, snapshot);

  useEffect(() => {
    proxy(getSnap());
    getChart(chartRef, chart.current);
  }, [chart.current]);
  useImperativeHandle(ref, () => ({
    getChart: () => chart.current,
  }));
  return (
    <ErrorBoundary errorTemplate={errorTemplate}>
      {loading && <ChartLoading loadingTemplate={loadingTemplate} theme={snapshot.theme} />}
      <div className={className} style={style} ref={container} />
    </ErrorBoundary>
  );
});

export default ColumnChart;
