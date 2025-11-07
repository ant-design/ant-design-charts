import type { AABB } from '../shapes';
export interface Renderable {
    /**
     * aabb 应该存在 Renderable 而非 Geometry 中，原因包括：
     * 1. 包围盒会受 transform 影响。例如每次 transform 之后应该重新计算包围盒（center 发生偏移）。
     * 2. 多个 Mesh 可以共享一个 Geometry，但可以各自拥有不同的 aabb
     */
    bounds: AABB | undefined;
    boundsDirty: boolean;
    /**
     * account for hierarchy, also including extra rendering effects
     */
    renderBounds: AABB | undefined;
    renderBoundsDirty: boolean;
    /**
     * dirty render bounds in last render frame
     */
    dirtyRenderBounds: AABB;
    /**
     * dirty rectangle flag
     */
    dirty: boolean;
}
//# sourceMappingURL=Renderable.d.ts.map