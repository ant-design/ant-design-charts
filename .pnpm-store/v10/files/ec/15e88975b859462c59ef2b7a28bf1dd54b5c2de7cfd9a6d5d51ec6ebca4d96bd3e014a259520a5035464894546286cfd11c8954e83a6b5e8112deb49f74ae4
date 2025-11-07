import type { FormProps } from 'antd';
import React from 'react';
import type { CommonFormProps } from '../../BaseForm';
export type ProFormProps<T = Record<string, any>, U = Record<string, any>> = Omit<FormProps<T>, 'onFinish'> & CommonFormProps<T, U>;
declare function ProForm<T = Record<string, any>>(props: ProFormProps<T> & {
    children?: React.ReactNode | React.ReactNode[];
}): import("react/jsx-runtime").JSX.Element;
declare namespace ProForm {
    var Group: React.FC<import("src").GroupProps>;
    var useForm: typeof import("antd/es/form/Form").useForm;
    var Item: React.FC<import("src/components/FormItem").ProFormItemProps>;
    var useWatch: typeof import("rc-field-form").useWatch;
    var ErrorList: React.FC<import("antd/es/form").ErrorListProps>;
    var Provider: React.FC<import("antd/es/form/context").FormProviderProps>;
    var useFormInstance: typeof import("antd/es/form/hooks/useFormInstance").default;
    var EditOrReadOnlyContext: React.Context<{
        mode: "read" | "edit" | "update";
    }>;
}
export { ProForm };
