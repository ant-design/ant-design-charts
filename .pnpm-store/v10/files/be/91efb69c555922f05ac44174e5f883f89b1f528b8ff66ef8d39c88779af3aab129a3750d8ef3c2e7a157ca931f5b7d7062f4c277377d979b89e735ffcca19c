import type { IntlType } from '@ant-design/pro-provider';
import React, { Key } from 'react';
export type AlertRenderType<T> = ((props: {
    intl: IntlType;
    selectedRowKeys: (number | string | Key)[];
    selectedRows: T[];
    onCleanSelected: () => void;
}) => React.ReactNode) | false;
export type TableAlertProps<T> = {
    selectedRowKeys: (number | string | Key)[];
    selectedRows: T[];
    alwaysShowAlert?: boolean;
    alertInfoRender?: AlertRenderType<T>;
    onCleanSelected: () => void;
    alertOptionRender?: AlertRenderType<T>;
};
declare function TableAlert<T>({ selectedRowKeys, onCleanSelected, alwaysShowAlert, selectedRows, alertInfoRender, alertOptionRender, }: TableAlertProps<T>): React.JSX.Element | null;
export default TableAlert;
