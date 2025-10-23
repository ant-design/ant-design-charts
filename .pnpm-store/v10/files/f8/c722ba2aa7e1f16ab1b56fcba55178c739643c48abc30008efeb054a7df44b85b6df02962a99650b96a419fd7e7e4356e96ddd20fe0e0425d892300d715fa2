import Body from './body';
import Quad from './quad';
/**
 * @fileOverview quadTree
 * @author shiwu.wyy@antfin.com
 */
export default class QuadTree {
    body: Body | null;
    quad: Quad | null;
    theta: number;
    NW: QuadTree | null;
    NE: QuadTree | null;
    SW: QuadTree | null;
    SE: QuadTree | null;
    constructor(param: Quad | null);
    insert(bo: Body): void;
    _putBody(bo: Body): void;
    _isExternal(): boolean;
    updateForce(bo: Body): void;
}
