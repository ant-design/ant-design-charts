import { Camera } from '@antv/g-lite';
import { vec3 } from 'gl-matrix';
import type { vec2 } from 'gl-matrix';
import type { TypeEasingFunction, Landmark } from '@antv/g-lite';
/**
 * Provides camera action & animation.
 */
export declare class AdvancedCamera extends Camera {
    /**
     * switch between multiple landmarks
     */
    private landmarks;
    private landmarkAnimationID;
    /**
     * Changes the azimuth and elevation with respect to the current camera axes
     * @param {Number} azimuth the relative azimuth
     * @param {Number} elevation the relative elevation
     * @param {Number} roll the relative roll
     */
    rotate(azimuth: number, elevation: number, roll: number): this;
    /**
     * 沿水平(right) & 垂直(up)平移相机
     */
    pan(tx: number, ty: number): this;
    /**
     * 沿 n 轴移动，当距离视点远时移动速度较快，离视点越近速度越慢
     */
    dolly(value: number): this;
    cancelLandmarkAnimation(): void;
    createLandmark(name: string, params?: Partial<{
        position: vec3 | vec2;
        focalPoint: vec3 | vec2;
        zoom: number;
        roll: number;
    }>): Landmark;
    gotoLandmark(name: string | Landmark, options?: number | Partial<{
        easing: string;
        easingFunction: TypeEasingFunction;
        duration: number;
        onframe: (t: number) => void;
        onfinish: () => void;
    }>): void;
}
//# sourceMappingURL=AdvancedCamera.d.ts.map