import { AbstractRendererPlugin, Shape } from '@antv/g-lite';
import type { PathGenerator } from '@antv/g-plugin-canvas-path-generator';
import { type StyleRenderer } from './shapes/styles';
import type { CanvasRendererPluginOptions } from './interfaces';
export * from './shapes/styles';
export declare class Plugin extends AbstractRendererPlugin<{
    defaultStyleRendererFactory: Record<Shape, StyleRenderer>;
    styleRendererFactory: Record<Shape, StyleRenderer>;
    pathGeneratorFactory: Record<Shape, PathGenerator<any>>;
}> {
    private options;
    name: string;
    constructor(options?: Partial<CanvasRendererPluginOptions>);
    init(): void;
    destroy(): void;
}
//# sourceMappingURL=index.d.ts.map