import type { SliderSingleProps } from 'antd';
import type { SliderBaseProps, SliderRangeProps } from 'antd/lib/slider';
import React from 'react';
import type { ProFormFieldItemProps } from '../../typing';
export type ProFormSliderProps = ProFormFieldItemProps<SliderSingleProps | SliderRangeProps, unknown> & {
    range?: boolean;
    min?: SliderBaseProps['min'];
    max?: SliderBaseProps['max'];
    step?: SliderBaseProps['step'];
    marks?: SliderBaseProps['marks'];
    vertical?: SliderBaseProps['vertical'];
};
/**
 * 文本选择组件
 *
 * @param
 */
declare const ProFormSlider: React.ForwardRefExoticComponent<{
    fieldProps?: Partial<import("../../typing").FieldProps<unknown> & (SliderSingleProps | SliderRangeProps)> | undefined;
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
    range?: boolean | undefined;
    min?: SliderBaseProps['min'];
    max?: SliderBaseProps['max'];
    step?: SliderBaseProps['step'];
    marks?: SliderBaseProps['marks'];
    vertical?: SliderBaseProps['vertical'];
} & React.RefAttributes<any>>;
export default ProFormSlider;
