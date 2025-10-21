import { ComponentOptions, Component, PrefixStyleProps } from '../../core';
import type { DisplayObject, GroupStyleProps, PathStyleProps, TextStyleProps } from '../../shapes';
import { Group } from '../../shapes';
export type HandleType = 'start' | 'end';
export type IconStyleProps = PathStyleProps & {
    x?: number;
    y?: number;
    size?: number;
    radius?: number;
    shape?: string | ((type: HandleType) => DisplayObject);
    orientation?: 'horizontal' | 'vertical';
};
export type LabelStyleProps = Partial<TextStyleProps>;
export type HandleStyleProps = GroupStyleProps & PrefixStyleProps<LabelStyleProps, 'label'> & PrefixStyleProps<IconStyleProps, 'icon'> & {
    x?: number;
    y?: number;
    orientation?: IconStyleProps['orientation'];
    showLabel?: boolean;
    spacing?: number;
    type?: HandleType;
};
export type HandleOptions = ComponentOptions<HandleStyleProps>;
export declare class Handle extends Component<HandleStyleProps> {
    private label;
    private icon;
    constructor(options: HandleOptions);
    private renderLabel;
    private renderIcon;
    render(attributes: HandleStyleProps, container: Group): void;
}
