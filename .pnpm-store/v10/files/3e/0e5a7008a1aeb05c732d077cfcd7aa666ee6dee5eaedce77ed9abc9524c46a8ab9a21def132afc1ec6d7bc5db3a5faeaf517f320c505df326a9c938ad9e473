import type { SelectProps } from 'antd';
import type { BaseOptionType, DefaultOptionType, RefSelectProps } from 'antd/lib/select';
import React from 'react';
import type { ProFormFieldItemProps, ProFormFieldRemoteProps } from '../../typing';
export type ProFormSelectProps<ValueType = any, OptionType extends BaseOptionType | DefaultOptionType = DefaultOptionType> = ProFormFieldItemProps<SelectProps<ValueType, OptionType> & {
    /**
     * 是否在输入框聚焦时触发搜索
     *
     * @default false
     */
    searchOnFocus?: boolean;
    /**
     * 选择完一个之后是否清空搜索项重新搜索
     *
     * @default false
     */
    resetAfterSelect?: boolean;
    /**
     * 当搜索关键词发生变化时是否请求远程数据
     *
     * @default true
     */
    fetchDataOnSearch?: boolean;
    /** 自定义选项渲染 */
    optionItemRender?: (item: ValueType) => React.ReactNode;
}, RefSelectProps> & {
    options?: SelectProps<ValueType, OptionType>['options'] | string[];
    mode?: SelectProps<ValueType, OptionType>['mode'] | 'single';
    showSearch?: SelectProps<ValueType, OptionType>['showSearch'];
    readonly?: boolean;
    onChange?: SelectProps<ValueType, OptionType>['onChange'];
} & ProFormFieldRemoteProps;
declare const ProFormSearchSelect: <T, OptionType extends BaseOptionType = any>(props: ProFormSelectProps<T, OptionType>) => React.ReactElement;
declare const WrappedProFormSelect: (<T, OptionType extends BaseOptionType = any>(props: ProFormSelectProps<T, OptionType>) => React.ReactElement) & {
    SearchSelect: typeof ProFormSearchSelect;
};
export default WrappedProFormSelect;
