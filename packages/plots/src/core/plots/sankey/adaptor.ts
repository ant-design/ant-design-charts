import { mark } from '../../adaptor';
import type { Adaptor } from '../../types';
import { flow, get, isArray, set, dataTransform, transformOptions } from '../../utils';
import type { SankeyOptions } from './type';

type Params = Adaptor<SankeyOptions>;

const defaultTransform = (params: Params) => {
  const { options } = params;
  const { data } = options;
  const transformLinks = [
    {
      type: 'custom',
      callback: (datum) => ({ links: datum }),
    },
  ];
  if (isArray(data)) {
    if (data.length > 0) {
      set(options, 'data', {
        value: data,
        transform: transformLinks,
      });
    } else {
      delete options.children;
    }
  } else if (get(data, 'type') === 'fetch' && get(data, 'value')) {
    const transform = get(data, 'transform');
    if (!isArray(transform)) {
      set(data, 'transform', transformLinks);
    }
  }
  return params;
};

/**
 * @param chart
 * @param options
 */
export function adaptor(params: Params) {

  return flow(dataTransform, defaultTransform, mark, transformOptions)(params);
}
