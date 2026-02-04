import { DisplayObject } from '@antv/g';
import { Base } from '@antv/scale';
import { G2Element } from './selection';
/**
 * @description Get element's ancestor view node.
 * @param elemenet G2 element.
 * @returns Element's ancestor view node.
 */
export declare function getViewFromElement(element: G2Element): G2Element;
/**
 * @description Check if the element is a heatmap.
 * @param element G2 element.
 * @returns True if the element is a heatmap, otherwise false.
 */
export declare function isHeatmap(element: any): boolean;
/**
 * @description Get element's original data.
 * @param elemenet G2 element.
 * @param elemenet View data, if not provided, will get from element's ancestor view.
 * @returns The original data of the element.
 */
export declare function dataOf(element: G2Element, viewData?: any): any;
/**
 * @description Get element's series name.
 * @param elemenet G2 element.
 * @returns The series name of the element.
 */
export declare function seriesOf(elemenet: G2Element): string;
/**
 * Get group name with view's scale and element's datum.
 */
export declare function groupNameOf(scale: Record<string, Base<any>>, datum: any): any;
export declare function identity<T>(x: T): T;
type Func<R> = (x: R, ...args: any[]) => R;
/**
 * Composes functions from left to right.
 */
export declare function compose<R>(fns: Func<R>[]): Func<R>;
/**
 * Composes single-argument async functions from left to right.
 */
export declare function composeAsync<R>(fns: ((x: R) => Promise<R> | R)[]): (x: R) => Promise<R> | R;
export declare function capitalizeFirst(str: string): string;
export declare function error(message?: string): never;
export declare function copyAttributes(target: DisplayObject, source: DisplayObject): void;
export declare function defined(x: any): boolean;
export declare function random(a: number, b: number): number;
export declare function useMemo<T = unknown, U = unknown>(compute: (key: T) => U): (key: T) => U;
export declare function appendTransform(node: DisplayObject, transform: any): void;
export declare function subObject(obj: Record<string, any>, prefix: string): Record<string, any>;
export declare function maybeSubObject(obj: Record<string, any>, prefix: string): Record<string, any>;
export declare function prefixObject(obj: Record<string, any>, prefix: string): Record<string, any>;
export declare function filterPrefixObject(obj: Record<string, any>, prefix: string[]): Record<string, any>;
export declare function omitPrefixObject(obj: Record<string, any>, ...prefixes: string[]): {
    [k: string]: any;
};
export declare function maybePercentage(x: number | string, size: number): number;
export declare function isStrictObject(d: any): boolean;
export declare function isUnset(value: any): boolean;
export declare function deepAssign(dist: Record<string, unknown>, src: Record<string, unknown>, maxLevel?: number, level?: number): Record<string, unknown>;
export {};
