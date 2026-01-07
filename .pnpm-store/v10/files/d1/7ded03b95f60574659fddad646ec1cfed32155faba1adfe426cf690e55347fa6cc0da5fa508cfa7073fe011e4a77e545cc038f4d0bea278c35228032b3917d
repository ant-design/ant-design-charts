import React from 'react';
export type CheckCardValueType = string | number | boolean;
/**
 * Represents the possible value types for a CheckGroup.
 * It can be an array of CheckCardValueTypes, a single CheckCardValueType, or undefined.
 */
export type CheckGroupValueType = CheckCardValueType[] | CheckCardValueType | undefined;
/**
 * Represents an option for a CheckCard component.
 */
export interface CheckCardOptionType {
    /**
     * The title to be displayed.
     *
     * @title Title
     */
    title?: React.ReactNode;
    /**
     * The value of the option.
     *
     * @title Value
     */
    value: CheckCardValueType;
    /**
     * The description to be displayed.
     *
     * @title Description
     */
    description?: React.ReactNode;
    /**
     * The size of the component. Supports three default sizes: 'large', 'default', 'small'.
     * Users can also customize the width and height.
     *
     * @default default
     * @title Component Size
     */
    size?: 'large' | 'default' | 'small';
    /**
     * The avatar to be displayed on the left side. Can be a link or a ReactNode.
     *
     * @title Left Avatar Area
     */
    avatar?: React.ReactNode;
    /**
     * The cover image. In this mode, other display values are ignored.
     *
     * @title Cover Image
     */
    cover?: React.ReactNode;
    /**
     * Specifies if the option is disabled.
     *
     * @default false
     * @title Disabled
     */
    disabled?: boolean;
    /**
     * Change callback function.
     *
     * @param checked - Indicates whether the option is checked or not.
     * @title Change Callback
     */
    onChange?: (checked: boolean) => void;
    /**
     * Child options.
     */
    children?: CheckCardOptionType[];
}
export interface AbstractCheckCardGroupProps {
    /** @ignore */
    prefixCls?: string;
    /** @ignore */
    className?: string;
    /** 指定可选项 */
    options?: (CheckCardOptionType | string)[];
    /** 整组失效 */
    disabled?: boolean;
    /** @ignore */
    style?: React.CSSProperties;
    /**
     * 组件尺寸，支持大，中，小三种默认尺寸，用户可以自定义宽高
     *
     * @default default
     */
    size?: 'large' | 'default' | 'small';
    /**
     * @acceptions CheckCard
     * @ignore
     */
    children?: React.ReactNode;
}
export declare const CardLoading: React.FC<{
    prefixCls: string;
    hashId: string;
}>;
export interface CheckCardGroupProps extends AbstractCheckCardGroupProps {
    /**
     * 是否多选
     *
     * @title 是否多选
     */
    multiple?: boolean;
    /**
     * 默认选中的选项
     *
     * @title 默认选中的选项
     */
    defaultValue?: CheckGroupValueType;
    /**
     * 指定选中的选项
     *
     * @title 指定选中的选项
     */
    value?: CheckGroupValueType;
    /**
     * 当卡片组内容还在加载中时，可以用 loading 展示一个占位
     *
     * @title 加载中
     */
    loading?: boolean;
    /**
     * 是否显示边框
     *
     * @title 显示边框
     */
    bordered?: boolean;
    /** 变化时回调函数 */
    onChange?: (checkedValue: CheckGroupValueType) => void;
}
/**
 * Represents the state of a CheckCardGroup component.
 */
export interface CheckCardGroupState {
    value: CheckGroupValueType;
    registeredValues: CheckCardValueType[];
}
/**
 * Represents the props for the CheckCardGroup component.
 */
export type CheckCardGroupConnextType = {
    /**
     * A function to toggle the selected option.
     * @param option - The option to toggle.
     */
    toggleOption?: (option: CheckCardOptionType) => void;
    /**
     * The currently selected value.
     */
    value?: any;
    /**
     * Specifies whether the component is disabled.
     */
    disabled?: boolean;
    /**
     * The size of the component.
     */
    size?: any;
    /**
     * Specifies whether the component is in a loading state.
     */
    loading?: any;
    /**
     * Specifies whether the component has a border.
     */
    bordered?: any;
    /**
     * Specifies whether multiple options can be selected.
     */
    multiple?: any;
    /**
     * A function to register a value.
     * @param value - The value to register.
     */
    registerValue?: (value: any) => void;
    /**
     * A function to cancel a value.
     * @param value - The value to cancel.
     */
    cancelValue?: (value: any) => void;
};
export declare const CheckCardGroupConnext: React.Context<CheckCardGroupConnextType>;
declare const _default: (props: CheckCardGroupProps) => import("react/jsx-runtime").JSX.Element;
export default _default;
