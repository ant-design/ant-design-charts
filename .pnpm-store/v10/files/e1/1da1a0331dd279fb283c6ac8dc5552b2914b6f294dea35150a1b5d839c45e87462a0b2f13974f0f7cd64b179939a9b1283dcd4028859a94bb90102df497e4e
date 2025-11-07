import { type IPreviewerProps } from 'dumi';
import type { TooltipProps as RcTooltipProps } from 'rc-tooltip/lib/Tooltip';
import React, { type FC, type ReactNode } from 'react';
import './index.less';
export interface TooltipProps extends Omit<RcTooltipProps, 'overlay'> {
    placement?: 'top' | 'bottom';
    title?: React.ReactNode;
}
export interface IPreviewerActionsProps extends IPreviewerProps {
    /**
     * disabled actions
     */
    disabledActions?: ('CSB' | 'STACKBLITZ' | 'EXTERNAL' | 'HTML2SKETCH')[];
    extra?: ReactNode;
    forceShowCode?: boolean;
    demoContainer: HTMLDivElement | HTMLIFrameElement;
    onSourceTranspile?: (args: {
        err: Error;
        source?: null;
    } | {
        err?: null;
        source: Record<string, string>;
    }) => void;
    onSourceChange?: (source: Record<string, string>) => void;
}
declare const PreviewerActions: FC<IPreviewerActionsProps>;
export default PreviewerActions;
