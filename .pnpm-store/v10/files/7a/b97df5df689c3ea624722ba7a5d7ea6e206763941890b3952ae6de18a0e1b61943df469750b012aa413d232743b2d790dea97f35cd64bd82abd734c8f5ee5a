import type { CanvasContext, DataURLOptions, GlobalRuntime, ContextService } from '@antv/g-lite';
export declare class SVGContextService implements ContextService<SVGElement> {
    context: GlobalRuntime & CanvasContext;
    private $container;
    private $namespace;
    private dpr;
    private canvasConfig;
    constructor(context: GlobalRuntime & CanvasContext);
    init(): void;
    getDomElement(): SVGElement;
    getContext(): SVGElement;
    getDPR(): number;
    getBoundingClientRect(): DOMRect;
    destroy(): void;
    resize(width: number, height: number): void;
    applyCursorStyle(cursor: string): void;
    private generateCSSText;
    toDataURL(options?: Partial<DataURLOptions>): Promise<string>;
}
//# sourceMappingURL=SVGContextService.d.ts.map