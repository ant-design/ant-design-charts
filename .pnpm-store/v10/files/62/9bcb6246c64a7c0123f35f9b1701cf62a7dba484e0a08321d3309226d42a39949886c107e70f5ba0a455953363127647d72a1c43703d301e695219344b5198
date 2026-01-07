import type { CanvasContext } from './dom';
import { GlobalRuntime } from './global-runtime';
import type { RenderingPlugin } from './services';
import { ClipSpaceNearZ, RendererConfig } from './types';
export interface RendererPlugin {
    name: string;
    context: CanvasContext;
    init: (runtime: GlobalRuntime) => void;
    destroy: (runtime: GlobalRuntime) => void;
}
export declare abstract class AbstractRendererPlugin<T = any> implements RendererPlugin {
    context: CanvasContext & T;
    protected plugins: any[];
    protected addRenderingPlugin(plugin: RenderingPlugin): void;
    protected removeAllRenderingPlugins(): void;
    abstract name: string;
    abstract init(runtime: GlobalRuntime): void;
    abstract destroy(runtime: GlobalRuntime): void;
}
export interface IRenderer {
    /**
     * The near/far clip planes correspond to a normalized device coordinate Z range of [0, 1],
     * which matches WebGPU/Vulkan/DirectX/Metal's clip volume, while [-1, 1] matches WebGL/OpenGL's clip volume.
     */
    clipSpaceNearZ: ClipSpaceNearZ;
    getConfig: () => RendererConfig;
    /**
     * register plugin at runtime
     */
    registerPlugin: (plugin: RendererPlugin) => void;
    /**
     * unregister plugin at runtime
     */
    unregisterPlugin: (plugin: RendererPlugin) => void;
    /**
     * get plugin by name
     */
    getPlugin: (name: string) => RendererPlugin;
    /**
     * return all registered plugins
     */
    getPlugins: () => RendererPlugin[];
}
export declare class AbstractRenderer implements IRenderer {
    clipSpaceNearZ: ClipSpaceNearZ;
    private plugins;
    private config;
    constructor(config?: Partial<RendererConfig>);
    registerPlugin(plugin: RendererPlugin): void;
    unregisterPlugin(plugin: RendererPlugin): void;
    getPlugins(): RendererPlugin[];
    getPlugin(name: string): RendererPlugin;
    getConfig(): RendererConfig;
    setConfig(config: Partial<RendererConfig>): void;
}
//# sourceMappingURL=AbstractRenderer.d.ts.map