import type { EventEmitter } from 'eventemitter3';
import type { mat4, vec2, vec3 } from 'gl-matrix';
import type { TypeEasingFunction } from '..';
import type { ICanvas } from '../dom';
import type { Frustum } from '../shapes';
import type { Landmark } from './Landmark';
/**
 * Different type of cameras, eg. simple camera used in 2D scene or
 * advanced camera which can do actions & switch between landmarks.
 */
export declare enum CameraType {
    /**
     * Performs all the rotational operations with the focal point instead of the camera position.
     * This type of camera is useful in applications(like CAD) where 3D objects are being designed or explored.
     * Camera cannot orbits over the north & south poles.
     * @see http://voxelent.com/tutorial-cameras/
     *
     * In Three.js it's used in OrbitControls.
     * @see https://threejs.org/docs/#examples/zh/controls/OrbitControls
     */
    ORBITING = 0,
    /**
     * It's similar to the ORBITING camera, but it allows the camera to orbit over the north or south poles.
     *
     * In Three.js it's used in OrbitControls.
     * @see https://threejs.org/docs/#examples/en/controls/TrackballControls
     */
    EXPLORING = 1,
    /**
     * Performs all the rotational operations with the camera position.
     * It's useful in first person shooting games.
     * Camera cannot orbits over the north & south poles.
     *
     * In Three.js it's used in FirstPersonControls.
     * @see https://threejs.org/docs/#examples/en/controls/FirstPersonControls
     */
    TRACKING = 2
}
/**
 * CameraType must be TRACKING
 */
export declare enum CameraTrackingMode {
    DEFAULT = 0,
    ROTATIONAL = 1,
    TRANSLATIONAL = 2,
    CINEMATIC = 3
}
export declare enum CameraProjectionMode {
    ORTHOGRAPHIC = 0,
    PERSPECTIVE = 1
}
export declare const CameraEvent: {
    UPDATED: string;
};
export interface ICamera {
    canvas: ICanvas;
    eventEmitter: EventEmitter;
    isOrtho: () => boolean;
    getProjectionMode: () => CameraProjectionMode;
    getPerspective: () => mat4;
    getPerspectiveInverse: () => mat4;
    getFrustum: () => Frustum;
    getPosition: () => vec3;
    getFocalPoint: () => vec3;
    getDollyingStep: () => number;
    getNear: () => number;
    getFar: () => number;
    getZoom: () => number;
    getOrthoMatrix: () => mat4;
    getView: () => {
        enabled: boolean;
        fullWidth: number;
        fullHeight: number;
        offsetX: number;
        offsetY: number;
        width: number;
        height: number;
    };
    setEnableUpdate: (enabled: boolean) => void;
    setType: (type: CameraType, trackingMode?: CameraTrackingMode) => this;
    setProjectionMode: (projectionMode: CameraProjectionMode) => this;
    setTrackingMode: (trackingMode: CameraTrackingMode) => this;
    /**
     * If flag is true, it reverses the azimuth and elevation angles.
     * Subsequent calls to rotate, setAzimuth, setElevation,
     * changeAzimuth or changeElevation will cause the inverted effect.
     * setRoll or changeRoll is not affected by this method.
     *
     * This inversion is useful when one wants to simulate that the world
     * is moving, instead of the camera.
     *
     * By default the camera angles are not reversed.
     * @param {Boolean} flag the boolean flag to reverse the angles.
     */
    setWorldRotation: (flag: boolean) => this;
    /**
     * 计算 MV 矩阵，为相机矩阵的逆矩阵
     */
    getViewTransform: () => mat4;
    getWorldTransform: () => mat4;
    jitterProjectionMatrix: (x: number, y: number) => void;
    clearJitterProjectionMatrix: () => void;
    /**
     * 设置相机矩阵
     */
    setMatrix: (matrix: mat4) => this;
    setFov: (fov: number) => this;
    setAspect: (aspect: number) => this;
    setNear: (near: number) => this;
    setFar: (far: number) => this;
    /**
     * Sets an offset in a larger frustum, used in PixelPicking
     */
    setViewOffset: (fullWidth: number, fullHeight: number, x: number, y: number, width: number, height: number) => this;
    clearViewOffset: () => this;
    setZoom: (zoom: number) => this;
    setZoomByViewportPoint: (zoom: number, viewportPoint: vec2) => this;
    setPerspective: (near: number, far: number, fov: number, aspect: number) => this;
    setOrthographic: (l: number, r: number, t: number, b: number, near: number, far: number) => this;
    /**
     * Move the camera in world coordinates.
     * It will keep looking at the current focal point.
     *
     * support scalars or vectors.
     * @example
     * setPosition(1, 2, 3);
     * setPosition([1, 2, 3]);
     */
    setPosition: (x: number | vec2 | vec3, y?: number, z?: number) => this;
    /**
     * Sets the focal point of this camera in world coordinates.
     *
     * support scalars or vectors.
     * @example
     * setFocalPoint(1, 2, 3);
     * setFocalPoint([1, 2, 3]);
     */
    setFocalPoint: (x: number | vec2 | vec3, y?: number, z?: number) => this;
    getDistance: () => number;
    getDistanceVector: () => vec3;
    /**
     * Moves the camera towards/from the focal point.
     */
    setDistance: (d: number) => this;
    setMaxDistance: (d: number) => this;
    setMinDistance: (d: number) => this;
    /**
     * 设置相机方位角，不同相机模式下需要重新计算相机位置或者是视点位置
     * the azimuth in degrees
     */
    setAzimuth: (az: number) => this;
    getAzimuth: () => number;
    /**
     * 设置相机方位角，不同相机模式下需要重新计算相机位置或者是视点位置
     */
    setElevation: (el: number) => this;
    getElevation: () => number;
    /**
     * 设置相机方位角，不同相机模式下需要重新计算相机位置或者是视点位置
     */
    setRoll: (angle: number) => this;
    getRoll: () => number;
    /**
     * Changes the azimuth and elevation with respect to the current camera axes
     * @param {Number} azimuth the relative azimuth
     * @param {Number} elevation the relative elevation
     * @param {Number} roll the relative roll
     */
    rotate: (azimuth: number, elevation: number, roll: number) => this;
    /**
     * 沿水平(right) & 垂直(up)平移相机
     */
    pan: (tx: number, ty: number) => this;
    /**
     * 沿 n 轴移动，当距离视点远时移动速度较快，离视点越近速度越慢
     */
    dolly: (value: number) => this;
    createLandmark: (name: string, params?: Partial<{
        position: vec3 | vec2;
        focalPoint: vec3 | vec2;
        zoom: number;
        roll: number;
    }>) => Landmark;
    gotoLandmark: (name: string | Landmark, options?: number | Partial<{
        easing: string;
        easingFunction: TypeEasingFunction;
        duration: number;
        onfinish: () => void;
    }>) => void;
    /**
     * Stop camera animation immediately.
     */
    cancelLandmarkAnimation: () => void;
}
//# sourceMappingURL=interfaces.d.ts.map