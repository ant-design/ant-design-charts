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
  data?: Datum;
}

export interface IMapDistrictConig {
  scene: Scene;
  type?: DistrictType;
  layerConfig?: ILayerConfig;
}

export interface IMapSceneConig extends CommonProps {
  children?: React.ReactNode;
  sceneOption?: Partial<ISceneConfig>;
  mapConfig: IMapConfig;
  layerConfig: ILayerConfig;
  attachMap?: Omit<IMapSceneConig, 'attachMap'>;
  type?: DistrictType;
  /** 图表渲染完成回调 */
  onReady?: (scene: Scene, layer: LayerOptions | undefined) => void;
}
