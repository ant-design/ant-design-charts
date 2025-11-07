import type { ParserConfig } from '@swc/core';
import { IDumiTechStack } from '../types';
export { IDumiTechStack, IDumiTechStackOnBlockLoadArgs, IDumiTechStackOnBlockLoadResult, IDumiTechStackRuntimeOpts, } from '../types';
/**
 * for frameworks like vue , we need to extract the JS fragments in their scripts
 * @param htmlLike HTML, vue and other html-like files are available
 * @returns js/ts code
 */
export declare function extractScript(htmlLike: string): string;
export interface IWrapDemoWithFnOptions {
    filename: string;
    parserConfig: ParserConfig;
}
/**
 * Use swc to convert es module into async function.
 * More transform process detail, refer to:
 * https://github.com/umijs/dumi/blob/master/crates/swc_plugin_react_demo/src/lib.rs#L126
 */
export declare function wrapDemoWithFn(code: string, opts: IWrapDemoWithFnOptions): string;
export type IDefineTechStackOptions = IDumiTechStack;
/**
 * Define a tech stack
 * @param options techstack options
 * @returns function that returns {@link IDumiTechStack}, can be used to register a techstack
 *
 * @example
 * const ReactTechStack = defineTechStack({
 *   name: 'jsx',
 *   isSupported(_, lang) {
 *     return ['jsx', 'tsx'].includes(lang);
 *   },
 *   transformCode() {
 *     // ...
 *     return '';
 *   },
 * });
 *
 * api.registerTechStack(() => ReactTechStack);
 */
export declare function defineTechStack(options: IDefineTechStackOptions): IDumiTechStack;
