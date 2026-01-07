import { BundleOptions } from "./config";
export interface WebpackPluginInstance {
    apply: (compiler: any) => void;
    [key: string]: any;
}
export interface WebpackRuleSetRule {
    test?: RegExp | string;
    use?: any;
    loader?: string;
    options?: any;
    oneOf?: WebpackRuleSetRule[];
    type?: string;
    generator?: any;
    parser?: any;
    sideEffects?: boolean;
    exclude?: any;
    include?: any;
    resourceQuery?: any;
    issuer?: any;
}
export interface WebpackModule {
    rules?: (WebpackRuleSetRule | "...")[] | WebpackRuleSetRule[];
}
export interface WebpackResolve {
    alias?: Record<string, string | false | string[]> | Array<{
        name: string;
        alias: string | false | string[];
    }>;
    extensions?: string[];
    modules?: string[];
    mainFields?: string[];
    conditionNames?: string[];
    fallback?: Record<string, string | false | string[]>;
    plugins?: any[];
}
export interface WebpackOutput {
    path?: string;
    publicPath?: string | ((...args: any[]) => string);
    filename?: string | ((...args: any[]) => string);
    chunkFilename?: string | ((...args: any[]) => string);
    assetModuleFilename?: string;
    library?: any;
    libraryTarget?: string;
    globalObject?: string;
    clean?: boolean | {
        keep?: any;
    };
}
export interface WebpackOptimization {
    minimize?: boolean;
    minimizer?: any[];
    splitChunks?: any;
    runtimeChunk?: any;
    moduleIds?: string;
    chunkIds?: string;
    concatenateModules?: boolean;
}
export type WebpackEntry = string | string[] | Record<string, string | {
    import: string;
    library?: {
        type: string;
        name?: string | string[];
        export?: string | string[];
    };
} | string[]>;
export type WebpackExternals = string | RegExp | Record<string, string | string[] | object> | (string | RegExp | Record<string, string | string[] | object>)[];
export type WebpackTarget = string | string[];
export type WebpackDevTool = string | boolean;
export type WebpackStats = string | boolean | object;
export type WebpackPlugins = (WebpackPluginInstance | any)[];
export type WebpackMode = "development" | "production" | "none";
export interface WebpackConfig {
    name?: string;
    entry?: WebpackEntry;
    mode?: WebpackMode;
    module?: WebpackModule;
    resolve?: WebpackResolve;
    externals?: WebpackExternals;
    output?: WebpackOutput;
    target?: WebpackTarget;
    devtool?: WebpackDevTool;
    optimization?: WebpackOptimization;
    plugins?: WebpackPlugins;
    stats?: WebpackStats;
    webpackMode: true;
    devServer?: any;
}
export declare function compatOptionsFromWebpack(webpackConfig: WebpackConfig): BundleOptions;
