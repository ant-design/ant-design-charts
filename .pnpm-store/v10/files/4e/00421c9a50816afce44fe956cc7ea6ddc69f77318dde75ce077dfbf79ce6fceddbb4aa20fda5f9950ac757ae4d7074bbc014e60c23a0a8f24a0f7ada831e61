import { type Options } from 'sass';
import { BuildParams } from '../../';
import * as binding from '../../../binding';
import { RunLoadersOptions } from '../../runLoaders';
type SassModule = {
  id: string;
  deps: Set<SassModule>;
  missing_deps: Set<SassModule>;
  ancestors: Set<SassModule>;
};
export declare class SassPlugin implements binding.JsHooks {
  name: string;
  params: BuildParams & {
    resolveAlias: Record<string, string>;
  };
  sassOptions: Options<'async'>;
  extOpts: RunLoadersOptions;
  moduleGraph: Map<string, SassModule>;
  __isPatched: boolean;
  constructor(
    params: BuildParams & {
      resolveAlias: Record<string, string>;
    },
  );
  load: (
    _ctx: binding.PluginContext,
    filePath: string,
  ) => Promise<
    | {
        content: string;
        type: 'css';
      }
    | undefined
  >;
  beforeRebuild: (_ctx: {}, paths: string[]) => Promise<string[]>;
}
export {};
