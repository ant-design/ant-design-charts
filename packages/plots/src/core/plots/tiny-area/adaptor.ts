import { flow, transformOptions } from '../../utils';
import { mark } from '../../components';
import type { Adaptor } from '../../types';
import type { TinyAreaOptions } from './type';

type Params = Adaptor<TinyAreaOptions>;

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

  return flow(init, transformOptions, mark)(params);
}
