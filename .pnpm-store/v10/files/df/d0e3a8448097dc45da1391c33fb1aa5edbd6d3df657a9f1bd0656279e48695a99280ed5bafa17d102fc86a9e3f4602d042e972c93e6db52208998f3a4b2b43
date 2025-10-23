import { Band, Linear } from '@antv/scale';
import type { ComponentOptions } from '../../core';
import type { GroupStyleProps, LineStyleProps as GLineStyleProps, PathStyleProps, RectStyleProps } from '../../shapes';
import type { CallableObject, CallbackParameter, PrefixObject } from '../../types';

export type Point = [number, number];
export type Line = Point[];
export type Data = number[][];
export type Scales = {
  type: 'line' | 'column';
  y: Linear;
  x: Linear | Band;
};

type LineStyleProps = CallableObject<
  PrefixObject<Omit<GLineStyleProps, 'x1' | 'x2' | 'y1' | 'y2'>, 'line'>,
  CallbackParameter<Data>
> &
  CallableObject<PrefixObject<Omit<PathStyleProps, 'path' | 'd'>, 'area'>, CallbackParameter<Data>> & {
    /** 是否光滑 */
    smooth?: boolean;
  };

type ColumnStyleProps = CallableObject<PrefixObject<RectStyleProps, 'column'>, CallbackParameter<Data>> & {
  /** 是否分组 */
  isGroup?: boolean;
  /** 分组柱子的间距 */
  spacing?: number;
};

export type SparklineStyleProps = GroupStyleProps &
  LineStyleProps &
  ColumnStyleProps & {
    x?: number;
    y?: number;
    color?: string | string[] | ((idx: number) => string);
    data?: number[] | number[][];
    isStack?: boolean;
    range?: [number, number];
    type: 'line' | 'column';
    /**
     * 缩放比例，0~1
     */
    scale?: number;
  };

export type SparklineOptions = ComponentOptions<SparklineStyleProps>;
