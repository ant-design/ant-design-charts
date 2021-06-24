import type {
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
  /** 图表渲染完成回调 */
  onReady?: (chart: P) => void;
  /** 任何其他的图形事件 */
  onEvent?: (chart: P, event: PlotEvent) => void;
}

export interface GraphContainerConfig {
  style?: React.CSSProperties;
  className?: string;
  loading?: boolean;
  loadingTemplate?: React.ReactElement;
  errorTemplate?: (e: Error) => React.ReactNode;
}

export { Plot, Options };
