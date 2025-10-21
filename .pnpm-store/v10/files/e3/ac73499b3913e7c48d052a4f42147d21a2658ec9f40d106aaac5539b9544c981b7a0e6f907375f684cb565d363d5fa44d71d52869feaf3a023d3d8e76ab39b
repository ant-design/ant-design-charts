import { prompts } from '@umijs/utils';
import { IApi } from '../../types';
export interface IArgsBase {
    fallback?: boolean;
    eject?: boolean;
    _: string[];
}
export interface IArgsPage extends IArgsBase {
    dir?: boolean;
}
export interface IArgsComponent extends IArgsBase {
}
export declare function checkStatus({ pkg }: {
    pkg: any;
}): {
    needInstall: boolean;
    needConfigPlugins: boolean;
};
export declare class GeneratorHelper {
    readonly api: IApi;
    private readonly needConfigUmiPlugin;
    private readonly needInstallUmiPlugin;
    constructor(api: IApi);
    setUmirc(key: string, val: any): void;
    appendInternalPlugin(pluginPath: string): void;
    addDevDeps(deps: Record<string, string>): void;
    addScript(name: string, cmd: string): void;
    addScripts(scripts: {
        [script: string]: string;
    }): void;
    private addScriptToPkg;
    appendGitIgnore(patterns: string[]): void;
    installDeps(): void;
    ensureVariableWithQuestion<V>(v: V, question: Omit<prompts.PromptObject<'variable'>, 'name'>): Promise<any>;
}
export declare function getUmiJsPlugin(): any;
export declare function promptsExitWhenCancel<T extends string = string>(questions: prompts.PromptObject<T> | Array<prompts.PromptObject<T>>, options?: Pick<prompts.Options, 'onSubmit'>): Promise<prompts.Answers<T>>;
export declare function trim(s?: string): string;
export interface IFile {
    from: string;
    fromFallback: string;
    to: string;
    exts?: string[];
}
export declare enum ETempDir {
    Page = "page",
    Component = "component"
}
export declare function processGenerateFiles({ filesMap, baseDir, presetArgs, templateVars, }: {
    filesMap: IFile[];
    baseDir: string;
    presetArgs?: {
        fallback?: boolean;
    };
    templateVars: Record<string, any>;
}): Promise<void>;
export declare function tryEject(dir: ETempDir, baseDir: string): Promise<void>;
