import { NapiIssue } from "./binding";
import { ConfigComplete, DefineEnv, RustifiedEnv } from "./types";
export declare class ModuleBuildError extends Error {
    name: string;
}
export declare function processIssues(result: TurbopackResult, throwIssue: boolean, logErrors: boolean): void;
export declare function isWellKnownError(issue: NapiIssue): boolean;
export declare function rustifyEnv(env: Record<string, string>): RustifiedEnv;
interface DefineEnvOptions {
    config: ConfigComplete;
    dev: boolean;
    optionDefineEnv?: DefineEnv;
}
export declare function createDefineEnv(options: DefineEnvOptions): DefineEnv;
type AnyFunc<T> = (this: T, ...args: any) => any;
export declare function debounce<T, F extends AnyFunc<T>>(fn: F, ms: number, maxWait?: number): (this: T, ...passedArgs: Parameters<F>) => void;
export declare function blockStdout(): void;
export declare function getPackPath(): string;
export {};
