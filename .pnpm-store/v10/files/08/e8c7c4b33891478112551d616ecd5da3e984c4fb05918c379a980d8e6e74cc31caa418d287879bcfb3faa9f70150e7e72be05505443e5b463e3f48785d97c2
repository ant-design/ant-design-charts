import { ConfigComplete, DefineEnv, RustifiedEnv } from "./config";
import { Issue } from "./issue";
export declare class ModuleBuildError extends Error {
    name: string;
}
export interface ResultWithIssues {
    issues: Issue[];
}
export declare function processIssues(result: ResultWithIssues, throwIssue: boolean, logErrors: boolean): void;
export declare function isWellKnownError(issue: Issue): boolean;
export declare function rustifyEnv(env: Record<string, string>): RustifiedEnv;
interface DefineEnvOptions {
    config: ConfigComplete;
    dev: boolean;
    optionDefineEnv?: DefineEnv;
}
export declare function createDefineEnv(options: DefineEnvOptions): DefineEnv;
type AnyFunc<T> = (this: T, ...args: any) => any;
export declare function debounce<T, F extends AnyFunc<T>>(fn: F, ms: number, maxWait?: number): (this: T, ...passedArgs: Parameters<F>) => void;
export {};
