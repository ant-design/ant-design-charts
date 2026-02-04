import React from 'react';
import type { AppItemProps, AppListProps } from './types';
/**
 * 默认渲染logo的方式，如果是个string，用img。否则直接返回
 *
 * @param logo
 * @returns
 */
export declare const defaultRenderLogo: (logo: React.ReactNode | (() => React.ReactNode)) => React.ReactNode;
/**
 * 相关品牌额icon 列表。用于展示相关的品牌
 *
 * @param props
 * @returns
 */
export declare const AppsLogoComponents: React.FC<{
    appList?: AppListProps;
    appListRender?: (props: AppListProps, defaultDom: React.ReactNode) => React.ReactNode;
    onItemClick?: (item: AppItemProps, popoverRef?: React.RefObject<HTMLSpanElement>) => void;
    prefixCls?: string;
}>;
