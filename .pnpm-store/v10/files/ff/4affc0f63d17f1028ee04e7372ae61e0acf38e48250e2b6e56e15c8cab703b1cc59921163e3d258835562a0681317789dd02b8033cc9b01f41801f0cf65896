import * as ts from 'typescript';
import { DeclarationOption, ParameterScope, TypeDocOptions, KeyToDeclaration, TypeDocAndTSOptions, TypeDocOptionMap } from './declaration';
import { Logger } from '../loggers';
import { Application } from '../../..';
import { NeverIfInternal } from '..';
export interface OptionsReader {
    priority: number;
    name: string;
    read(container: Options, logger: Logger): void;
}
export declare class Options {
    private _readers;
    private _declarations;
    private _values;
    private _compilerOptions;
    private _logger;
    constructor(logger: Logger);
    setLogger(logger: Logger): void;
    addDefaultDeclarations(): void;
    reset(): void;
    addReader(reader: OptionsReader): void;
    removeReaderByName(name: string): void;
    read(logger: Logger): void;
    addDeclaration<K extends keyof TypeDocOptions>(declaration: {
        name: K;
    } & KeyToDeclaration<K>): void;
    addDeclaration(declaration: NeverIfInternal<Readonly<DeclarationOption>>): void;
    addDeclarations(declarations: readonly DeclarationOption[]): void;
    removeDeclarationByName(name: string): void;
    getDeclaration(name: string): Readonly<DeclarationOption> | undefined;
    getDeclarationsByScope(scope: ParameterScope): (Readonly<import("./declaration").StringDeclarationOption> | Readonly<import("./declaration").NumberDeclarationOption> | Readonly<import("./declaration").BooleanDeclarationOption> | Readonly<import("./declaration").MixedDeclarationOption> | Readonly<import("./declaration").MapDeclarationOption<unknown>> | Readonly<import("./declaration").ArrayDeclarationOption>)[];
    isDefault(name: keyof TypeDocOptions): boolean;
    isDefault(name: NeverIfInternal<string>): boolean;
    getRawValues(): Partial<TypeDocOptions>;
    getValue<K extends keyof TypeDocOptions>(name: K): TypeDocOptions[K];
    getValue(name: NeverIfInternal<string>): unknown;
    getCompilerOptions(): ts.CompilerOptions;
    setValue<K extends keyof TypeDocAndTSOptions>(name: K, value: TypeDocAndTSOptions[K]): void;
    setValue(name: NeverIfInternal<string>, value: NeverIfInternal<unknown>): void;
    setValues(obj: NeverIfInternal<Partial<TypeDocAndTSOptions>>): void;
    private setOptionValueToDefault;
}
export declare function BindOption<K extends keyof TypeDocOptionMap>(name: K): <IK extends PropertyKey>(target: ({
    application: Application;
} | {
    options: Options;
}) & {
    [K2 in IK]: TypeDocOptions[K];
}, key: IK) => void;
export declare function BindOption(name: NeverIfInternal<string>): (target: {
    application: Application;
} | {
    options: Options;
}, key: PropertyKey) => void;
