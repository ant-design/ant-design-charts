import { ProFormInstance } from '@ant-design/pro-form';
import type { ParamsType } from '@ant-design/pro-provider';
import type { ButtonProps, FormItemProps } from 'antd';
import React from 'react';
import type { ProTableProps } from '../../typing';
export type EditableFormInstance<T = any> = ProFormInstance<T> & {
    /**
     * 获取一行数据的
     * @param rowIndex
     * @returns T | undefined
     *
     * @example getRowData(1)  可以传入第几行的数据
     * @example getRowData("id")  也可以传入 rowKey，根据你列的唯一key 来获得。
     */
    getRowData?: (rowIndex: string | number) => T | undefined;
    /**
     * 获取整个 table 的数据
     * @returns T[] | undefined
     */
    getRowsData?: () => T[] | undefined;
    /**
     * 设置一行的数据，会将数据进行简单的 merge
     *
     * {title:"old", decs:"old",id:"old"} -> set {title:"new"} -> {title:"new", decs:"old",id:"old"}
     *
     * @description 只会做最第一层对象的 merge 哦。
     * {title:"old", decs:{name:"old",key:"old"},id:"old"} -> set {decs:{name:"new"}} -> {title:"old", decs:{name:"new"},id:"old"} -> set {decs:{name:"old"}}
     *
     * @param rowIndex
     * @param data
     * @returns void
     *
     * 根据行号设置
     * @example setRowData(1, { title:"new" })  可以传入修改第几行
     *
     * 根据行 id 设置
     * @example setRowData("id", { title:"new" })  也可以传入 rowKey，根据你列的唯一 key 来设置。
     *
     * 清空原有数据
     * @example setRowData(1, { title:undefined })
     *
     */
    setRowData?: (rowIndex: string | number, data: Partial<T>) => void;
};
export type RecordCreatorProps<DataSourceType> = {
    record: DataSourceType | ((index: number, dataSource: DataSourceType[]) => DataSourceType);
    position?: 'top' | 'bottom';
    /**
     * 新增一行的类型
     *
     * @augments dataSource 将会新增一行数据到 dataSource 中，不支持取消，只能删除
     * @augments cache 将会把数据放到缓存中，取消后消失
     */
    newRecordType?: 'dataSource' | 'cache';
    /** 要增加到哪个节点下，一般用于多重嵌套表格 */
    parentKey?: React.Key | ((index: number, dataSource: DataSourceType[]) => React.Key);
};
export type EditableProTableProps<T, U extends ParamsType, ValueType = 'text'> = Omit<ProTableProps<T, U, ValueType>, 'onChange'> & {
    defaultValue?: readonly T[];
    value?: readonly T[];
    onChange?: (value: readonly T[]) => void;
    /** @name 原先的 table OnChange */
    onTableChange?: ProTableProps<T, U>['onChange'];
    /**
     *@name 可编辑表格，列配置的form，可以操作表格里面的数据
     */
    editableFormRef?: React.Ref<EditableFormInstance<T> | undefined>;
    /** @name 新建按钮的设置 */
    recordCreatorProps?: (RecordCreatorProps<T> & ButtonProps & {
        creatorButtonText?: React.ReactNode;
    }) | false;
    /** 最大行数 */
    maxLength?: number;
    /** Table 的值发生改变，为了适应 Form 调整了顺序 */
    onValuesChange?: (values: T[], record: T) => void;
    /** 是否受控，如果为 true，每次 value 更新都会重置表单 */
    controlled?: boolean;
    /** FormItem 的设置 */
    formItemProps?: Omit<FormItemProps, 'children' | 'name'>;
};
/**
 * 可以直接放到 Form 中的可编辑表格
 * A React component that is used to create a table.
 * @param props
 */
declare function FieldEditableTable<DataType extends Record<string, any>, Params extends ParamsType = ParamsType, ValueType = 'text'>(props: EditableProTableProps<DataType, Params, ValueType>): import("react/jsx-runtime").JSX.Element;
declare namespace FieldEditableTable {
    var RecordCreator: <T = Record<string, any>>(props: RecordCreatorProps<T> & {
        children: JSX.Element;
    }) => React.FunctionComponentElement<any>;
}
export default FieldEditableTable;
