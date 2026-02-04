import type { MenuItemProps } from 'antd';
import React from 'react';
interface MenuItems extends MenuItemProps {
    name: React.ReactNode;
    key: string;
    title?: string;
}
export type DropdownProps = {
    className?: string;
    style?: React.CSSProperties;
    menus?: MenuItems[];
    onSelect?: (key: string) => void;
    children?: React.ReactNode;
};
/**
 * 一个简单的下拉菜单
 *
 * @param param0
 */
declare const DropdownButton: React.FC<DropdownProps>;
declare const TableDropdown: React.FC<DropdownProps> & {
    Button: typeof DropdownButton;
};
export default TableDropdown;
