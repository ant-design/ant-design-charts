/// <reference path="../../src/d3-force-3d/typing.d.ts" />
import { forceCenter, forceCollide, forceLink, forceManyBody, forceRadial, forceX, forceY, forceZ } from 'd3-force-3d';
import { D3ForceLayout } from '../d3-force';
import type { LayoutWithIterations } from '../types';
import type { D3Force3DLayoutOptions } from './types';
export declare class D3Force3DLayout extends D3ForceLayout<D3Force3DLayoutOptions> implements LayoutWithIterations<D3Force3DLayoutOptions> {
    id: string;
    protected config: {
        inputNodeAttrs: string[];
        outputNodeAttrs: string[];
        simulationAttrs: string[];
    };
    protected forceMap: {
        link: typeof forceLink;
        manyBody: typeof forceManyBody;
        center: typeof forceCenter;
        collide: typeof forceCollide;
        radial: typeof forceRadial;
        x: typeof forceX;
        y: typeof forceY;
        z: typeof forceZ;
    };
    options: Partial<D3Force3DLayoutOptions>;
    protected initSimulation(): import("d3-force-3d").ForceSimulation;
}
