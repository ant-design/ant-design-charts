import type { CanvasContext, CanvasLike, DataURLOptions, GlobalRuntime, ContextService } from '@antv/g-lite';
export declare class Canvas2DContextService implements ContextService<CanvasRenderingContext2D> {
    private $container;
    private $canvas;
    private dpr;
    private context;
    private canvasConfig;
    private renderingContext;
    constructor(context: GlobalRuntime & CanvasContext);
    init(): void;
    getContext(): CanvasRenderingContext2D;
    getDomElement(): CanvasLike;
    getDPR(): number;
    getBoundingClientRect(): DOMRect;
    destroy(): void;
    resize(width: number, height: number): void;
    applyCursorStyle(cursor: string): void;
    toDataURL(options?: Partial<DataURLOptions>): Promise<string>;
}
//# sourceMappingURL=Canvas2DContextService.d.ts.map