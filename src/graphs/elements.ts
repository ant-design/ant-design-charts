import G6, { IGroup } from '@antv/g6';
import { defaultCardStyle } from './constants';
import { getMarkerPosition } from './utils';
import { MarkerCfg } from './interface';

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
    });
  }
};
