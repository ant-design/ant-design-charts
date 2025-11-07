import type { ICamera } from '../camera';
import type { DisplayObject } from '../display-objects/DisplayObject';
import type { CullingStrategyContribution } from './CullingPlugin';
export declare class FrustumCullingStrategy implements CullingStrategyContribution {
    isVisible(camera: ICamera, object: DisplayObject): boolean;
    /**
     *
     * @see「Optimized View Frustum Culling Algorithms for Bounding Boxes」
     * @see https://github.com/antvis/GWebGPUEngine/issues/3
     *
     * * 基础相交测试 the basic intersection test
     * * 标记 masking @see https://cesium.com/blog/2015/08/04/fast-hierarchical-culling/
     * * TODO: 平面一致性测试 the plane-coherency test
     * * TODO: 支持 mesh 指定自身的剔除策略，参考 Babylon.js @see https://doc.babylonjs.com/how_to/optimizing_your_scene#changing-mesh-culling-strategy
     *
     * @param aabb aabb
     * @param parentPlaneMask mask of parent
     * @param planes planes of frustum
     */
    private computeVisibilityWithPlaneMask;
}
//# sourceMappingURL=FrustumCullingStrategy.d.ts.map