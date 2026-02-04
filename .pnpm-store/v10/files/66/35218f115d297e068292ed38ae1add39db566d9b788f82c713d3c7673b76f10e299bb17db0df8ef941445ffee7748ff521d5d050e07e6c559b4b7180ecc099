import { FormatXMLElementFn } from 'intl-messageformat';
import * as React from 'react';
import { ResolvedIntlConfig } from './types';
export declare function invariant(condition: boolean, message: string, Err?: any): asserts condition;
export declare function invariantIntlContext(intl?: any): asserts intl;
export type DefaultIntlConfig = Pick<ResolvedIntlConfig, 'fallbackOnEmptyString' | 'formats' | 'messages' | 'timeZone' | 'textComponent' | 'defaultLocale' | 'defaultFormats' | 'onError'>;
export declare const DEFAULT_INTL_CONFIG: DefaultIntlConfig;
/**
 * Builds an array of {@link React.ReactNode}s with index-based keys, similar to
 * {@link React.Children.toArray}. However, this function tells React that it
 * was intentional, so they won't produce a bunch of warnings about it.
 *
 * React doesn't recommend doing this because it makes reordering inefficient,
 * but we mostly need this for message chunks, which don't tend to reorder to
 * begin with.
 */
export declare const toKeyedReactNodeArray: typeof React.Children.toArray;
/**
 * Takes a `formatXMLElementFn`, and composes it in function, which passes
 * argument `parts` through, assigning unique key to each part, to prevent
 * "Each child in a list should have a unique "key"" React error.
 * @param formatXMLElementFn
 */
export declare function assignUniqueKeysToParts(formatXMLElementFn: FormatXMLElementFn<React.ReactNode>): FormatXMLElementFn<React.ReactNode>;
export declare function shallowEqual<T extends Record<string, unknown> = Record<string, unknown>>(objA?: T, objB?: T): boolean;
