import { ProFieldValueType, SearchConvertKeyFn, SearchTransformKeyFn } from '@ant-design/pro-utils';
import type { FormItemProps } from 'antd';
import type { NamePath } from 'antd/lib/form/interface';
import React from 'react';
import type { LightWrapperProps } from '../../BaseForm';
declare const FormItemProvide: React.Context<{
    name?: NamePath;
    label?: React.ReactNode;
}>;
type WarpFormItemProps = {
    /** @name 前置的dom * */
    addonBefore?: React.ReactNode;
    /** @name 后置的dom * */
    addonAfter?: React.ReactNode;
    /**
     * 包裹的样式，一般没用
     */
    addonWarpStyle?: React.CSSProperties;
    /**
     * @name 获取时转化值，一般用于将数据格式化为组件接收的格式
     * @param value 字段的值
     * @param namePath 字段的name
     * @returns 字段新的值
     *
     *
     * @example a,b => [a,b]     convertValue: (value,namePath)=> value.split(",")
     * @example string => json   convertValue: (value,namePath)=> JSON.parse(value)
     * @example number => date   convertValue: (value,namePath)=> Dayjs(value)
     * @example YYYY-MM-DD => date   convertValue: (value,namePath)=> Dayjs(value,"YYYY-MM-DD")
     * @example  string => object   convertValue: (value,namePath)=> { return {value,label:value} }
     */
    convertValue?: SearchConvertKeyFn;
    help?: React.ReactNode | ((params: {
        errors: React.ReactNode[];
        warnings: React.ReactNode[];
    }) => React.ReactNode);
};
export type ProFormItemProps = FormItemProps & {
    ignoreFormItem?: boolean;
    valueType?: ProFieldValueType;
    /**
     * @name 提交时转化值，一般用于将值转化为提交的数据
     * @param value 字段的值
     * @param namePath 字段的name
     * @param allValues 所有的字段
     * @returns 字段新的值，如果返回对象，会和所有值 merge 一次
     *
     * @example {name:[a,b] => {name:a,b }    transform: (value,namePath,allValues)=> value.join(",")
     * @example {name: string => { newName:string }    transform: (value,namePath,allValues)=> { newName:value }
     * @example {name:dayjs} => {name:string transform: (value,namePath,allValues)=> value.format("YYYY-MM-DD")
     * @example {name:dayjs}=> {name:时间戳} transform: (value,namePath,allValues)=> value.valueOf()
     * @example {name:{value,label}} => { name:string} transform: (value,namePath,allValues)=> value.value
     * @example {name:{value,label}} => { valueName,labelName  } transform: (value,namePath,allValues)=> { valueName:value.value, labelName:value.name }
     */
    transform?: SearchTransformKeyFn;
    dataFormat?: string;
    lightProps?: LightWrapperProps;
    proFormFieldKey?: any;
} & WarpFormItemProps;
declare const ProFormItem: React.FC<ProFormItemProps>;
export { FormItemProvide };
export default ProFormItem;
