import React from 'react';
import type { ProFormProps } from '../ProForm';
export type LoginFormPageProps<T> = {
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
     * @name logo 的配置，支持node 和 string
     */
    logo?: React.ReactNode | string;
    /**
     * @name 整个登录页面的样式配置
     * @type  React.CSSProperties
     */
    style: React.CSSProperties;
    /**
     * @name 活动信息的配置，一个页面应该只有一个。
     * @example <caption>配置一个简单的活动。</caption>
     * activityConfig={{title:"这里有个大活动",description:"这里有个大活动的描述",action:<a>点我去看看</a>}}
     */
    activityConfig?: {
        title?: React.ReactNode;
        subTitle?: React.ReactNode;
        action?: React.ReactNode;
        style?: React.CSSProperties;
    };
    /**
     * @name 登录页面的背景图片，可以用它来设置一个背景
     *
     * @example  backgroundImageUrl="xxx.svg"
     */
    backgroundImageUrl?: string;
    /**
     * @name 登录页面的背景视频，可以用它来设置一个背景，优先级高于 backgroundImageUrl
     *
     * @example  backgroundImageUrl="xxx.svg"
     */
    backgroundVideoUrl?: string;
    children?: React.ReactNode | React.ReactNode[];
    containerStyle?: React.CSSProperties;
    mainStyle?: React.CSSProperties;
    otherStyle?: React.CSSProperties;
} & Omit<ProFormProps<T>, 'title'>;
export declare function LoginFormPage<T = Record<string, any>>(props: Partial<LoginFormPageProps<T>>): React.JSX.Element;
