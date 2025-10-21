import { Context, FC } from 'react';
import { StyleEngine, StyledConfig, UseTheme } from "../../types";
import { ThemeProviderProps } from './type';
export * from './type';
/**
 * @title CreateThemeProviderOptions
 * @category Interfaces
 * @description 用于创建主题提供者的选项接口
 */
interface CreateThemeProviderOptions {
    /**
     * @title styledConfig
     * @description 配置 styled-components 的选项
     * @default undefined
     */
    styledConfig?: StyledConfig;
    /**
     * @title StyleEngineContext
     * @description StyleEngine 上下文
     */
    StyleEngineContext: Context<StyleEngine>;
    /**
     * @title useTheme
     * @description 获取当前主题的钩子函数
     */
    useTheme: UseTheme;
}
export declare const createThemeProvider: (option: CreateThemeProviderOptions) => <T = any, S = any>(props: ThemeProviderProps<T, S>) => ReturnType<FC>;
