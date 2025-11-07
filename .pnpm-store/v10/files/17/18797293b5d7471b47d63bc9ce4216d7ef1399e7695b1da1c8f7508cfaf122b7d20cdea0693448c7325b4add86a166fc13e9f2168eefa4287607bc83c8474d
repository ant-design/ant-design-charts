import { Context, FC, ReactNode } from 'react';
import { Theme } from './theme';
export interface StyledConfig {
    /**
     * styled 对象所对应的 ThemeContext
     * @requires
     */
    ThemeContext: Context<any>;
    /**
     * 可以注入相应 styled 方法的 ThemeProvider，或其他自己定义的ThemeProvider
     */
    ThemeProvider?: StyledThemeProvider;
}
export type StyledThemeProvider = FC<{
    theme: Theme;
    children: ReactNode;
}>;
/**
 * @title 样式引擎
 * @description 样式引擎的参数类型
 */
export interface StyleEngine {
    /**
     * @title 自定义主题上下文
     * @description 自定义主题的 React 上下文对象
     */
    CustomThemeContext: Context<any>;
    /**
     * @title Antd 主题上下文
     * @description Antd 主题的 React 上下文对象
     */
    StyledThemeContext?: Context<any>;
    /**
     * @title CSS 类名前缀
     * @description 当前组件的 CSS 类名前缀
     */
    prefixCls?: string;
    iconPrefixCls?: string;
}
