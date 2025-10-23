import * as React from 'react';
import type { BubbleProps } from './interface';
export interface BubbleListRef {
    nativeElement: HTMLDivElement;
    scrollTo: (info: {
        offset?: number;
        key?: string | number;
        behavior?: ScrollBehavior;
        block?: ScrollLogicalPosition;
    }) => void;
}
export type BubbleDataType = BubbleProps<any> & {
    key?: string | number;
    role?: string;
};
export type RoleType = Partial<Omit<BubbleProps<any>, 'content'>>;
export type RolesType = Record<string, RoleType> | ((bubbleDataP: BubbleDataType, index: number) => RoleType);
export interface BubbleListProps extends React.HTMLAttributes<HTMLDivElement> {
    prefixCls?: string;
    rootClassName?: string;
    items?: BubbleDataType[];
    autoScroll?: boolean;
    roles?: RolesType;
    /**
     * @version 1.5.0
     */
    onScroll?: (e: React.UIEvent<HTMLDivElement, UIEvent>) => void;
}
declare const ForwardBubbleList: React.ForwardRefExoticComponent<BubbleListProps & React.RefAttributes<BubbleListRef>>;
export default ForwardBubbleList;
