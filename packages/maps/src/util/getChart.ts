import { isFunction } from '@antv/util';
import { MapRefConfig } from '../interface';

/**
 * 获取或者绑定图表实例
 */
export const getChart = (chartRef: MapRefConfig | undefined, chart: any) => {
  if (!chartRef) {
    return;
  }
  if (isFunction(chartRef)) {
    chartRef(chart);
  } else {
    chartRef.current = chart;
  }
};
