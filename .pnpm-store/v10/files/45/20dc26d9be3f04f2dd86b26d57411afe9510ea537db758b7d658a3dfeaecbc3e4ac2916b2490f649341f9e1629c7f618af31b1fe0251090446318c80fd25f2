/// <reference types="react" />
import type { FormProps, ModalProps } from 'antd';
import type { CommonFormProps } from '../../BaseForm';
export type ModalFormProps<T = Record<string, any>, U = Record<string, any>> = Omit<FormProps<T>, 'onFinish' | 'title'> & CommonFormProps<T, U> & {
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
    /** @name 用于触发抽屉打开的 dom */
    trigger?: JSX.Element;
    /** @name 受控的打开关闭 */
    open?: ModalProps['open'];
    /**
     * @deprecated use onOpenChange replace
     */
    onVisibleChange?: (visible: boolean) => void;
    /**
     * @deprecated use open replace
     */
    visible?: boolean;
    /** @name 打开关闭的事件 */
    onOpenChange?: (open: boolean) => void;
    /**
     * 不支持 'visible'，请使用全局的 visible
     *
     * @name 弹框的属性
     */
    modalProps?: Omit<ModalProps, 'visible'>;
    /** @name 弹框的标题 */
    title?: ModalProps['title'];
    /** @name 弹框的宽度 */
    width?: ModalProps['width'];
};
declare function ModalForm<T = Record<string, any>, U = Record<string, any>>({ children, trigger, onVisibleChange, onOpenChange, modalProps, onFinish, submitTimeout, title, width, visible: propVisible, open: propsOpen, ...rest }: ModalFormProps<T, U>): import("react/jsx-runtime").JSX.Element;
export { ModalForm };
