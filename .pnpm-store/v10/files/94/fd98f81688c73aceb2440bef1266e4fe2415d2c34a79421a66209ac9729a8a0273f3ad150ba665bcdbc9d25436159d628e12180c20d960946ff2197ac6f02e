import React from 'react';
export type ListToolBarMenuItem = {
    key: React.Key;
    label: React.ReactNode;
    disabled?: boolean;
};
export type ListToolBarHeaderMenuProps = {
    type?: 'inline' | 'dropdown' | 'tab';
    activeKey?: React.Key;
    defaultActiveKey?: React.Key;
    items?: ListToolBarMenuItem[];
    onChange?: (activeKey?: React.Key) => void;
    prefixCls?: string;
};
declare const HeaderMenu: React.FC<ListToolBarHeaderMenuProps>;
export default HeaderMenu;
