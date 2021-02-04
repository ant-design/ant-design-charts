import { Mapbox } from '@antv/l7-maps';

interface IMapDistrictConig {
  [key: string]: any;
}

export const CreateMapBox = (props: IMapDistrictConig) => {
  const { mapCinfig } = props;
  return new Mapbox({
    mapCinfig,
  });
};
