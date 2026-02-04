import type { MenuProps } from 'antd';
import type { DirectionType } from 'antd/es/config-provider';
import React from 'react';
import type { Conversation } from './interface';
export interface ConversationsItemProps extends Omit<React.HTMLAttributes<HTMLLIElement>, 'onClick'> {
    info: Conversation;
    prefixCls?: string;
    direction?: DirectionType;
    menu?: MenuProps & {
        trigger?: React.ReactNode | ((conversation: Conversation, info: {
            originNode: React.ReactNode;
        }) => React.ReactNode);
        getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement;
    };
    active?: boolean;
    onClick?: (info: Conversation) => void;
}
declare const ConversationsItem: React.FC<ConversationsItemProps>;
export default ConversationsItem;
