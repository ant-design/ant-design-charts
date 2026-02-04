import type { RadioGroupProps, TreeSelectProps } from 'antd';
import React from 'react';
import type { FieldSelectProps } from '../Select';
import 'antd/lib/spin/style';
import 'antd/lib/tree-select/style';
export type GroupProps = {
    options?: RadioGroupProps['options'];
    radioType?: 'button' | 'radio';
} & FieldSelectProps;
export type TreeSelectFieldProps = TreeSelectProps<any> & {
    /**
     * 当搜索关键词发生变化时是否请求远程数据
     *
     * @default true
     */
    fetchDataOnSearch?: boolean;
};
declare const _default: React.ForwardRefExoticComponent<import("@ant-design/pro-provider").BaseProFieldFC & import("@ant-design/pro-provider").ProRenderFieldPropsType & {
    options?: (string | number | import("antd").CheckboxOptionType<any>)[] | undefined;
    radioType?: "button" | "radio" | undefined;
} & {
    text: string;
    valueEnum?: import("@ant-design/pro-utils").ProFieldValueEnumType | undefined;
    debounceTime?: number | undefined;
    request?: import("@ant-design/pro-utils").ProFieldRequestData | undefined;
    params?: any;
    fieldProps?: any;
    bordered?: boolean | undefined;
    id?: string | undefined;
    children?: React.ReactNode;
    defaultKeyWords?: string | undefined;
} & import("../../index").ProFieldLightProps & React.RefAttributes<any>>;
export default _default;
