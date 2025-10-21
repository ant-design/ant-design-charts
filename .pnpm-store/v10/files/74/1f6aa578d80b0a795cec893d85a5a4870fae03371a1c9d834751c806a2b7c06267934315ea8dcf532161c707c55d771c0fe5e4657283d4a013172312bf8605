import type { DisplayObject } from '@antv/g-lite';
export interface ElementLifeCycleContribution {
    createElement: (object: DisplayObject, svgElementMap: WeakMap<SVGElement, DisplayObject>) => SVGElement;
    shouldUpdateElementAttribute: (object: DisplayObject, attributeName: string) => boolean;
    updateElementAttribute: (object: DisplayObject, $el: SVGElement, svgElementMap: WeakMap<SVGElement, DisplayObject>) => void;
    destroyElement: (object: DisplayObject, $el: SVGElement) => void;
}
export interface SVGRendererPluginOptions {
    outputSVGElementId: boolean;
    outputSVGElementName: boolean;
}
//# sourceMappingURL=interfaces.d.ts.map