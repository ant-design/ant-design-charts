import React from 'react';
import type { ExtendsProps, ProFormFieldItemProps, ProFormItemCreateConfig } from '../typing';
export declare const TYPE: unique symbol;
type ProFormComponent<P, Extends> = React.ComponentType<P & Extends>;
/**
 * 处理fieldProps和formItemProps为function时传进来的方法
 * 目前只在SchemaForm时可能会有
 */
type FunctionFieldProps = {
    getFormItemProps?: () => Record<string, any>;
    getFieldProps?: () => Record<string, any>;
};
/**
 * 这个方法的主要作用是帮助 Field 增加 FormItem 同时也会处理 lightFilter
 *
 * @param Field
 * @param config
 */
declare function createField<P extends ProFormFieldItemProps = any>(Field: React.ComponentType<P> | React.ForwardRefExoticComponent<P>, config?: ProFormItemCreateConfig): ProFormComponent<P, ExtendsProps & FunctionFieldProps>;
export { createField };
