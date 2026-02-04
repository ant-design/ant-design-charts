export type LogLevel = "INFO" | "WARN" | "ERROR";
export interface Options {
    readonly configFile: string;
    readonly extensions: ReadonlyArray<string>;
    readonly baseUrl: string | undefined;
    readonly silent: boolean;
    readonly logLevel: LogLevel;
    readonly logInfoToStdOut: boolean;
    readonly context: string | undefined;
    readonly colors: boolean;
    readonly mainFields: (string | string[])[];
    readonly references: string[] | undefined;
}
/**
 * Takes raw options from the webpack config,
 * validates them and adds defaults for missing options
 */
export declare function getOptions(rawOptions: {}): Options;
