import { Adapters } from '@leancloud/adapter-types';

interface IteratorResult<T> {
  done: boolean;
  value: T;
}
interface AsyncIterator<T> {
  next(): Promise<IteratorResult<T>>;
}

interface AVUser {
  getSessionToken(): string;
}

interface SignatureResult {
  signature: string;
  timestamp: number;
  nonce: string;
}
type SignatureFactoryResult = Promise<SignatureResult> | SignatureResult;

export class Realtime extends EventEmitter<ConnectionEvent> {
  constructor(options: {
    appId: string;
    appKey: string;
    region?: string;
    noBinary?: boolean;
    ssl?: boolean;
    server?: string | { RTMRouter: string; api: string };
    RTMServers?: string | string[];
    plugins?: Array<Plugin>;
  });
  createIMClient(
    client: string | AVUser,
    options?: {
      signatureFactory?: (clientId: string) => SignatureFactoryResult;
      conversationSignatureFactory?: (
        conversationId: string,
        clientId: string,
        targetIds: string[],
        action: string
      ) => SignatureFactoryResult;
      blacklistSignatureFactory?: (
        conversationId: string,
        clientId: string,
        targetIds: string[],
        action: string
      ) => SignatureFactoryResult;
      tag?: string;
      isReconnect?: boolean;
    },
    tag?: string
  ): Promise<IMClient>;
  static defineConversationProperty(
    prop: string,
    descriptor?: Object
  ): typeof Conversation;
  register(messageClass: MessageConstructor | MessageConstructor[]): void;
  retry(): number;
}

declare class IMClient extends EventEmitter<ClientEvent | SharedEvent> {
  id: string;
  close(): Promise<void>;
  createConversation(options: {
    members?: string[];
    name?: string;
    transient?: boolean;
    unique?: boolean;
    [key: string]: any;
  }): Promise<ConversationBase>;
  createChatRoom(options: {
    name?: string;
    [key: string]: any;
  }): Promise<ChatRoom>;
  createTemporaryConversation(options: {
    members?: string[];
    ttl?: number;
  }): Promise<TemporaryConversation>;
  getConversation(
    id: string,
    noCache?: boolean
  ): Promise<PresistentConversation>;
  getQuery(): ConversationQuery<PresistentConversation>;
  getServiceConversationQuery(): ConversationQuery<ServiceConversation>;
  getChatRoomQuery(): ConversationQuery<ChatRoom>;
  markAllAsRead(
    conversations: ConversationBase[]
  ): Promise<Array<ConversationBase>>;
  ping(clientIds: string[]): Promise<Array<string>>;
  parseMessage<T extends AVMessage = Message>(json: Object): Promise<T>;
  parseConversation(json: Object): Promise<ConversationBase>;

  on<K extends keyof ClientEvent>(
    event: K,
    listener: (payload?: ClientEvent[K]) => any,
    ...context: EventContext<K>
  ): this;
  on<K extends keyof SharedEvent>(
    event: K,
    listener: (
      payload?: SharedEvent[K],
      conversaion?: ConversationBase,
      ...context: EventContext<K>
    ) => any
  ): this;
  once<K extends keyof ClientEvent>(
    event: K,
    listener: (payload?: ClientEvent[K], ...context: EventContext<K>) => any
  ): this;
  once<K extends keyof SharedEvent>(
    event: K,
    listener: (
      payload?: SharedEvent[K],
      conversaion?: ConversationBase,
      ...context: EventContext<K>
    ) => any
  ): this;
  on(evt: string, listener: Function): this;
  once(evt: string, listener: Function): this;
}

declare class ConversationQuery<T extends ConversationBase> {
  static and<U extends ConversationBase>(
    ...queries: ConversationQuery<U>[]
  ): ConversationQuery<U>;
  static or<U extends ConversationBase>(
    ...queries: ConversationQuery<U>[]
  ): ConversationQuery<U>;
  addAscending(key: string): this;
  addDescending(key: string): this;
  ascending(key: string): this;
  compact(enabled?: boolean): this;
  containedIn(key: string, values: any): this;
  contains(key: string, subString: string): this;
  containsAll(key: string, values: any): this;
  containsMembers(peerIds: string[]): this;
  descending(key: string): this;
  doesNotExist(key: string): this;
  endsWith(key: string, suffix: string): this;
  equalTo(key: string, value: any): this;
  exists(key: string): this;
  find(): Promise<T[]>;
  greaterThan(key: string, value: any): this;
  greaterThanOrEqualTo(key: string, value: any): this;
  lessThan(key: string, value: any): this;
  lessThanOrEqualTo(key: string, value: any): this;
  limit(limit: number): this;
  matches(key: string, regex: string): this;
  notContainsIn(key: string, values: any): this;
  notEqualTo(key: string, value: any): this;
  sizeEqualTo(key: string, length: number): this;
  skip(skip: number): this;
  startsWith(key: string, prefix: string): this;
  withLastMessagesRefreshed(enabled?: boolean): this;
  withMembers(peerIds: string[], includeSelf: boolean): this;
}
/**
 *  对话
 */
