import { BaseAtomAssetsParser, IBaseAtomAssetsParserParams, ILanguageMetaParser } from './BaseParser';
/**
 * Only expose these methods to avoid all properties being proxied
 * @param ClassConstructor The Class to be processed
 * @param publicMethods accessible Class methods
 * @returns processed Class
 */
export declare function createExposedClass<T extends {
    new (...args: ConstructorParameters<T>): InstanceType<T>;
}>(ClassConstructor: T, publicMethods?: string[]): {
    new (...params: ConstructorParameters<T>): {};
};
/**
 * Create Class that can execute across threads
 * @param filename Child thread running script path
 * @param ClassConstructor Class that require remote execution
 * @param opts
 * @returns Remote Class, all its methods are asynchronous
 */
export declare function createRemoteClass<T extends {
    new (...args: ConstructorParameters<T>): InstanceType<T>;
}>(filename: string, ClassConstructor: T, opts?: {
    destroyMethod: string;
    publicMethods?: string[];
}): T;
interface ICreateApiParserOptions<S, C> {
    /**
     * The full file name (absolute path) of the file where `parseWorker` is located
     */
    filename: string;
    /**
     * Parsing class working in worker_thead
     */
    worker: S;
    /**
     * Main thread side work, mainly to detect file changes
     */
    parseOptions?: C;
}
export interface IBaseApiParserOptions {
    entryFile: string;
    resolveDir: string;
}
/**
 * Can be used to override apiParser
 * @param options
 * @returns A function that returns a Parser instance
 * @example
 * ```ts
 * interface ParserOptions extends BaseApiParserOptions  {
 *    // other props...
 * }
 * const Parser = createApiParser({
 *    filename: __filename,
 *    worker: (class {
 *      constructor(opts: ParserOptions) {}
 *      patch () {}
 *      async parse () {
 *        return {
 *          components: {},
 *          functions: {}
 *        };
 *      }
 *      async destroy () {}
 *    }),
 *    parserOptions: {
 *      handleWatcher(watcher, { parse, patch }) {
 *        return watcher.on('all', (ev, file) => {
 *          // You can perform patch and parse operations based on file changes.
 *          // patch will transfer the corresponding file to the parseWorker,
 *          // and parse will instruct the parseWorker to parse according to updated files.
 *        });
 *      },
 *    },
 * });
 * ```
 */
export declare function createApiParser<P extends new (...args: ConstructorParameters<P>) => InstanceType<P> & ILanguageMetaParser>(options: ICreateApiParserOptions<P, Partial<IBaseAtomAssetsParserParams<P>>>): (...args: ConstructorParameters<P>) => BaseAtomAssetsParser<ILanguageMetaParser>;
export {};
