import { isFunction } from '@antv/util';
import { ChartRefConfig } from '../interface';

/**
 * 获取或者绑定图表实例
 */
export const getChart = (chartRef: ChartRefConfig | undefined, chart: any) => {
  if (!chartRef) {
    return;
  }
  if (isFunction(chartRef)) {
    chartRef(chart);
  } else {
    chartRef.current = chart;
  }
};
