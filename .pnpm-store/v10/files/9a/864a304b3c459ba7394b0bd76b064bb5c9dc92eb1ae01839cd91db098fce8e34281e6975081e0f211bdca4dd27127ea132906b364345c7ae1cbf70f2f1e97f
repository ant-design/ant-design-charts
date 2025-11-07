import type { CheckboxProps } from 'antd';
import type { CheckboxGroupProps } from 'antd/lib/checkbox';
import React from 'react';
import type { ProFormFieldItemProps, ProFormFieldRemoteProps } from '../../typing';
export type ProFormCheckboxGroupProps = ProFormFieldItemProps<CheckboxGroupProps, HTMLInputElement> & {
    layout?: 'horizontal' | 'vertical';
    options?: CheckboxGroupProps['options'];
} & ProFormFieldRemoteProps;
declare const CheckboxGroup: React.FC<ProFormCheckboxGroupProps>;
export type ProFormCheckboxProps = ProFormFieldItemProps<CheckboxProps>;
/**
 * 多选框的
 *
 * @param
 */
declare const ProFormCheckboxComponents: React.FC<ProFormCheckboxProps>;
declare const WrappedProFormCheckbox: typeof ProFormCheckboxComponents & {
    Group: typeof CheckboxGroup;
};
export default WrappedProFormCheckbox;
