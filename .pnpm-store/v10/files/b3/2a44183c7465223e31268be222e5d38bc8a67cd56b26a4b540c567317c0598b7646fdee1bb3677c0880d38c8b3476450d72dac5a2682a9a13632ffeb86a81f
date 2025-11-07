import type { TooltipPlacement } from 'antd/lib/tooltip';
import React from 'react';
import type { LightFilterFooterRender } from '../../typing';
export type SizeType = 'small' | 'middle' | 'large' | undefined;
export type LightWrapperProps = {
    label?: React.ReactNode;
    disabled?: boolean;
    placeholder?: React.ReactNode;
    size?: SizeType;
    value?: any;
    onChange?: (value?: any) => void;
    onBlur?: (value?: any) => void;
    style?: React.CSSProperties;
    className?: string;
    children?: React.ReactNode;
    valuePropName?: string;
    customLightMode?: boolean;
    light?: boolean;
    /**
     * @name 自定义label的值
     *
     * @example <caption>自定义数组的转化</caption>
     * labelFormatter={(value) =>value.join('-')} }
     */
    labelFormatter?: (value: any) => React.ReactNode;
    bordered?: boolean;
    otherFieldProps?: any;
    valueType?: string;
    allowClear?: boolean;
    footerRender?: LightFilterFooterRender;
    placement?: TooltipPlacement;
};
declare const LightWrapper: React.ForwardRefRenderFunction<any, LightWrapperProps>;
export { LightWrapper };
