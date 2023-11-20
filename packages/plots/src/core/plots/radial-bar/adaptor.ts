import { flow, set, pick, transformOptions } from '../../utils';
import { COORDIANTE_OPTIONS, mark } from '../../components';
import type { Adaptor } from '../../types';
import type { RadialBarOptions } from './type';

type Params = Adaptor<RadialBarOptions>;

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
   * coordinate 配置
   * @param params
   */
  const coordinate = (params: Params) => {
    const { options } = params;
    const { maxAngle, coordinate, radius, innerRadius } = options;
    set(params, ['options', 'coordinate'], {
      ...coordinate,
      ...pick(options.coordinate, COORDIANTE_OPTIONS),
      endAngle: maxAngle ? ((Number(maxAngle) - 90) / 180) * Math.PI : Math.PI,
      outerRadius: radius,
      innerRadius,
    });

    return params;
  };

  /**
   * tooltip 配置
   * @param params
   */
  const tooltip = (params) => {
    const { options } = params;
    const { tooltip, xField, yField } = options;
    if (!tooltip) {
      set(options, 'tooltip', {
        title: false,
        items: [
          (d) => {
            return { name: d[xField], value: d[yField] };
          },
        ],
      });
    }
    return params;
  };

  /** style 配置 */
  const style = (params) => {
    const { options } = params;
    const { style, barStyle } = options;
    if (barStyle) {
      set(params, ['options', 'style'], {
        ...style,
        radius: barStyle?.radius,
      });
    }
    return params;
  };

  return flow(init, coordinate, tooltip, style, transformOptions, mark)(params);
}
