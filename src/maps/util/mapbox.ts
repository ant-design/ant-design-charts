import { Mapbox, IMapOptions } from '@antv/l7-maps';

export const CreateMapBox = (props: IMapOptions) => {
  const { mapCinfig } = props;
  return new Mapbox({
    mapCinfig,
  });
};
