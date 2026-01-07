import type { FormInstance, FormProps } from 'antd';
import { AnyObject } from 'antd/es/_util/type';
import type { NamePath } from 'antd/lib/form/interface';
import type { GetRowKey } from 'antd/lib/table/interface';
import React from 'react';
export type RowEditableType = 'single' | 'multiple';
export type RecordKey = React.Key | React.Key[];
export declare const recordKeyToString: (rowKey: RecordKey) => React.Key;
export type AddLineOptions = {
    position?: 'top' | 'bottom';
    recordKey?: RecordKey;
    newRecordType?: 'dataSource' | 'cache';
    /** 要增加到哪个节点下，一般用于多重嵌套表格 */
    parentKey?: RecordKey;
};
export type NewLineConfig<T> = {
    defaultValue?: T;
    options: AddLineOptions;
};
export type ActionRenderFunction<T> = (row: T, config: ActionRenderConfig<T, NewLineConfig<T>>, defaultDoms: {
    save: React.ReactNode;
    delete: React.ReactNode;
    cancel: React.ReactNode;
}) => React.ReactNode[];
export type RowEditableConfig<DataType> = {
    /** @name 控制可编辑表格的 From的设置 */
    formProps?: Omit<FormProps<DataType> & {
        formRef?: React.Ref<FormInstance | undefined>;
        onInit?: (values: DataType, form: FormInstance) => void;
    }, 'onFinish'>;
    /** @name 控制可编辑表格的 form */
    form?: FormInstance;
    /**
     * @type single | multiple
     * @name 编辑的类型，支持单选和多选
     */
    type?: RowEditableType;
    /** @name 正在编辑的列 */
    editableKeys?: React.Key[];
    /** 正在编辑的列修改的时候 */
    onChange?: (editableKeys: React.Key[], editableRows: DataType[] | DataType) => void;
    /** 正在编辑的列修改的时候 */
    onValuesChange?: (record: DataType, dataSource: DataType[]) => void;
    /** @name 自定义编辑的操作 */
    actionRender?: ActionRenderFunction<DataType>;
    /** 行保存的时候 */
    onSave?: (
    /** 行 id，一般是唯一id */
    key: RecordKey, 
    /** 当前修改的行的值，只有 form 在内的会被设置 */
    record: DataType & {
        index?: number;
    }, 
    /** 原始值，可以用于判断是否修改 */
    originRow: DataType & {
        index?: number;
    }, 
    /** 新建一行的配置，一般无用 */
    newLineConfig?: NewLineConfig<DataType>) => Promise<any | void>;
    /** 行取消的时候 */
    onCancel?: (
    /** 行 id，一般是唯一id */
    key: RecordKey, 
    /** 当前修改的行的值，只有 form 在内的会被设置 */
    record: DataType & {
        index?: number;
    }, 
    /** 原始值，可以用于判断是否修改 */
    originRow: DataType & {
        index?: number;
    }, 
    /** 新建一行的配置，一般无用 */
    newLineConfig?: NewLineConfig<DataType>) => Promise<any | void>;
    /** 行删除的时候 */
    onDelete?: (key: RecordKey, row: DataType & {
        index?: number;
    }) => Promise<any | void>;
    /** 删除行时的确认消息 */
    deletePopconfirmMessage?: React.ReactNode;
    /** 只能编辑一行的的提示 */
    onlyOneLineEditorAlertMessage?: React.ReactNode;
    /** 同时只能新增一行的提示 */
    onlyAddOneLineAlertMessage?: React.ReactNode;
    /** Table 上设置的name，用于拼接name来获取数据 */
    tableName?: NamePath;
    /** 保存一行的文字 */
    saveText?: React.ReactNode;
    /** 取消编辑一行的文字 */
    cancelText?: React.ReactNode;
    /** 删除一行的文字 */
    deleteText?: React.ReactNode;
    /**
     * 解决分页带来的 FormItem namePath 使用错误的 index 作为路径
     * @link https://github.com/ant-design/pro-components/issues/7790
     */
    getRealIndex?: (record: DataType) => number;
};
export type ActionTypeText<T> = {
    deleteText?: React.ReactNode;
    cancelText?: React.ReactNode;
    saveText?: React.ReactNode;
    editorType?: 'Array' | 'Map';
    addEditRecord?: (row: T, options?: AddLineOptions) => boolean;
};
export type ActionRenderConfig<T, LineConfig = NewLineConfig<T>> = {
    editableKeys?: RowEditableConfig<T>['editableKeys'];
    recordKey: RecordKey;
    preEditRowRef: React.MutableRefObject<T | null>;
    index?: number;
    cancelEditable: (key: RecordKey) => void;
    onSave: RowEditableConfig<T>['onSave'];
    onCancel: RowEditableConfig<T>['onCancel'];
    onDelete?: RowEditableConfig<T>['onDelete'];
    deletePopconfirmMessage: RowEditableConfig<T>['deletePopconfirmMessage'];
    setEditableRowKeys: (value: React.Key[]) => void;
    newLineConfig?: LineConfig;
    tableName?: NamePath;
    children?: React.ReactNode;
} & ActionTypeText<T>;
/**
 * 使用map 来删除数据，性能一般 但是准确率比较高
 *
 * @param keyProps
 * @param action
 */
