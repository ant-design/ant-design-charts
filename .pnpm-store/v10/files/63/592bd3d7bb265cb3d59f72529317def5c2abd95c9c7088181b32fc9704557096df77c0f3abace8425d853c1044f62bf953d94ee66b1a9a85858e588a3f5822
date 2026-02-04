import type { D3ForceLayoutOptions, EdgeDatum, NodeDatum as _NodeDatum } from '../d3-force/types';
/**
 * @see https://github.com/vasturiano/d3-force-3d
 */
export interface D3Force3DLayoutOptions extends D3ForceLayoutOptions {
    numDimensions?: number;
    /**
     * <zh/> 中心力
     * <en/> Center force
     */
    center?: false | {
        x?: number;
        y?: number;
        z?: number;
        strength?: number;
    };
    /**
     * <zh/> 径向力
     *
     * <en/> Radial force
     */
    radial?: false | {
        strength?: number | ((node: NodeDatum, index: number, nodes: NodeDatum[]) => number);
        radius?: number | ((node: NodeDatum, index: number, nodes: NodeDatum[]) => number);
        x?: number;
        y?: number;
        z?: number;
    };
    /**
     * <zh/> Z 轴力
     *
     * <en/> Z axis force
     */
    z?: false | {
        strength?: number | ((node: NodeDatum, index: number, nodes: NodeDatum[]) => number);
        z?: number | ((node: NodeDatum, index: number, nodes: NodeDatum[]) => number);
    };
}
export interface NodeDatum extends _NodeDatum {
    z: number;
    vz: number;
}
export type { EdgeDatum };
