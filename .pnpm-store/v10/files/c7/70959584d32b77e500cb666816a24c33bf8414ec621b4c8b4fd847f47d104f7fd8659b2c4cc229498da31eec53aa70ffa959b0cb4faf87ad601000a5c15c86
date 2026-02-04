import { Linear } from '@antv/scale';
import { Component } from '../../core';
import { Group } from '../../shapes';
import { Selection } from '../../util';
import { Axis } from '../axis';
import { Title } from './title';
import { Handle } from './continuous/handle';
import { ContinuousOptions, ContinuousStyleProps } from './types';
export type { ContinuousOptions, ContinuousStyleProps };
export declare class Continuous extends Component<ContinuousStyleProps> {
    constructor(options: ContinuousOptions);
    protected eventToOffsetScale: Linear;
    protected innerRibbonScale: Linear;
    protected title?: Title;
    protected label: Axis;
    protected ribbon: Selection;
    protected indicator: Selection;
    protected get handleOffsetRatio(): number;
    protected handlesGroup: Selection;
    protected startHandle?: Handle;
    protected endHandle?: Handle;
    getBBox(): DOMRect;
    render(attributes: Required<ContinuousStyleProps>, container: Group): void;
    private get range();
    private get ribbonScale();
    private get ribbonRange();
    get selection(): [number, number];
    protected ifHorizontal<T>(a: T, b: T): T;
    private renderTitle;
    private get availableSpace();
    private get labelFixedSpacing();
    private get labelPosition();
    private cacheLabelBBox;
    private get labelBBox();
    private get labelShape();
    private get ribbonBBox();
    private get ribbonShape();
    private renderRibbon;
    private getHandleClassName;
    private renderHandles;
    private adjustHandles;
    /**
     * Update SliderHandle sub-elements className to use legend prefix
     * SliderHandle generates: handle-icon-rect, handle-icon-line, handle-label
     * Should add legend className: g2-legend-handle-marker, g2-legend-handle-label
     */
    private updateSliderHandleClassNames;
    private cacheHandleBBox;
    private get handleBBox();
    /**
     *  因为 handle label 的宽高是动态的，所以 handle bbox 是第一次渲染时的 bbox
     */
    private get handleShape();
    private setHandlePosition;
    private renderIndicator;
    private get labelData();
    private get labelStyle();
    private renderLabel;
    private get labelAxisStyle();
    private adjustLabel;
    /** 当前交互的对象 */
    private target;
    /** 上次鼠标事件的位置 */
    private prevValue;
    bindEvents(): void;
    private onHovering;
    showIndicator(value: number, text?: string): void;
    private hideIndicator;
    private onDragStart;
    private onDragging;
    private onDragEnd;
    private updateMouse;
    setSelection(start: number, end: number): void;
    private updateSelection;
    private get step();
    private getTickValue;
    /**
     * 事件触发的位置对应的value值
     */
    private getValueByCanvasPoint;
    /** reverse: 屏幕偏移量 -> 值 */
    private getOffset;
    private getRealSelection;
    private getRealValue;
    private dispatchSelection;
    private dispatchIndicated;
}
