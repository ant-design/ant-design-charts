import { DisplayObject } from '@antv/g';
import { AnimationComponent as AC } from '../runtime';
import { Animation } from './types';
export type MorphingOptions = Animation & {
    split: 'pack' | SplitFunction;
};
type SplitFunction = (shape: DisplayObject, count: number) => string[];
/**
 * Morphing animations.
 * @todo Support more split function.
 */
export declare const Morphing: AC<MorphingOptions>;
export {};
