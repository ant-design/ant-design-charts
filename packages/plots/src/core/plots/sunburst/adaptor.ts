import { flow, transformOptions, dataTransform } from '../../utils';
import type { Adaptor } from '../../types';
import type { SunburstOptions } from './type';

type Params = Adaptor<SunburstOptions>;

/**
 * @param chart
 * @param options
 */
export function adaptor(params: Params) {

  return flow(dataTransform, transformOptions)(params);
}
