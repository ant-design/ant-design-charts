import Decimal from 'decimal.js';
import { NumberFormatInternal } from '../types/number';
/**
 * The abstract operation ComputeExponent computes an exponent (power of ten) by which to scale x
 * according to the number formatting settings. It handles cases such as 999 rounding up to 1000,
 * requiring a different exponent.
 *
 * NOT IN SPEC: it returns [exponent, magnitude].
 */
export declare function ComputeExponent(internalSlots: NumberFormatInternal, x: Decimal): [number, number];
