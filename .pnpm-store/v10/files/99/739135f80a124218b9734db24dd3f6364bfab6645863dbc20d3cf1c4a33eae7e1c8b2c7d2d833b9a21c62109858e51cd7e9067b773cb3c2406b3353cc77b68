import type { AnimationOption } from '../../animation/types';
import type { ComponentOptions, PrefixStyleProps } from '../../core/types';
import { DisplayObject, LineStyleProps, TextStyleProps } from '../../shapes';
import type { CallbackParameter, Callable, ExtendDisplayObject, Vector2 } from '../../types';
import type { GridStyleProps } from '../grid/types';
import type { TitleStyleProps } from '../legend/title';

export type AxisType = 'linear' | 'arc' | 'helix';

export type VerticalFactor = -1 | 1;

export interface AxisDatum {
  id?: string;
  value: number;
  label?: number | string;
  [keys: string]: any;
}

export type AxisDatumCP<T extends Array<any> = []> = CallbackParameter<AxisDatum, T>;

export type Direction = 'positive' | 'negative';

export interface Overlap {
  margin?: number[];
}
export interface EllipsisOverlapCfg extends Overlap {
  type: 'ellipsis';
  suffix?: string;
  /** The minimum length that label can reach when ellipsis operation */
  minLength?: string | number;
  maxLength?: string | number;
  step?: string | number;
}
export interface RotateOverlapCfg extends Overlap {
  type: 'rotate';
  optionalAngles: number[];
  /** reset angle to preset when auto rotate failed */
  recoverWhenFailed?: boolean;
}
export interface HideOverlapCfg extends Overlap {
  type: 'hide';
  keepHeader?: boolean;
  keepTail?: boolean;
}
export interface WrapOverlapCfg extends Overlap {
  type: 'wrap';
  wordWrapWidth?: Callable<number, [DisplayObject]>;
  maxLines?: number;
  recoverWhenFailed?: boolean;
}

export interface CustomOverlapCfg extends Overlap {
  type: 'custom';
  /** adjust labels position by yourself  */
  callback?: (labels: DisplayObject[]) => void;
}
export type LabelOverlapCfg =
  | EllipsisOverlapCfg
  | RotateOverlapCfg
  | HideOverlapCfg
  | WrapOverlapCfg
  | CustomOverlapCfg;

export type AxisTitleStyleProps = Omit<TitleStyleProps, 'position'> & {
  position: TitleStyleProps['position'] | 'start' | 'end';
  direction: 'horizontal' | 'vertical';
};

export type AxisTruncateStyleProps = {
  /** truncate range in the axis line */
  range?: [number, number];
  /**
   * the shape of truncate point or area
   * when using a callback form, the argument will additional returns the position of two points
   * we will provide several default shapes
   */
  shape?: Callable<
    ExtendDisplayObject | [ExtendDisplayObject, ExtendDisplayObject],
    CallbackParameter<AxisDatum, [Vector2, Vector2]>
  >;
};

export type AxisLineStyleProps = Omit<LineStyleProps, 'x1' | 'x2' | 'y1' | 'y2'> & {
  /**
   * extend length on the head and tail of axis line
   */
  extension?: [number, number];
  /**
   * line arrow shape
   * When string is passed, use the build-in arrow shape
   */
  arrow?: ExtendDisplayObject;
  /** line arrow offset, -20 ~ 20 is safety */
  arrowOffset?: number;
  /** size of line arrow */
  arrowSize?: number;
};

export type AxisTickStyleProps = {
  length?: Callable<number, AxisDatumCP>;
  /**
   * the position of ticks
   * @description `negative` means ticks is opposite to the direction of cross axis
   * @description `positive` means ticks have same direction of cross axis
   */
  direction?: Direction;
  filter: (...params: AxisDatumCP) => boolean;
  /**
   * tick formatter
   * the callback will additionally return the tick direction
   */
  formatter: (...params: CallbackParameter<AxisDatum, [Vector2]>) => DisplayObject;
} & { [key in keyof LineStyleProps]?: Callable<LineStyleProps[key], AxisDatumCP> };

