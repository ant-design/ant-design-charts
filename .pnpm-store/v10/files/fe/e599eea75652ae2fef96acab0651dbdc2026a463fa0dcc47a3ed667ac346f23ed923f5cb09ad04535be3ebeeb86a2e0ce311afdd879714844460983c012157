import type { ProSchema } from '@ant-design/pro-utils';
import React from 'react';
import type { ProFormFieldItemProps } from '../../typing';
export type ProFormFieldProps<T = any, FiledProps = Record<string, any>> = ProSchema<T, ProFormFieldItemProps<FiledProps> & {
    mode?: 'edit' | 'read' | 'update';
    isDefaultDom?: boolean;
    ref?: any;
    plain?: boolean;
    text?: any;
    getFieldProps?: () => Record<string, any>;
    getFormItemProps?: () => Record<string, any>;
    /**
     * dependencies value
     */
    dependenciesValues?: Record<string, any>;
    originDependencies?: Record<string, any>;
}, any, any>;
declare const ProFormField: <FiledProps, DataType = Record<string, any>>(props: ProFormFieldProps<DataType, FiledProps>) => React.ReactElement;
export default ProFormField;
