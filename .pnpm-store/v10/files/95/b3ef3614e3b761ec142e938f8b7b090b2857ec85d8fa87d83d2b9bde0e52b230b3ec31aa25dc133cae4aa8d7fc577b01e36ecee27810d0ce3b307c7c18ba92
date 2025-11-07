import type { ProCoreActionType, ProFieldValueType, ProSchema, ProSchemaComponentTypes, RowEditableConfig, UseEditableMapUtilType } from '@ant-design/pro-utils';
import type { DescriptionsProps, FormProps } from 'antd';
import type { LabelTooltipType } from 'antd/lib/form/FormItemLabel';
import React from 'react';
import type { RequestData } from './useFetchData';
import type { ProFieldFCMode } from '@ant-design/pro-provider';
import 'antd/lib/descriptions/style';
export interface DescriptionsItemProps {
    prefixCls?: string;
    className?: string;
    style?: React.CSSProperties;
    label?: React.ReactNode;
    labelStyle?: React.CSSProperties;
    contentStyle?: React.CSSProperties;
    children: React.ReactNode;
    span?: number;
}
/**
 * 定义列表属性的类型定义，用于定义列表的一列
 * @typedef {Object} ProDescriptionsItemProps
 * @property {ProSchema} schema - 用于生成表格项的 schema 配置对象
 * @property {boolean} [hide] - 是否隐藏该列，可用于权限控制
 * @property {boolean} [plain] - 是否只展示文本，不展示标签
 * @property {boolean} [copyable] - 是否可以拷贝该列的内容
 * @property {boolean | { showTitle?: boolean }} [ellipsis] - 是否展示省略号，如果是一个对象，可以设置鼠标悬浮时是否展示完整的内容
 * @property {ProFieldFCMode} [mode] - ProField 组件的模式
 * @property {React.ReactNode} [children] - 表格项的子组件
 * @property {number} [order] - 表格项的排序
 * @property {number} [index] - 表格项的索引
 * @template T - 表格数据的类型
 * @template ValueType - 表格项的值类型
 */
export type ProDescriptionsItemProps<T = Record<string, any>, ValueType = 'text'> = ProSchema<T, Omit<DescriptionsItemProps, 'children'> & {
    hide?: boolean;
    plain?: boolean;
    copyable?: boolean;
    ellipsis?: boolean | {
        showTitle?: boolean;
    };
    mode?: ProFieldFCMode;
    children?: React.ReactNode;
    /**
     * 子项的排序
     */
    order?: number;
    /**
     * 子项的索引
     */
    index?: number;
}, ProSchemaComponentTypes, ValueType>;
export type ProDescriptionsActionType = ProCoreActionType;
export type ProDescriptionsProps<RecordType = Record<string, any>, ValueType = 'text'> = DescriptionsProps & {
    /** Params 参数 params 改变的时候会触发 reload */
    params?: Record<string, any>;
    /** 网络请求报错 */
    onRequestError?: (e: Error) => void;
    /** 获取数据的方法 */
    request?: (params: Record<string, any> | undefined) => Promise<RequestData>;
    columns?: ProDescriptionsItemProps<RecordType, ValueType>[];
    /** 一些简单的操作 */
    actionRef?: React.MutableRefObject<ProCoreActionType<any> | undefined>;
    loading?: boolean;
    onLoadingChange?: (loading?: boolean) => void;
    tooltip?: LabelTooltipType | string;
    /** @deprecated 你可以使用 tooltip，这个更改是为了与 antd 统一 */
    tip?: string;
    /** Form props 的相关配置 */
    formProps?: FormProps;
    /** @name 编辑相关的配置 */
    editable?: RowEditableConfig<RecordType>;
    /** 默认的数据源 */
    dataSource?: RecordType;
    /** 受控数据源改变 */
    onDataSourceChange?: (value: RecordType) => void;
    /**
     *为空时候的默认值
     */
    emptyText?: React.ReactNode;
};
/**
 * 这里会处理编辑的功能
 *
 * @param props
 */
export declare const FieldRender: React.FC<ProDescriptionsItemProps<any> & {
    text: any;
    valueType: ProFieldValueType;
    entity: any;
    action: ProCoreActionType<any>;
    index: number;
    editableUtils?: UseEditableMapUtilType;
    emptyText?: React.ReactNode;
}>;
declare const ProDescriptions: {
    <RecordType extends Record<string, any>, ValueType = "text">(props: ProDescriptionsProps<RecordType, ValueType>): import("react/jsx-runtime").JSX.Element;
    Item: React.FC<ProDescriptionsItemProps<Record<string, any>, "text">>;
};
export { ProDescriptions };
export default ProDescriptions;
