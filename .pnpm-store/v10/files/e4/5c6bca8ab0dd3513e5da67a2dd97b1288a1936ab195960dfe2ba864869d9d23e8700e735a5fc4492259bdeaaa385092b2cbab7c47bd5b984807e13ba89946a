import { IRenderer, RendererPlugin, Canvas as GCanvas } from '@antv/g';
import { G2Context } from '../runtime';
import { G2Spec, ViewComposition } from '../spec';
import type { G2Library } from '../runtime/types/options';
import { CompositionNode } from './composition';
export declare const G2_CHART_KEY = "G2_CHART_KEY";
export type RuntimeOptions = ViewComposition & {
    container?: string | HTMLElement;
    canvas?: GCanvas;
    autoFit?: boolean;
    renderer?: IRenderer;
    plugins?: RendererPlugin[];
    theme?: string;
    lib?: G2Library;
    createCanvas?: () => HTMLCanvasElement;
};
export declare class Runtime<Spec extends G2Spec = G2Spec> extends CompositionNode {
    private _container;
    private _context;
    private _emitter;
    private _width;
    private _height;
    private _renderer;
    private _plugins;
    private _hasBindAutoFit;
    private _rendering;
    private _trailingClear;
    private _trailing;
    private _trailingResolve;
    private _trailingReject;
    private _previousDefinedType;
    private _marks;
    private _compositions;
    constructor(options: RuntimeOptions);
    render(): Promise<Runtime<Spec>>;
    /**
     * @overload
     * @returns {Spec}
     */
    options(): Spec;
    /**
     * @overload
     * @param {G2ViewTree} options
     * @returns {Runtime}
     */
    options(options: Spec): Runtime<Spec>;
    getContainer(): HTMLElement;
    getContext(): G2Context;
    on(event: string, callback: (...args: any[]) => any, once?: boolean): this;
    once(event: string, callback: (...args: any[]) => any): this;
    emit(event: string, ...args: any[]): this;
    off(event?: string, callback?: (...args: any[]) => any): this;
    clear(isClearEvents?: boolean): void;
    destroy(): void;
    forceFit(): Promise<Runtime<Spec>>;
    changeSize(width: number, height: number): Promise<Runtime<Spec>>;
    getDataByXY(point: {
        x: number;
        y: number;
    }, options?: {
        shared?: boolean;
        series?: boolean;
        facet?: boolean;
        startX?: number;
        startY?: number;
    }): any[];
    private _create;
    private _reset;
    private _renderTrailing;
    private _createResolve;
    private _createReject;
    private _computedOptions;
    private _createCanvas;
    private _addToTrailing;
    private _onResize;
    private _bindAutoFit;
    private _unbindAutoFit;
}
