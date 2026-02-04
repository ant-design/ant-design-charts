import type { CallableStyleProps, ComponentOptions, PrefixStyleProps } from '../../../core';
import { Component } from '../../../core';
import type { GroupStyleProps } from '../../../shapes';
import { Group } from '../../../shapes';
import type { CallbackParameter } from '../../../types';
import { Selection, SeriesAttr } from '../../../util';
import type { NavigatorStyleProps } from '../../navigator';
import type { CategoryItemStyleProps } from './item';
import type { PoptipStyleProps } from '../../poptip/types';
interface CategoryItemsDatum {
    [keys: string]: any;
}
type CallableItemStyle = CallableStyleProps<Omit<CategoryItemStyleProps, 'width' | 'height'>, CallbackParameter<CategoryItemsDatum>>;
export type PoptipRender = {
    render?: (params: {
        label: string | number;
        value: string | number;
        color?: string;
        [key: string]: unknown;
    }) => string;
};
export type CategoryItemsStyleProps = GroupStyleProps & PrefixStyleProps<CallableItemStyle, 'item'> & PrefixStyleProps<NavigatorStyleProps, 'nav'> & {
    data: CategoryItemsDatum[];
    orientation?: 'horizontal' | 'vertical';
    layout?: 'flex' | 'grid';
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    gridRow?: number;
    gridCol?: number;
    padding?: SeriesAttr;
    rowPadding?: number;
    colPadding?: number;
    click?: (el: Selection) => void;
    mouseenter?: (el: Selection) => void;
    mouseleave?: (el: Selection) => void;
    poptip?: PoptipStyleProps & PoptipRender;
    focus?: boolean;
    focusMarkerSize?: number;
    classNamePrefix?: string;
    render?: (data: CategoryItemsDatum[]) => string | HTMLElement;
};
export type CategoryItemsOptions = ComponentOptions<CategoryItemsStyleProps>;
export declare class CategoryItems extends Component<CategoryItemsStyleProps> {
    constructor(options: CategoryItemsOptions);
    private navigator;
    private navigatorShape;
    private get pageViews();
    private get grid();
    private get renderData();
    private getGridLayout;
    private getFlexLayout;
    private get itemsLayout();
    private ifHorizontal;
    private flattenPage;
    private renderItems;
    private relayoutNavigator;
    private adjustLayout;
    private renderNavigator;
    getBBox(): DOMRect;
    render(attributes: Required<CategoryItemsStyleProps>, container: Group): void;
    private dispatchCustomEvent;
}
export {};
