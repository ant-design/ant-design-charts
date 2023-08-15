import type { Chart, DodgeXTransform, G2Spec, NormalizeYTransform, SortByTransform, StackYTransform } from '@antv/g2';

export type BaseOptions = {
  /**
   * @title x轴字段
   */
  readonly xField?: string;
  /**
   * @title y轴字段
   */
  readonly yField?: string;
  /**
   * @title 分组字段
   */
  readonly seriesField?: string;
  /**
   * @title 堆积
   */
  readonly stack?: boolean | StackYTransform;
  /**
   * @title 归一化
   */
  readonly normalize?: boolean | NormalizeYTransform;
  /**
   * @title 排序
   */
  readonly sort?: boolean | SortByTransform;
  /**
   * @title 分组
   */
  readonly group?: boolean | DodgeXTransform;
  /**
   * @title 图形
   * @description interval 图形元素展示形状
   * @example smooth | hvh
   */
  readonly shape?: string;
};

export type ArcBaseOptions = {
  /**
   * @title 角度映射字段
   */
  readonly angleField: string;
  /**
   * @title 颜色映射字段
   */
  readonly colorField: string;
  /**
   * @title 饼图半径
   */
  readonly radius?: number;
  /**
   * @title 饼图内半径
   */
  readonly innerRadius?: number;
};

export type Options = G2Spec & {
  [key: string]: any;
};

export type Adaptor<P = Options> = {
  chart: Chart;
  options: P;
  originOptions?: P;
};
