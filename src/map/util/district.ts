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
  const { type = 'world', scene, data } = props;
  return new DistrictMap[type](scene, {
    data,
    joinBy: ['NAME_CHN', 'name'],
    depth: 1,
    provinceStroke: '#fff',
    cityStroke: '#EBCCB4',
    cityStrokeWidth: 1,
    fill: {
      color: {
        field: 'NAME_CHN',
        values: ['#B8E1FF', '#7DAAFF', '#3D76DD', '#0047A5', '#001D70'],
      },
    },
    popup: {
      enable: true,
      Html: (props) => {
        return `<span>${props.NAME_CHN}</span>`;
      },
    },
  });
};
