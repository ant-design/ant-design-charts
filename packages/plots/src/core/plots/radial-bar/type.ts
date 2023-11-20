import type { Options } from '../../types/common';

export type RadialBarOptions = Options & {
  /** 开始角度 默认从+y轴(-Math.PI / 2)开始 */
  startAngle: number;
  /** 最大角度 默认 Math.PI * 3 /2  */
  maxAngle: number;
  /** 与g2的radius一致 */
  radius: number;
  /** 与g2的innerRadius一致 */
  innerRadius: number;
  /**
   * 背景配置
   * 通过配置color指定颜色参数
   * 必须配合scale.y.domain 指定背景轴的范围区间
   */
  markBackground: Record<string, string>;
};
