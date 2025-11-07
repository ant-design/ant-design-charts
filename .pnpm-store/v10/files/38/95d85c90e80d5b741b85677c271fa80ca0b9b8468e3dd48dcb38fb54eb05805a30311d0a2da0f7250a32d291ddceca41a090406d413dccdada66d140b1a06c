import React from 'react';
import type { ProFormProps } from '../ProForm';
export type LoginFormProps<T> = {
    /**
     * @name form 顶部的一个提示配置，可以配置一些错误的提示信息
     * @example <caption>提示登录异常</caption>
     * message={<Alert message="登录异常，请重试！"/>}
     */
    message: React.ReactNode | false;
    /**
     * @name 标题，可以配置为空
     */
    title: React.ReactNode | false;
    /**
     * @name 二级标题，可以配置为空
     */
    subTitle: React.ReactNode | false;
    /**
     * @name 自定义额外的登录功能
     *
     * @example <caption>配置支付宝登录</caption>
     * actions={<a>跳转支付宝登录</a>}
     *
     * @example <caption>使用图标</caption>
     * actions={<a><Icon type="alipay" />跳转支付宝登录</a>}
     */
    actions: React.ReactNode;
    /**
     * @name logo 的配置，支持 ReactNode 和 url
     *
     * @example 配置为一个图标
     * logo={<Icon type="alipay" />}
     * @example 配置为一个路径
     * logo="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
     */
    logo?: React.ReactNode;
    children?: React.ReactNode | React.ReactNode[];
    /**
     * @name 登录框主表格的样式
     */
    contentStyle?: React.CSSProperties;
    /**
     * @name 登录框容器的样式
     */
    containerStyle?: React.CSSProperties;
    otherStyle?: React.CSSProperties;
} & Omit<ProFormProps<T>, 'title'>;
declare function LoginForm<T = Record<string, any>>(props: Partial<LoginFormProps<T>>): React.JSX.Element;
export { LoginForm };
