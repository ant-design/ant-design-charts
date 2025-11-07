import { CanvasContext, CSSGradientValue, CSSRGB, DisplayObject, ParsedBaseStyleProps, Pattern } from '@antv/g-lite';
import { SVGRendererPlugin } from '../../SVGRendererPlugin';
export declare class DefElementManager {
    private context;
    constructor(context: CanvasContext);
    /**
     * container for <gradient> <clipPath>...
     */
    private $def;
    private gradientCache;
    getDefElement(): SVGDefsElement;
    init(): void;
    clear(entity: number): void;
    private clearUnusedDefElement;
    createOrUpdateGradientAndPattern(object: DisplayObject, $el: SVGElement, parsedColor: CSSGradientValue[] | CSSRGB | Pattern, name: string, plugin: SVGRendererPlugin): void;
    createOrUpdateShadow(object: DisplayObject, $el: SVGElement, name: string): void;
    createOrUpdateFilter(object: DisplayObject, $el: SVGElement, filters: ParsedBaseStyleProps['filter']): void;
}
//# sourceMappingURL=DefElementManager.d.ts.map