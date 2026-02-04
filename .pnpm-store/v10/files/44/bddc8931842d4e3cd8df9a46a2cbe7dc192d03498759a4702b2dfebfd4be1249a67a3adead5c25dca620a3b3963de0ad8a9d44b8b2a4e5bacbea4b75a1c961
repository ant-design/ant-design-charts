import { Component } from '../../core';
import { Group } from '../../shapes';
import type { ButtonOptions, ButtonStyleProps } from './types';
export type { ButtonStyleProps, ButtonOptions };
export declare class Button extends Component<ButtonStyleProps> {
    /**
     * 组件类型
     */
    static tag: string;
    /**
     * 文本
     */
    private textShape;
    private state;
    private get markerSize();
    private get textAvailableWidth();
    private get buttonHeight();
    constructor(options: ButtonOptions);
    /**
     * 根据size、type属性生成实际渲染的属性
     */
    private getStyle;
    render(attributes: Required<ButtonStyleProps>, container: Group): void;
    /**
     * 组件的更新
     */
    update(attr?: Partial<ButtonStyleProps>): void;
    /** 更新状态 (不需要走 update) */
    setState(state: 'disabled' | 'active' | 'default'): void;
    hide(): void;
    show(): void;
    private clickEvents;
    private mouseenterEvent;
    private mouseleaveEvent;
    bindEvents(): void;
}
