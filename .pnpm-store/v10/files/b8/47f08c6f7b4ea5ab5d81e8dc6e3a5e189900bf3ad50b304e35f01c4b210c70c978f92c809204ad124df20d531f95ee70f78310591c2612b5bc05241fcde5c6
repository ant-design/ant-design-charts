import type { RequestOptionsType } from '@ant-design/pro-utils';
import type { SelectProps } from 'antd';
import type { LabeledValue } from 'antd/lib/select';
import React from 'react';
export type KeyLabel = Partial<LabeledValue> & RequestOptionsType;
/** 用户扩展数据后的值类型 */
export type DataValueType<T> = KeyLabel & T;
/** 可能单选，可能多选 */
export type DataValuesType<T> = DataValueType<T> | DataValueType<T>[];
export interface SearchSelectProps<T = Record<string, any>> extends Omit<SelectProps<KeyLabel | KeyLabel[]>, 'options'> {
    /** 防抖动时间 默认10 单位ms */
    debounceTime?: number;
    /** 自定义搜索方法, 返回搜索结果的 Promise */
    request?: (params: {
        query: string;
    }) => Promise<DataValueType<T>[]>;
    /** 自定义选项渲染 */
    optionItemRender?: (item: DataValueType<T>) => React.ReactNode;
    /** 指定组件中的值 */
    value?: KeyLabel | KeyLabel[];
    /** 指定默认选中的条目 */
    defaultValue?: KeyLabel | KeyLabel[];
    options?: RequestOptionsType[];
    /**
     * 样式
     *
     * @ignore
     */
    style?: React.CSSProperties;
    /**
     * ClassName 类名
     *
     * @ignore
     */
    className?: string;
    /**
     * Placeholder 输入提示
     *
     * @default 请输入关键字搜索
     */
    placeholder?: string;
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
     * 自定义前缀
     *
     * @ignore
     */
    prefixCls?: string;
    /** 刷新数据 */
    fetchData: (keyWord?: string) => void;
    /** 清空数据 */
    resetData: () => void;
    /**
     * 当搜索关键词发生变化时是否请求远程数据
     *
     * @default true
     */
    fetchDataOnSearch?: boolean;
    /** 默认搜索关键词 */
    defaultSearchValue?: string;
    /**
     * 在选择时保留选项的原始标签文本
     * 当设置为 true 时，选中后回填的内容将使用选项的原始 label，而不是经过 optionItemRender 处理后的内容
     * @default false
     */
    preserveOriginalLabel?: boolean;
}
declare const _default: React.ForwardRefExoticComponent<SearchSelectProps<unknown[]> & React.RefAttributes<unknown>>;
export default _default;
