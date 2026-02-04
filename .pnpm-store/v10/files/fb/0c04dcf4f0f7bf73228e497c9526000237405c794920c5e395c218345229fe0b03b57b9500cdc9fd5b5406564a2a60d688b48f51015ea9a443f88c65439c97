export interface PlatformInfo {
  name: string;
  version?: string;
  extra?: string;
  userAgent?: string;
}

export interface ProgressEvent {
  loaded: number;
  percent?: number;
  total?: number;
}
export interface UploadOptions {
  headers?: Record<string, string>;
  data?: Record<string, string>;
  onprogress?: (event: ProgressEvent) => void;
}
interface RequestOptions extends UploadOptions {
  method?:
    | "OPTIONS"
    | "GET"
    | "HEAD"
    | "POST"
    | "PUT"
    | "DELETE"
    | "TRACE"
    | "CONNECT";
}
interface Response {
  status?: number;
  ok?: boolean;
  headers?: object;
  data?: object;
}
export interface FormDataPart {
  field: string;
  data: any;
  name: string;
}

export declare type SyncStorage = {
  async?: false;
  getItem: (key: string) => string | null;
  setItem: (key: string, value: string) => any;
  removeItem: (key: string) => any;
  clear: () => any;
};
export declare type AsyncStorage = {
  async: true;
  getItem: (key: string) => Promise<string | null>;
  setItem: (key: string, value: string) => Promise<any>;
  removeItem: (key: string) => Promise<any>;
  clear: () => Promise<any>;
};
export declare type Storage = SyncStorage | AsyncStorage;

interface WebSocket {
  addEventListener(
    event: string,
    handler: (...args: any[]) => any,
    ...args: any[]
  ): any;
  removeEventListener(
    event: string,
    handler: (...args: any[]) => any,
    ...args: any[]
  ): any;
  send(data: string | ArrayBuffer): any;
  close(): any;
}

export interface AuthData {
  [key: string]: any;
}
export interface AuthInfo {
  authData: AuthData;
  provider: string;
  platform?: string;
}
export interface Adapters {
  platformInfo: PlatformInfo;
  request: (url: string, options?: RequestOptions) => Promise<Response>;
  upload: (
    url: string,
    file: FormDataPart,
    options?: UploadOptions
  ) => Promise<Response>;
  storage: Storage;
  WebSocket: {
    new (url: string, protocols?: string | string[]): WebSocket;
  };
  getAuthInfo: (...args: any[]) => Promise<AuthInfo>;
}
