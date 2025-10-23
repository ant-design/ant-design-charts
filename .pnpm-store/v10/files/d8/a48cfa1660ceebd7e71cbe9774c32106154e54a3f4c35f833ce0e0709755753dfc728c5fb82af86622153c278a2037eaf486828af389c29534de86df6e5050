/* global KeyframeAnimationOptions */
import type { GenericAnimation, StandardAnimationOption } from '../animation';
import type { DisplayObjectConfig } from '../shapes';
import type { Callable } from '../types';

export interface ComponentStyleProps<T extends Record<string, any>> {
  layout?: T extends { layout: infer L } ? L : Record<string, any>;
  events?: T extends { events: infer E } ? E : Record<string, any>;
  style?: T extends { style: infer S } ? S : Record<string, any>;
  animation?: GenericAnimation | StandardAnimationOption;
  interactions?: T extends { interaction: infer I } ? I : Record<string, any>;
  [key: string]: any;
}

export type ComponentOptions<T> = DisplayObjectConfig<T>;

/** add prefix for object property key  */
export type PrefixStyleProps<T extends Record<string, any>, P extends string> = {
  [K in keyof T as K extends `show${infer S}`
    ? `show${Capitalize<P>}${S}`
    : K extends string
    ? `${P}${Capitalize<K>}`
    : never]: T[K];
};

export type CallableStyleProps<T extends Record<string, any>, P extends any[]> = {
  [K in keyof T]: Callable<T[K], P>;
};
