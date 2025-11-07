import { IBabelPlugin, IConfig } from './types';
interface IOpts {
    cwd: string;
    entry: Record<string, string>;
    config: IConfig;
    onBuildComplete?: Function;
    clean?: boolean;
    beforeBabelPlugins?: any[];
    beforeBabelPresets?: any[];
    extraBabelPlugins?: IBabelPlugin[];
    extraBabelPresets?: IBabelPlugin[];
    modifyViteConfig?: Function;
}
export declare function build(opts: IOpts): Promise<void>;
export {};
