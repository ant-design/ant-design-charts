import { CompilerOptions } from 'typescript';
import { IgnoredTsOptionKeys } from './sources/typescript';
export declare type TypeDocOptions = {
    [K in keyof TypeDocOptionMap]: TypeDocOptionMap[K] extends Record<string, infer U> ? Exclude<U, string> | keyof TypeDocOptionMap[K] : TypeDocOptionMap[K];
};
declare type KnownKeys<T> = {
    [K in keyof T]: string extends K ? never : number extends K ? never : K;
} extends {
    [_ in keyof T]: infer U;
} ? U : never;
export declare type TypeDocAndTSOptions = TypeDocOptions & Pick<CompilerOptions, Exclude<KnownKeys<CompilerOptions>, IgnoredTsOptionKeys>>;
export declare enum SourceFileMode {
    File = 0,
    Modules = 1
}
export interface TypeDocOptionMap {
    options: string;
    tsconfig: string;
    inputFiles: string[];
    mode: {
        file: SourceFileMode.File;
        modules: SourceFileMode.Modules;
    };
    includeDeclarations: boolean;
    entryPoint: string;
    exclude: string[];
    externalPattern: string[];
    excludeExternals: boolean;
    excludeNotExported: boolean;
    excludePrivate: boolean;
    excludeProtected: boolean;
    excludeNotDocumented: boolean;
    ignoreCompilerErrors: boolean;
    disableSources: boolean;
    includes: string;
    media: string;
    out: string;
    json: string;
    theme: string;
    name: string;
    includeVersion: boolean;
    excludeTags: string[];
    readme: string;
    defaultCategory: string;
    categoryOrder: string[];
    categorizeByGroup: boolean;
    gitRevision: string;
    gitRemote: string;
    gaID: string;
    gaSite: string;
    hideGenerator: boolean;
    toc: string[];
    disableOutputCheck: boolean;
    help: boolean;
    version: boolean;
    plugin: string[];
    logger: unknown;
    listInvalidSymbolLinks: boolean;
}
export declare type KeyToDeclaration<K extends keyof TypeDocOptionMap> = TypeDocOptionMap[K] extends boolean ? BooleanDeclarationOption : TypeDocOptionMap[K] extends string ? StringDeclarationOption : TypeDocOptionMap[K] extends number ? NumberDeclarationOption : TypeDocOptionMap[K] extends string[] ? ArrayDeclarationOption : unknown extends TypeDocOptionMap[K] ? MixedDeclarationOption : TypeDocOptionMap[K] extends Record<string | number, infer U> ? MapDeclarationOption<U> : never;
export declare enum ParameterHint {
    File = 0,
    Directory = 1
}
export declare enum ParameterType {
    String = 0,
    Number = 1,
    Boolean = 2,
    Map = 3,
    Mixed = 4,
    Array = 5
}
export declare enum ParameterScope {
    TypeDoc = 0,
    TypeScript = 1
}
export interface DeclarationOptionBase {
    name: string;
    short?: string;
    help: string;
    type?: ParameterType;
    scope?: ParameterScope;
}
export interface StringDeclarationOption extends DeclarationOptionBase {
    type?: ParameterType.String;
    defaultValue?: string;
    hint?: ParameterHint;
}
export interface NumberDeclarationOption extends DeclarationOptionBase {
    type: ParameterType.Number;
    minValue?: number;
    maxValue?: number;
    defaultValue?: number;
}
export interface BooleanDeclarationOption extends DeclarationOptionBase {
    type: ParameterType.Boolean;
    defaultValue?: boolean;
}
export interface ArrayDeclarationOption extends DeclarationOptionBase {
    type: ParameterType.Array;
    defaultValue?: string[];
}
export interface MixedDeclarationOption extends DeclarationOptionBase {
    type: ParameterType.Mixed;
    defaultValue?: unknown;
}
export interface MapDeclarationOption<T> extends DeclarationOptionBase {
    type: ParameterType.Map;
    map: Map<string, T> | Record<string | number, T>;
    defaultValue: T;
    mapError?: string;
}
export declare type DeclarationOption = StringDeclarationOption | NumberDeclarationOption | BooleanDeclarationOption | MixedDeclarationOption | MapDeclarationOption<unknown> | ArrayDeclarationOption;
export declare type DeclarationOptionToOptionType<T extends DeclarationOption> = T extends StringDeclarationOption ? string : T extends NumberDeclarationOption ? number : T extends BooleanDeclarationOption ? boolean : T extends MixedDeclarationOption ? unknown : T extends MapDeclarationOption<infer U> ? U : T extends ArrayDeclarationOption ? string[] : never;
export declare function convert<T extends DeclarationOption>(value: unknown, option: T): DeclarationOptionToOptionType<T>;
export {};
