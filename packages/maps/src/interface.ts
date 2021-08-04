import { ILabelOptions, ILayerMenuControlOptions, ILegendOptions, ILogo, IMapConfig, IScaleControlOptions, ISource, IStateAttribute, ITooltipOptions, IZoomControlOptions } from '@antv/l7plot';

export interface MapContainerConfig {
  style?: React.CSSProperties;
  className?: string;
  loading?: boolean;
  loadingTemplate?: React.ReactElement;
  errorTemplate?: (e: Error) => React.ReactNode;
}

export type ChartRefConfig = ((map: any) => void) | React.MutableRefObject<any | undefined>;

export type Datum = {
  [key: string]: any;
};

// Map 通用配置
export interface CommonConfig extends MapContainerConfig {
  // 地图容器基本配置
  /**
   * 容器宽度
   */
    width?: number;

   /**
    * 容器高度
    */
    height?: number;

  // 通用数据配置
  /**
   * 地图配置
   */
    map?: IMapConfig;

   /**
    * 是否开启抗锯齿
    */
    antialias?: boolean;
   /**
    * 是否保留缓冲区数据
    */
    preserveDrawingBuffer?: boolean;
   /**
    * logo 配置
    */
    logo?: boolean | ILogo;

   /**
    * 具体的数据
    */
    source: ISource;

   /**
    * 是否自动缩放到图层范围，默认为 false
    */

    autoFit?: boolean;

   /**
    * 交互反馈
    */
    state?: IStateAttribute;

   /**
    * 主题，string 或 object
    */
    theme?: string | Record<string, any>;

   /**
    * 数据标签配置
    */
    label?: false | ILabelOptions;

   // 组件相关
   /**
    * tooltip 配置项
    */
    tooltip?: false | ITooltipOptions;

   /**
    * 图例 legend 配置项
    */
    legend?: false | ILegendOptions;
   /**
    * zoom 配置
    */
    zoom?: false | IZoomControlOptions;
   /**
    * scale 配置
    */
    scale?: false | IScaleControlOptions;
   /**
    * layerMenu 配置
    */
    layerMenu?: false | ILayerMenuControlOptions;

  /** 图表渲染完成回调 */
  // onReady?: (map: any) => void;
}
