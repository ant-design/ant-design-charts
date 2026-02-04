import { Node } from '../types';
import { type Size } from './size';
/**
 * Format value with multiple types into a function returns number.
 * @param defaultValue default value when value is invalid
 * @param value value to be formatted
 * @returns formatted result, a function returns number
 */
export declare function formatNumberFn<T = unknown>(defaultValue: number, value: number | ((d?: T) => number) | undefined): (d?: T | undefined) => number;
/**
 * Format size config with multiple types into a function returns number
 * @param defaultValue default value when value is invalid
 * @param value value to be formatted
 * @param resultIsNumber whether returns number
 * @returns formatted result, a function returns number
 */
export declare function formatSizeFn<T extends Node>(defaultValue: number, value?: Size | {
    width: number;
    height: number;
} | ((d?: T) => Size) | undefined, resultIsNumber?: boolean): (d: T) => Size;
/**
 * format the props nodeSize and nodeSpacing to a function
 * @param nodeSize
 * @param nodeSpacing
 * @returns
 */
export declare const formatNodeSizeToNumber: (nodeSize: Size | ((node: Node) => Size), nodeSpacing: number | ((node: Node) => number), defaultNodeSize?: number) => (node: Node) => number;
