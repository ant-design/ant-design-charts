import { type Options } from 'sass';
import * as binding from '../binding';
import { LessLoaderOpts } from './plugins/less';
type Config = binding.BuildParams['config'] & {
  plugins?: binding.BuildParams['plugins'];
  less?: LessLoaderOpts;
  sass?: Options<'async'> & {
    resources: string[];
  };
  postcss?: boolean;
  forkTSChecker?: boolean;
};
type BuildParams = {
  config: Config;
  root: binding.BuildParams['root'];
  watch: binding.BuildParams['watch'];
};
export { BuildParams };
export declare function build(params: BuildParams): Promise<void>;
