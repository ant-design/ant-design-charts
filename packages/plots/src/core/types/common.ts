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

export type Primitive = number | string | boolean | Date;

export type FunctionEncodeSpec = (
  value: any,
  index?: number,
  array?: any[],
) => Primitive;

export type PrimitiveEncodeSpec = Primitive | FunctionEncodeSpec;

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
  readonly xField?: PrimitiveEncodeSpec;
  /**
   * @title y轴字段
   */
  readonly yField?: PrimitiveEncodeSpec;
  /**
   * @title 分组字段
   */
  readonly seriesField?: PrimitiveEncodeSpec;
  /**
   * @title 尺寸字段
   */
  readonly sizeField?: PrimitiveEncodeSpec;
  /**
   * @title 颜色字段
   */
  readonly colorField?: PrimitiveEncodeSpec;
  /**
   * @title 形状字段
   */
  readonly shapeField?: PrimitiveEncodeSpec;
  /**
   * @title 形状key值字段
   */
  readonly keyField?: PrimitiveEncodeSpec;
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
     * @title 标注
     */
    annotations?: Array<Options & { type: unknown }>;
    /**
     * @title 连线
     * @description 用于面积图、柱状图等添加连接线效果
     */
    line?: Options;
    /**
     * @title 面积
     * @description 用于折线图添加面积效果
     */
    area?: Options;
    /**
     * @title 点
     * @description 用于折线图、面积图等添加点图形
     */
    point?: Options;
    /**
     * @title 嵌套 view
     * @description 用于 Mix 等复杂图表
     */
    children?: Array<Options & { type: unknown }>;
  };

export type Adaptor<P = Options> = {
  chart: Chart;
  options: P;
  originOptions?: P;
};

export type AttrStyle = Record<string, any>;

export type ConnectNulls =
  | true
  | {
    connect: true;
    /**
     * @title 连线样式
     * @description 和 canvas path 一致，但需要加上 connect 前缀
     * @example
     *  - connectStroke: '#ccc'
     *  - connectLineWidth: 1
     *  - connectLineDash: [ 4, 4 ]
     */
    [key: string]: any;
  };
