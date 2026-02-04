import { vec3 } from 'gl-matrix';
export declare class Plane {
    distance: number;
    normal: vec3;
    /**
     * lookup table for p-vertex & n-vertex when doing frustum culling
     */
    pnVertexFlag: number;
    constructor(distance?: number, normal?: vec3);
    updatePNVertexFlag(): void;
    distanceToPoint(point: vec3): number;
    normalize(): void;
    intersectsLine(start: vec3, end: vec3, point?: vec3): boolean;
}
//# sourceMappingURL=Plane.d.ts.map