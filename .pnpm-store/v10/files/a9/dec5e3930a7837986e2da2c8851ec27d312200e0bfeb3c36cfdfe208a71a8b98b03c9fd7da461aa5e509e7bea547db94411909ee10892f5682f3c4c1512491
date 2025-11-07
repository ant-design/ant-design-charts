import type { CSSInterpolation, CSSObject } from '@ant-design/cssinjs';
import type { GlobalToken } from 'antd/lib/theme/interface';
import type React from 'react';
import type { ProTokenType } from '../typing/layoutToken';
/**
 * 把一个颜色设置一下透明度
 * @example (#fff, 0.5) => rgba(255, 255, 255, 0.5)
 * @param baseColor {string}
 * @param alpha {0-1}
 * @returns rgba {string}
 */
export declare const setAlpha: (baseColor: string, alpha: number) => string;
/**
 * 把一个颜色修改一些明度
 * @example (#000, 50) => #808080
 * @param baseColor {string}
 * @param brightness {0-100}
 * @returns hexColor {string}
 */
export declare const lighten: (baseColor: string, brightness: number) => string;
export type GenerateStyle<ComponentToken extends object = GlobalToken, ReturnType = CSSInterpolation> = (token: ComponentToken, ...rest: any[]) => ReturnType;
export declare const proTheme: {
    defaultSeed: import("antd/es/theme/internal").SeedToken;
    useToken: () => {
        theme: import("@ant-design/cssinjs").Theme<import("antd/es/theme/internal").SeedToken, import("antd/es/theme/internal").AliasToken>;
        token: import("antd").GlobalToken;
        hashId: string;
    };
    defaultAlgorithm: typeof import("antd/es/theme/themes/default").default;
    darkAlgorithm: import("@ant-design/cssinjs").DerivativeFunc<import("antd/es/theme/internal").SeedToken, import("antd/es/theme/interface").MapToken>;
    compactAlgorithm: import("@ant-design/cssinjs").DerivativeFunc<import("antd/es/theme/internal").SeedToken, import("antd/es/theme/interface").MapToken>;
    getDesignToken: (config?: import("antd").ThemeConfig | undefined) => import("antd/es/theme/internal").AliasToken;
    defaultConfig: {
        token: import("antd/es/theme/internal").SeedToken;
        override: {
            override: import("antd/es/theme/internal").SeedToken;
        };
        hashed: boolean;
    };
    _internalContext: React.Context<import("antd/es/theme/context").DesignTokenProviderProps>;
};
export declare const useToken: () => {
    theme: import("@ant-design/cssinjs").Theme<import("antd/es/theme/internal").SeedToken, import("antd/es/theme/internal").AliasToken>;
    token: import("antd").GlobalToken;
    hashId: string;
};
export type UseStyleResult = {
    wrapSSR: (node: React.ReactElement) => React.ReactElement;
    hashId: string;
};
export type ProAliasToken = GlobalToken & ProTokenType & {
    themeId: number;
    /**
     * pro 的 className
     * @type {string}
     * @example .ant-pro
     */
    proComponentsCls: string;
    /**
     * antd 的 className
     * @type {string}
     * @example .ant
     */
    antCls: string;
};
export declare const resetComponent: (token: ProAliasToken) => CSSObject;
export declare const operationUnit: (token: ProAliasToken) => CSSObject;
/**
 * 封装了一下 antd 的 useStyle，支持了一下antd@4
 * @param componentName {string} 组件的名字
 * @param styleFn {GenerateStyle} 生成样式的函数
 * @returns UseStyleResult
 */
export declare function useStyle(componentName: string, styleFn: (token: ProAliasToken) => CSSInterpolation): {
    wrapSSR: (node: React.ReactElement<any, string | React.JSXElementConstructor<any>>) => React.JSX.Element;
    hashId: string;
};
