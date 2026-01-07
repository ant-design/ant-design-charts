import { IBabelPlugin, IConfig } from './types';
interface IOpts {
    beforeBabelPlugins?: any[];
    beforeBabelPresets?: any[];
    afterMiddlewares?: any[];
    beforeMiddlewares?: any[];
    onDevCompileDone?: any;
    port?: number;
    host?: string;
    cwd: string;
    config: IConfig;
    entry: Record<string, string>;
    extraBabelPlugins?: IBabelPlugin[];
    extraBabelPresets?: IBabelPlugin[];
    modifyViteConfig?: Function;
    onBeforeMiddleware?: Function;
}
export declare function dev(opts: IOpts): Promise<void>;
export {};
