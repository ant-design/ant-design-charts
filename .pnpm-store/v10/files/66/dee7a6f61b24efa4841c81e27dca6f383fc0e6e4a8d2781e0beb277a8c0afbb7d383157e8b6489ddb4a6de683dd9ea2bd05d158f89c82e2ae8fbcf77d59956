import { DisplayObject, Group, GroupStyleProps, PathStyleProps, RectStyleProps, TextStyleProps } from '@antv/g';
import type { ComponentOptions } from '../../../core';
import { Component } from '../../../core';
import { ExtendDisplayObject, PrefixObject } from '../../../types';
import { SeriesAttr } from '../../../util';
import type { PoptipStyleProps } from '../../poptip/types';
import type { PoptipRender } from './items';
type ItemMarkerStyle = {
    size?: number;
} & PathStyleProps;
type ItemTextStyle = Omit<TextStyleProps, 'text'>;
type ItemBackgroundStyle = Omit<RectStyleProps, 'width' | 'height'>;
export type CategoryItemStyleProps = GroupStyleProps & PrefixObject<ItemMarkerStyle, 'marker'> & PrefixObject<ItemTextStyle, 'label'> & PrefixObject<ItemTextStyle, 'value'> & PrefixObject<ItemBackgroundStyle, 'background'> & {
    labelText?: ExtendDisplayObject;
    marker?: string | (() => DisplayObject);
    /** spacing between marker, label and value */
    spacing?: SeriesAttr;
    span?: SeriesAttr;
    valueText?: ExtendDisplayObject;
    width?: number;
    x?: number;
    y?: number;
    poptip?: PoptipStyleProps & PoptipRender;
    focus?: boolean;
    focusMarkerSize?: number;
    classNamePrefix?: string;
};
export type CategoryItemOptions = ComponentOptions<CategoryItemStyleProps>;
export declare class CategoryItem extends Component<CategoryItemStyleProps> {
    keyFields: object;
    constructor(options: CategoryItemOptions, keyFields?: Omit<CategoryItemOptions, 'style'>);
    private poptipGroup;
    private focusGroup;
    private markerGroup;
    private labelGroup;
    private valueGroup;
    private background;
    private get showValue();
    private get actualSpace();
    private get span();
    setAttribute(n: any, v: any): void;
    private get shape();
    private get spacing();
    private get layout();
    private get scaleSize();
    private renderMarker;
    private renderLabel;
    private renderValue;
    private createPoptip;
    private bindPoptip;
    private renderFocus;
    private renderPoptip;
    private renderBackground;
    private adjustLayout;
    render(attributes: CategoryItemStyleProps, container: Group): void;
}
export {};
