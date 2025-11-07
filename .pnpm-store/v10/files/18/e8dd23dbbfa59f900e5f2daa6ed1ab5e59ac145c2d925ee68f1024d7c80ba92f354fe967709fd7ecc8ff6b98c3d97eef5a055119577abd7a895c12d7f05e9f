import React from 'react';
import type { DropdownFooterProps } from '../DropdownFooter';
import 'antd/lib/dropdown/style';
import type { TooltipPlacement } from 'antd/lib/tooltip';
export type FooterRender = ((onConfirm?: (e?: React.MouseEvent) => void, onClear?: (e?: React.MouseEvent) => void) => JSX.Element | false) | false;
export type DropdownProps = {
    label?: React.ReactNode;
    footer?: DropdownFooterProps;
    footerRender?: FooterRender;
    padding?: number;
    disabled?: boolean;
    /**
     * @deprecated use onOpenChange replace
     */
    onVisibleChange?: (visible: boolean) => void;
    /**
     * @deprecated use open replace
     */
    visible?: boolean;
    onOpenChange?: (visible: boolean) => void;
    open?: boolean;
    placement?: TooltipPlacement;
    children?: React.ReactNode;
};
declare const FilterDropdown: React.FC<DropdownProps>;
export { FilterDropdown };
