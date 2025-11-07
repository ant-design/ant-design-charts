import type { HierarchyNode } from '@antv/vendor/d3-hierarchy';
type Data = any[] | Record<string, any>;
export interface Node<T> extends HierarchyNode<T> {
    x0?: number;
    y0?: number;
    x1?: number;
    y1?: number;
}
type Layout = {
    tile?: 'treemapBinary' | 'treemapDice' | 'treemapSlice' | 'treemapSliceDice' | 'treemapSquarify' | 'treemapResquarify';
    size?: [number, number];
    round?: boolean;
    ignoreParentValue?: boolean;
    ratio?: number;
    padding?: number;
    paddingInner?: number;
    paddingOuter?: number;
    paddingTop?: number;
    paddingRight?: number;
    paddingBottom?: number;
    paddingLeft?: number;
    sort?(a: any, b: any): number;
    path?: (d: any) => any;
    /** The granularity of Display layer.  */
    layer?: number | ((d: any) => any);
};
export declare function treeDataTransform(data: any, layout: Layout, encode: any): [Node<Data>[], Node<Data>[]];
export {};
