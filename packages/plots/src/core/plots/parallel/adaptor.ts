import { mark } from '../../components';
import { flow, transformOptions } from '../../utils';

import type { Adaptor } from '../../types';
import type { ParallelOptions } from './type';

type Params = Adaptor<ParallelOptions>;

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
