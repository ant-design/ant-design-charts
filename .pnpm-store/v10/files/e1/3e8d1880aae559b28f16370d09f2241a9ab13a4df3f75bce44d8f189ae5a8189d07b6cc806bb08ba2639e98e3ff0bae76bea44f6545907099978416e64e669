import type { IntlType } from '@ant-design/pro-provider';
import React from 'react';
export type ActionsProps = {
    submitter: React.ReactNode;
    /** 是否收起 */
    collapsed?: boolean;
    /** 收起按钮的事件 */
    onCollapse?: (collapsed: boolean) => void;
    setCollapsed: (collapse: boolean) => void;
    isForm?: boolean;
    style?: React.CSSProperties;
    /** 收起按钮的 render */
    collapseRender?: ((collapsed: boolean, 
    /** 是否应该展示，有两种情况 列只有三列，不需要收起 form 模式 不需要收起 */
    props: ActionsProps, intl: IntlType, hiddenNum?: false | number) => React.ReactNode) | false;
    /** 隐藏个数 */
    hiddenNum?: false | number;
};
/**
 * FormFooter 的组件，可以自动进行一些配置
 *
 * @param props
 */
declare const Actions: React.FC<ActionsProps>;
export default Actions;
