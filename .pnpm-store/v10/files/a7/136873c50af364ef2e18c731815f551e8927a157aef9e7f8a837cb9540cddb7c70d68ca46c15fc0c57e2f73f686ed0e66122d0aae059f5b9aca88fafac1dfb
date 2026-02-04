import { PopoverProps, type InputProps } from 'antd';
import type { InputRef, PasswordProps } from 'antd/lib/input';
import React from 'react';
import type { ProFormFieldItemProps } from '../../typing';
/**
 * 文本组件
 *
 * @param
 */
declare const ProFormText: React.FC<ProFormFieldItemProps<InputProps, InputRef>>;
export type PasswordStatus = 'ok' | 'pass' | 'poor' | undefined;
export type PassWordStrengthProps = {
    statusRender?: (value?: string) => React.ReactNode;
    popoverProps?: PopoverProps;
    strengthText?: React.ReactNode;
};
declare const Password: React.FC<ProFormFieldItemProps<PasswordProps & PassWordStrengthProps, InputRef>>;
declare const WrappedProFormText: typeof ProFormText & {
    Password: typeof Password;
};
export default WrappedProFormText;
