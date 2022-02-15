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
 */
export type ChartRefConfig =
  | ((chart: Plot<AllBaseConfig>) => void)
  | React.MutableRefObject<Plot<AllBaseConfig> | undefined>;

/**
 * @title 事件
 * @description 事件类型的浅拷贝
 */
export type PlotEvent = G2.Event;
export interface ContainerConfig<O extends AllBaseConfig = Options, P extends Plot<O> = Plot<O>> {
  /**
   * @title 图表样式
   * @description 配置图表样式
   */
  style?: React.CSSProperties;
  /**
   * @title 容器class
   * @description 类名添加
   */
  className?: string;
  /**
   * @title 加载状态
   * @description 是否加载中
   * @default false
   */
  loading?: boolean;
  loadingTemplate?: React.ReactElement;
  /**模板错误回调*/
  errorTemplate?: (e: Error) => React.ReactNode;
  /** 图表渲染完成回调 */
  onReady?: (chart: P) => void;
  /** 任何其他的图形事件 */
  onEvent?: (chart: P, event: PlotEvent) => void;
}

export * from './components/interface';
