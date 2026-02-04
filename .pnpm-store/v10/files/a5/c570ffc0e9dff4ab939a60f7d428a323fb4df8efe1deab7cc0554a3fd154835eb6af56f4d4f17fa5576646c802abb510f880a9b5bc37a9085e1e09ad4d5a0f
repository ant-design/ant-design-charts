import type { Point } from '../types';
type A = ['a' | 'A', number, number, number, number, number, number, number];
type C = ['c' | 'C', number, number, number, number, number, number];
type O = ['o' | 'O', number, number];
type H = ['h' | 'H', number];
type L = ['l' | 'L', number, number];
type M = ['m' | 'M', number, number];
type R = ['r' | 'R', number, number, number, number];
type Q = ['q' | 'Q', number, number, number, number];
type S = ['s' | 'S', number, number, number, number, number, number, number];
type T = ['t' | 'T', number, number];
type V = ['v' | 'V', number];
type U = ['u' | 'U', number, number, number];
type Z = ['z' | 'Z'];
export type PathCommand = A | C | O | H | L | M | R | Q | S | T | V | U | Z;
/**
 * create bezier spline from catmull rom spline
 * @param {Array} crp Catmull Rom Points
 * @param {boolean} z Spline is loop
 * @param {Array} constraint Constraint
 */
export declare function catmullRom2Bezier(crp: number[], z?: boolean, constraint?: Point[]): PathCommand[];
export {};
