import { Config } from "@jest/types";

//#region src/index.d.ts

type OldCacheKeyOptions = {
  config: Config.ProjectConfig;
  instrument: boolean;
};
type NewCacheKeyOptions = {
  config: Config.ProjectConfig;
  configString: string;
  instrument: boolean;
};
type OldGetCacheKeyFunction = (fileData: string, filePath: string, configStr: string, options: OldCacheKeyOptions) => string;
type NewGetCacheKeyFunction = (sourceText: string, sourcePath: string, options: NewCacheKeyOptions) => string;
type GetCacheKeyFunction = OldGetCacheKeyFunction & NewGetCacheKeyFunction;
/**
 * Returns a function that can be used to generate cache keys based on source code of provided files and provided values.
 *
 * @param files - Array of absolute paths to files whose code should be accounted for when generating cache key
 * @param values - Array of string values that should be accounted for when generating cache key
 * @param length - Length of the resulting key. The default is `32`, or `16` on Windows.
 * @returns A function that can be used to generate cache keys.
 */
declare function createCacheKey(files?: Array<string>, values?: Array<string>, length?: number): GetCacheKeyFunction;
//#endregion
export { createCacheKey as default };