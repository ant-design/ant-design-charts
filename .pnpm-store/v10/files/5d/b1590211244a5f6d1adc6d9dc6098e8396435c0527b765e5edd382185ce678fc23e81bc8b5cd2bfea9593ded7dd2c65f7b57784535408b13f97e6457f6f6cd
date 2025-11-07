import { Converter } from './converter/index';
import { Renderer } from './output/renderer';
import { Serializer } from './serialization';
import { ProjectReflection } from './models/index';
import { Logger, PluginHost } from './utils/index';
import { AbstractComponent, ChildableComponent } from './utils/component';
import { Options } from './utils';
import { TypeDocAndTSOptions } from './utils/options/declaration';
export declare class Application extends ChildableComponent<Application, AbstractComponent<Application>> {
    converter: Converter;
    renderer: Renderer;
    serializer: Serializer;
    logger: Logger;
    options: Options;
    plugins: PluginHost;
    loggerType: string | Function;
    ignoreCompilerErrors: boolean;
    exclude: Array<string>;
    inputFiles: string[];
    optionsFile: string;
    project: string;
    static VERSION: string;
    constructor();
    bootstrap(options?: Partial<TypeDocAndTSOptions>): {
        hasErrors: boolean;
        inputFiles: string[];
    };
    get application(): Application;
    getTypeScriptPath(): string;
    getTypeScriptVersion(): string;
    convert(src: string[]): ProjectReflection | undefined;
    generateDocs(src: string[], out: string): boolean;
    generateDocs(project: ProjectReflection, out: string): boolean;
    generateJson(src: string[], out: string): boolean;
    generateJson(project: ProjectReflection, out: string): boolean;
    expandInputFiles(inputFiles?: string[]): string[];
    toString(): string;
}
