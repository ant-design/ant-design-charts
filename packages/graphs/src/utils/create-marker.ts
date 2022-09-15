import G6 from '@antv/g6';
import { IGroup, MarkerCfg } from '../interface';
import { defaultCardStyle } from '../constants';
import { getMarkerPosition } from './get-marker-position';

export const createMarker = (cfg: MarkerCfg, group: IGroup | undefined, size: number[]) => {
  const { show, position, collapsed, style } = cfg;
  if (show) {
    group!.addShape('marker', {
      attrs: {
        ...getMarkerPosition(position, size),
        r: 6,
        cursor: 'pointer',
        symbol: collapsed ? G6.Marker.expand : G6.Marker.collapse,
        stroke: defaultCardStyle.stroke,
        lineWidth: 1,
        fill: '#fff',
        ...style,
      },
      defaultCollapsed: false,
      name: 'collapse-icon',
      position: position,
    });
  }
};
