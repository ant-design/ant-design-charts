import type { DepOptimizationMetadata, HmrContext, InlineConfig as ViteInlineConfig } from '../../compiled/vite';
import type { IConfig } from '../types';
interface IOpts {
    cwd: string;
    port?: number;
    host?: string;
    viteConfig: ViteInlineConfig;
    userConfig: IConfig;
    beforeMiddlewares?: any[];
    afterMiddlewares?: any[];
    /**
     * onDevCompileDone hook
     * @param args  includes 2 fields:
     *              - isFirstCompile:
     *                  it would be true after the dev server is started
     *                  it should be false before each HMR is sent
     *              - stats:
     *                  it would be DepOptimizationMetadata after the dev server is started
     *                  it would be the modules of HMR Context before each HMR is sent
     */
    onDevCompileDone?: (args: {
        time: number;
        isFirstCompile: boolean;
        stats: HmrContext['modules'] | DepOptimizationMetadata;
    }) => Promise<void> | void;
    onBeforeMiddleware?: Function;
}
export declare function createServer(opts: IOpts): Promise<any>;
export {};
