import { ComponentOptions, Component } from '../../core';
import type { GroupStyleProps, LineStyleProps, RectStyleProps, CircleStyleProps } from '../../shapes';
import { Circle } from '../../shapes';
import { PrefixObject } from '../../types';
import type { HandleType } from '../slider/handle';
type TimeModeHandleOptions = ComponentOptions<Partial<CircleStyleProps>>;
export declare class TimeModeHandle extends Circle {
    static defaultOptions: {
        style: {
            r: number;
            fill: string;
            lineWidth: number;
            stroke: string;
            strokeOpacity: number;
            cursor: string;
        };
    };
    constructor(options: TimeModeHandleOptions);
    bindEvents(): void;
}
type ChartModeHandleStyleProps = GroupStyleProps & PrefixObject<Omit<RectStyleProps, 'x' | 'y' | 'width' | 'height'>, 'background'> & PrefixObject<Omit<LineStyleProps, 'x1' | 'y1' | 'x2' | 'y2'>, 'icon'> & PrefixObject<Omit<LineStyleProps, 'x1' | 'y1' | 'x2' | 'y2'>, 'border'> & {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    /** 图标尺寸 */
    iconSize?: number;
    type: HandleType;
};
type ChartModeHandleOptions = ComponentOptions<ChartModeHandleStyleProps>;
export declare class ChartModeHandle extends Component<ChartModeHandleStyleProps> {
    static defaultOptions: ChartModeHandleOptions;
    private renderBackground;
    private renderIcon;
    private renderBorder;
    render(): void;
    constructor(options: ChartModeHandleOptions);
}
export {};
