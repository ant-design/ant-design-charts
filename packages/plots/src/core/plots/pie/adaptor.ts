import { flow, transformOptions, isArray, set, fieldAdapter } from '../../utils';
import type { Adaptor } from '../../types';
import type { PieOptions } from './type';

type Params = Adaptor<PieOptions>;

/**
 * @param chart
 * @param options
 */
export function adaptor(params: Params) {
  /**
   * @description 当 angleField 总算为 0 时，设置默认样式
   * @link https://github.com/ant-design/ant-design-charts/issues/2324
   */
  const emptyData = (params: Params) => {
    const { options } = params;
    const { angleField, data, label, tooltip, colorField } = options;

    const getColorValue = fieldAdapter(colorField);
    if (isArray(data)) {
      const sum = data.reduce((a, b) => a + b[angleField], 0);
      if (sum === 0) {
        const normalization = data.map((item) => ({ ...item, [angleField]: 1 }));
        set(options, 'data', normalization);
        if (label) {
          set(options, 'label', {
            ...label,
            formatter: () => 0,
          });
        }
        if (tooltip !== false) {
          set(options, 'tooltip', {
            ...tooltip,
            items: [
              (arg, i, d) => {
                return {
                  name: getColorValue(arg, i, d),
                  value: 0,
                };
              },
            ],
          });
        }
      }
    }
    return params;
  };
  return flow(emptyData, transformOptions)(params);
}
