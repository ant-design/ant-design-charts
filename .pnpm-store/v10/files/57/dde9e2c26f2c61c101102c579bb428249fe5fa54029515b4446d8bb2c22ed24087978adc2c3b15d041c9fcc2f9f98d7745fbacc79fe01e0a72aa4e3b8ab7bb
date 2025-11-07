import type { CheckCardProps } from '@ant-design/pro-card';
import type { ProColumnType, ProTableProps } from '@ant-design/pro-table';
import type { ListProps } from 'antd';
import type { LabelTooltipType } from 'antd/lib/form/FormItemLabel';
import React from 'react';
import type { ItemProps } from './Item';
import 'antd/lib/list/style';
export type AntdListProps<RecordType> = Omit<ListProps<RecordType>, 'rowKey'>;
export type ProListMeta<T> = Pick<ProColumnType<T>, 'dataIndex' | 'valueType' | 'render' | 'search' | 'title' | 'valueEnum' | 'editable' | 'fieldProps' | 'formItemProps' | 'renderFormItem'> & {
    key?: React.Key;
};
type ProListMetaAction<T> = ProListMeta<T> & {
    /**
     * @example
     *   `cardActionProps = 'actions';`;
     *
     * @name 选择映射到 card 上的 props，默认为extra
     */
    cardActionProps?: 'extra' | 'actions';
};
type IfAny<T, Y, N> = 0 extends 1 & T ? Y : N;
type IsAny<T> = IfAny<T, true, false>;
export type BaseProListMetas<T = any> = {
    [key: string]: any;
    type?: ProListMeta<T>;
    title?: ProListMeta<T>;
    subTitle?: ProListMeta<T>;
    description?: ProListMeta<T>;
    avatar?: ProListMeta<T>;
    content?: ProListMeta<T>;
    actions?: ProListMetaAction<T>;
};
export type ProListMetas<T = any> = BaseProListMetas<T> & {
    [key in keyof T]?: IsAny<T> extends true ? ProListMetaAction<T> : ProListMeta<T>;
};
export type GetComponentProps<RecordType> = (record: RecordType, index: number) => React.HTMLAttributes<HTMLElement>;
export type ProListProps<RecordType = any, Params = Record<string, any>, ValueType = 'text'> = Omit<ProTableProps<RecordType, Params, ValueType>, 'size' | 'footer'> & AntdListProps<RecordType> & {
    tooltip?: LabelTooltipType | string;
    metas?: ProListMetas<RecordType>;
    showActions?: 'hover' | 'always';
    showExtra?: 'hover' | 'always';
    onRow?: GetComponentProps<RecordType>;
    onItem?: GetComponentProps<RecordType>;
    itemCardProps?: CheckCardProps;
    rowClassName?: string | ((item: RecordType, index: number) => string);
    itemHeaderRender?: ItemProps<RecordType>['itemHeaderRender'];
    itemTitleRender?: ItemProps<RecordType>['itemTitleRender'];
};
export type Key = React.Key;
export type TriggerEventHandler<RecordType> = (record: RecordType) => void;
declare function BaseProList<RecordType extends Record<string, any>, U extends Record<string, any> = Record<string, any>>(props: ProListProps<RecordType, U>): import("react/jsx-runtime").JSX.Element;
declare function ProList<RecordType extends Record<string, any>, U extends Record<string, any> = Record<string, any>>(props: ProListProps<RecordType, U>): import("react/jsx-runtime").JSX.Element;
export { BaseProList, ProList };
export default ProList;
