import type { ComponentOptions, PrefixStyleProps } from '../../core';
import type { GroupStyleProps, LineStyleProps, PathStyleProps, RectStyleProps, TextStyleProps } from '../../shapes';
import type { ExtendDisplayObject } from '../../types';
import type { SeriesAttr } from '../../util';
import type { TitleStyleProps } from './title';
import type { CategoryItemsStyleProps } from './category/items';
import type { HandleStyleProps } from './continuous/handle';
import type { RibbonStyleProps } from './continuous/ribbon';
export type Interpolate<T = string> = (val: number) => T;
export interface ContinuousBaseDatum {
    id?: string;
    [keys: string]: any;
}
export interface ContinuousDatum extends ContinuousBaseDatum {
    value: number;
}
export type LabelStyleProps<T = any> = TextStyleProps & PrefixStyleProps<LineStyleProps, 'tick'> & {
    align?: 'value' | 'range';
    direction?: 'positive' | 'negative';
    filter?: (val: T, index: number, arr: T[]) => boolean;
    formatter?: (val: T, index: number, arr: T[]) => string;
    /** spacing between label and legend ribbon */
    spacing?: number;
};
export type IndicatorStyleProps<T = any> = PathStyleProps & TextStyleProps & {
    formatter: (val: T) => ExtendDisplayObject;
    indicate: (val: T) => void;
    padding: SeriesAttr;
};
export type LegendBaseStyleProps = GroupStyleProps & PrefixStyleProps<Omit<RectStyleProps, 'width' | 'height'>, 'background'> & PrefixStyleProps<Partial<TitleStyleProps>, 'title'> & {
    orientation?: 'horizontal' | 'vertical';
    padding?: SeriesAttr;
    showTitle?: boolean;
    classNamePrefix?: string;
};
export type LegendBaseOptions = ComponentOptions<LegendBaseStyleProps>;
export type ContinuousStyleProps = LegendBaseStyleProps & PrefixStyleProps<Partial<Omit<HandleStyleProps, 'orientation'>>, 'handle'> & PrefixStyleProps<Partial<Omit<IndicatorStyleProps, 'text'>>, 'indicator'> & PrefixStyleProps<Partial<Omit<LabelStyleProps, 'text'>>, 'label'> & PrefixStyleProps<Partial<Omit<RibbonStyleProps, 'orientation' | 'range' | 'partition' | 'length'>>, 'ribbon'> & Partial<Pick<RibbonStyleProps, 'color' | 'block' | 'type'>> & {
    data: ContinuousDatum[];
    domain?: [number, number];
    defaultValue?: [number, number];
    height: number;
    showHandle?: boolean;
    showIndicator?: boolean;
    showLabel?: boolean;
    showTick?: boolean;
    slidable?: boolean;
    step?: number;
    width: number;
};
export type ContinuousOptions = ComponentOptions<ContinuousStyleProps>;
export type CategoryStyleProps = LegendBaseStyleProps & CategoryItemsStyleProps;
export type CategoryOptions = ComponentOptions<CategoryStyleProps>;
