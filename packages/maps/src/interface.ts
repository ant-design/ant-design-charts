import { Plot, IPlotOptions } from '@antv/l7plot';

export type MapRefConfig =
  | ((map: Plot<IPlotOptions>) => void)
  | React.MutableRefObject<Plot<IPlotOptions> | undefined>;

export interface MapContainerConfig<
  O extends IPlotOptions = IPlotOptions,
  P extends Plot<O> = Plot<O>,
> {
  containerStyle?: React.CSSProperties;
  className?: string;
  loading?: boolean;
  loadingTemplate?: React.ReactElement;
  errorTemplate?: (e: Error) => React.ReactNode;
  /** 图表渲染完成回调 */
  onReady?: (chart: P) => void;
}
