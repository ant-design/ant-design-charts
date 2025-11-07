export enum IToolStatus {
  loading = 'loading',
  success = 'success',
  error = 'error',
  end = 'end',
}

export enum MessageTypeEnum {
  TEXT = 'text',
  IMAGE_URL = 'image_url',
  TOOL = 'tool',
  ERROR = 'error',
}

export enum Role {
  system = 'system',
  init = 'init',
  assistant = 'assistant',
  loading='loading',
  starter = 'starter',
  user = 'user',
  tool = 'tool',
  knowledge = 'knowledge',
}

export interface IParticipant {
  id: string;
  name: string;
  role: Role;
  avatar: string;
}

interface ImageURL {
  url: string;
  detail?: 'auto' | 'low' | 'high';
}

export interface ImageURLContentBlock {
  image_url: ImageURL;
  type: MessageTypeEnum.IMAGE_URL;
}

export interface TextContentBlock {
  text: string;
  type: MessageTypeEnum.TEXT;
}

export interface ITool {
  type: MessageTypeEnum.TOOL;
  extra: {
    source: string;
    pluginName: string;
    data: string;
    status: IToolStatus;
    template_id?: string;
  };
}

export interface IErrorMessage {
  type: MessageTypeEnum.ERROR;
  text: string;
}

export type MessageContent = ImageURLContentBlock | TextContentBlock | ITool | IErrorMessage;

// 兼容 oneapi 等发送消息的格式
export interface IContentMessage {
  role: string;
  content: MessageContent[];
}

export interface IToolExtraInfo {
  /** Source text for display purposes */
  source?: string;
  /** Plugin name */
  pluginName?: string;
  /** Knowledge base name */
  knowledgeName?: string;
  /** Workflow name */
  workflowName?: string;
  /** Database name */
  databaseName?: string;
  /** Individual execution status */
  status?: IToolStatus;
  /** Time taken for individual execution */
  timeCost?: string;
  /** Content for display */
  children?: React.ReactNode;
  /** Data used */
  data?: any;
}
