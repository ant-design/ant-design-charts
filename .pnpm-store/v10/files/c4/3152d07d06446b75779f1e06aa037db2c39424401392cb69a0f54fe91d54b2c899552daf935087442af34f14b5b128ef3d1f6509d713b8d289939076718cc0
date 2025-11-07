import { Form } from 'antd';
import React from 'react';
interface ControlPropsType {
    id: string;
    value: any;
    onChange: (value: any, ...args: any[]) => void;
}
export type WithControlPropsType<T = object> = T & Partial<ControlPropsType>;
interface ControlModelType {
    value: any;
    onChange: (value: any) => void;
}
interface FormControlProps {
    valuePropName?: string;
    trigger?: string;
}
interface FormControlMultiProps extends FormControlProps {
    name: string;
}
type GetArrayFieldType<T extends readonly {
    name: string;
}[]> = T[number]['name'];
export declare function useControlModel<T extends FormControlProps>({ value, onChange, id }: WithControlPropsType, model?: T): ControlModelType;
export declare function useControlModel<const T extends readonly string[]>({ value, onChange, id }: WithControlPropsType, model?: T): {
    [P in T[number]]: ControlModelType;
};
export declare function useControlModel<const T extends readonly FormControlMultiProps[]>({ value, onChange, id }: WithControlPropsType, model?: T): {
    [P in GetArrayFieldType<T>]: ControlModelType;
};
export type FormControlFC<P> = (props: WithControlPropsType<P>) => React.ReactNode;
type FormControlInjectProps = ReturnType<typeof Form.Item.useStatus> & {
    id: string;
    value: any;
    onChange: (value: any) => void;
    [x: string]: any;
};
/**
 * 用在 ProForm.Item 或 Form.Item 于 表单项之间的，用于劫持渲染的函数
 * ``` tsx
 * <Form.Item name='name' label='名称'>
 *   <FormControlRender>
 *   {
 *     formItemProps => (
 *       <div>
 *         <span>prefix</span>
 *         <Input {...formItemProps} />
 *       </div>
 *     )
 *   }
 *   </FormControlRender>
 * </Form.Item>
 * ```
 */
export declare function FormControlRender(props: WithControlPropsType<{
    children: (props: FormControlInjectProps) => React.ReactElement;
}>): React.ReactElement<any, string | React.JSXElementConstructor<any>>;
/**
 * 提取props中的 value 和 onChange 属性
 */
export declare function pickControlProps(props: FormControlInjectProps): {
    value: any;
    onChange: (value: any) => void;
};
/**
 * 提取props中的 value、onChange 和 id 属性
 */
export declare function pickControlPropsWithId(props: FormControlInjectProps): {
    id: string;
    value: any;
    onChange: (value: any) => void;
};
/**
 * 用于包裹ProForm.Item Form.Item，使其可以使用render props的形式
 * @description 用法
 * const FormItem = withFormItemRender(用于包裹ProForm.Item)
 * ``` tsx
 * <FormItem name='name' label='名称'>
 *   {
 *     formItemProps => (
 *       <div>
 *         <span>prefix</span>
 *         <Input {...formItemProps} />
 *       </div>
 *     )
 *   }
 * </FormItem>
 * ```
 */
export declare function withFormItemRender<T extends React.FC<any>>(Comp: T): React.FC<Omit<React.ComponentProps<T>, 'children'> & {
    children: (formItemProps: FormControlInjectProps) => React.ReactNode;
}>;
/**
 * 用 withFormItemRender 加工Form.Item，使其拥有render props能力，同时暴露出 status 属性方便自定义组件校验使用
 *
 * ``` tsx
 *   <FormItemRender name='name' label='名称'>
 *   {
 *     formItemProps => (
 *       <div>
 *         <h3>prefix</h3>
 *         <textarea {...formItemProps} style={{ borderColor: formItemProps.status === 'error' ? 'red' : undefined }} />
 *       </div>
 *     )
 *   }
 *   </FormItemRender>
 * ```
 */
export declare const FormItemRender: React.FC<Omit<import("antd").FormItemProps<unknown>, "children"> & {
    children: (formItemProps: FormControlInjectProps) => React.ReactNode;
}>;
/**
 * 用 withFormItemRender 加工 ProForm.Item，使其拥有render props能力，同时暴露出 status 属性方便自定义组件校验使用
 * ``` tsx
 *   <ProFormItemRender name='name' label='名称'>
 *   {
 *     formItemProps => (
 *       <div>
 *         <h3>prefix</h3>
 *         <textarea {...formItemProps} style={{ borderColor: formItemProps.status === 'error' ? 'red' : undefined }} />
 *       </div>
 *     )
 *   }
 *   </ProFormItemRender>
 * ```
 */
export declare const ProFormItemRender: React.FC<Omit<import("antd").FormItemProps<any> & {
    ignoreFormItem?: boolean | undefined;
    valueType?: import("../../../../utils/src").ProFieldValueType | undefined;
    transform?: import("../../../../utils/src").SearchTransformKeyFn | undefined;
    dataFormat?: string | undefined;
    lightProps?: import("src").LightWrapperProps | undefined;
    proFormFieldKey?: any;
} & {
    addonBefore?: React.ReactNode;
    addonAfter?: React.ReactNode;
    addonWarpStyle?: React.CSSProperties | undefined;
    convertValue?: import("../../../../utils/src").SearchConvertKeyFn | undefined;
    help?: React.ReactNode | ((params: {
        errors: React.ReactNode[];
        warnings: React.ReactNode[];
    }) => React.ReactNode);
}, "children"> & {
    children: (formItemProps: FormControlInjectProps) => React.ReactNode;
}>;
export {};
