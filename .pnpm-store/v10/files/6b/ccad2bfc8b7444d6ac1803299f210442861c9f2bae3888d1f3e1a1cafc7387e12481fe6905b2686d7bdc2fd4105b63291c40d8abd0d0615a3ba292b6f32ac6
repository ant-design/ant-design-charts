import type { RadioGroupProps, RadioProps } from 'antd';
import { Radio } from 'antd';
import React from 'react';
import type { ProFormFieldItemProps, ProFormFieldRemoteProps } from '../../typing';
export type ProFormRadioGroupProps = ProFormFieldItemProps<RadioGroupProps, HTMLDivElement> & {
    layout?: 'horizontal' | 'vertical';
    radioType?: 'button' | 'radio';
    options?: RadioGroupProps['options'];
} & ProFormFieldRemoteProps;
declare const RadioGroup: React.FC<ProFormRadioGroupProps>;
declare const ProFormRadio: React.ComponentClass<{
    fieldProps?: Partial<import("../../typing").FieldProps<any> & RadioProps> | undefined;
    placeholder?: string | string[] | undefined;
    secondary?: boolean | undefined;
    emptyText?: React.ReactNode;
    cacheForSwr?: boolean | undefined;
    disabled?: boolean | undefined;
    width?: number | "xl" | "lg" | "md" | "sm" | "xs" | undefined;
    proFieldProps?: import("@ant-design/pro-utils").ProFieldProps | undefined;
    footerRender?: import("../../typing").LightFilterFooterRender | undefined;
    children?: any;
} & Omit<import("src/components").ProFormItemProps, "valueType"> & Pick<import("../../typing").ProFormGridConfig, "colProps"> & import("../../typing").ExtendsProps & {
    getFormItemProps?: (() => Record<string, any>) | undefined;
    getFieldProps?: (() => Record<string, any>) | undefined;
}, any> | React.FunctionComponent<{
    fieldProps?: Partial<import("../../typing").FieldProps<any> & RadioProps> | undefined;
    placeholder?: string | string[] | undefined;
    secondary?: boolean | undefined;
    emptyText?: React.ReactNode;
    cacheForSwr?: boolean | undefined;
    disabled?: boolean | undefined;
    width?: number | "xl" | "lg" | "md" | "sm" | "xs" | undefined;
    proFieldProps?: import("@ant-design/pro-utils").ProFieldProps | undefined;
    footerRender?: import("../../typing").LightFilterFooterRender | undefined;
    children?: any;
} & Omit<import("src/components").ProFormItemProps, "valueType"> & Pick<import("../../typing").ProFormGridConfig, "colProps"> & import("../../typing").ExtendsProps & {
    getFormItemProps?: (() => Record<string, any>) | undefined;
    getFieldProps?: (() => Record<string, any>) | undefined;
}>;
declare const WrappedProFormRadio: typeof ProFormRadio & {
    Group: typeof RadioGroup;
    Button: typeof Radio.Button;
};
export default WrappedProFormRadio;
