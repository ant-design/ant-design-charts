import esbuild, { BuildContext, BuildResult } from '@umijs/bundler-utils/compiled/esbuild';
export declare function build(opts: {
    entryPoints: string[];
    watch?: {
        onRebuildSuccess({ result }: {
            result: esbuild.BuildResult;
        }): void;
    } | false;
    config: {
        alias?: any;
        cwd: string;
    };
    plugins?: esbuild.Plugin[];
    write?: boolean;
}): Promise<[BuildResult, BuildContext | undefined]>;
