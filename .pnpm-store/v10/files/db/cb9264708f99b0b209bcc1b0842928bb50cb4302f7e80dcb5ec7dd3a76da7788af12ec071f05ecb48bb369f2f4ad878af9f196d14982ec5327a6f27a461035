import { Primitive, TransformComponent as TC } from '../runtime';
import { JitterTransform } from '../spec';
export type JitterOptions = Omit<JitterTransform, 'type'>;
export declare function rangeOf(value: Primitive[], scaleOptions: Record<string, any>, padding: number): [number, number];
export declare function interpolate(t: number, a: number, b: number): number;
/**
 * The jitter transform produce dx and dy channels for marks (especially for point)
 * with ordinal x and y dimension, say to make them jitter in their own space.
 */
export declare const Jitter: TC<JitterOptions>;
