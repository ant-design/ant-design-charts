import type { ProFieldMoneyProps } from '@ant-design/pro-field';
import type { InputNumberProps } from 'antd';
import React from 'react';
import type { ProFormFieldItemProps } from '../../typing';
export type ProFormMoneyProps = ProFormFieldItemProps<Omit<ProFieldMoneyProps, 'valueType' | 'text'> & InputNumberProps<number>> & {
    customSymbol?: string;
    locale?: string;
    min?: InputNumberProps<number>['min'];
    max?: InputNumberProps<number>['min'];
};
declare const _default: React.ForwardRefExoticComponent<{
    fieldProps?: Partial<import("../../typing").FieldProps<any> & Omit<import("@ant-design/pro-field").FieldMoneyProps, "text" | "valueType"> & InputNumberProps<number>> | undefined;
    placeholder?: string | string[] | undefined;
    secondary?: boolean | undefined;
    emptyText?: React.ReactNode;
    cacheForSwr?: boolean | undefined;
    disabled?: boolean | undefined;
    width?: number | "xl" | "lg" | "md" | "sm" | "xs" | undefined;
    proFieldProps?: import("../../../../utils/src").ProFieldProps | undefined;
    footerRender?: import("../../typing").LightFilterFooterRender | undefined;
    children?: any;
} & Omit<import("src/components").ProFormItemProps, "valueType"> & Pick<import("../../typing").ProFormGridConfig, "colProps"> & import("../../typing").ExtendsProps & {
    customSymbol?: string | undefined;
    locale?: string | undefined;
    min?: number | undefined;
    max?: number | undefined;
} & React.RefAttributes<any>>;
export default _default;
