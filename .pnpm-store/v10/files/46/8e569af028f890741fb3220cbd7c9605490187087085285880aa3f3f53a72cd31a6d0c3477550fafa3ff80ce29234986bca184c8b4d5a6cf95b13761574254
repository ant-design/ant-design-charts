import type { FormInstance, StepsProps } from 'antd';
import type { FormProviderProps } from 'antd/lib/form/context';
import React from 'react';
import type { ProFormInstance } from '../../BaseForm';
import type { SubmitterProps } from '../../components';
import type { ProFormProps } from '../ProForm';
import type { StepFormProps } from './StepForm';
type StepsFormProps<T = Record<string, any>> = {
    /**
     * 返回 true 会重置步数，并且清空表单
     *
     * @name 提交方法
     */
    onFinish?: (values: T) => Promise<boolean | void>;
    current?: number;
    stepsProps?: StepsProps;
    formProps?: ProFormProps<T>;
    onCurrentChange?: (current: number) => void;
    /** 自定义步骤器 */
    stepsRender?: (steps: {
        key: string;
        title?: React.ReactNode;
    }[], defaultDom: React.ReactNode) => React.ReactNode;
    /** @name 当前展示表单的 formRef */
    formRef?: React.MutableRefObject<ProFormInstance<any> | undefined | null>;
    /** @name 所有表单的 formMapRef */
    formMapRef?: React.MutableRefObject<React.MutableRefObject<FormInstance<any> | undefined>[]>;
    /**
     * 自定义单个表单
     *
     * @param form From 的 dom，可以放置到别的位置
     */
    stepFormRender?: (from: React.ReactNode) => React.ReactNode;
    /**
     * 自定义整个表单区域
     *
     * @param form From 的 dom，可以放置到别的位置
     * @param submitter 操作按钮
     */
    stepsFormRender?: (from: React.ReactNode, submitter: React.ReactNode) => React.ReactNode;
    /** 按钮的统一配置，优先级低于分步表单的配置 */
    submitter?: SubmitterProps<{
        step: number;
        onPre: () => void;
        form?: FormInstance<any>;
    }> | false;
    containerStyle?: React.CSSProperties;
    /**
     * 自定義整個佈局。
     *
     * @param layoutDom stepsDom 和 formDom 元素可以放置在任何地方。
     */
    layoutRender?: (layoutDom: {
        stepsDom: React.ReactElement;
        formDom: React.ReactElement;
    }) => React.ReactNode;
} & Omit<FormProviderProps, 'children'>;
export declare const StepsFormProvide: React.Context<{
    regForm: (name: string, props: StepsFormProps<any>) => void;
    unRegForm: (name: string) => void;
    onFormFinish: (name: string, formData: any) => void;
    keyArray: string[];
    formArrayRef: React.MutableRefObject<React.MutableRefObject<FormInstance<any> | undefined>[]>;
    loading: boolean;
    setLoading: (loading: boolean) => void;
    lastStep: boolean;
    formMapRef: React.MutableRefObject<Map<string, StepFormProps>>;
    next: () => void;
} | undefined>;
/**
 * 给  StepForm 传递信息
 */
export declare const StepFormProvide: React.Context<StepFormProps<any> | null>;
declare function StepsFormWarp<T = Record<string, any>>(props: StepsFormProps<T> & {
    children: any;
}): import("react/jsx-runtime").JSX.Element;
declare namespace StepsFormWarp {
    var StepForm: typeof import("./StepForm").default;
    var useForm: typeof import("antd/es/form/Form").useForm;
}
export { StepsFormWarp as StepsForm };
export type { StepFormProps, StepsFormProps };
