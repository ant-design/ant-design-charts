import type { SketchPickerProps } from '@chenshuai2144/sketch-color';
import type { PopoverProps } from 'antd';
import React from 'react';
import type { ProFormFieldItemProps } from '../../typing';
type ColorPickerProps = SketchPickerProps & {
    value?: string;
    onChange?: (color: string) => void;
};
export type ProFormColorPickerProps = ProFormFieldItemProps<ColorPickerProps> & {
    popoverProps?: PopoverProps;
    colors?: string[];
    old?: boolean;
};
declare const _default: React.ForwardRefExoticComponent<{
    fieldProps?: Partial<import("../../typing").FieldProps<any> & SketchPickerProps & {
        value?: string | undefined;
        onChange?: ((color: string) => void) | undefined;
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
    popoverProps?: PopoverProps | undefined;
    colors?: string[] | undefined;
    old?: boolean | undefined;
} & React.RefAttributes<any>>;
export default _default;
