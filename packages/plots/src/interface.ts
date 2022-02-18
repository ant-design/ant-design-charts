import {
  Plot,
  Options,
  G2,
  DualAxesOptions,
  GaugeOptions,
  BulletOptions,
  MixOptions,
  TreemapOptions,
} from '@antv/g2plot';

interface TinyPlotOptions extends Omit<Options, 'data' | 'legend' | 'label'> {
  data: number[];
}
/**
 * @title 基础配置
 * @description 整合所有基础配置
 * @title.en_US Basic configuration
 * @description.en_US Consolidate all basic configurations
 */
export type AllBaseConfig =
  | Options
  | DualAxesOptions
  | GaugeOptions
  | TinyPlotOptions
  | BulletOptions
  | MixOptions
  | TreemapOptions;

/**
 * @title 图表配置
 * @description 默认配置或自定义配置
 * @title.en_US Chart configuration
 * @description.en_US Default or custom configuration
 */
export type ChartRefConfig =
  | ((chart: Plot<AllBaseConfig>) => void)
  | React.MutableRefObject<Plot<AllBaseConfig> | undefined>;

/**
 * @title 事件
 * @description 事件类型的浅拷贝
 * @title.en_US event
 * @description.en_US Shallow copy of event type
 */
export type PlotEvent = G2.Event;
export interface ContainerConfig<O extends AllBaseConfig = Options, P extends Plot<O> = Plot<O>> {
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
   * @title 图表渲染
   * @description 图表渲染完成执行回调
   * @title.en_US Chart rendering
   * @description.en_US Callback when chart rendering is complete
   */
  onReady?: (chart: P) => void;
  /**
   * @title 图形事件
   * @description 任何图形事件触发回调
   * @title.en_US Graphics event
   * @description.en_US Any graphics event triggers a callback
   */
  onEvent?: (chart: P, event: PlotEvent) => void;
}

export * from './components/interface';
