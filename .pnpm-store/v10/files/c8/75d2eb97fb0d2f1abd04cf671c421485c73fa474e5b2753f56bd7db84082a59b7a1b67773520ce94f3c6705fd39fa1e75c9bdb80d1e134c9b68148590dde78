import Quad from './quad';
/**
 * @fileOverview body
 * @author shiwu.wyy@antfin.com
 */
type BodyProps = {
    id?: Number;
    rx: number;
    ry: number;
    fx?: number;
    fy?: number;
    mass: number;
    degree: number;
    g?: number;
};
export default class Body {
    id: Number;
    rx: number;
    ry: number;
    fx: number;
    fy: number;
    mass: number;
    degree: number;
    g: number;
    constructor(params: BodyProps);
    distanceTo(bo: Body): number;
    setPos(x: number, y: number): void;
    resetForce(): void;
    addForce(b: Body): void;
    in(quad: Quad): boolean;
    add(bo: Body): Body;
}
export {};
