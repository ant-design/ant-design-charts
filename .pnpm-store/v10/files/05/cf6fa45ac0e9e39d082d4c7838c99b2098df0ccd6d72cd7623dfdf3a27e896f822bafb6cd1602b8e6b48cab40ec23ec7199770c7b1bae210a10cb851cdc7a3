import { ComponentOptions, Component } from '../../core';
import type { GroupStyleProps, RectStyleProps } from '../../shapes';
import { Group, Rect } from '../../shapes';
import { PrefixObject } from '../../types';
import { Indicator } from '../indicator';
import type { SelectStyleProps } from '../select';
type IconBaseStyleProps = GroupStyleProps & PrefixObject<RectStyleProps, 'background'> & {
    x?: number;
    y?: number;
    size?: number;
    color?: string;
    onClick?: (e: IconBase) => void;
};
type IconBaseOptions = ComponentOptions<IconBaseStyleProps>;
export declare abstract class IconBase<T extends Record<string, any> = {}> extends Component<T & IconBaseStyleProps> {
    static tag: string;
    static defaultOptions: IconBaseOptions;
    private static backgroundOpacities;
    /** hover 时是否显示背景 */
    protected showBackground: boolean;
    protected get label(): string;
    protected indicator: Indicator;
    protected background: Rect;
    protected icon: Group;
    get lineWidth(): number;
    protected get padding(): import("../../util").StandardSeriesAttr;
    protected get iconSize(): number;
    protected renderBackground(): void;
    protected showIndicator(): void;
    protected hideIndicator(): void;
    constructor(options: IconBaseOptions);
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): void;
    abstract renderIcon(): void;
    bindEvents(): void;
}
/** 重置 */
export declare class Reset extends IconBase {
    private arcPath;
    protected get label(): string;
    renderIcon(): void;
}
/** 快退 */
export declare class Backward extends IconBase {
    protected get label(): string;
    renderIcon(): void;
}
/** 快进 */
export declare class Forward extends IconBase {
    protected get label(): string;
    renderIcon(): void;
}
export declare class Play extends IconBase {
    protected get label(): string;
    renderIcon(): void;
}
export declare class Pause extends IconBase {
    protected get label(): string;
    renderIcon(): void;
}
/** 时间范围 */
export declare class Range extends IconBase {
    protected get label(): string;
    renderIcon(): void;
}
/** 值范围 */
export declare class Value extends IconBase {
    protected get label(): string;
    renderIcon(): void;
}
export declare class LineChart extends IconBase {
    protected get label(): string;
    renderIcon(): void;
}
export declare class BarChart extends IconBase {
    protected get label(): string;
    get data(): number[];
    renderIcon(): void;
}
/** 分割线 */
export declare class Split extends IconBase {
    protected showBackground: boolean;
    constructor(options: IconBaseOptions);
    renderIcon(): void;
}
export declare class SpeedSelect extends IconBase<{
    speed?: number;
    onSelect: SelectStyleProps['onSelect'];
}> {
    static tag: string;
    protected showBackground: boolean;
    protected get padding(): import("../../util").StandardSeriesAttr;
    renderIcon(): void;
}
type ToggleIconStyleProps<T extends string> = IconBaseStyleProps & {
    type: T;
    onChange?: (type: T) => void;
};
type ToggleIconOptions<T extends string> = ComponentOptions<ToggleIconStyleProps<T>>;
export declare abstract class ToggleIcon<T extends string> extends Component<ToggleIconStyleProps<T>> {
    abstract toggles: Array<[
        T,
        typeof Play | typeof Pause | typeof Range | typeof Value | typeof LineChart | typeof BarChart
    ]>;
    static tag: string;
    private icon;
    private currentType;
    getType(): T;
    constructor(options: ToggleIconOptions<T>);
    render(): void;
    bindEvents(): void;
}
export declare class PlayPause extends ToggleIcon<'play' | 'pause'> {
    toggles: ['play' | 'pause', typeof Play | typeof Pause][];
    constructor(options: ToggleIconOptions<'play' | 'pause'>);
}
export declare class SelectionType extends ToggleIcon<'range' | 'value'> {
    toggles: ['range' | 'value', typeof Range | typeof Value][];
    constructor(options: ToggleIconOptions<'range' | 'value'>);
}
export declare class ChartType extends ToggleIcon<'line' | 'column'> {
    toggles: ['line' | 'column', typeof LineChart | typeof BarChart][];
    constructor(options: ToggleIconOptions<'line' | 'column'>);
}
export {};
