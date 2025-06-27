import { set, flow, map, transformOptions, fieldAdapter } from '../../utils';
import type { Adaptor } from '../../types';
import type { StockOptions } from './type';

type Params = Adaptor<StockOptions>;

/**
 * @param chart
 * @param options
 */
export function adaptor(params: Params) {
  /**
   * 图表差异化处理
   */
  const init = (params: Params) => {
    const { options } = params;
    const { yField, children, style = {}, lineStyle = {} } = options;
    const [open, close, high, low] = yField;
    // 线影，最高价和最低价
    set(children, [0, 'yField'], [high, low])
    set(children, [0, 'style'], lineStyle);
    // 实体部分，开票价和收盘价
    set(children, [1, 'yField'], [open, close]);
    set(children, [1, 'style'], style);

    delete options.yField;
    delete options.lineStyle;
    delete options.style;

    return params;
  };

  return flow(init, transformOptions)(params);
}
