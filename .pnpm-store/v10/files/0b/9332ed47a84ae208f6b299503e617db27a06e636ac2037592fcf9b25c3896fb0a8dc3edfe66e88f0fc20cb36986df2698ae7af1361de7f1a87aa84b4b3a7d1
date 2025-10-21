declare let LOG_TYPES: {
    error: {
        label: string;
        level: "error";
        color: ColorFn;
    };
    warn: {
        label: string;
        level: "warn";
        color: ColorFn;
    };
    info: {
        label: string;
        level: "info";
        color: ColorFn;
    };
    start: {
        label: string;
        level: "info";
        color: ColorFn;
    };
    ready: {
        label: string;
        level: "info";
        color: ColorFn;
    };
    success: {
        label: string;
        level: "info";
        color: ColorFn;
    };
    log: {
        level: "log";
    };
    debug: {
        label: string;
        level: "verbose";
        color: ColorFn;
    };
};

type LogLevel = 'error' | 'warn' | 'info' | 'log' | 'verbose';
type ColorFn = (input: string | number | null | undefined | [label: string, style: string]) => string[];
type LogMessage = unknown;
interface LogType {
    label?: string;
    level: LogLevel;
    color?: ColorFn;
}
type LogFunction = (message?: LogMessage, ...args: any[]) => void;
type Labels = {
    [key in Exclude<LogMethods, 'log'>]?: string;
};
interface Options {
    level?: LogLevel;
    labels?: Labels;
}
type LogMethods = keyof typeof LOG_TYPES;
type Logger = Record<LogMethods, LogFunction> & {
    greet: (message: string) => void;
    level: LogLevel;
    labels: Labels;
    override: (customLogger: Partial<Record<LogMethods, LogFunction>>) => void;
};

declare function createLogger(options?: Options): Logger;

declare let logger: Logger;

export { type LogFunction, type LogLevel, type LogMessage, type LogType, type Logger, type Options, createLogger, logger };
