import type { FormProps } from 'antd';
import type { StepProps } from 'rc-steps/lib/Step';
import type { CommonFormProps } from '../../BaseForm';
export type StepFormProps<T = Record<string, any>, U = Record<string, any>> = {
    step?: number;
    stepProps?: StepProps;
    index?: number;
} & Omit<FormProps<T>, 'onFinish' | 'form'> & Omit<CommonFormProps<T, U>, 'submitter' | 'form'>;
declare function StepForm<T = Record<string, any>>(stepNativeProps: StepFormProps<T>): import("react/jsx-runtime").JSX.Element;
export default StepForm;