declare class ConversationBase extends EventEmitter<ConversationEvent> {
  id: string;
  lastMessage?: Message;
  lastMessageAt?: Date;
  lastDeliveredAt?: Date;
  lastReadAt?: Date;
  unreadMessagesCount: Number;
  members: string[];
  readonly unreadMessagesMentioned: Boolean;
  [key: string]: any;
  // constructor();
  createMessagesIterator(option: {
    limit?: number;
    beforeTime?: Date;
    beforeMessageId?: string;
  }): AsyncIterator<Array<Message>>;
  read(): Promise<this>;
  fetchReceiptTimestamps(): Promise<this>;
  queryMessages(options: {
    beforeTime?: Date;
    beforeMessageId?: string;
    afterTime?: Date;
    afterMessageId?: string;
    limit?: number;
    type?: number;
  }): Promise<Array<Message>>;
  queryMessages(options: {
    startTime?: Date;
    startMessageId?: string;
    startClosed?: boolean;
    endTime?: Date;
    endMessageId?: string;
    endClosed?: boolean;
    limit?: number;
    type?: number;
    direction?: MessageQueryDirection;
  }): Promise<Array<Message>>;
  send<T extends Message>(
    message: T,
    options?: {
      pushData?: Object;
      priority?: MessagePriority;
      receipt?: boolean;
      transient?: boolean;
      will?: boolean;
    }
  ): Promise<T>;
  update<T extends Message>(message: MessagePointer, newMessage: T): Promise<T>;
  recall(message: MessagePointer): Promise<RecalledMessage>;
  count(): Promise<number>;
  toJSON(): Object;
  toFullJSON(): Object;
}

interface OperationFailureError extends Error {
  clientIds: string[];
  code?: number;
  detail?: string;
}

interface PartiallySuccess {
  successfulClientIds: string[];
  failures: OperationFailureError[];
}

interface PagedQueryParams {
  limit?: number;
  next?: string;
}

interface PagedResults<T> {
  results: T[];
  next: string;
}

declare class PresistentConversation extends ConversationBase {
  name: string;
  creator: string;
  createdAt: Date;
  updatedAt: Date;
  muted: boolean;
  mutedMembers?: string[];
  system: boolean;
  transient: boolean;
  get(key: string): any;
  set(key: string, value: any): this;
  save(): Promise<this>;
  fetch(): Promise<this>;
  mute(): Promise<this>;
  unmute(): Promise<this>;
  add(members: string[]): Promise<PartiallySuccess>;
  join(): Promise<this>;
  quit(): Promise<this>;
  remove(clientIds: string[]): Promise<PartiallySuccess>;
  muteMembers(clientIds: string[]): Promise<PartiallySuccess>;
  unmuteMembers(clientIds: string[]): Promise<PartiallySuccess>;
  queryMutedMembers(options?: PagedQueryParams): Promise<PagedResults<string>>;
  blockMembers(clientIds: string[]): Promise<PartiallySuccess>;
  unblockMembers(clientIds: string[]): Promise<PartiallySuccess>;
  queryBlockedMembers(
    options?: PagedQueryParams
  ): Promise<PagedResults<string>>;
}

export class Conversation extends PresistentConversation {
  getAllMemberInfo(options: {
    noCache?: boolean;
  }): Promise<ConversationMemberInfo[]>;
  getMemberInfo(memberId: string): Promise<ConversationMemberInfo>;
  updateMemberRole(
    memberId: string,
    role: ConversationMemberRole
  ): Promise<this>;
}
export class ChatRoom extends PresistentConversation {}
export class ServiceConversation extends PresistentConversation {
  subscribe(): Promise<this>;
  unsubscribe(): Promise<this>;
}

export class TemporaryConversation extends ConversationBase {
  expiredAt: Date;
  expired: Boolean;
}

export enum ConversationMemberRole {
  OWNER,
  MANAGER,
  MEMBER,
}

declare class ConversationMemberInfo {
  readonly conversationId: string;
  readonly memberId: string;
  readonly role: ConversationMemberRole;
  readonly isOwner: boolean;
  toJSON(): Object;
}

type MessagePointer = Message | { id: string; timestamp: Date | number };

type Payload = Object | String | ArrayBuffer;

export interface AVMessage {
  getPayload(): Payload;
}
export interface MessageConstructor<T extends AVMessage = AVMessage> {
  new (...args: any[]): T;
}

