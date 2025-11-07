import type { InputNumberProps } from 'antd';
import React from 'react';
import type { ProFormFieldItemProps } from '../../typing';
export type Value = string | number | undefined;
export type ValuePair = Value[];
export type RangeInputNumberProps = Omit<InputNumberProps<number>, 'value' | 'defaultValue' | 'onChange' | 'placeholder'> & {
    value?: ValuePair;
    defaultValue?: ValuePair;
    onChange?: (value?: ValuePair) => void;
};
export type ProFormDigitRangeProps = ProFormFieldItemProps<RangeInputNumberProps> & {
    separator?: string;
    separatorWidth?: number;
};
declare const _default: React.ForwardRefExoticComponent<{
    fieldProps?: Partial<import("../../typing").FieldProps<any> & Omit<InputNumberProps<number>, "value" | "onChange" | "placeholder" | "defaultValue"> & {
        value?: ValuePair | undefined;
        defaultValue?: ValuePair | undefined;
        onChange?: ((value?: ValuePair | undefined) => void) | undefined;
    }> | undefined;
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
    separator?: string | undefined;
    separatorWidth?: number | undefined;
} & React.RefAttributes<any>>;
export default _default;
