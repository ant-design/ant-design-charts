import { flow, transformOptions, set } from '../../utils';
import { mark } from '../../adaptor';
import type { Adaptor, PrimitiveEncodeSpec } from '../../types';
import type { ViolinOptions } from './type';

type Params = Adaptor<ViolinOptions>;

function withField(field1: PrimitiveEncodeSpec, field2: PrimitiveEncodeSpec) {
  if (field1) return field1;
  return field2;
}

/**
 * @param chart
 * @param options
 */
export function adaptor(params: Params) {
  /**
   * 图表差异化处理
   */
  const customTransform = (params: Params) => {
    const { options } = params;
    const { xField, yField, colorField, seriesField, children } = options;

    const newChildren = children
      ?.map((item) => {
        return {
          ...item,
          xField,
          yField,
          seriesField: withField(seriesField, colorField),
          colorField: withField(colorField, seriesField),
          data:
            item.type === 'density'
              ? {
                transform: [
                  {
                    type: 'kde',
                    field: yField,
                    groupBy: [xField, withField(seriesField, colorField)],
                  },
                ],
              }
              : item.data,
        };
      })
      .filter((item) => options.box || item.type === 'density');
    set(options, 'children', newChildren);

    // 删除底层不消费的字段。
    delete options.box;

    return params;
  };

  return flow(customTransform, mark, transformOptions)(params);
}
