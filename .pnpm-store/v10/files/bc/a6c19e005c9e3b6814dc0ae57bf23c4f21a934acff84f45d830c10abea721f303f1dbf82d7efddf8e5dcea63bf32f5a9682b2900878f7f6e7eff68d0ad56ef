import { DisplayObject, AABB } from '@antv/g';
import type { PathArray } from '@antv/util';
import { G2ViewDescriptor } from '../runtime';
/**
 * Given root of chart returns elements to be manipulated
 */
export declare function selectG2Elements(root: DisplayObject): DisplayObject[];
export declare function selectFacetG2Elements(target: any, viewInstances: any): DisplayObject[];
export declare function selectFacetViews(target: any, viewInstances: any): any;
export declare function selectPlotArea(root: DisplayObject): DisplayObject;
export declare function bboxOf(element: DisplayObject): AABB;
export declare function mousePosition(target: any, event: any): number[];
/**
 * @todo Pass bbox rather than calc it here.
 */
export declare function brushMousePosition(target: any, event: any): number[];
export declare function boundsOfBrushArea(target: any): any[];
export declare function createColorKey(view: any): (element: any) => any;
export declare function createXKey(view: any): (element: any) => any;
export declare function createDatumof(view: G2ViewDescriptor | G2ViewDescriptor[]): (element: any) => any;
export declare function createUseState(style: Record<string, any>, elements: Element[]): (valueof?: (d: any, element: any) => any, setAttribute?: (element: DisplayObject, k: string, v: string) => void) => {
    setState: (element: any, ...states: any[]) => void;
    updateState: (element: any, ...states: any[]) => void;
    removeState: (element: any, ...states: any[]) => void;
    hasState: (element: any, state: any) => boolean;
};
export declare function useState(style: Record<string, any> | undefined, valueof?: (d: any, element: any) => any, setAttribute?: (element: DisplayObject, k: string, v: string) => void): {
    setState: (element: any, ...states: any[]) => void;
    updateState: (element: any, ...states: any[]) => void;
    removeState: (element: any, ...states: any[]) => void;
    hasState: (element: any, state: any) => boolean;
};
export declare function mergeState(options: any, states: any): {};
export declare function createValueof(elements: any, datum: any): (d: any, e: any) => any;
export declare function renderLink({ link, valueof, coordinate, ...style }: {
    [x: string]: any;
    link?: boolean;
    valueof?: (d: any, element: any) => any;
    coordinate: any;
}): (() => void)[] | readonly [(elements: any) => void, (element: any) => void];
export declare function offsetTransform(element: any, offset: any, coordinate: any): any;
export declare function renderBackground({ document, background, scale, coordinate, valueof, ...rest }: {
    [x: string]: any;
    document: any;
    background: any;
    scale: any;
    coordinate: any;
    valueof: any;
}): (() => void)[] | readonly [(element: any) => void, (element: any) => void, (element: any) => boolean];
export declare function setCursor(root: any, cursor: any): void;
export declare function restoreCursor(root: any): void;
export declare function selectElementByData(elements: any, data: any, datum: any): any;
export declare function getPointsR(point: number[], nextPoint: number[]): number;
export declare function getPointsPath(points: number[][], isClose?: boolean): PathArray;
export declare function getElements(plot: any): any;
export declare function getThetaPath(center: number[], points: number[][], isBig?: number): PathArray;
export declare function maybeRoot(node: any, rootOf: any): any;
export declare const VALID_FIND_BY_X_MARKS: string[];
/**
 * @description Create function that can find element by event.
 * @returns Element find function.
 */
export declare function createFindElementByEvent({ elementsof, root, coordinate, scale, validFindByXMarks, }: {
    elementsof: any;
    root: any;
    coordinate: any;
    scale: any;
    validFindByXMarks?: string[];
}): (event: any) => any;
/**
 * Calculate adaptive sensitivity multiplier (inversely proportional to range).
 *
 * - Smaller range → higher sensitivity
 * - Larger range → lower sensitivity
 *
 * @param range Current range (0-1)
 * @returns Sensitivity multiplier (0.1x ~ 100x)
 */
export declare function calculateSensitivityMultiplier(range: number): number;
/**
 * Check if a value is considered "falsy" for configuration purposes.
 * Returns true for false, null, or undefined values.
 * Uses type predicate for better type safety.
 *
 * @param value The value to check
 * @returns true if the value is falsy (false, null, undefined)
 */
export declare function isFalsyValue(value: unknown): value is false | null | undefined;
/**
 * Extract channel data with preserved X-Y relationships from all marks in a view.
 * Supports multi-mark scenarios, bin transforms, and array-encoded Y values.
 *
 * @param view The view object containing markState
 * @returns Object containing flattened values for backward compatibility and structured mark data
 */
export declare function extractChannelValues(view: G2ViewDescriptor): {
    xChannelValues: unknown[];
    yChannelValues: unknown[];
    markDataPairs: Array<{
        markKey: string;
        channelData: {
            [key: string]: unknown[];
        };
    }>;
};
/**
 * Check if there are multiple independent axis for a given channel.
 * Multi-axis can be defined by:
 * 1. Explicit `independent: true` in scale configuration
 * 2. Different `scale.key` values for the same channel name
 *
 * @param channel1 - Channel name (x or y)
 * @param marks - Array of marks to check
 * @returns true if multiple independent axis exist
 */
export declare function hasIndependentXYScale(channel1: string, marks: readonly unknown[]): boolean;
/**
 * Calculate multi-axis channel domains for slider filtering.
 * When independent scales are detected, generates separate domains for each axis (x1, y1, x2, y2, etc.)
 *
 * @param view The view object containing markState
 * @param initDomain Initial domain configuration
 * @param scaleX X scale instance
 * @param scaleY Y scale instance
 * @param independentInfo Pre-computed independent scale information
 * @returns Extended channelDomain object with multi-axis support
 */
export declare function calculateMultiAxisChannelDomains(view: G2ViewDescriptor, initDomain: Record<string, unknown>, scaleX: {
    getOptions(): {
        domain: unknown;
    };
}, scaleY: {
    getOptions(): {
        domain: unknown;
    };
}, independentInfo?: IndependentScaleInfo): Record<string, unknown[]>;
/**
 * Independent scale information cache interface
 */
export interface IndependentScaleInfo {
    hasIndependentX: boolean;
    hasIndependentY: boolean;
    marksWithSharedX: string[];
    marksWithIndependentX: string[];
    marksWithSharedY: string[];
    marksWithIndependentY: string[];
    markToXScaleMap: Map<string, string>;
    markToYScaleMap: Map<string, string>;
}
/**
 * Calculate all independent scale information in one pass
 * This function performs a single traversal to compute all independent scale related information,
 * avoiding repeated calculations throughout the codebase.
 *
 * Multi-axis detection logic:
 * 1. Explicit independent: scale.y.independent = true
 * 2. Different scale keys: scale.y.key = 'left' vs scale.y.key = 'right'
 *
 * @param view The view object containing markState
 * @returns Complete independent scale information
 */
export declare function calculateAllIndependentScaleInfo(view: G2ViewDescriptor): IndependentScaleInfo;
