import { IMapConfig } from '@antv/l7';
import { Mapbox, GaodeMap } from '@antv/l7-maps';
import { MapType } from '../interface';

const maps = {
  Mapbox: Mapbox,
  GaodeMap: GaodeMap,
};

export const createMap = (mapConfig: IMapConfig, type: MapType = 'Mapbox') => {
  return new maps[type](mapConfig);
};
