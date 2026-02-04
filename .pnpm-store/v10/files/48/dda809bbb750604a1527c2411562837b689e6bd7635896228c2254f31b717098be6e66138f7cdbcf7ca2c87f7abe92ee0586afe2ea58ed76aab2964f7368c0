import type { CanvasContext, DisplayObject, GlobalRuntime } from '@antv/g-lite';
import { Shape } from '@antv/g-lite';
import type { ElementLifeCycleContribution } from './interfaces';
export declare const SHAPE2TAGS: Record<Shape | string, string>;
export declare const SHAPE_UPDATE_DEPS: Record<Shape | string, string[]>;
export declare class DefaultElementLifeCycleContribution implements ElementLifeCycleContribution {
    private context;
    private runtime;
    constructor(context: CanvasContext, runtime: GlobalRuntime);
    createElement(object: DisplayObject, svgElementMap: WeakMap<SVGElement, DisplayObject>): SVGElement;
    destroyElement(object: DisplayObject, $el: SVGElement): void;
    shouldUpdateElementAttribute(object: DisplayObject, attributeName: string): boolean;
    updateElementAttribute(object: DisplayObject): void;
}
//# sourceMappingURL=DefaultElementLifeCycleContribution.d.ts.map