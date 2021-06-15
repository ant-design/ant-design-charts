import { Options as G2PlotConfig } from '@antv/g2plot';

export type ChartRefOptions =
  | ((chart: any) => void)
  | React.MutableRefObject<G2PlotConfig | undefined>;

export interface ContainerConfig {
  style?: React.CSSProperties;
  className?: string;
  loading?: boolean;
  loadingTemplate?: React.ReactElement;
  errorTemplate?: (e: Error) => React.ReactNode;
}
