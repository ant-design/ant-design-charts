import type { ComponentOptions } from '../../../core/types';
import type { GroupStyleProps, TextStyleProps } from '../../../shapes';
import type { ExtendDisplayObject } from '../../../types';
import type { SeriesAttr } from '../../../util';

export type PositionAbbr = 't' | 'r' | 'l' | 'b' | 'lt' | 'tl' | 'rt' | 'tr' | 'lb' | 'bl' | 'rb' | 'br' | 'i';

export type TitleStyleProps = GroupStyleProps &
  Omit<TextStyleProps, 'text'> & {
    text: ExtendDisplayObject;
    spacing?: SeriesAttr;
    inset?: SeriesAttr;
    position?:
      | PositionAbbr
      | 'top'
      | 'bottom'
      | 'left'
      | 'right'
      | 'left-top'
      | 'top-left'
      | 'left-bottom'
      | 'bottom-left'
      | 'right-top'
      | 'top-right'
      | 'right-bottom'
      | 'bottom-right'
      | 'inner';
    classNamePrefix?: string;
  };

export type TitleOptions = ComponentOptions<TitleStyleProps>;
