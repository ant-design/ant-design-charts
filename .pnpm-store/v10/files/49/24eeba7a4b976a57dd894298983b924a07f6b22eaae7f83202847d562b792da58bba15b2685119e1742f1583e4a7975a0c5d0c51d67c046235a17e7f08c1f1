/// <reference types="react" />
import type { FormItemProps } from 'antd';
import type { NamePath } from 'antd/lib/form/interface';
import type { ProFormInstance } from '../../BaseForm';
declare type RenderChildren<Values = any> = (values: Record<string, any>, form: ProFormInstance<Values>) => React.ReactNode;
export type ProFormDependencyProps<T = Record<string, any>> = Omit<FormItemProps<any>, 'name' | 'noStyle' | 'children' | 'label'> & {
    name: NamePath[];
    originDependencies?: NamePath[];
    ignoreFormListField?: boolean;
    children: RenderChildren<T>;
};
declare const ProFormDependency: {
    <T>({ name: nameList, originDependencies, children, ignoreFormListField, ...rest }: ProFormDependencyProps<T>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export default ProFormDependency;
