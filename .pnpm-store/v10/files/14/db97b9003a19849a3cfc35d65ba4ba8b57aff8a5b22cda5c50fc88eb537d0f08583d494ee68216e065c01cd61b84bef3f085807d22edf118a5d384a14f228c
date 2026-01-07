/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {Config} from '@jest/types';

/**
 * Returns a function that can be used to generate cache keys based on source code of provided files and provided values.
 *
 * @param files - Array of absolute paths to files whose code should be accounted for when generating cache key
 * @param values - Array of string values that should be accounted for when generating cache key
 * @param length - Length of the resulting key. The default is `32`, or `16` on Windows.
 * @returns A function that can be used to generate cache keys.
 */
declare function createCacheKey(
  files?: Array<string>,
  values?: Array<string>,
  length?: number,
): GetCacheKeyFunction;
export default createCacheKey;

declare type GetCacheKeyFunction = OldGetCacheKeyFunction &
  NewGetCacheKeyFunction;

declare type NewCacheKeyOptions = {
  config: Config.ProjectConfig;
  configString: string;
  instrument: boolean;
};

declare type NewGetCacheKeyFunction = (
  sourceText: string,
  sourcePath: string,
  options: NewCacheKeyOptions,
) => string;

declare type OldCacheKeyOptions = {
  config: Config.ProjectConfig;
  instrument: boolean;
};

declare type OldGetCacheKeyFunction = (
  fileData: string,
  filePath: string,
  configStr: string,
  options: OldCacheKeyOptions,
) => string;

export {};
