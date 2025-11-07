import type { MouseEventHandler } from 'react';
import React from 'react';
import type { CheckCardGroupProps } from './Group';
import CheckCardGroup from './Group';
/**
 * Props for the CheckCard component.
 */
interface CheckCardProps {
    /**
     * Custom prefix class.
     *
     * @ignore
     */
    prefixCls?: string;
    /**
     * Callback function for change event.
     *
     * @param checked - The checked state.
     */
    onChange?: (checked: boolean) => void;
    /**
     * Callback function for click event.
     *
     * @param event - The click event.
     */
    onClick?: (event: MouseEventHandler<HTMLDivElement> | undefined) => void;
    /**
     * Callback function for mouse enter event.
     *
     * @param event - The mouse enter event.
     */
    onMouseEnter?: MouseEventHandler<HTMLDivElement>;
    /**
     * Callback function for mouse leave event.
     *
     * @param event - The mouse leave event.
     */
    onMouseLeave?: (event: MouseEventHandler<HTMLDivElement> | undefined) => void;
    /**
     * Whether the card is initially checked.
     *
     * @default false
     * @title Default Checked
     */
    defaultChecked?: boolean;
    /**
     * Whether the card is checked.
     *
     * @default false
     * @title Checked
     */
    checked?: boolean;
    /**
     * Whether the card is disabled.
     *
     * @default false
     * @title Disabled
     */
    disabled?: boolean;
    /**
     * Custom style for the card.
     *
     * @ignore
     */
    style?: React.CSSProperties;
    /**
     * Custom class name for the card.
     *
     * @ignore
     */
    className?: string;
    /**
     * The avatar to display on the left side, can be a link or a ReactNode.
     *
     * @title Avatar
     */
    avatar?: React.ReactNode;
    /**
     * The title to display.
     *
     * @title Title
     */
    title?: React.ReactNode;
    /**
     * The subtitle to display.
     *
     * @title Subtitle
     */
    subTitle?: React.ReactNode;
    /**
     * The description to display.
     *
     * @title Description
     */
    description?: React.ReactNode;
    /**
     * The value of the card.
     *
     * @title Value
     */
    value?: any;
    /**
     * Whether the content is in loading state.
     *
     * @default false
     * @title Loading
     */
    loading?: boolean;
    /**
     * The cover image of the card. Other display values are ignored in this mode.
     *
     * @title Card Background Image
     */
    cover?: React.ReactNode;
    /**
     * The size of the component. Supports 'large', 'default', and 'small' sizes. Users can also customize the width and height.
     *
     * @default default
     * @title Checkbox Size
     */
    size?: 'large' | 'default' | 'small';
    /**
     * Whether to show the border.
     *
     * @default true
     * @title Show Border
     */
    bordered?: boolean;
    /**
     * The action area in the top right corner of the card.
     *
     * @title Actions
     */
    extra?: React.ReactNode;
    /**
     * The content of the card.
     */
    children?: React.ReactNode;
    /**
     * Custom style for the content area.
     */
    bodyStyle?: React.CSSProperties;
    /**
     * The action area in the bottom right corner.
     */
    actions?: React.ReactNode[];
    /**
     * Whether the card is in ghost mode.
     */
    ghost?: boolean;
}
export interface CheckCardState {
    checked: boolean;
}
declare const CheckCard: React.FC<CheckCardProps> & {
    Group: typeof CheckCardGroup;
};
export type { CheckCardGroupProps, CheckCardProps };
export default CheckCard;
