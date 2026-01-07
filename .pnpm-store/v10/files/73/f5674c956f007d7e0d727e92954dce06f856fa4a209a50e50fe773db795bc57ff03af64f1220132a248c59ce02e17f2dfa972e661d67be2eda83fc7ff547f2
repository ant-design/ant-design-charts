import type { Config } from '@jest/types';
export declare type JSTransformer = 'esbuild' | 'swc' | 'ts-jest';
export type { Config };
/**
 * 创建一份jest 的配置
 * 增加了'esbuild' | 'swc' | 'ts-jest' 的 transform
 * 增加 css|less|sass|scss|stylus 的支持
 * 默认编译 所有的 node_modules
 * @param  {{jsTransformer?:JSTransformer;target?:'node'|'browser';jsTransformerOpts?:any;}} opts?
 * @returns Config
 */
export declare function createConfig(opts?: {
    /**
     * 转化 js 的配置
     * @type {'esbuild' | 'swc' | 'ts-jest'}
     */
    jsTransformer?: JSTransformer;
    /**
     * 运行环境，node 和 浏览器
     * @type {'node' | 'browser'}
     */
    target?: 'node' | 'browser';
    jsTransformerOpts?: any;
}): Config.InitialOptions;
