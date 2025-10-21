import { FC } from 'react';
import { CacheManager } from "../core";
import { ThemeProviderProps } from "../factories/createThemeProvider";
import { HashPriority, StyledConfig } from "../types";
declare global {
    var __ANTD_STYLE_CACHE_MANAGER_FOR_SSR__: CacheManager;
}
export interface CreateOptions<T> {
    /**
     * 生成的 css 关键词
     * @default ant-css
     */
    key?: string;
    /**
     * 默认的组件 prefixCls
     */
    prefixCls?: string;
    iconPrefixCls?: string;
    /**
     * 是否开启急速模式
     *
     * @default false
     */
    speedy?: boolean;
    container?: Node;
    /**
     * 默认的自定义 Token
     */
    customToken?: T;
    hashPriority?: HashPriority;
    ThemeProvider?: Omit<ThemeProviderProps<T>, 'children'>;
    styled?: StyledConfig;
}
/**
 * Creates a new instance of antd-style
 * 创建一个新的 antd-style 实例
 */
export declare const createInstance: <T = any>(options: CreateOptions<T>) => {
    createStyles: <Props, Input extends import("../types").BaseReturnType = import("../types").BaseReturnType>(styleOrGetStyle: import("..").StyleOrGetStyleFn<Input, Props>, options?: import("../types").ClassNameGeneratorOption | undefined) => (props?: Props | undefined) => import("..").ReturnStyles<Input>;
    createGlobalStyle: (...styles: import("../types").CSSStyle<import("../factories/createGlobalStyle").GlobalTheme>) => import("react").NamedExoticComponent<object>;
    createStylish: <Props_1, Styles extends import("../types").BaseReturnType>(cssStyleOrGetCssStyleFn: import("..").StyleOrGetStyleFn<Styles, Props_1>) => (props?: Props_1 | undefined) => import("../types").ReturnStyleToUse<Styles>;
    css: import("../core").SerializeCSS;
    cx: import("../types").ClassNamesUtil;
    keyframes: {
        (template: TemplateStringsArray, ...args: import("@emotion/serialize").CSSInterpolation[]): string;
        (...args: import("@emotion/serialize").CSSInterpolation[]): string;
    };
    injectGlobal: {
        (template: TemplateStringsArray, ...args: import("@emotion/serialize").CSSInterpolation[]): void;
        (...args: import("@emotion/serialize").CSSInterpolation[]): void;
    };
    styleManager: import("../core").Emotion;
    useTheme: () => import("../types").Theme;
    StyleProvider: FC<import("../factories/createStyleProvider").StyleProviderProps>;
    ThemeProvider: <T_1 = any, S = any>(props: ThemeProviderProps<T_1, S>) => import("react").ReactNode;
};
