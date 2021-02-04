import { Scene } from '@antv/l7';
import { WorldLayer, CountryLayer, ProvinceLayer, CityLayer, CountyLayer } from '@antv/l7-district';

interface IMapDistrictConig {
  scene: Scene;
  type?: 'world' | 'country' | 'province' | 'city' | 'county';
  data: any[];
  [key: string]: any;
}

const DistrictMap = {
  world: WorldLayer,
  country: CountryLayer,
  province: ProvinceLayer,
  city: CityLayer,
  county: CountyLayer,
};

export const CreateDistrict = (props: IMapDistrictConig) => {
  const { type = 'world', scene, data, layerConfig } = props;
  return new DistrictMap[type](scene, {
    data,
    ...layerConfig,
  });
};
