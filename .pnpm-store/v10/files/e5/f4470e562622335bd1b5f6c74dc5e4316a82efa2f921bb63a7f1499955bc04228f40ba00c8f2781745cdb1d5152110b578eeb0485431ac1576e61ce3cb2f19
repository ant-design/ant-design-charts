import { Component } from '../../core';
import { Group } from '../../shapes';
import type { SliderOptions, SliderStyleProps } from './types';
export type { SliderOptions, SliderStyleProps };
export declare class Slider extends Component<SliderStyleProps> {
    static tag: string;
    private range;
    get values(): [number, number];
    set values(values: Required<SliderStyleProps>['values']);
    /** 滑道、背景 */
    private trackShape;
    /** 刷选交互区域 */
    private brushArea;
    private foregroundGroup;
    /** 前景、选区 */
    private selectionShape?;
    /** 开始滑块 */
    private startHandle?;
    /** 结束滑块 */
    private endHandle?;
    /**
     * 选区开始的位置
     */
    private selectionStartPos;
    /**
     * 选区宽度
     */
    private selectionWidth;
    /**
     * 记录上一次鼠标事件所在坐标
     */
    private prevPos;
    /**
     * drag事件当前选中的对象
     */
    private target;
    private get sparklineStyle();
    private get shape();
    private get availableSpace();
    constructor(options: SliderOptions);
    getValues(): [number, number];
    /** 不触发重绘 */
    setValues(values?: Required<SliderStyleProps>['values'], animate?: boolean): void;
    private updateSelectionArea;
    private updateHandlesPosition;
    private innerSetValues;
    private renderTrack;
    private renderBrushArea;
    private renderSparkline;
    private renderHandles;
    private renderSelection;
    render(attributes: SliderStyleProps, container: Group): void;
    private clampValues;
    /**
     * 计算选区坐标和宽高
     * 默认用来计算前景位置大小
     */
    private calcSelectionArea;
    /**
     * 计算手柄的x y
     */
    private calcHandlePosition;
    private inferTextStyle;
    /**
     * 计算手柄应当处于的位置
     * @param handleType start手柄还是end手柄
     * @returns
     */
    private calcHandleText;
    private getHandleLabelStyle;
    private getHandleIconStyle;
    private getHandleStyle;
    private getHandleSize;
    private getOrientVal;
    private setValuesOffset;
    private getRatio;
    private dispatchCustomEvent;
    bindEvents(): void;
    private onScroll;
    private onDragStart;
    private onDragging;
    private onDragEnd;
    private onValueChange;
}
