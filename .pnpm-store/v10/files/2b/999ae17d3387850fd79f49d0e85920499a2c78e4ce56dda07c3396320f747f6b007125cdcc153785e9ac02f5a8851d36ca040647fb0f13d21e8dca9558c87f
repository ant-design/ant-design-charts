export class SchemaParser {
  constructor(opts: {
    entryPath: string;
    basePath: string;
    unPkgHost?: string;
    mode?: "normal" | "worker";
    parseOptions?: {
      componentFramework?: "react" | "alipay-mini";
      [key: string]: any;
    };
  }) {}
  patch(filePaths: string[]): Promise<void>;
  load(): Promise<this>;
  parse(): Promise<any>;
  $$destroyWorker(): Promise<void>;
}

export class SchemaResolver {
  constructor(any, opts?: { mode?: "normal" | "worker" }) {}

  get componentList(): Promise<string[]>;
  get components(): Promise<Record<string, any>>;
  get getComponent(id: string): any;
  get functionList(): Promise<string[]>;
  get functions(): Promise<Record<string, any>>;
  get getFunction(id: string): any;
  $$destroyWorker(): Promise<void>;
}
