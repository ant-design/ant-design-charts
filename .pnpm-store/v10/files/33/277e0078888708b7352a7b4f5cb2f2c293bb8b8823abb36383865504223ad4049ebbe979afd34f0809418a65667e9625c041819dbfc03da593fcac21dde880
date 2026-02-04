import { CompositionComponent as CC, G2ViewTree } from '../runtime';
import { FacetRectComposition } from '../spec';
export type SubLayout = (data?: any) => number[];
/**
 * BFS view tree and using the last discovered color encode
 * as the top-level encode for this plot. This is useful when
 * color encode and color scale is specified in mark node.
 * It makes sense because the whole facet should shared the same
 * color encoding, but it also can be override with explicity
 * encode and scale specification.
 */
export declare const inferColor: (options: G2ViewTree, ...rest: any[]) => G2ViewTree;
export declare const setAnimation: (options: G2ViewTree, ...rest: any[]) => G2ViewTree;
export declare const setStyle: (options: G2ViewTree, ...rest: any[]) => G2ViewTree;
export declare const toCell: (options: G2ViewTree, ...rest: any[]) => G2ViewTree;
/**
 * Do not set cell data directly, the children will get wrong do if do
 * so. Use transform to set new data.
 **/
export declare const setData: (options: G2ViewTree, ...rest: any[]) => G2ViewTree;
/**
 * @todo Move some options assignment to runtime.
 */
export declare const setChildren: (options: G2ViewTree, ...rest: any[]) => G2ViewTree;
/**
 * Inner guide not show title, tickLine, label and subTickLine,
 * if data is empty, do not show guide.
 */
export declare function createInnerGuide(guide: any, data: any): any;
export type FacetRectOptions = Omit<FacetRectComposition, 'type'>;
export declare const FacetRect: CC<FacetRectOptions>;
