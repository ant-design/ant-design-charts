import { IMapConfig } from '@antv/l7';
import { Mapbox } from '@antv/l7-maps';

export const CreateMapBox = (props: IMapConfig) => {
  const { mapCinfig } = props;
  return new Mapbox({
    mapCinfig,
  });
};
