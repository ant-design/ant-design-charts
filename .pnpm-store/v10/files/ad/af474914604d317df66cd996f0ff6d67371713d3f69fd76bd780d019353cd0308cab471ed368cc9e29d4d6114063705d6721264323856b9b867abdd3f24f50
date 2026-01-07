import { BuildParams } from '../../';
import * as binding from '../../../binding';
import { RunLoadersOptions, createParallelLoader } from '../../runLoaders';
export declare class PostcssPlugin implements binding.JsHooks {
  name: string;
  params: BuildParams & {
    resolveAlias: Record<string, string>;
  };
  extOpts: RunLoadersOptions;
  parallelLoader: ReturnType<typeof createParallelLoader> | undefined;
  __isPatched: boolean;
  constructor(
    params: BuildParams & {
      resolveAlias: Record<string, string>;
    },
  );
  transform: (
    _ctx: binding.PluginContext,
    content: string,
    filename: string,
  ) => Promise<void | {
    content: string;
    type: 'css' | 'js';
  }>;
}
