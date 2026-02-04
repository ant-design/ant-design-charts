import type { BaseQueryFilterProps, ProFormInstance, ProFormProps } from '@ant-design/pro-form';
import type { ProSchemaComponentTypes } from '@ant-design/pro-utils';
import type { FormItemProps } from 'antd';
import React from 'react';
import type { ActionType, ProColumns, ProTableProps } from '../../typing';
export type SearchConfig = BaseQueryFilterProps & {
    filterType?: 'query' | 'light';
};
export type TableFormItem<T, U = any> = {
    onSubmit?: (value: T, firstLoad: boolean) => void;
    onReset?: (value: T) => void;
    form?: Omit<ProFormProps, 'form'>;
    type?: ProSchemaComponentTypes;
    dateFormatter?: ProTableProps<T, U, any>['dateFormatter'];
    search?: false | SearchConfig;
    columns: ProColumns<U, any>[];
    formRef: React.MutableRefObject<ProFormInstance | undefined>;
    submitButtonLoading?: boolean;
    manualRequest?: boolean;
    bordered?: boolean;
    action: React.MutableRefObject<ActionType | undefined>;
    ghost?: boolean;
} & Omit<FormItemProps, 'children' | 'onReset'>;
/**
 * 这里会把 列配置转化为 form 表单
 *
 * @param param0
 * @returns
 */
declare const FormRender: <T, U = any>({ onSubmit, formRef, dateFormatter, type, columns, action, ghost, manualRequest, onReset, submitButtonLoading, search: searchConfig, form: formConfig, bordered, }: TableFormItem<T, U>) => import("react/jsx-runtime").JSX.Element;
export default FormRender;
