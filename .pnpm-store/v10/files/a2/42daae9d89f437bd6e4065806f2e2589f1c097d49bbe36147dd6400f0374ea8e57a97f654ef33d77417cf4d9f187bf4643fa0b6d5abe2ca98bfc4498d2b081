import { Component } from '../../core';
import type { Group } from '../../shapes';
import type { ScrollbarOptions, ScrollbarStyleProps } from './types';
export type { ScrollbarOptions, ScrollbarStyleProps };
export declare class Scrollbar extends Component<ScrollbarStyleProps> {
    static tag: string;
    private slider;
    private range;
    private get padding();
    constructor(options: ScrollbarOptions);
    private get value();
    private get trackLength();
    private get availableSpace();
    private get trackRadius();
    private get thumbRadius();
    /**
     * accord to thumbLen and value, calculate the values of slider
     */
    private getValues;
    getValue(): number;
    private renderSlider;
    render(attributes: ScrollbarStyleProps, container: Group): void;
    /**
     * 设置value
     * @param value 当前位置的占比
     */
    setValue(value: number, animate?: boolean): void;
    /**
     * 值改变事件
     */
    private onValueChange;
    bindEvents(): void;
    /**
     * 根据orient取出对应轴向上的值
     * 主要用于取鼠标坐标在orient方向上的位置
     */
    private getOrientVal;
    /**
     * 点击轨道事件
     */
    private onTrackClick;
    /**
     * 悬浮事件
     */
    private onHover;
    private onThumbMouseenter;
    private onTrackMouseenter;
    private onThumbMouseleave;
    private onTrackMouseleave;
}
