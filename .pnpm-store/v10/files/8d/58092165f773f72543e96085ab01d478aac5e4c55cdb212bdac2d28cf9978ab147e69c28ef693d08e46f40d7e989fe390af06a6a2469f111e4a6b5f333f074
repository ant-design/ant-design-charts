import { deepAssign } from '../../util';
import type {
  CrosshairBaseStyleProps,
  LineCrosshairStyleProps,
  CircleCrosshairStyleProps,
  PolygonCrosshairStyleProps,
} from './types';

export const CROSSHAIR_BASE_DEFAULT_STYLE: Partial<CrosshairBaseStyleProps> = {
  tagText: '',
  lineStroke: '#416180',
  lineStrokeOpacity: 0.45,
  lineLineWidth: 1,
  lineLineDash: [5, 5],
};

export const LINE_CROSSHAIR_DEFAULT_STYLE: Partial<LineCrosshairStyleProps> = deepAssign(
  {},
  CROSSHAIR_BASE_DEFAULT_STYLE,
  {
    type: 'line',
    tagPosition: 'start',
    tagAlign: 'center',
    tagVerticalAlign: 'bottom',
  }
);

export const CIRCLE_CROSSHAIR_DEFAULT_STYLE: Partial<CircleCrosshairStyleProps> = deepAssign(
  {},
  CROSSHAIR_BASE_DEFAULT_STYLE,
  {
    type: 'circle',
    defaultRadius: 0,
  }
);

export const POLYGON_CROSSHAIR_DEFAULT_STYLE: Partial<PolygonCrosshairStyleProps> = deepAssign(
  {},
  CROSSHAIR_BASE_DEFAULT_STYLE,
  {
    type: 'polygon',
    defaultRadius: 0,
    startAngle: 0,
  }
);
