import { Scene, ILayerConfig as L7ILayerConfig, ISceneConfig, IMapConfig } from '@antv/l7';
import {
  WorldLayer,
  CountryLayer,
  ProvinceLayer,
  CityLayer,
  CountyLayer,
  DrillDownLayer,
} from '@antv/l7-district';
import { CommonProps } from '../interface';

export type DistrictType =
  | 'WorldLayer'
  | 'CountryLayer'
  | 'ProvinceLayer'
  | 'CityLayer'
  | 'CountyLayer'
  | 'DrillDownLayer';

export type Datum = any[];

export type LayerOptions =
  | WorldLayer
  | CountryLayer
  | ProvinceLayer
  | CityLayer
  | CountyLayer
  | DrillDownLayer;

export interface ILayerConfig extends L7ILayerConfig {
  /** 图层类型 */
  type?: DistrictType;
  /** 图层数据 */
  data: Datum;
}

export interface IMapDistrictConig {
  scene: Scene;
  type?: DistrictType;
  layerConfig: ILayerConfig;
}

export interface IMapSceneConig extends CommonProps {
  /** 地图配置项 */
  mapConfig: IMapConfig;
  /** 图层配置项 */
  layerConfig: ILayerConfig;
  /** 附图 */
  attach?: Omit<IMapSceneConig, 'attachMap'>;

  /** 图表渲染完成回调 */
  onReady?: (scene: Scene, layer: LayerOptions | undefined) => void;
  style?: React.CSSProperties;
  className?: string;
}
