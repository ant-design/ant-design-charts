import { DisplayObject, LinearGradient, RadialGradient, RenderingPlugin, RenderingPluginContext } from '@antv/g-lite';
import { mat4 } from 'gl-matrix';
import { type DefElementManager } from './shapes/defs';
import type { SVGRendererPluginOptions } from './interfaces';
export declare const SVG_ATTR_MAP: Record<string, string>;
export declare const DEFAULT_VALUE_MAP: Record<string, string>;
export type GradientParams = LinearGradient | RadialGradient;
/**
 * G_SVG_PREFIX + nodeName + entity
 *
 * eg. g_svg_circle_345
 */
export declare const G_SVG_PREFIX = "g-svg";
export declare const CLIP_PATH_PREFIX = "clip-path-";
export declare const TEXT_PATH_PREFIX = "text-path-";
export declare class SVGRendererPlugin implements RenderingPlugin {
    private pluginOptions;
    private defElementManager;
    private context;
    static tag: string;
    constructor(pluginOptions: SVGRendererPluginOptions, defElementManager: DefElementManager, context: RenderingPluginContext);
    /**
     * Will be used in g-plugin-svg-picker for finding relative SVG element of current DisplayObject.
     */
    private svgElementMap;
    /**
     * <camera>
     */
    private $camera;
    /**
     * render at the end of frame
     */
    private renderQueue;
    /**
     * dirty attributes at the end of frame
     */
    private dirtyAttributes;
    /**
     * reorder after mounted
     */
    private pendingReorderQueue;
    /**
     * <use> elements in <clipPath>, which should be sync with clipPath
     *
     * @example
     * <clipPath transform="matrix(1,0,0,1,-100,-155)" id="clip-path-0-2">
     *  <use href="#g_svg_circle_0" transform="matrix(1.477115,0,0,1.477115,150,150)">
     *  </use>
     * </clipPath>
     */
    private clipPathUseMap;
    apply(context: RenderingPluginContext): void;
    private getId;
    private reorderChildren;
    applyTransform($el: SVGElement, rts: mat4): void;
    private applyAttributes;
    private updateAttribute;
    createSVGDom(document: Document, object: DisplayObject, root: SVGElement, noWrapWithGroup?: boolean): void;
    private removeSVGDom;
    private createOrUpdateHitArea;
    private createOrUpdateInnerHTML;
    private createOrUpdateClipOrTextPath;
}
//# sourceMappingURL=SVGRendererPlugin.d.ts.map