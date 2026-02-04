import type { G2Spec } from '../spec';
import { API, CompositionAPI } from './extend';
import { library } from './library';
import { MarkNode as Node } from './mark';
import type { RuntimeOptions } from './runtime';
export interface Chart extends API<G2Spec, typeof library> {
}
export interface CompositionNode extends CompositionAPI<typeof library> {
}
export interface MarkNode extends Node {
}
export declare const Chart: new (options?: RuntimeOptions) => API<G2Spec, {}>;
export type ChartOptions = Omit<RuntimeOptions, 'lib'>;
