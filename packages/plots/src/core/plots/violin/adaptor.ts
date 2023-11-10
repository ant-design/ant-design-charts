import { flow, transformOptions, set } from '../../utils';
import { mark } from '../../components';
import type { Adaptor } from '../../types';
import type { ViolinOptions } from './type';

type Params = Adaptor<ViolinOptions>;

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
    // 默认‘normal’类型数据格式
    if (options.violinType === 'polar') {
      set(options, 'coordinate', { type: 'polar'})
    } else if (options.violinType === 'density') {
      set(options, 'children', options.children.filter((item) => item.type === 'density'));
    }
    // 底层不消费violinType字段。
    set(options, 'violinType', undefined);
    return params;
  }

  return flow(customTransform, transformOptions, mark)(params);
}
