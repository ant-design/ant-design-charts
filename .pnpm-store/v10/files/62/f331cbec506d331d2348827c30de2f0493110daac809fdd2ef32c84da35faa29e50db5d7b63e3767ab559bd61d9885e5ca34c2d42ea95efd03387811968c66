import type { BaseStyleProps } from '../../shapes';
import type { StandardAnimationOption } from '../../animation';
import type { ComponentOptions } from '../../core';
import type { Point } from '../../types';

export type GridStyle = BaseStyleProps;

export type GridStyleProps = GridStyle & {
  animate: StandardAnimationOption;
  data: { id: string | number; points: Point[] }[];
  /** the connect way of two lines, if arc, center is necessary */
  type?: 'segment' | 'surround';
  connect?: 'line' | 'arc';
  // If type is 'circle', should specify the center.
  center?: Point;
  // If type is 'circle', determine whether to close path.
  closed?: boolean;
  /** FillColors between lines. */
  areaFill?: string | string[] | null;
  isBillboard?: boolean;
};

export type GridOptions = ComponentOptions<GridStyleProps>;