export class Message implements AVMessage {
  constructor(content: any);
  cid: string;
  deliveredAt?: Date;
  updatedAt: Date;
  from: string;
  id: string;
  status: MessageStatus;
  timestamp: Date;
  readonly mentioned: Boolean;
  mentionList: string[];
  mentionedAll: Boolean;
  static parse(json: Object, message: Message): Message;
  static validate(): boolean;
  getPayload(): Payload;
  toJSON(): Object;
  toFullJSON(): Object;
  setMentionList(mentionList: string[]): this;
  getMentionList(): string[];
  mentionAll(): this;
}

// 二进制消息
export class BinaryMessage extends Message {
  constructor(buffer: ArrayBuffer);
  buffer: ArrayBuffer;
}

// 富媒体消息
export class TypedMessage extends Message {
  static TYPE: number;
  attributes: Object;
  text: string;
  readonly summary: string;
  type: number;
  getAttributes(): Object;
  getText(): string;
  setAttributes(attributes: Object): this;
}

// 内置文本消息类
export class TextMessage extends TypedMessage {
  constructor(text?: string);
}

export class RecalledMessage extends TypedMessage {}

export class MessageParser {
  constructor(plugin?: Plugin);
  register(messageClass: MessageConstructor | MessageConstructor[]): void;
  parse<T extends AVMessage = Message>(
    source: Object | string | any
  ): Promise<T>;
}

declare class EventEmitter<T> {
  on<K extends keyof T>(
    event: K,
    listener: (payload?: T[K]) => any,
    ...context: EventContext<K>
  ): this;
  on(evt: string, listener: Function): this;
  once<K extends keyof T>(
    event: K,
    listener: (payload?: T[K]) => any,
    ...context: EventContext<K>
  ): this;
  once(evt: string, listener: Function): this;
  off<K extends keyof T>(evt: T | string, listener?: Function): this;
  emit<K extends keyof T>(evt: T | string, ...args: any[]): boolean;
}

interface Middleware<T> {
  (target: T): T;
}
interface Decorator<T> {
  (target: T): void;
}

export interface Plugin {
  name?: string;
  beforeMessageParse?: Middleware<AVMessage>;
  afterMessageParse?: Middleware<AVMessage>;
  beforeMessageDispatch?: (message: AVMessage) => boolean;
  messageClasses?: MessageConstructor[];
  onConversationCreate?: Decorator<ConversationBase>;
  onIMClientCreate?: Decorator<IMClient>;
  onRealtimeCreate?: Decorator<Realtime>;
}

export enum MessagePriority {
  LOW,
  NORMAL,
  HIGH,
}

export enum MessageStatus {
  NONE,
  SENDING,
  SENT,
  DELIVERED,
  FAILED,
}

export enum MessageQueryDirection {
  NEW_TO_OLD,
  OLD_TO_NEW,
}

export enum ErrorCode {
  CLOSE_NORMAL,
  CLOSE_ABNORMAL,
  APP_NOT_AVAILABLE,
  SIGNATURE_FAILED,
  INVALID_LOGIN,
  SESSION_REQUIRED,
  READ_TIMEOUT,
  LOGIN_TIMEOUT,
  FRAME_TOO_LONG,
  INVALID_ORIGIN,
  SESSION_CONFLICT,
  SESSION_TOKEN_EXPIRED,
  APP_QUOTA_EXCEEDED,
  MESSAGE_SENT_QUOTA_EXCEEDED,
  INTERNAL_ERROR,
  CONVERSATION_API_FAILED,
  CONVERSATION_SIGNATURE_FAILED,
  CONVERSATION_NOT_FOUND,
  CONVERSATION_FULL,
  CONVERSATION_REJECTED_BY_APP,
  CONVERSATION_UPDATE_FAILED,
  CONVERSATION_READ_ONLY,
  CONVERSATION_NOT_ALLOWED,
  CONVERSATION_UPDATE_REJECTED,
  CONVERSATION_QUERY_FAILED,
  CONVERSATION_LOG_FAILED,
  CONVERSATION_LOG_REJECTED,
  SYSTEM_CONVERSATION_REQUIRED,
  NORMAL_CONVERSATION_REQUIRED,
  CONVERSATION_BLACKLISTED,
  TRANSIENT_CONVERSATION_REQUIRED,
  CONVERSATION_MEMBERSHIP_REQUIRED,
  CONVERSATION_API_QUOTA_EXCEEDED,
  TEMPORARY_CONVERSATION_EXPIRED,
  INVALID_MESSAGING_TARGET,
  MESSAGE_REJECTED_BY_APP,
  MESSAGE_OWNERSHIP_REQUIRED,
  MESSAGE_NOT_FOUND,
  MESSAGE_UPDATE_REJECTED_BY_APP,
  MESSAGE_EDIT_DISABLED,
  MESSAGE_RECALL_DISABLED,

  OWNER_PROMOTION_NOT_ALLOWED,
}

