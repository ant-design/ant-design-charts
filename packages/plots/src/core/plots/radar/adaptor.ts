import { flow, transformOptions, get } from '../../utils';
import { coordinate } from '../../components';

import type { Adaptor } from '../../types';
import type { RadarOptions } from './type';

type Params = Adaptor<RadarOptions>;

/**
 * @param chart
 * @param options
 */
export function adaptor(params: Params) {
  /**
   * 图表差异化处理
   */
  const init = (params: Params) => {
    /**
     * area 配置  ，决定是否有面积
     * 注： 
     * 1、当前 g2 5.0 的雷达图分为 radar(polar + parallel)和 polar 坐标系的区别。
     * 2、使用 coordinateType 对 coordinate进行快速配置.
     * 3、g2plot 比较简单的区分了 radar、polar 两者，使用的是 axis.grid.type 'line'|'smooth' 进行简单的区分，而 g2 5.0 没有，比较复杂，并且 radar 不能配置面积图。
     */
    if (params.options.area && params.options.coordinateType !== 'radar') {
      params.options.children.push({ type: 'area' });
    }
    params.options.coordinate = { type: get(params, 'options.coordinateType', 'polar') };
    return params;
  };

  return flow(init, coordinate, transformOptions)(params);
}
