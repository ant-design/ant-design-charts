import { Layer, MapSense } from '@antv/l7plot';

export interface MapContainerConfig {
  style?: React.CSSProperties;
  className?: string;
  loading?: boolean;
  loadingTemplate?: React.ReactElement;
  errorTemplate?: (e: Error) => React.ReactNode;
}

export type ChartRefConfig = ((map: MapSense) => void) | React.MutableRefObject<any | undefined>;

export type Datum = {
  [key: string]: any;
};

// Graph 通用配置
export interface CommonConfig extends MapContainerConfig {
  /** 是否缩放节点大小自适应容器 */
  autoFit?: boolean;
  /** 是否将图平移到中心位置 */
  fitCenter?: boolean;
  width?: number;
  height?: number;
  pixelRatio?: number;

  data: Datum;
  layout?: any;
  behaviors?: string[];
  /** 是否开启动画 */
  animate?: boolean;
  /** 图表渲染完成回调 */
  onReady?: (map: MapSense) => void;
}

export { Layer };
