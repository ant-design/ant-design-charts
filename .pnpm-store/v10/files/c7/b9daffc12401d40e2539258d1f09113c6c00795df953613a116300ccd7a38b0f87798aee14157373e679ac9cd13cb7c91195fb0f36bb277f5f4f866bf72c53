import type { ColProps } from 'antd';
import type { LabelTooltipType } from 'antd/lib/form/FormItemLabel';
import type { FormListFieldData, FormListOperation, FormListProps } from 'antd/lib/form/FormList';
import type { NamePath } from 'antd/lib/form/interface';
import type { ReactNode } from 'react';
import React from 'react';
import type { ProFormGridConfig } from '../../typing';
import type { ChildrenItemFunction, FormListActionGuard, ProFromListCommonProps } from './ListItem';
declare const FormListContext: React.Context<Record<string, any> | (FormListFieldData & {
    listName: NamePath;
})>;
export type FormListActionType<T = any> = FormListOperation & {
    get: (index: number) => T | undefined;
    getList: () => T[] | undefined;
};
export type ProFormListProps<T> = Omit<FormListProps, 'children' | 'rules'> & ProFromListCommonProps & {
    /**
     * @name 列表的标签
     */
    label?: ReactNode;
    /**
     * @name 标题旁边的？号提示展示的信息
     *
     * @example 自定义提示信息
     * <ProForm.Group title="标题"  tooltip="自定义提示信息">
     *  @example 自定义Icon
     * <ProForm.Group title="标题"  tooltip={{icon:<Info/>,title:自定义提示信息}}>
     */
    tooltip?: LabelTooltipType;
    /**
     * @name 行操作的钩子配置
     *
     * @example 阻止删除 actionGuard={{beforeAddRow:()=> return false}}
     * @example 阻止新增 actionGuard={{beforeAddRow:()=> return false}}
     */
    actionGuard?: FormListActionGuard;
    children?: ReactNode | ChildrenItemFunction;
    /**
     * @name 在最后增加一个 dom
     *
     * @example 自定义新增按钮
     * fieldExtraRender={(fieldAction) => {<a onClick={()=>fieldAction.add({id:"xx"})}>新增</a>}}
     */
    fieldExtraRender?: (fieldAction: FormListOperation, meta: {
        errors?: React.ReactNode[];
        warnings?: React.ReactNode[];
    }) => React.ReactNode;
    /**
     * @name 获取到 list 操作实例
     * @description 可用删除，新增，移动等操作
     *
     * @example  actionRef?.current.add?.({},1);
     * @example  actionRef?.current.remove?.(1);
     * @example  actionRef?.current.move?.(1,2);
     * @example  actionRef?.current.get?.(1);
     * @example  actionRef?.current.getList?.();
     */
    actionRef?: React.MutableRefObject<FormListActionType<T> | undefined>;
    /** 放在div上面的属性 */
    style?: React.CSSProperties;
    /**
     * 数据新增成功回调
     */
    onAfterAdd?: (...params: [...Parameters<FormListOperation['add']>, number]) => void;
    /**
     * 数据移除成功回调
     */
    onAfterRemove?: (...params: [...Parameters<FormListOperation['remove']>, number]) => void;
    /** 是否同时校验列表是否为空 */
    isValidateList?: boolean;
    /** 当 isValidateList 为 true 时执行为空提示 */
    emptyListMessage?: string;
    rules?: (Required<FormListProps>['rules'][number] & {
        required?: boolean;
    })[];
    required?: boolean;
    wrapperCol?: ColProps;
    className?: string;
    readonly?: boolean;
} & Pick<ProFormGridConfig, 'colProps' | 'rowProps'>;
declare function ProFormList<T>(props: ProFormListProps<T>): React.JSX.Element | null;
export { FormListContext, ProFormList };
