import { flow, transformOptions } from '../../utils';
import { mark } from '../../components';

import type { Adaptor } from '../../types';
import type { WordCloudOptions } from './type';

type Params = Adaptor<WordCloudOptions>;

/**
 * @param chart
 * @param options
 */
export function adaptor(params: Params) {
  return flow(transformOptions, mark)(params);
}