export type AxisLabelStyleProps = {
  filter: (...params: AxisDatumCP) => boolean;
  /**
   * formatter for labels, if string, return directly. you can even format it as a g shape
   */
  formatter: Callable<ExtendDisplayObject, AxisDatumCP>;
  direction?: Direction;
  /**
   * @description `horizontal` means the labels are always horizontal
   * @description `parallel` means the labels are parallel to the axis line
   * @description `perpendicular` means the labels are perpendicular to the axis line
   */
  align?: 'horizontal' | 'parallel' | 'perpendicular';
  /**
   * spacing between label and it's tick
   */
  spacing?: Callable<number | `${number}%`, AxisDatumCP>;
  /**
   * transform label by using ellipsis, hide and rotate to avoid overlap
   */
  overlap: LabelOverlapCfg[];
  /**
   * render label by HTML or g shape
   * when using a callback form, the argument will additional returns the label vector
   */
  render?: Callable<ExtendDisplayObject, CallbackParameter<AxisDatum, [Vector2]>>;
} & {
  [key in keyof TextStyleProps]?: Callable<TextStyleProps[key], AxisDatumCP>;
};

export type AxisGridStyleProps = Omit<GridStyleProps, 'data' | 'animate' | 'areaFill'> & {
  direction?: Direction;
  /** the grid line length */
  length?: number;
  type?: 'segment' | 'surround';
  connect?: 'line' | 'arc';
  /**
   * by using grid controller, you can set the grid line in polar coordinates
   * each value is the rotate angle(degree), the grid points are obtained by rotating tick position around the center
   */
  controlAngles?: number[];
  /**
   * the area fill color between adjacent grid line
   * when string array is passed, it will be used interchangeably
   * when callback function is passed, it will provide the area index, previous and next grid datum
   */
  areaFill?: string | string[] | Callable<string, AxisDatumCP>;
  filter?: (...params: AxisDatumCP) => boolean;
};

export type AxisBaseStyleProps = PrefixStyleProps<Partial<AxisTitleStyleProps>, 'title'> &
  PrefixStyleProps<Partial<AxisLineStyleProps>, 'line'> &
  PrefixStyleProps<Partial<AxisTickStyleProps>, 'tick'> &
  PrefixStyleProps<Partial<AxisLabelStyleProps>, 'label'> &
  PrefixStyleProps<Partial<AxisGridStyleProps>, 'grid'> &
  PrefixStyleProps<Partial<AxisTruncateStyleProps>, 'trunc'> & {
    animate?: AnimationOption;
    data: AxisDatum[];
    /** the maximum number of data */
    dataThreshold?: number;
    /** 刻度值在副轴方向上的可用空间 */
    crossSize?: number;
    /** 副轴空间的 padding 扩大可用空间，用于首尾 label 的边界情况 */
    crossPadding?: number;
    showLine?: boolean;
    showArrow?: boolean;
    showLabel?: boolean;
    showGrid?: boolean;
    showTick?: boolean;
    showTitle?: boolean;
    showTrunc?: boolean;
    classNamePrefix?: string;
  };

export type LinearAxisStyleProps = AxisBaseStyleProps & { type: 'linear'; startPos: Vector2; endPos: Vector2 };

export type ArcAxisStyleProps = AxisBaseStyleProps & {
  type: 'arc';
  startAngle: number;
  endAngle: number;
  radius: number;
  center: Vector2;
};
export type AxisStyleProps = LinearAxisStyleProps | ArcAxisStyleProps;
export type RequiredLinearAxisStyleProps = Required<LinearAxisStyleProps>;
export type RequiredArcAxisStyleProps = Required<ArcAxisStyleProps>;
export type RequiredAxisStyleProps = Required<AxisStyleProps>;

export type LinearAxisOptions = ComponentOptions<LinearAxisStyleProps>;
export type ArcAxisOptions = ComponentOptions<ArcAxisStyleProps>;
export type AxisOptions = LinearAxisOptions | ArcAxisOptions;
