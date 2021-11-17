export type PlotRef<P> = ((plot: P) => void) | React.MutableRefObject<P | undefined>;
export interface ContainerConfig {
  containerStyle?: React.CSSProperties;
  className?: string;
  loading?: boolean;
  loadingTemplate?: React.ReactElement;
  errorTemplate?: (e: Error) => React.ReactNode;
}
