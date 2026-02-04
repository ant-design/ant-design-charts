import type { InlineConfig as ViteInlineConfig } from '../../compiled/vite';
import { Env, IBabelPlugin, IConfig } from '../types';
interface IOpts {
    cwd: string;
    env: Env;
    entry: Record<string, string>;
    userConfig: IConfig;
    modifyViteConfig?: Function;
    extraBabelPlugins?: IBabelPlugin[];
    extraBabelPresets?: IBabelPlugin[];
}
export declare function getConfig(opts: IOpts): Promise<ViteInlineConfig>;
export {};
