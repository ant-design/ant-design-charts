/// <reference types="node" />
import type { Range, RangeOptions } from '@umijs/utils/compiled/semver';
import Cache from 'file-system-cache';
import type { RunLoaderOption as InternalRunLoaderOption, RunLoaderResult } from '../compiled/loader-runner';
export type * from '../compiled/loader-runner';
export { getContext } from '../compiled/loader-runner';
/**
 * get route path from file-system path
 */
export declare function getFileIdFromFsPath(fsPath: string): string;
/**
 * get range lines of markdown file
 */
export declare const getFileRangeLines: (content: string, range: string) => string;
/**
 * get file content by regular expression
 * @param content   source file content
 * @param regexp    regular expression string
 * @param filePath  source file path
 */
export declare const getFileContentByRegExp: (content: string, regexp: string, filePath: string) => string;
/**
 * parse frontmatter from code string,
 * also supports html/xml comments
 */
export declare function parseCodeFrontmatter(raw: string): {
    code: string;
    frontmatter: Record<string, any> | null;
};
declare const caches: Record<string, ReturnType<typeof Cache>>;
export declare function _setFSCacheDir(dir: string): void;
export declare function getCache(ns: string): (typeof caches)['0'];
/**
 * try to get father config
 */
export declare function tryFatherBuildConfigs(cwd: string): Promise<any[]>;
/**
 * get root dir for monorepo project
 */
export declare function getProjectRoot(cwd: string): string;
/**
 *
 * transform component into webpack chunkName
 * @export
 * @param {string} component component path
 * @param {string} [cwdPath] current root path
 * @return {*}  {string}
 */
export declare function componentToChunkName(component: string, cwdPath?: string): string;
export declare function generateMetaChunkName(path: string, cwd: string, locales?: string[]): string;
/**
 * generate hash for string
 */
export declare function getContentHash(content: string, length?: number): string;
export type RunLoaderOption = Partial<InternalRunLoaderOption>;
export declare function runLoaders(options: RunLoaderOption): Promise<RunLoaderResult>;
export declare function runLoaders(options: RunLoaderOption, callback: undefined): Promise<RunLoaderResult>;
export declare function runLoaders(options: RunLoaderOption, callback: (err: NodeJS.ErrnoException | null, result: RunLoaderResult) => any): void;
/**
 * check if version is in range
 */
export declare function isVersionInRange(version: string, range: string | Range, options?: RangeOptions): boolean;
