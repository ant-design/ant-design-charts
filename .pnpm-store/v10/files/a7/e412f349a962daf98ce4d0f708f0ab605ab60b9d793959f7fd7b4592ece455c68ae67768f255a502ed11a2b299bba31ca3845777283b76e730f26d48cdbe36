import Config from '@umijs/bundler-webpack/compiled/webpack-5-chain';
import type { Env, IConfig } from '../types';
interface IOpts {
    config: Config;
    userConfig: IConfig;
    cwd: string;
    env: Env;
    host?: string;
    port?: number;
}
export declare function resolveDefine(opts: IOpts): {
    'process.env': Record<string, any>;
    'process.env.SSR_MANIFEST': string;
};
export declare function addDefinePlugin(opts: IOpts): Promise<void>;
export {};