export declare function editableRowByKey<RecordType>(keyProps: {
    data: RecordType[];
    childrenColumnName: string;
    getRowKey: GetRowKey<RecordType>;
    key: RecordKey;
    row: RecordType;
}, action: 'update' | 'top' | 'delete'): RecordType[];
/**
 * 保存按钮的dom
 *
 * @param ActionRenderConfig
 */
export declare function SaveEditableAction<T>({ recordKey, onSave, row, children, newLineConfig, editorType, tableName, }: ActionRenderConfig<T> & {
    row: any;
    children: any;
}, ref: React.Ref<SaveEditableActionRef<T>>): import("react/jsx-runtime").JSX.Element;
export type SaveEditableActionRef<T = any> = {
    /**
     * 直接触发保存动作
     *
     * @throws 如果校验失败，会抛出异常
     *  */
    save: () => ReturnType<NonNullable<RowEditableConfig<T>['onSave']>> | Promise<void>;
};
/**
 * 删除按钮 dom
 *
 * @param ActionRenderConfig
 */
export declare const DeleteEditableAction: React.FC<ActionRenderConfig<any> & {
    row: any;
}>;
export declare function defaultActionRender<T>(row: T, config: ActionRenderConfig<T, NewLineConfig<T>>): {
    save: import("react/jsx-runtime").JSX.Element;
    saveRef: React.RefObject<SaveEditableActionRef<T>>;
    delete: import("react/jsx-runtime").JSX.Element | undefined;
    cancel: import("react/jsx-runtime").JSX.Element;
};
/**
 * 一个方便的hooks 用于维护编辑的状态
 *
 * @param props
 */
export declare function useEditableArray<RecordType extends AnyObject>(props: RowEditableConfig<RecordType> & {
    getRowKey: GetRowKey<RecordType>;
    dataSource: RecordType[];
    onValuesChange?: (record: RecordType, dataSource: RecordType[]) => void;
    childrenColumnName: string | undefined;
    setDataSource: (dataSource: RecordType[]) => void;
}): {
    editableKeys: React.Key[] | undefined;
    setEditableRowKeys: (updater: React.Key[] | ((origin: React.Key[] | undefined) => React.Key[] | undefined) | undefined, ignoreDestroy?: boolean | undefined) => void;
    isEditable: (row: RecordType & {
        index: number;
    }) => {
        recordKey: string;
        isEditable: any;
        preIsEditable: any;
    };
    actionRender: (row: RecordType & {
        index: number;
    }) => React.ReactNode[] | (import("react/jsx-runtime").JSX.Element | undefined)[];
    startEditable: (recordKey: React.Key, record?: RecordType | undefined) => boolean;
    cancelEditable: (recordKey: RecordKey, needReTry?: boolean | undefined) => Promise<true | undefined>;
    addEditRecord: (row: RecordType, options?: AddLineOptions | undefined) => boolean;
    saveEditable: (recordKey: RecordKey, needReTry?: boolean | undefined) => Promise<boolean>;
    newLineRecord: NewLineConfig<RecordType> | undefined;
    preEditableKeys: React.Key[] | undefined;
    onValuesChange: (value: RecordType, values: RecordType) => void;
    getRealIndex: ((record: RecordType) => number) | undefined;
};
export type UseEditableType = typeof useEditableArray;
export type UseEditableUtilType = ReturnType<UseEditableType>;
