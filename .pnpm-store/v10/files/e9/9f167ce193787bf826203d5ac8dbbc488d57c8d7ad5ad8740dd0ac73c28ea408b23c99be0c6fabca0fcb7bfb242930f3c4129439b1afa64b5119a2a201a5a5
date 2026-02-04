import type { BasePlugin } from '../plugins/base-plugin';
import { ExtensionController } from '../registry/extension';
import type { CustomPluginOption, PluginOptions } from '../spec/plugin';
import type { RuntimeContext } from './types';
export declare class PluginController extends ExtensionController<BasePlugin<CustomPluginOption>> {
    category: "plugin";
    constructor(context: RuntimeContext);
    setPlugins(plugins: PluginOptions): void;
    getPluginInstance(key: string): BasePlugin<CustomPluginOption> | undefined;
}
