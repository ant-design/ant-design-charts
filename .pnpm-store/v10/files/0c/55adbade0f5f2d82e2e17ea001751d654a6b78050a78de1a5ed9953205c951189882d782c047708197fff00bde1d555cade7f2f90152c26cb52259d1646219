import type { ComponentOptions, PrefixStyleProps } from '../../../core';
import { Component } from '../../../core';
import type { GroupStyleProps, TextStyleProps } from '../../../shapes';
import { Group } from '../../../shapes';
import type { PrefixObject } from '../../../types';
import { MarkerStyleProps } from '../../marker';
export type HandleStyleProps<T = any> = GroupStyleProps & PrefixObject<TextStyleProps, 'label'> & PrefixStyleProps<Omit<MarkerStyleProps, 'x' | 'y'>, 'marker'> & {
    showLabel?: boolean;
    formatter?: (val: T) => string;
    orientation: 'vertical' | 'horizontal';
    /** spacing between marker and label */
    spacing?: number;
    shape?: 'basic' | 'slider';
};
export type HandleOptions = ComponentOptions<HandleStyleProps>;
export type HandleType = 'start' | 'end';
export declare const DEFAULT_HANDLE_CFG: Partial<HandleStyleProps>;
export declare class Handle extends Component<HandleStyleProps> {
    constructor(options: HandleOptions);
    private marker;
    render(attributes: Required<HandleStyleProps>, container: Group): void;
    private renderMarker;
    private renderLabel;
}
