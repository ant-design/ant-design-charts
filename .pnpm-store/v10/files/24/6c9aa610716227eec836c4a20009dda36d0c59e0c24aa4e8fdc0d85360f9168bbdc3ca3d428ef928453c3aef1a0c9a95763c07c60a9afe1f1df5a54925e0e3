import { History } from 'history';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { IRouteComponents, IRoutesById } from './types';
export declare function __getRoot(): ReactDOM.Root | null;
export declare function Routes(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
/**
 * umi 渲染需要的配置，在node端调用的哦
 */
export declare type RenderClientOpts = {
    /**
     * 配置 webpack 的 publicPath。
     * @doc https://umijs.org/docs/api/config#publicpath
     */
    publicPath?: string;
    /**
     * 是否是 runtimePublicPath
     * @doc https://umijs.org/docs/api/config#runtimepublicpath
     */
    runtimePublicPath?: boolean;
    /**
     * react dom 渲染的的目标节点 id
     * @doc 一般不需要改，微前端的时候会变化
     */
    mountElementId?: string;
    /**
     * react dom 渲染的的目标 dom
     * @doc 一般不需要改，微前端的时候会变化
     */
    rootElement?: HTMLElement;
    __INTERNAL_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
        /**
         * 内部流程, 渲染特殊 app 节点, 不要使用!!!
         */
        pureApp?: boolean;
        /**
         * 内部流程, 渲染特殊 html 节点, 不要使用!!!
         */
        pureHtml?: boolean;
    };
    /**
     * 当前的路由配置
     */
    routes: IRoutesById;
    /**
     * 当前的路由对应的dom组件
     */
    routeComponents: IRouteComponents;
    /**
     * 插件的执行实例
     */
    pluginManager: any;
    /**
     * 设置路由 base，部署项目到非根目录下时使用。
     * @doc https://umijs.org/docs/api/config#base
     */
    basename?: string;
    /**
     * loading 中展示的组件 dom
     */
    loadingComponent?: React.ReactNode;
    /**
     * react router 的 history，用于控制列表渲染
     * @doc https://umijs.org/docs/api/config#history
     * 有多种不同的类型，测试的时候建议用 内存路由，默认是 browserHistory
     */
    history: History;
    /**
     * ssr 的配置
     */
    hydrate?: boolean;
    /**
     * ssr 是否启用流式渲染, 默认 true, 对 SEO 存在一定的负优化
     */
    useStream?: boolean;
    /**
     * 直接返回组件，是为了方便测试
     */
    components?: boolean;
    /**
     * 启用 react-router 5 兼容模式。
     * 此模式下，路由组件的 props 会包含 location、match、history 和 params 属性，和 react-router 5 的保持一致。
     */
    reactRouter5Compat?: boolean;
    /**
     * 应用渲染完成的回调函数
     */
    callback?: () => void;
};
/**
 *  执行 react dom 的 render 方法
 * @param {RenderClientOpts} opts - 插件相关的配置
 * @returns void
 */
export declare function renderClient(opts: RenderClientOpts): (() => React.JSX.Element) | undefined;
