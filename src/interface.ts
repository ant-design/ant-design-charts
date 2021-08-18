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

export type AllBaseConfig =
  | Options
  | DualAxesOptions
  | GaugeOptions
  | TinyPlotOptions
  | BulletOptions
  | MixOptions
  | TreemapOptions;

export type ChartRefConfig =
  | ((chart: Plot<AllBaseConfig>) => void)
  | React.MutableRefObject<Plot<AllBaseConfig> | undefined>;

export type PlotEvent = G2.Event;
export interface ContainerConfig<O extends AllBaseConfig = Options, P extends Plot<O> = Plot<O>> {
  style?: React.CSSProperties;
  className?: string;
  loading?: boolean;
  loadingTemplate?: React.ReactElement;
  errorTemplate?: (e: Error) => React.ReactNode;
  /**
   * @title 图表渲染完成回调
   */
  onReady?: (chart: P) => void;
  /**
   * @description 任何其他的图形事件(仅对统计图表生效)
   */
  onEvent?: (chart: P, event: PlotEvent) => void;
  /**
   * @description 功能等同 onReady(仅对统计图表生效，不推荐使用)
   * @deprecated
   */
  chartRef?: ChartRefConfig;
}

export interface GraphContainerConfig {
  style?: React.CSSProperties;
  className?: string;
  loading?: boolean;
  loadingTemplate?: React.ReactElement;
  errorTemplate?: (e: Error) => React.ReactNode;
}

// export {  };

export * from './graphs/interface';

export * from './plots/interface';
