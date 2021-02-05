import { Options as G2PlotConfig } from '@antv/g2plot';
export interface CommonProps {
  style?: React.CSSProperties;
  className?: string;
  loading?: boolean;
  loadingTemplate?: React.ReactElement;
  errorTemplate?: (e: Error) => React.ReactNode;
}

export type ChartRefOptions =
  | ((chart: any) => void)
  | React.MutableRefObject<G2PlotConfig | undefined>;
