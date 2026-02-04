import { DrawerProps } from 'antd';
import React from 'react';
import type { ProSettings } from '../../defaultSettings';
type MergerSettingsType<T> = Partial<T> & {
    colorPrimary?: string;
    colorWeak?: boolean;
};
export type SettingItemProps = {
    title: React.ReactNode;
    action: React.ReactElement;
    disabled?: boolean;
    disabledReason?: React.ReactNode;
};
export type SettingDrawerProps = {
    defaultSettings?: MergerSettingsType<ProSettings>;
    settings?: MergerSettingsType<ProSettings>;
    collapse?: boolean;
    onCollapseChange?: (collapse: boolean) => void;
    getContainer?: any;
    hideHintAlert?: boolean;
    hideCopyButton?: boolean;
    /** 使用实验性质的黑色主题 */
    enableDarkTheme?: boolean;
    prefixCls?: string;
    colorList?: false | {
        key: string;
        color: string;
        title?: string;
    }[];
    onSettingChange?: (settings: MergerSettingsType<ProSettings>) => void;
    pathname?: string;
    disableUrlParams?: boolean;
    themeOnly?: boolean;
    drawerProps?: DrawerProps;
};
export type SettingDrawerState = {
    collapse?: boolean;
    language?: string;
} & MergerSettingsType<ProSettings>;
export declare const getFormatMessage: () => (data: {
    id: string;
    defaultMessage?: string;
}) => string;
/**
 * 可视化配置组件
 *
 * @param props
 */
export declare const SettingDrawer: React.FC<SettingDrawerProps>;
export {};
