import type { DrawerProps, FormProps } from 'antd';
import React from 'react';
import type { CommonFormProps } from '../../BaseForm';
export type CustomizeResizeType = {
    onResize?: () => void;
    maxWidth?: DrawerProps['width'];
    minWidth?: DrawerProps['width'];
};
export type DrawerFormProps<T = Record<string, any>, U = Record<string, any>> = Omit<FormProps, 'onFinish' | 'title'> & CommonFormProps<T, U> & {
    /**
     * 接收任意值，返回 真值 会关掉这个抽屉
     *
     * @name 表单结束后调用
     *
     * @example 结束后关闭抽屉
     * onFinish: async ()=> {await save(); return true}
     *
     * @example 结束后不关闭抽屉
     * onFinish: async ()=> {await save(); return false}
     */
    onFinish?: (formData: T) => Promise<any>;
    /** @name 提交数据时，禁用取消按钮的超时时间（毫秒）。 */
    submitTimeout?: number;
    /** @name 用于触发抽屉打开的 dom ，只能设置一个*/
    trigger?: JSX.Element;
    /**
     * @deprecated use onOpenChange replace
     */
    onVisibleChange?: (visible: boolean) => void;
    /**
     * @deprecated use open replace
     */
    visible?: boolean;
    /** @name 受控的打开关闭 */
    open?: DrawerProps['open'];
    /**
     * @name 打开关闭的事件 */
    onOpenChange?: (visible: boolean) => void;
    /**
     * 不支持 'visible'，请使用全局的 visible
     *
     * @name 抽屉的配置
     */
    drawerProps?: Omit<DrawerProps, 'visible'>;
    /** @name 抽屉的标题 */
    title?: DrawerProps['title'];
    /** @name 抽屉的宽度 */
    width?: DrawerProps['width'];
    /**
     *
     * @name draggableDrawer
     */
    resize?: CustomizeResizeType | boolean;
};
declare function DrawerForm<T = Record<string, any>, U = Record<string, any>>({ children, trigger, onVisibleChange, drawerProps, onFinish, submitTimeout, title, width, resize, onOpenChange, visible: propVisible, open: propsOpen, ...rest }: DrawerFormProps<T, U>): React.JSX.Element;
export { DrawerForm };
