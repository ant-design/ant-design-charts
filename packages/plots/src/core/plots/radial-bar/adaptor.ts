import { flow, set, pick, transformOptions, isNumber } from '../../utils';
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
    const { startAngle, maxAngle, coordinate, radius, innerRadius } = options;
    // 默认开始角度是-90度
    const start = isNumber(startAngle) ? (startAngle / (2 * Math.PI)) * 360 : -90;
    // 结束角度通过maxAngle来计算
    const end = isNumber(maxAngle) ? ((Number(maxAngle) + start) / 180) * Math.PI : Math.PI;
    set(params, ['options', 'coordinate'], {
      ...coordinate,
      ...pick(options.coordinate, COORDIANTE_OPTIONS),
      endAngle: end,
      outerRadius: radius,
      innerRadius,
      startAngle,
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
