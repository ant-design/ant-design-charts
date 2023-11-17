import { flow, isArray, omit, remove, set, transformOptions } from '../../utils';
import type { Adaptor } from '../../types';
import { DefaultTransformKey, type VennOptions } from './type';

type Params = Adaptor<VennOptions>;

/**
 * @param chart
 * @param options
 */
export function adaptor(params: Params) {
  /**
   * 图表差异化处理
   */
  const init = (params: Params) => {
    const { options } = params;
    const { data, setsField, sizeField } = options;
    if (isArray(data)) {
      set(options, 'data', {
        type: 'inline',
        value: data,
        transform: [
          {
            type: 'venn',
            sets: setsField,
            size: sizeField,
            as: [DefaultTransformKey.color, DefaultTransformKey.d],
          },
        ],
      });
      set(options, 'colorField', setsField);
      set(options.children[0].encode, 'd', sizeField);
    }
    set(params, 'options', omit(options, ['sizeField', 'setsField']));
    return params;
  };

  const style = (params: Params) => {
    const { options } = params;
    const { pointStyle, style } = options;
    set(options, 'style', { ...style, ...pointStyle });
    set(params, 'options', omit(options, ['pointStyle']));
    return params;
  };

  const transformColorRange = (params: Params) => {
    const { options } = params;
    const { color } = options;
    if (color) {
      set(options, 'scale', {
        color: { range: color },
      });
    }
    return params;
  };

  return flow(init, style, transformColorRange, transformOptions)(params);
}
