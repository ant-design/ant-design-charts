import type { EmbedOptions, OpenOptions } from './interfaces';
export declare type ParamOptions = Omit<OpenOptions & EmbedOptions, 'origin' | 'newWindow' | 'height' | 'width'>;
/**
 * URL parameter names supported by the StackBlitz instance.
 *
 * A couple notes:
 *
 * - Names don't always match the keys in EmbedOptions / OpenOptions.
 *   For example, options use `openFile` but the expected param is `file`.
 * - While updated instances perform a case-insensitive lookup for query
 *   parameters, some Enterprise Edition deployments may not, and we need to
 *   use specific (and sometimes inconsistent) casing; see for example
 *   'hidedevtools' vs 'hideNavigation'.
 */
declare type ParamName = '_test' | 'clicktoload' | 'ctl' | 'devtoolsheight' | 'embed' | 'file' | 'hidedevtools' | 'hideExplorer' | 'hideNavigation' | 'initialpath' | 'showSidebar' | 'sidebarView' | 'startScript' | 'terminalHeight' | 'theme' | 'view' | 'zenMode' | 'orgName' | 'orgProvider' | 'corp';
export declare const generators: Record<keyof ParamOptions, (value: any) => string>;
export declare function buildParams(options?: ParamOptions): string;
export declare function trueParam(name: ParamName, value?: boolean): string;
export declare function booleanParam(name: ParamName, value?: boolean): string;
export declare function percentParam(name: ParamName, value?: number): string;
export declare function enumParam(name: ParamName, value?: string, allowList?: readonly string[]): string;
export declare function stringParams(name: ParamName, value?: string | string[]): string;
export {};
