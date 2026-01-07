import webpack from '@umijs/bundler-webpack/compiled/webpack';
import { Dep } from '@umijs/mfsu/dist/dep/dep';
declare type IOpts = {
    depConfig: webpack.Configuration;
    cwd: string;
    tmpBase: string;
    mfName: string;
    shared: any;
    buildDepWithESBuild: boolean;
    depEsBuildConfig: any;
    externals: any[];
};
export declare class DepBuilderInWorker {
    completeFns: Function[];
    isBuilding: boolean;
    opts: IOpts;
    constructor(opts: IOpts);
    buildWithWebpack(opts: {
        onBuildComplete: Function;
        deps: Dep[];
    }): Promise<unknown>;
    buildWithESBuild(opts: {
        onBuildComplete: Function;
        deps: Dep[];
    }): Promise<void>;
    build(opts: {
        deps: Dep[];
    }): Promise<void>;
    onBuildComplete(fn: Function): void;
    writeMFFiles(opts: {
        deps: Dep[];
    }): Promise<void>;
    getWebpackConfig(opts: {
        deps: Dep[];
    }): webpack.Configuration;
}
export {};
