import { flow, transformOptions } from '../../utils';
import { mark } from '../../components';
import type { Adaptor } from '../../types';
import type { AreaOptions } from './type';

type Params = Adaptor<AreaOptions>;

/**
 * @param chart
 * @param options
 */
export function adaptor(params: Params) {
  return flow(transformOptions, mark)(params);
}
