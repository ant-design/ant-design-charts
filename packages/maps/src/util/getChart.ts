import { isFunction } from '@antv/util';
import { PlotRef } from '../types';

/**
 * 获取或者绑定图表实例
 */
export const getChart = <P>(chartRef: PlotRef<P> | undefined, chart: P) => {
  if (!chartRef) {
    return;
  }
  if (isFunction(chartRef)) {
    chartRef(chart);
  } else {
    chartRef.current = chart;
  }
};
