import { Emotion } from "../../core/createEmotion";
import { StyleManager } from "../../types";
import { StyleProviderProps as AntdStyleProviderProps } from '@ant-design/cssinjs';
import { StylisPlugin } from '@emotion/cache';
import { Context, FC, ReactNode } from 'react';
export interface StyleProviderProps extends Partial<Pick<AntdStyleProviderProps, 'autoClear' | 'cache' | 'hashPriority' | 'ssrInline' | 'transformers' | 'linters'>> {
    /**
     * emotion 样式前缀，默认值为 acss
     */
    prefix?: string;
    /**
     * 随机数，用于 CSP
     */
    nonce?: string;
    /**
     * Stylis 插件
     */
    stylisPlugins?: StylisPlugin[];
    /**
     * 渲染样式的容器
     */
    container?: Element | ShadowRoot | null;
    /**
     * 开启极速模式，极速模式下不会插入真实的样式 style
     * @default false
     */
    speedy?: boolean;
    /**
     * 样式插入点，用于控制第一个 style 标签插入的位置
     */
    insertionPoint?: HTMLElement;
    /**
     * 获取到 styleManager 实例的回调函数
     * @param styleManager - StyleManager 实例
     */
    getStyleManager?: (styleManager: StyleManager) => void;
    /**
     * 子组件
     */
    children: ReactNode;
}
export declare const createStyleProvider: (EmotionContext: Context<Emotion>) => FC<StyleProviderProps>;
