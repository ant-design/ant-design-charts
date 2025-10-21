import { GlobalRuntime, RenderingPlugin, RenderingPluginContext } from '@antv/g-lite';
export declare class HTMLRenderingPlugin implements RenderingPlugin {
    static tag: string;
    private context;
    /**
     * wrapper for camera
     */
    private $camera;
    private displayObjectHTMLElementMap;
    /**
     * ! The reason for adding `offset` is that the `transform-origin` coordinate system of DOM is the local coordinate system of the element, while the `transform-origin` coordinate system of canvas drawing is the local coordinate system of the element's parent element. At the same time, the `transform` attribute value of the DOM element does not include `transform-origin`.
     */
    private joinTransformMatrix;
    apply(context: RenderingPluginContext, runtime: GlobalRuntime): void;
    private createCamera;
    private getOrCreateEl;
    private updateAttribute;
}
//# sourceMappingURL=HTMLRenderingPlugin.d.ts.map