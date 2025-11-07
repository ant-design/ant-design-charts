import type { ProFieldEmptyText } from '@ant-design/pro-field';
import type { ProSchemaComponentTypes, UseEditableUtilType } from '@ant-design/pro-utils';
import type { TableColumnType, TableProps } from 'antd';
import { AnyObject } from 'antd/es/_util/type';
import { SortOrder } from 'antd/lib/table/interface';
import type { ContainerType } from '../Store/Provide';
import type { ProColumns } from '../typing';
type ColumnToColumnReturnType<T> = (TableColumnType<T> & {
    index?: number;
})[];
type ColumnToColumnParams<T> = {
    columns: ProColumns<T, any>[];
    counter: ReturnType<ContainerType>;
    columnEmptyText: ProFieldEmptyText;
    type: ProSchemaComponentTypes;
    editableUtils: UseEditableUtilType;
    proFilter: Record<string, (string | number)[] | null>;
    proSort: Record<string, SortOrder>;
} & Pick<TableProps<T>, 'rowKey' | 'childrenColumnName'>;
/**
 * 转化 columns 到 pro 的格式 主要是 render 方法的自行实现
 *
 * @param columns
 * @param map
 * @param columnEmptyText
 */
export declare function genProColumnToColumn<T extends AnyObject>(params: ColumnToColumnParams<T> & {
    marginSM: number;
}, parents?: ProColumns<T, any>): ColumnToColumnReturnType<T>;
export {};
