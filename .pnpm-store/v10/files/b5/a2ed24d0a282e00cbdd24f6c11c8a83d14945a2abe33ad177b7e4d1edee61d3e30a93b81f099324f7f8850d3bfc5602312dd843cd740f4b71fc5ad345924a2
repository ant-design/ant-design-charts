import React from 'react';
export type SuggestionItem = {
    label: React.ReactNode;
    value: string;
    icon?: React.ReactNode;
    children?: SuggestionItem[];
    extra?: React.ReactNode;
};
export interface RenderChildrenProps<T> {
    onTrigger: (info?: T | false) => void;
    onKeyDown: (e: React.KeyboardEvent) => void;
}
export interface SuggestionProps<T = any> {
    prefixCls?: string;
    className?: string;
    rootClassName?: string;
    style?: React.CSSProperties;
    children?: (props: RenderChildrenProps<T>) => React.ReactElement;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    items: SuggestionItem[] | ((info?: T) => SuggestionItem[]);
    onSelect?: (value: string) => void;
    block?: boolean;
    styles?: Partial<Record<string, React.CSSProperties>>;
    classNames?: Partial<Record<string, string>>;
}
declare function Suggestion<T = any>(props: SuggestionProps<T>): React.ReactElement<unknown, string | React.JSXElementConstructor<any>>;
declare namespace Suggestion {
    var displayName: string;
}
export default Suggestion;
