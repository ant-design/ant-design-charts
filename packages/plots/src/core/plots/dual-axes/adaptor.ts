import { mark } from '../../components';
import type { Adaptor } from '../../types';
import { flow, transformOptions } from '../../utils';
import type { DualAxesOptions } from './type';

type Params = Adaptor<DualAxesOptions>;

/**
 * @param chart
 * @param options
 */
export function adaptor(params: Params) {
  return flow(transformOptions, mark)(params);
}
