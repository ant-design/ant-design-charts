import { ProFieldRequestData, ProFieldValueEnumType, RequestOptionsType } from '@ant-design/pro-utils';
import type { SelectProps } from 'antd';
import type { ReactNode } from 'react';
import React from 'react';
import type { ProFieldLightProps } from '../../index';
import 'antd/lib/select/style';
type SelectOptionType = Partial<RequestOptionsType>[];
export type FieldSelectProps<FieldProps = any> = {
    text: string;
    /** 值的枚举，如果存在枚举，Search 中会生成 select */
    valueEnum?: ProFieldValueEnumType;
    /** 防抖动时间 默认10 单位ms */
    debounceTime?: number;
    /** 从服务器读取选项 */
    request?: ProFieldRequestData;
    /** 重新触发的时机 */
    params?: any;
    /** 组件的全局设置 */
    fieldProps?: FieldProps;
    bordered?: boolean;
    id?: string;
    children?: ReactNode;
    /** 默认搜素条件 */
    defaultKeyWords?: string;
} & ProFieldLightProps;
/**
 * 把 value 的枚举转化为数组
 *
 * @param valueEnum
 */
export declare const proFieldParsingValueEnumToArray: (valueEnumParams: ProFieldValueEnumType) => SelectOptionType;
export declare const useFieldFetchData: (props: FieldSelectProps & {
    proFieldKey?: React.Key;
    defaultKeyWords?: string;
    cacheForSwr?: boolean;
}) => [boolean, SelectOptionType, (keyWord?: string) => void, () => void];
declare const _default: React.ForwardRefExoticComponent<import("@ant-design/pro-provider").BaseProFieldFC & import("@ant-design/pro-provider").ProRenderFieldPropsType & {
    text: string;
    /** 值的枚举，如果存在枚举，Search 中会生成 select */
    valueEnum?: ProFieldValueEnumType | undefined;
    /** 防抖动时间 默认10 单位ms */
    debounceTime?: number | undefined;
    /** 从服务器读取选项 */
    request?: ProFieldRequestData | undefined;
    /** 重新触发的时机 */
    params?: any;
    /** 组件的全局设置 */
    fieldProps?: any;
    bordered?: boolean | undefined;
    id?: string | undefined;
    children?: ReactNode;
    /** 默认搜素条件 */
    defaultKeyWords?: string | undefined;
} & ProFieldLightProps & Pick<SelectProps<any, import("antd/es/select").DefaultOptionType>, "style" | "className" | "fieldNames"> & React.RefAttributes<any>>;
export default _default;
