import { DisplayObject, Group } from '../../shapes';
import { Component } from '../../core';
import type { PoptipStyleProps, PoptipOptions } from './types';
export type { PoptipStyleProps as PoptipCfg, PoptipOptions };
export { getPositionXY } from './utils';
type PoptipCallbackOptions = {
    html?: string;
    target?: HTMLElement | DisplayObject | false;
} & Pick<PoptipStyleProps, 'position' | 'arrowPointAtCenter' | 'follow' | 'offset'>;
export declare class Poptip extends Component<PoptipStyleProps> {
    static tag: string;
    get visible(): boolean;
    private static defaultOptions;
    /** 容器 HTML 元素节点 */
    private container;
    /** 显影控制 */
    private visibility;
    /** 所有绑定的目标对象 */
    private map;
    /** 节点样式 */
    private domStyles;
    constructor(options: PoptipOptions);
    render(attributes: PoptipStyleProps, container: Group): void;
    /**
     * poptip 组件更新
     */
    update(cfg?: Partial<PoptipStyleProps>): void;
    /**
     * 绑定元素
     */
    bind(element: HTMLElement | DisplayObject, callback?: PoptipCallbackOptions | ((e: any) => PoptipCallbackOptions)): void;
    unbind(element: HTMLElement | DisplayObject): void;
    /**
     * 清空容器内容
     */
    clear(): void;
    /**
     * 清除
     */
    destroy(): void;
    /**
     * 显示 + 改变位置
     * @param x 可选 改变位置 x 方向
     * @param y 可选 改变位置 y 方向
     * @param text 文本变化
     */
    showTip(x?: number, y?: number, options?: Pick<PoptipStyleProps, 'text' | 'position' | 'offset'>): void;
    /**
     * 隐藏
     */
    hideTip(): void;
    /**
     * 获取内部容器 HTMLElement
     * @returns this.element:HTMLElement;
     */
    getContainer(): HTMLElement;
    getClassName(): string;
    /**
     * 初始化容器
     */
    private initShape;
    /**
     * 更新 HTML 上的内容
     */
    private updatePoptipElement;
    /**
     * 应用样式表
     */
    private applyStyles;
    /**
     * 将相对于指针的偏移量生效到dom元素上
     * @param x 盒子相对于页面 x 的位置
     * @param y 盒子相对于页面 y 的位置
     */
    private setOffsetPosition;
}
