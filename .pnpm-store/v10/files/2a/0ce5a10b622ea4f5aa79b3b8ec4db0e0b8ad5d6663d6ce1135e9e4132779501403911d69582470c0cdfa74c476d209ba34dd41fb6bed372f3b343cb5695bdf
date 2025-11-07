import type { ParamsType } from '@ant-design/pro-provider';
import React from 'react';
import type { ProTableProps } from '../../typing';
export type DragTableProps<T, U> = {
    /** @name 拖动排序列key值 如配置此参数，则会在该 key 对应的行显示拖拽排序把手，允许拖拽排序 */
    dragSortKey?: string;
    /** @name 渲染自定义拖动排序把手的函数 如配置了 dragSortKey 但未配置此参数，则使用默认把手图标 */
    dragSortHandlerRender?: (rowData: T, idx: number) => React.ReactNode;
    /** @name 拖动排序完成回调 */
    onDragSortEnd?: (beforeIndex: number, afterIndex: number, newDataSource: T[]) => Promise<void> | void;
} & ProTableProps<T, U>;
declare function DragSortTable<T extends Record<string, any>, U extends ParamsType = ParamsType, ValueType = 'text'>(props: DragTableProps<T, U>): React.JSX.Element;
export default DragSortTable;
