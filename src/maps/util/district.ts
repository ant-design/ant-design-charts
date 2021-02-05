import { Scene, ILayerOptions } from '@antv/l7';
import {
  WorldLayer,
  CountryLayer,
  ProvinceLayer,
  CityLayer,
  CountyLayer,
  DrillDownLayer,
} from '@antv/l7-district';
import { utils } from '../../util';
import { DistrictType } from '../districtMap';

export type LayerOption =
  | WorldLayer
  | CountryLayer
  | ProvinceLayer
  | CityLayer
  | CountyLayer
  | DrillDownLayer;

interface IMapDistrictConig {
  scene: Scene;
  type?: DistrictType;
  layerConfig?: ILayerOptions;
}

const DistrictMap = {
  world: WorldLayer, // 全世界
  country: CountryLayer, // 中国
  province: ProvinceLayer, // 省
  city: CityLayer, // 市
  county: CountyLayer, // 县
  drillDown: DrillDownLayer, // 下钻地图
};

export const CreateDistrict = (props: IMapDistrictConig) => {
  const { type = 'world', scene, layerConfig } = props;
  const processConfig = () => {
    const { hasPath } = utils;
    // statistic
    if (hasPath(layerConfig, ['popup', 'Html'])) {
      utils.reactDomToString(layerConfig, ['popup', 'Html'], 'htmlString');
    }
  };
  processConfig();
  return new DistrictMap[type](scene, {
    ...layerConfig,
  });
};
