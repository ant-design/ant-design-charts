import type { FormProps } from 'antd';
import type { TooltipPlacement } from 'antd/lib/tooltip';
import React from 'react';
import type { CommonFormProps } from '../../BaseForm';
import type { LightFilterFooterRender } from '../../typing';
export type LightFilterProps<T, U = Record<string, any>> = {
    collapse?: boolean;
    /**
     * @name 收起的label dom
     *
     * @example collapseLabel={"收起"}
     */
    collapseLabel?: React.ReactNode;
    /**
     * @name 是否有边框
     */
    bordered?: boolean;
    /**
     * @name 忽略rules，一般而言 LightFilter 应该不支持rules，默认是 false。
     */
    ignoreRules?: boolean;
    /**
     * @name 自定义 footerRender
     *
     * @example 自定义清除
     * footerRender={(onConfirm,onClear)=>{  return <a onClick={onClear}>清除</a> })}
     */
    footerRender?: LightFilterFooterRender;
    /**
     * @name 支持配置弹出的位置
     * @default bottomLeft
     */
    placement?: TooltipPlacement;
} & Omit<FormProps<T>, 'onFinish'> & CommonFormProps<T, U>;
declare function LightFilter<T = Record<string, any>>(props: LightFilterProps<T>): import("react/jsx-runtime").JSX.Element;
export { LightFilter };
