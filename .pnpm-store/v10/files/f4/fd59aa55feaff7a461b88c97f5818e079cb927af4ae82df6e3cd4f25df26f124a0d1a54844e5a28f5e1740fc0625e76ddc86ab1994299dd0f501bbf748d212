import { Component } from '../../core';
import { Group } from '../../shapes';
import type { TooltipOptions, TooltipStyleProps } from './types';
export type { TooltipStyleProps, TooltipOptions };
export declare class Tooltip extends Component<TooltipStyleProps> {
    static tag: string;
    private timestamp;
    get HTMLTooltipElement(): HTMLElement;
    getContainer(): HTMLElement;
    private get elementSize();
    private get HTMLTooltipItemsElements();
    private element;
    constructor(options: TooltipOptions);
    render(attributes: TooltipStyleProps, container: Group): void;
    destroy(): void;
    /**
     * 如果设置了坐标值，显示过程中会立即更新位置并关闭过渡动画
     */
    show(x?: number, y?: number): void;
    /**
     * 如果 hide 时传入了坐标值，那么只有当鼠标不在 tooltip 上时才会隐藏
     * 对于 enterable = true 的时候，需要传入 x y，为了避免问题，建议上层在使用的时候，都传入 x y
     * @param x
     * @param y
     * @returns
     */
    hide(x?: number, y?: number): void;
    /**
     * 初始化容器
     */
    private initShape;
    private prevCustomContentKey;
    private renderCustomContent;
    /**
     * 更新 HTML 上的内容
     */
    private renderHTMLTooltipElement;
    /**
     * 根据 position 和指针位置，计算出 tooltip 相对于指针的偏移量
     * @param assignPosition {TooltipPosition} tooltip相对于指针的位置，不指定时使用默认参数
     */
    private getRelativeOffsetFromCursor;
    /**
     * 将相对于指针的偏移量生效到dom元素上
     */
    private setOffsetPosition;
    /**
     * 更新tooltip的位置
     */
    private updatePosition;
    /**
     * 计算自动调整位置后的相对位置
     * @param offsetX 根据position计算的横向偏移量
     * @param offsetY 根据position计算的纵向偏移量
     */
    private autoPosition;
    private isCursorEntered;
    private closeTransition;
}
