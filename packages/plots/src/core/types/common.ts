import type { Chart, G2Spec } from '@antv/g2';

export type Options = G2Spec &
  AppendOptions & {
    [key: string]: any;
  };

export type Adaptor<P = Options> = {
  chart: Chart;
  options: P;
  originOptions?: P;
};

export type AppendOptions = {
  /**
   * @title x轴字段
   */
  readonly xField: string;
  /**
   * @title y轴字段
   */
  readonly yField: string;
  /**
   * @title 拆分字段
   */
  readonly colorField?: string;
};
