import { flow, transformOptions, get } from '../../utils';
import { coordinate } from '../../components';

import type { Adaptor } from '../../types';
import type { RadarOptions } from './type';

type Params = Adaptor<RadarOptions>;

/**
 * @param chart
 * @param options
 */
export function adaptor(params: Params) {
  /**
   * 图表差异化处理
   */
  const init = (params: Params) => {
    params.options.coordinate = { type: get(params, 'options.coordinateType', 'polar') };
    return params;
  };

  return flow(init, coordinate, transformOptions)(params);
}
