import { flow, transformOptions, dataTransform } from '../../utils';
import { mark } from '../../adaptor';
import type { Adaptor } from '../../types';
import type { TreemapOptions } from './type';

type Params = Adaptor<TreemapOptions>;

/**
 * @param chart
 * @param options
 */
export function adaptor(params: Params) {
  return flow(dataTransform, mark, transformOptions)(params);
}
