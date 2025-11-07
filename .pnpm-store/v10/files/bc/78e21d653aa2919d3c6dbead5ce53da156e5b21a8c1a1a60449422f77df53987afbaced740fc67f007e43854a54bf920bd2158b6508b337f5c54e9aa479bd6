import { Application } from './application';
import { TypeDocAndTSOptions } from './utils/options/declaration';
export declare const enum ExitCode {
    OptionError = 1,
    NoInputFiles = 2,
    NoOutput = 3,
    CompileError = 4,
    OutputError = 5
}
export declare class CliApplication extends Application {
    out: string;
    json: string;
    version: boolean;
    help: boolean;
    bootstrap(options?: Partial<TypeDocAndTSOptions>): {
        hasErrors: boolean;
        inputFiles: string[];
    };
}
