import { mark } from '../../adaptor';
import type { Adaptor } from '../../types';
import { flow, get, isArray, set, transformOptions } from '../../utils';
import type { SankeyOptions } from './type';

type Params = Adaptor<SankeyOptions>;

/**
 * @param chart
 * @param options
 */
export function adaptor(params: Params) {
  const dataTransform = (params: Params) => {
    const { options } = params;
    const { data } = options;
    const defaultTransform = [
      {
        type: 'custom',
        callback: (datum) => ({ links: datum }),
      },
    ];
    if (isArray(data)) {
      if (data.length > 0) {
        set(options, 'data', {
          value: data,
          transform: defaultTransform,
        });
      } else {
        delete options.children;
      }
    } else if (get(data, 'type') === 'fetch' && get(data, 'value')) {
      const transform = get(data, 'transform');
      if (isArray(transform)) {
        set(data, 'transform', transform.concat(defaultTransform));
      } else {
        set(data, 'transform', defaultTransform);
      }
    }
    return params;
  };
  return flow(dataTransform, mark, transformOptions)(params);
}
