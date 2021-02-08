import {
  WorldLayer,
  CountryLayer,
  ProvinceLayer,
  CityLayer,
  CountyLayer,
  DrillDownLayer,
} from '@antv/l7-district';
import { utils } from '../../util';
import { IMapDistrictConig } from '../index.d';

const DistrictMap = {
  WorldLayer: WorldLayer, // 全世界
  CountryLayer: CountryLayer, // 中国
  ProvinceLayer: ProvinceLayer, // 省
  CityLayer: CityLayer, // 市
  CountyLayer: CountyLayer, // 县
  DrillDownLayer: DrillDownLayer, // 下钻地图
};

export const CreateDistrict = (props: IMapDistrictConig) => {
  const { type = 'WorldLayer', scene, layerConfig } = props;
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