export enum Event {
  DISCONNECT = 'disconnect',
  RECONNECT = 'reconnect',
  RETRY = 'retry',
  SCHEDULE = 'schedule',
  OFFLINE = 'offline',
  ONLINE = 'online',

  RECONNECT_ERROR = 'reconnecterror',
  UNREAD_MESSAGES_COUNT_UPDATE = 'unreadmessagescountupdate',
  CLOSE = 'close',
  CONFLICT = 'conflict',
  CONVERSATION_INFO_UPDATED = 'conversationinfoupdated',
  UNHANDLED_MESSAGE = 'unhandledmessage',

  INVITED = 'invited',
  KICKED = 'kicked',
  MEMBERS_JOINED = 'membersjoined',
  MEMBERS_LEFT = 'membersleft',
  MEMBER_INFO_UPDATED = 'memberinfoupdated',
  BLOCKED = 'blocked',
  UNBLOCKED = 'unblocked',
  MEMBERS_BLOCKED = 'membersblocked',
  MEMBERS_UNBLOCKED = 'membersunblocked',
  MUTED = 'muted',
  UNMUTED = 'unmuted',
  MEMBERS_MUTED = 'membersmuted',
  MEMBERS_UNMUTED = 'membersunmuted',
  MESSAGE = 'message',

  LAST_DELIVERED_AT_UPDATE = 'lastdeliveredatupdate',
  LAST_READ_AT_UPDATE = 'lastreadatupdate',
  MESSAGE_RECALL = 'messagerecall',
  MESSAGE_UPDATE = 'messageupdate',
  INFO_UPDATED = 'infoupdated',
}

declare interface ConnectionEvent {
  [Event.DISCONNECT]: void;
  [Event.RECONNECT]: void;
  // Tuples in rest parameters is not supported until TS 3.0
  // [Event.SCHEDULE]: [number, number];
  [Event.RETRY]: number;
  [Event.OFFLINE]: void;
  [Event.ONLINE]: void;
}

declare interface SharedEvent {
  [Event.INVITED]: { invitedBy: string };
  [Event.KICKED]: { kickedBy: string };
  [Event.MEMBERS_JOINED]: { members: string[]; invitedBy: string };
  [Event.MEMBERS_LEFT]: { members: string[]; kickedBy: string };
  [Event.MEMBER_INFO_UPDATED]: {
    member: string;
    memberInfo: ConversationMemberInfo;
    updatedBy: string;
  };
  [Event.BLOCKED]: { blockedBy: string };
  [Event.UNBLOCKED]: { unblockedBy: string };
  [Event.MEMBERS_BLOCKED]: { blockedBy: string; members: string[] };
  [Event.MEMBERS_UNBLOCKED]: { unblockedBy: string; members: string[] };
  [Event.MUTED]: { mutedBy: string };
  [Event.UNMUTED]: { unmutedBy: string };
  [Event.MEMBERS_MUTED]: { mutedBy: string; members: string[] };
  [Event.MEMBERS_UNMUTED]: { unmutedBy: string; members: string[] };
  [Event.MESSAGE]: Message;
  [Event.MESSAGE_RECALL]: Message;
  [Event.MESSAGE_UPDATE]: Message;
}

declare interface ClientEvent extends ConnectionEvent {
  [Event.RECONNECT_ERROR]: Error;
  [Event.UNREAD_MESSAGES_COUNT_UPDATE]: ConversationBase[];
  [Event.CLOSE]: { code: number; reason: string };
  [Event.CONFLICT]: { reason: string };
  [Event.CONVERSATION_INFO_UPDATED]: {
    attributes: { [key: string]: any };
    updatedBy: string;
  };
  [Event.UNHANDLED_MESSAGE]: any;
}

declare interface ConversationEvent extends SharedEvent {
  [Event.LAST_DELIVERED_AT_UPDATE]: void;
  [Event.LAST_READ_AT_UPDATE]: void;
  [Event.INFO_UPDATED]: {
    attributes: { [key: string]: any };
    updatedBy: string;
  };
}

declare interface OptionalContext {
  [Event.MESSAGE_RECALL]: [PatchReason];
  [Event.MESSAGE_UPDATE]: [PatchReason];
}

declare type EventContext<K> = K extends keyof OptionalContext
  ? OptionalContext[K]
  : [];

declare interface PatchReason {
  code: number;
  detail?: string;
}

export type TypedMessageDecorator = <T extends typeof TypedMessage>(
  target: T
) => T;

export function messageType(type: number): TypedMessageDecorator;
export function messageField(fields: string[]): TypedMessageDecorator;
export function IE10Compatible<T extends AVMessage>(
  target: MessageConstructor<T>
): MessageConstructor<T>;

export function setAdapters(adapters: Partial<Adapters>): void;

interface Debug {
  enable(): void;
  enable(namespaces: string): void;
  disable(): string;
}
export var debug: Debug;

export as namespace AV;
