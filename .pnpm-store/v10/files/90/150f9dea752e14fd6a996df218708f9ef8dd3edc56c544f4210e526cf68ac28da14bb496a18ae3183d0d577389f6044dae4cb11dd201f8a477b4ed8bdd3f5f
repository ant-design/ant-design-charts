import type { Theme } from '@ant-design/cssinjs';
import React from 'react';
import type { IntlType } from './intl';
import type { DeepPartial, ProTokenType } from './typing/layoutToken';
import type { ProAliasToken } from './useStyle';
import 'dayjs/locale/zh-cn';
export * from './intl';
export * from './useStyle';
export { DeepPartial, ProTokenType };
/**
 * 用于判断当前是否需要开启哈希（Hash）模式。
 * 首先也会判断当前是否处于测试环境中（通过 process.env.NODE_ENV === 'TEST' 判断），
 * 如果是，则返回 false。否则，直接返回 true 表示需要打开。
 * @returns
 */
export declare const isNeedOpenHash: () => boolean;
/**
 * 用于配置 ValueEnum 的通用配置
 */
export type ProSchemaValueEnumType = {
    /** @name 演示的文案 */
    text: React.ReactNode;
    /** @name 预定的颜色 */
    status?: string;
    /** @name 自定义的颜色 */
    color?: string;
    /** @name 是否禁用 */
    disabled?: boolean;
};
/**
 * 支持 Map 和 Object
 *
 * @name ValueEnum 的类型
 */
type ProSchemaValueEnumMap = Map<string | number | boolean, ProSchemaValueEnumType | React.ReactNode>;
/**
 * 支持 Map 和 Object
 */
type ProSchemaValueEnumObj = Record<string, ProSchemaValueEnumType | React.ReactNode>;
/**
 * BaseProFieldFC 的类型设置
 */
export type BaseProFieldFC = {
    /** 值的类型 */
    text: React.ReactNode;
    /** 放置到组件上 props */
    fieldProps?: any;
    /**
     * 组件的渲染模式类型
     * @option read 渲染只读模式
     * @option edit 渲染编辑模式
     * */
    mode: ProFieldFCMode;
    /**
     * 简约模式
     */
    plain?: boolean;
    /** 轻量模式 */
    light?: boolean;
    /** Label */
    label?: React.ReactNode;
    /** 映射值的类型 */
    valueEnum?: ProSchemaValueEnumObj | ProSchemaValueEnumMap;
    /** 唯一的key，用于网络请求 */
    proFieldKey?: React.Key;
};
export type ProFieldFCMode = 'read' | 'edit' | 'update';
/** Render 第二个参数，里面包含了一些常用的参数 */
export type ProFieldFCRenderProps = {
    mode?: ProFieldFCMode;
    readonly?: boolean;
    placeholder?: string | string[];
    value?: any;
    onChange?: (...rest: any[]) => void;
} & BaseProFieldFC;
export type ProRenderFieldPropsType = {
    /**
     * 自定义只读模式的渲染器
     * @params props 关于dom的配置
     * @params dom 默认的 dom
     * @return 返回一个用于读的 dom
     */
    render?: ((text: any, props: Omit<ProFieldFCRenderProps, 'value' | 'onChange'>, dom: JSX.Element) => JSX.Element) | undefined;
    /**
     * 一个自定义的编辑渲染器。
     * @params text 默认的值类型
     * @params props 关于dom的配置
     * @params dom 默认的 dom
     * @return 返回一个用于编辑的dom
     */
    renderFormItem?: ((text: any, props: ProFieldFCRenderProps, dom: JSX.Element) => JSX.Element) | undefined;
};
export type ParamsType = Record<string, any>;
/**
 * 自带的token 配置
 */
export type ConfigContextPropsType = {
    intl?: IntlType;
    valueTypeMap?: Record<string, ProRenderFieldPropsType>;
    token: ProAliasToken;
    hashId?: string;
    hashed?: boolean;
    dark?: boolean;
    theme?: Theme<any, any>;
};
declare const ProConfigContext: React.Context<ConfigContextPropsType>;
export declare const ConfigConsumer: React.Consumer<ConfigContextPropsType>;
/**
 * 用于配置 Pro 的一些全局性的东西
 * @param props
 * @returns
 */
export declare const ProConfigProvider: React.FC<{
    children: React.ReactNode;
    autoClearCache?: boolean;
    token?: DeepPartial<ProAliasToken>;
    needDeps?: boolean;
    valueTypeMap?: Record<string, ProRenderFieldPropsType>;
    dark?: boolean;
    hashed?: boolean;
    prefixCls?: string;
    intl?: IntlType;
}>;
/**
 * It returns the intl object from the context if it exists, otherwise it returns the intl object for
 * 获取国际化的方法
 * @param locale
 * @param localeMap
 * the current locale
 * @returns The return value of the function is the intl object.
 */
export declare function useIntl(): IntlType;
export declare const ProProvider: React.Context<ConfigContextPropsType>;
export default ProConfigContext;
