import React from 'react';
import type { BubbleContentType, BubbleProps } from './interface';
export interface BubbleRef {
    nativeElement: HTMLElement;
}
export interface BubbleContextProps {
    onUpdate?: VoidFunction;
}
export declare const BubbleContext: React.Context<BubbleContextProps>;
type ForwardBubbleType = <T extends BubbleContentType = string>(props: BubbleProps<T> & {
    ref?: React.Ref<BubbleRef>;
}) => React.ReactElement;
declare const _default: ForwardBubbleType;
export default _default;
