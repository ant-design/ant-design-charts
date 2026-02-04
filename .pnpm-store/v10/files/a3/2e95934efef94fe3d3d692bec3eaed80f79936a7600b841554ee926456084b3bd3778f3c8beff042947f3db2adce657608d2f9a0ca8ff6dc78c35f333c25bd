import type { IntlType } from '@ant-design/pro-provider';
import type { UseEditableUtilType } from '@ant-design/pro-utils';
import type { TablePaginationConfig } from 'antd';
import type { SortOrder } from 'antd/lib/table/interface';
import type React from 'react';
import { Key } from 'react';
import type { ActionType, Bordered, BorderedType, ProColumns, UseFetchDataAction } from '../typing';
/**
 * 检查值是否存在 为了 避开 0 和 false
 *
 * @param value
 */
export declare const checkUndefinedOrNull: (value: any) => boolean;
/**
 * 合并用户 props 和 预设的 props
 *
 * @param pagination
 * @param action
 * @param intl
 */
export declare function mergePagination<T>(pagination: TablePaginationConfig | boolean | undefined, pageInfo: UseFetchDataAction<T>['pageInfo'] & {
    setPageInfo: any;
}, intl: IntlType): TablePaginationConfig | false | undefined;
/**
 * 获取用户的 action 信息
 *
 * @param actionRef
 * @param counter
 * @param onCleanSelected
 */
export declare function useActionType<T>(ref: React.MutableRefObject<ActionType | undefined>, action: UseFetchDataAction<T>, props: {
    fullScreen: () => void;
    onCleanSelected: () => void;
    resetAll: () => void;
    editableUtils: UseEditableUtilType;
}): void;
type PostDataType<T> = (data: T) => T;
/**
 * 一个转化的 pipeline 列表
 *
 * @param data
 * @param pipeline
 */
export declare function postDataPipeline<T>(data: T, pipeline: PostDataType<T>[]): T;
export declare const isBordered: (borderType: BorderedType, border?: Bordered) => boolean | undefined;
export declare const isMergeCell: (dom: any) => any;
/**
 * 根据 key 和 dataIndex 生成唯一 id
 *
 * @param key 用户设置的 key
 * @param dataIndex 在对象中的数据
 * @param index 序列号，理论上唯一
 */
export declare const genColumnKey: (key?: string | number | Key, index?: number | string) => string;
/**
 * 从 ProColumns 数组中取出默认的排序和筛选数据
 *
 * @param columns ProColumns
 */
export declare function parseDefaultColumnConfig<T, Value>(columns: ProColumns<T, Value>[]): {
    sort: Record<string, SortOrder>;
    filter: Record<string, (string | number)[] | null>;
};
export {};
