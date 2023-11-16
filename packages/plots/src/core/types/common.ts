import type {
  Chart,
  DodgeXTransform,
  NormalizeYTransform,
  SortByTransform,
  StackYTransform,
  Mark,
  Composition,
  AxisComponent,
  LegendComponent,
} from '@antv/g2';

export type Spec = (Mark | Composition | AxisComponent | Omit<LegendComponent, 'type'>) & {
  width?: number;
  height?: number;
  depth?: number;
  autoFit?: boolean;
};

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
   * @title 尺寸字段
   */
  readonly sizeField?: string;
  /**
   * @title 颜色字段
   */
  readonly colorField?: string;
  /**
   * @title 形状字段
   */
  readonly shapeField?: string;
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
  /**
   * @title 标签
   * @description 待底层导出
   */
  readonly label?: false | Record<string, any>;
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

export type Options = Spec &
  BaseOptions & {
    /**
     * @title 嵌套 view
     * @description 用于 Mix 等复杂图表
     */
    children?: Options[];
  };

export type Adaptor<P = Options> = {
  chart: Chart;
  options: P;
  originOptions?: P;
};

export type AttrStyle = Record<string, any>;
