import type React from 'react';
import type { ActionTypeText, RecordKey, RowEditableConfig } from '../useEditableArray';
export type AddLineOptions = {
    position?: 'top' | 'bottom';
    recordKey?: React.Key;
};
/**
 * 一个方便的hooks 用于维护编辑的状态
 *
 * @param props
 */
export declare function useEditableMap<RecordType>(props: RowEditableConfig<RecordType> & {
    dataSource: RecordType;
    childrenColumnName?: string;
    setDataSource: (dataSource: RecordType) => void;
}): {
    editableKeys: React.Key[];
    setEditableRowKeys: (updater: React.Key[] | ((origin: React.Key[]) => React.Key[]), ignoreDestroy?: boolean | undefined) => void;
    isEditable: (recordKey: RecordKey) => boolean;
    actionRender: (key: RecordKey, config?: ActionTypeText<RecordType>) => React.ReactNode[] | (import("react/jsx-runtime").JSX.Element | undefined)[];
    startEditable: (recordKey: RecordKey, recordValue?: any) => boolean;
    cancelEditable: (recordKey: RecordKey) => boolean;
};
export type UseEditableMapType = typeof useEditableMap;
export type UseEditableMapUtilType = ReturnType<UseEditableMapType>;
