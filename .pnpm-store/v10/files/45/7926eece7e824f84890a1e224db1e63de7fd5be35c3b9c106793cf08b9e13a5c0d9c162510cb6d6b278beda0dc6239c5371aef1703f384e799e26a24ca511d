import { BuildParams } from '../../';
import * as binding from '../../../binding';
import { PluginContext } from '../../binding';
import { RunLoadersOptions, createParallelLoader } from '../../runLoaders';
export interface LessLoaderOpts {
  modifyVars?: Record<string, string>;
  globalVars?: Record<string, string>;
  math?:
    | 'always'
    | 'strict'
    | 'parens-division'
    | 'parens'
    | 'strict-legacy'
    | number;
  sourceMap?: any;
  /**
   * A plugin can be a file path string, or a file path string with a params object.
   * Notice! The file path should be a resolved path like require.resolve("less-plugin-clean-css"),
   * and the params object must be a plain json. We will require the plugin file to get the plugin content.
   * If the params object been accepted, that means, the required content will be treated as a factory class of Less.Plugin,
   * we will create a plugin instance with the params object, or else, the required content will be treated as a plugin instance.
   * We do this because the less loader runs in a worker pool for speed, and a less plugin instance can't be passed to worker directly.
   */
  plugins?: (string | [string, Record<string, any>])[];
}
type LessModule = {
  id: string;
  deps: Set<LessModule>;
  missing_deps: Set<LessModule>;
  ancestors: Set<LessModule>;
};
export declare class LessPlugin implements binding.JsHooks {
  name: string;
  parallelLoader: ReturnType<typeof createParallelLoader> | undefined;
  params: BuildParams & {
    resolveAlias: Record<string, string>;
  };
  extOpts: RunLoadersOptions;
  lessOptions: LessLoaderOpts;
  moduleGraph: Map<string, LessModule>;
  __isPatched: boolean;
  constructor(
    params: BuildParams & {
      resolveAlias: Record<string, string>;
    },
  );
  load: (
    _ctx: PluginContext,
    filePath: string,
  ) => Promise<
    | {
        content: string;
        type: 'css';
      }
    | undefined
  >;
  beforeRebuild: (_ctx: {}, paths: string[]) => Promise<string[]>;
  generateEnd: () => void;
}
export {};
