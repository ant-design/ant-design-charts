import type { ContainerConfig } from '@ant-design/charts-util';
import type { Data as G2Data, TooltipComponent } from '@antv/g2';
import type { Options, Spec } from './core';

/**
 * @title 图表浮窗配置
 * @title.en_US Chart tooltip configuration
 */
export type Tooltip = TooltipComponent;

export type Plot = any;

export interface Chart extends Plot {
  toDataURL?: (type?: string, encoderOptions?: number) => string;
  downloadImage?: (name?: string, type?: string, encoderOptions?: number) => string;
}

export interface AttachConfig {
  /**
   * @title 浮窗提示
   * @description 设置浮窗提示
   * @title.en_US Chart tooltip
   * @description.en_US Set chart tooltip
   */
  tooltip?: false | Tooltip;
  /**
   * @title 图表渲染
   * @description 图表渲染完成执行回调
   * @title.en_US Chart rendering
   * @description.en_US Callback when chart rendering is complete
   */
  onReady?: (chart: Chart) => void;
  /**
   * @title 图形事件
   * @description 任何图形事件触发回调
   * @title.en_US Graphics event
   * @description.en_US Any graphics event triggers a callback
   */
  onEvent?: (chart: Chart, event: PlotEvent) => void;
}

/**
 * @title 事件
 * @description 事件类型的浅拷贝
 * @title.en_US event
 * @description.en_US Shallow copy of event type
 */
export type PlotEvent = any; // 来自 G2 ，临时使用 any

export type Datum = G2Data | any[];

type TransformType<T> = T extends object ? { [P in keyof T]: TransformType<T[P]> } : T;

export interface Common extends AttachConfig, ContainerConfig {
  data?: Datum;
  /**
   * @title 内部属性，只读
   */
  readonly chartType?: string;
}

export type CommonConfig<T = Spec> = Common & TransformType<T>;

export { Options };
