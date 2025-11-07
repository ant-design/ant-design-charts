import type { ProFieldEmptyText } from '@ant-design/pro-field';
import type { ProSchemaComponentTypes, UseEditableUtilType } from '@ant-design/pro-utils';
import { AnyObject } from 'antd/es/_util/type';
import React from 'react';
import type { ContainerType } from '../Store/Provide';
import type { ProColumns } from '../typing';
/** 转化列的定义 */
type ColumnRenderInterface<T> = {
    columnProps: ProColumns<T>;
    text: any;
    rowData: T;
    index: number;
    columnEmptyText?: ProFieldEmptyText;
    type: ProSchemaComponentTypes;
    counter: ReturnType<ContainerType>;
    editableUtils: UseEditableUtilType;
    subName: string[];
    marginSM?: number;
};
/**
 * 增加了 icon 的功能 render title
 *
 * @param item
 */
export declare const renderColumnsTitle: (item: ProColumns<any>) => string | number | boolean | Iterable<React.ReactNode> | import("react/jsx-runtime").JSX.Element | null | undefined;
/**
 * 默认的 filter 方法
 *
 * @param value
 * @param record
 * @param dataIndex
 * @returns
 */
export declare const defaultOnFilter: (value: string, record: any, dataIndex: string | string[]) => boolean;
/**
 * 这个组件负责单元格的具体渲染
 *
 * @param param0
 */
export declare function columnRender<T extends AnyObject>({ columnProps, text, rowData, index, columnEmptyText, counter, type, subName, marginSM, editableUtils, }: ColumnRenderInterface<T>): any;
export {};
