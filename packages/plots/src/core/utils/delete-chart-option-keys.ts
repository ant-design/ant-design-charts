import { CHART_OPTIONS } from '../constants';
import { Options } from '../types';

/**
 * 统一删除不消费的配置项
 */
export const deleteChartOptionKeys = <O extends Options>(options: O): O => {
  Object.keys(options).forEach((key) => {
    if (CHART_OPTIONS.includes(key)) {
      delete options[key];
    }
  });

  return options;
};
