import {
  WorldLayer,
  CountryLayer,
  ProvinceLayer,
  CityLayer,
  CountyLayer,
  DrillDownLayer,
} from '@antv/l7-district';
import { reactDomToString, hasPath } from '../../util';
import { IMapDistrictConig } from '../interface';

const DistrictMap = {
  WorldLayer: WorldLayer, // 全世界
  CountryLayer: CountryLayer, // 中国
  ProvinceLayer: ProvinceLayer, // 省
  CityLayer: CityLayer, // 市
  CountyLayer: CountyLayer, // 县
  DrillDownLayer: DrillDownLayer, // 下钻地图
};

export const createLayer = (props: IMapDistrictConig) => {
  const { scene, layerConfig } = props;
  const { type = 'CountryLayer' } = layerConfig;

  if (!DistrictMap[type]) {
    console.error(`${type} is not supported`);
    return;
  }
  const processConfig = () => {
    // statistic
    if (hasPath(layerConfig, ['popup', 'Html'])) {
      reactDomToString(layerConfig, ['popup', 'Html'], 'htmlString');
    }
  };
  processConfig();

  return new DistrictMap[type](scene, {
    ...layerConfig,
  });
};
