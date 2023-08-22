import { flow, transformOptions } from '../../utils';
import { coordinate } from '../../components';

import type { Adaptor } from '../../types';
import type { PieOptions } from './type';

type Params = Adaptor<PieOptions>;

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

  return flow(init, coordinate, transformOptions)(params);
}
