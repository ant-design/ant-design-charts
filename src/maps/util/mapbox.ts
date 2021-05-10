import { IMapConfig } from '@antv/l7';
import { Mapbox } from '@antv/l7-maps';

export const createMapBox = (mapConfig: IMapConfig) => {
  return new Mapbox(mapConfig);
};
