/**
 * @see https://github.com/antvis/G2/discussions/4557
 */
import { Coordinate } from '@antv/coord';
import { DisplayObject } from '@antv/g';
import { G2MarkState, G2Theme, GuideComponentPosition as GCP } from './types/common';
import { Scale } from './types/component';
import { G2GuideComponentOptions, G2Library, G2Mark, G2ScaleOptions, G2View } from './types/options';
export declare function inferComponent(scales: G2ScaleOptions[], partialOptions: G2View, library: G2Library): G2GuideComponentOptions[];
export declare function renderComponent(component: G2GuideComponentOptions, coordinate: Coordinate, theme: G2Theme, library: G2Library, markState: Map<G2Mark, G2MarkState>): DisplayObject<any, any>;
export declare function normalizeComponents(components: G2GuideComponentOptions[]): any[];
export declare function flatComponents(components: G2GuideComponentOptions[]): G2GuideComponentOptions[];
export declare function groupComponents(components: G2GuideComponentOptions[], crossSize?: number): G2GuideComponentOptions[];
export declare function computeComponentSize(component: G2GuideComponentOptions, crossSize: number, crossPadding: [number, number], position: GCP, theme: G2Theme, library: G2Library): void;
export declare function createScale(component: G2GuideComponentOptions, library: G2Library): Scale;
export declare function computeLabelsBBox(component: G2GuideComponentOptions, scale: Scale, key?: string): DOMRect[];
export declare function computeTitleBBox(component: G2GuideComponentOptions): DOMRect;
export declare function styleOf(axis: G2GuideComponentOptions, position: GCP, theme: G2Theme): Record<string, any>;
