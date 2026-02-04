import React from 'react';
import type { ProFormGridConfig } from '../../../typing';
import type { FormSchema, ProFormPropsType } from '../typing';
type StepsFormProps<T, ValueType> = ProFormPropsType<T, ValueType> & Pick<FormSchema, 'steps'> & {
    layoutType: 'StepsForm';
    forceUpdate: React.Dispatch<React.SetStateAction<[]>>;
} & Pick<ProFormGridConfig, 'grid'>;
declare const StepsForm: <T, ValueType>({ steps, columns, forceUpdate, grid, ...props }: StepsFormProps<T, ValueType>) => import("react/jsx-runtime").JSX.Element;
export default StepsForm;
