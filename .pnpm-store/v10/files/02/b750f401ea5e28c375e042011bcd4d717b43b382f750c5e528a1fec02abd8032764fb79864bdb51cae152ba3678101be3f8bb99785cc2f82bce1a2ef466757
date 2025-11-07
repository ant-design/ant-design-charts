import * as React from 'react';
export interface SendHeaderContextProps {
    prefixCls: string;
}
export declare const SendHeaderContext: React.Context<SendHeaderContextProps>;
export type SemanticType = 'header' | 'content';
export interface SenderHeaderProps {
    forceRender?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    title?: React.ReactNode;
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    classNames?: Partial<Record<SemanticType, string>>;
    styles?: Partial<Record<SemanticType, React.CSSProperties>>;
    closable?: boolean;
}
export default function SenderHeader(props: SenderHeaderProps): React.JSX.Element;
