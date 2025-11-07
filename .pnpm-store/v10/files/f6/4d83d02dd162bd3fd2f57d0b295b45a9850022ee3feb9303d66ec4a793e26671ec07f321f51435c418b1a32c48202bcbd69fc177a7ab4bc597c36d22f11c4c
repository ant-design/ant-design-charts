import { ThemeConfig } from 'antd';
import { ThemeAppearance } from './appearance';
import { ClassNamesUtil, CssUtil, SerializedStyles } from './css';
import { AtomInputType } from './genericUtils';
import { ResponsiveKey } from './response';
import type { AntdStylish, AntdToken, AppearanceState, FullToken, Theme } from './theme';
export type BreakpointMapParams = Partial<Record<ResponsiveKey, AtomInputType>>;
export type UseTheme = () => Theme;
/**
 * 响应式断点工具函数
 */
export interface ResponsiveUtil extends Record<ResponsiveKey, string> {
    /**
     * 支持使用函数表达式
     * @param breakpoints
     */
    (breakpoints: BreakpointMapParams): SerializedStyles;
}
/**
 * @title 通用样式工具函数
 */
export interface CommonStyleUtils {
    /**
     * @title CSS 类名工具函数
     */
    cx: ClassNamesUtil;
    /**
     * @title CSS 序列化函数
     */
    css: CssUtil;
    /**
     * @title 响应式媒体查询工具函数
     * @description 可以快速创建响应式媒体查询的工具函数
     */
    responsive: ResponsiveUtil;
}
/**
 * 获取 antd theme 配置
 */
export type GetAntdThemeConfig = (appearance: ThemeAppearance) => ThemeConfig | undefined;
export interface AntdStylishParams extends AppearanceState {
    token: AntdToken;
    css: CssUtil;
}
/**
 * 创建 antd stylish 配置
 */
export type GetAntdStylish = (theme: AntdStylishParams) => {
    [T in keyof AntdStylish]: SerializedStyles;
};
export interface CustomTokenParams extends AppearanceState {
    token: AntdToken;
}
/**
 * 创建 自定义 token
 */
export type GetCustomToken<T> = (theme: CustomTokenParams) => T;
export interface CustomStylishParams extends AppearanceState {
    token: FullToken;
    stylish: AntdStylish;
    css: CssUtil;
}
/**
 * 创建 自定义 stylish
 */
export type GetCustomStylish<S> = (theme: CustomStylishParams) => {
    [T in keyof S]: SerializedStyles;
};
