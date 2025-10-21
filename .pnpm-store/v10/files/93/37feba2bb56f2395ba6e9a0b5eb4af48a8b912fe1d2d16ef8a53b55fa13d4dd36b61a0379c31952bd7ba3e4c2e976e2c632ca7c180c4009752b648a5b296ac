import { PointTuple } from '../types';
/**
 * @fileOverview quad
 * @author shiwu.wyy@antfin.com
 */
type QuadProps = {
    xmid: number;
    ymid: number;
    length: number;
    massCenter?: PointTuple;
    mass?: number;
};
export default class Quad {
    xmid: number;
    ymid: number;
    length: number;
    massCenter: PointTuple;
    mass: number;
    constructor(params: QuadProps);
    getLength(): number;
    contains(x: number, y: number): boolean;
    NW(): Quad;
    NE(): Quad;
    SW(): Quad;
    SE(): Quad;
}
export {};
