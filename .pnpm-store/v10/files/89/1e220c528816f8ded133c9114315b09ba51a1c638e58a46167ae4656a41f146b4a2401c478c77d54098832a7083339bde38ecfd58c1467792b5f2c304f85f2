import type { ICamera } from '../camera';
import type { DisplayObject } from '../display-objects/DisplayObject';
import type { RenderingPlugin, RenderingPluginContext } from '../services/RenderingService';
export interface CullingStrategyContribution {
    isVisible: (camera: ICamera, object: DisplayObject) => boolean;
}
/**
 * apply following rules:
 * 1. `visibility` in scenegraph node
 * 2. other custom culling strategies, eg. frustum culling
 */
export declare class CullingPlugin implements RenderingPlugin {
    private strategies;
    static tag: string;
    constructor(strategies: CullingStrategyContribution[]);
    apply(context: RenderingPluginContext): void;
}
//# sourceMappingURL=CullingPlugin.d.ts.map