import { flow, transformOptions, assign, isNumber, divide, ceil } from '../../utils';
import { mark } from '../../components';
import type { Adaptor } from '../../types';
import type { HistogramOptions } from './type';

type Params = Adaptor<HistogramOptions>;

/**
 * @param chart
 * @param options
 */
export function adaptor(params: Params) {
  /**
   * 图表差异化处理
   */
  const init = (params: Params) => {
    return params;
  };

  const transformHistogramConfig = (params: Params) => {
    const { options } = params;
    const { data, binNumber, binWidth, children, channel = 'count' } = options;
    if (isNumber(binWidth)) {
      assign(children[0].transform[0], { thresholds: ceil(divide(data.length, binWidth)), y: channel });
      return params;
    }

    if (isNumber(binNumber)) {
      assign(children[0].transform[0], { thresholds: binNumber, y: channel });
      return params;
    }
    return params;
  };

  return flow(init, transformHistogramConfig, transformOptions, mark)(params);
}
