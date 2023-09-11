import { flow, transformOptions } from '../../utils';
import { mark } from '../../components';
import type { Adaptor } from '../../types';
import type { TinyProgressOptions } from './type';

type Params = Adaptor<TinyProgressOptions>;

/**
 * @param chart
 * @param options
 */
export function adaptor(params: Params) {
  /**
   * 图表差异化处理
   */
  const init = (params: Params) => {
    return params;
  };

  /**
   * @description 数据转换
   */
  const transformData = (params: Params) => {
    const { options } = params;
    const { data = [], percent, color = [] } = options;
    if (!percent) return params;

    if (data.length) {
      data.splice(1, 1, percent);
    } else
      data.push(1, percent);

    const transformOption = {
      scale: {
        color: { range: color.length ? color : [] },
      }
    }

    Object.assign(options, { ...transformOption });
    return params
  }

  return flow(init, transformData, transformOptions, mark)(params);
}
