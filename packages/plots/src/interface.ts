import { Options, G2Spec } from './g2-core';

/**
 * @title 图表浮窗配置
 * @title.en_US Chart tooltip configuration
 */
export interface Tooltip extends Omit<G2Spec, 'customContent' | 'container'> {
  customContent?: (title: string, data: any[]) => React.ReactNode | string | unknown;
  container?: React.ReactNode;
}

export type Plot = any;

export interface Chart extends Plot {
  toDataURL?: (type?: string, encoderOptions?: number) => string;
  downloadImage?: (name?: string, type?: string, encoderOptions?: number) => string;
}

export interface ContainerConfig {
  /**
   * @title 图表样式
   * @description 配置图表样式
   * @title.en_US Chart style
   * @description.en_US Configure chart styles
   */
  style?: React.CSSProperties;
  /**
   * @title 容器class
   * @description 类名添加
   * @title.en_US Container class name
   * @description.en_US Class name addition
   */
  className?: string;
  /**
   * @title 加载状态
   * @description 是否加载中
   * @default false
   * @title.en_US Loading status
   * @description.en_US Is it loading
   * @default.en_US false
   */
  loading?: boolean;
  /**
   * @title 加载模板
   * @description 加载模板
   * @title.en_US Load template
   * @description.en_US Load template
   */
  loadingTemplate?: React.ReactElement;
  /**
   * @title 出错模板
   * @description 出错时占位模板
   * @title.en_US error template
   * @description.en_US Error placeholder template
   */
  errorTemplate?: (e: Error) => React.ReactNode;
  /**
   * @title 图表浮窗
   * @description 设置悬浮提示
   * @title.en_US Chart tooltip
   * @description.en_US Setting chart tooltip
   */
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

export type Datum = any; // 来自 G2 ，临时使用 any

type TransformType<T> = T extends object ? { [P in keyof T]: TransformType<T[P]> } : T;

export interface Common extends AttachConfig, ContainerConfig {
  data?: Datum[];
  /**
   * @title 内部属性，只读
   */
  readonly chartType?: string;
}

export type CommonConfig<T = G2Spec> = Common & TransformType<T>;

export * from './components/interface';

export { Options };
