import type { ComponentOptions, PrefixStyleProps } from '../../core';
import { LineStyleProps } from '../../shapes';
import type { Point } from '../../types';
import type { TagStyleProps } from '../tag';
export type CrosshairBaseStyleProps = PrefixStyleProps<Omit<LineStyleProps, 'x1' | 'y1' | 'x2' | 'y2'>, 'line'> & PrefixStyleProps<TagStyleProps, 'tag'> & {
    type?: 'line' | 'circle' | 'polygon';
    tagPosition?: 'start' | 'end';
};
export type LineCrosshairStyleProps = CrosshairBaseStyleProps & {
    type?: 'line';
    startPos: Point;
    endPos: Point;
};
export type CircleCrosshairStyleProps = CrosshairBaseStyleProps & {
    type?: 'circle';
    center: Point;
    defaultRadius?: number;
};
export type PolygonCrosshairStyleProps = CrosshairBaseStyleProps & {
    type?: 'polygon';
    center: Point;
    defaultRadius?: number;
    sides: number;
    startAngle?: number;
};
export type CrosshairBaseOptions = ComponentOptions<CrosshairBaseStyleProps>;
export type LineCrosshairOptions = ComponentOptions<LineCrosshairStyleProps>;
export type CircleCrosshairOptions = ComponentOptions<CircleCrosshairStyleProps>;
export type PolygonCrosshairOptions = ComponentOptions<PolygonCrosshairStyleProps>;
