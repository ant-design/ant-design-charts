export type Plugin<T extends Record<string, any>> = {
    [k in keyof T]?: Parameters<T[k]['on']>[0];
} & {
    name: string;
    version?: string;
};
export declare class PluginSystem<T extends Record<string, any>> {
    lifecycle: T;
    lifecycleKeys: Array<keyof T>;
    registerPlugins: Record<string, Plugin<T>>;
    constructor(lifecycle: T);
    applyPlugin(plugin: Plugin<T>): void;
    removePlugin(pluginName: string): void;
    inherit<T extends PluginSystem<any>>({ lifecycle, registerPlugins, }: T): void;
}
