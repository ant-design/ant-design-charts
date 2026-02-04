import React from 'react';
import type { AnyObject } from '../_util/type';
import type { XAgent } from '../use-x-agent';
import { XRequestParams } from '../x-request';
import type { SSEOutput, XStreamOptions } from '../x-stream';
export type SimpleType = string | number | boolean | object;
export type MessageStatus = 'local' | 'loading' | 'updating' | 'success' | 'error';
type RequestPlaceholderFn<Message extends SimpleType> = (message: Message, info: {
    messages: Message[];
}) => Message;
type RequestFallbackFn<Message extends SimpleType> = (message: Message, info: {
    error: Error;
    messages: Message[];
}) => Message | Promise<Message>;
type TransformMessageFn<Message, Output> = (info: {
    originMessage?: Message;
    chunk: Output;
    chunks: Output[];
    status: MessageStatus;
}) => Message;
type RequestParams<Message> = Omit<XRequestParams, 'message'> & {
    message: Message;
} & AnyObject;
export interface XChatConfig<AgentMessage extends SimpleType = string, BubbleMessage extends SimpleType = AgentMessage, Input = AgentMessage, Output = AgentMessage> {
    agent?: XAgent<AgentMessage, Input, Output>;
    defaultMessages?: DefaultMessageInfo<AgentMessage>[];
    /** Convert agent message to bubble usage message type */
    parser?: (message: AgentMessage) => BubbleMessage | BubbleMessage[];
    requestPlaceholder?: AgentMessage | RequestPlaceholderFn<AgentMessage>;
    requestFallback?: AgentMessage | RequestFallbackFn<AgentMessage>;
    transformMessage?: TransformMessageFn<AgentMessage, Output>;
    transformStream?: XStreamOptions<AgentMessage>['transformStream'];
    resolveAbortController?: (abortController: AbortController) => void;
}
export interface MessageInfo<Message extends SimpleType> {
    id: number | string;
    message: Message;
    status: MessageStatus;
}
export type DefaultMessageInfo<Message extends SimpleType> = Pick<MessageInfo<Message>, 'message'> & Partial<Omit<MessageInfo<Message>, 'message'>>;
export type RequestResultObject<Message> = {
    message: Message | Message[];
    status: MessageStatus;
};
export type StandardRequestResult<Message extends SimpleType> = Omit<RequestResultObject<Message>, 'message' | 'status'> & {
    message: Message;
    status?: MessageStatus;
};
export default function useXChat<AgentMessage extends SimpleType = string, ParsedMessage extends SimpleType = AgentMessage, Input = RequestParams<AgentMessage>, Output = SSEOutput>(config: XChatConfig<AgentMessage, ParsedMessage, Input, Output>): {
    readonly onRequest: (requestParams: RequestParams<AgentMessage> | Input | SimpleType) => void;
    readonly messages: MessageInfo<AgentMessage>[];
    readonly parsedMessages: MessageInfo<ParsedMessage>[];
    readonly setMessages: (action: React.SetStateAction<MessageInfo<AgentMessage>[]>) => void;
};
export {};
