import EventEmitter from 'eventemitter3';
import type { vec2 } from 'gl-matrix';
import { mat4, vec3 } from 'gl-matrix';
import type { Canvas } from '../Canvas';
import { Frustum } from '../shapes';
import { ClipSpaceNearZ, TypeEasingFunction } from '../types';
import type { Landmark } from './Landmark';
import type { ICamera } from './interfaces';
import { CameraProjectionMode, CameraTrackingMode, CameraType } from './interfaces';
/**
 * 参考「WebGL Insights - 23.Designing Cameras for WebGL Applications」，基于 Responsible Camera 思路设计
 * @see https://github.com/d13g0/nucleo.js/blob/master/source/camera/Camera.js
 *
 * 保存相机参数，定义相机动作：
 * 1. dolly 沿 n 轴移动
 * 2. pan 沿 u v 轴移动
 * 3. rotate 以方位角旋转
 * 4. 移动到 Landmark，具有平滑的动画效果，其间禁止其他用户交互
 */
export declare class Camera implements ICamera {
    canvas: Canvas;
    /**
     * Clip space near Z, default to range `[-1, 1]`
     */
    clipSpaceNearZ: ClipSpaceNearZ;
    eventEmitter: EventEmitter<string | symbol, any>;
    /**
     * Matrix of camera
     */
    protected matrix: mat4;
    /**
     * u axis +X is right
     * @see http://learnwebgl.brown37.net/07_cameras/camera_introduction.html#a-camera-definition
     */
    protected right: vec3;
    /**
     * v axis +Y is up
     */
    protected up: vec3;
    /**
     * n axis +Z is inside
     */
    protected forward: vec3;
    /**
     * Position of camera.
     */
    protected position: vec3;
    /**
     * Position of focal point.
     */
    protected focalPoint: vec3;
    /**
     * vector from focalPoint to position
     */
    protected distanceVector: vec3;
    /**
     * length(focalPoint - position)
     */
    protected distance: number;
    /**
     * @see https://en.wikipedia.org/wiki/Azimuth
     */
    protected azimuth: number;
    protected elevation: number;
    protected roll: number;
    protected relAzimuth: number;
    protected relElevation: number;
    protected relRoll: number;
    /**
     * 沿 n 轴移动时，保证移动速度从快到慢
     */
    protected dollyingStep: number;
    protected maxDistance: number;
    protected minDistance: number;
    /**
     * zoom factor of the camera, default is 1
     * eg. https://threejs.org/docs/#api/en/cameras/OrthographicCamera.zoom
     */
    protected zoom: number;
    /**
     * invert the horizontal coordinate system HCS
     */
    protected rotateWorld: boolean;
    /**
     * 投影矩阵参数
     */
    /**
     * field of view [0-360]
     * @see http://en.wikipedia.org/wiki/Angle_of_view
     */
    protected fov: number;
    protected near: number;
    protected far: number;
    protected aspect: number;
    protected left: number;
    protected rright: number;
    protected top: number;
    protected bottom: number;
    protected projectionMatrix: mat4;
    protected projectionMatrixInverse: mat4;
    protected jitteredProjectionMatrix: mat4 | undefined;
    protected view: {
        enabled: boolean;
        fullWidth: number;
        fullHeight: number;
        offsetX: number;
        offsetY: number;
        width: number;
        height: number;
    } | undefined;
    protected enableUpdate: boolean;
    protected type: CameraType;
    protected trackingMode: CameraTrackingMode;
    protected projectionMode: CameraProjectionMode;
    /**
     * for culling use
     */
    protected frustum: Frustum;
    /**
     * ortho matrix for Canvas2D & SVG
     */
    protected orthoMatrix: mat4;
    isOrtho(): boolean;
    getProjectionMode(): CameraProjectionMode;
    getPerspective(): mat4;
    getPerspectiveInverse(): mat4;
    getFrustum(): Frustum;
    getPosition(): vec3;
    getFocalPoint(): vec3;
    getDollyingStep(): number;
    getNear(): number;
    getFar(): number;
    getZoom(): number;
    getOrthoMatrix(): mat4;
    getView(): {
        enabled: boolean;
        fullWidth: number;
        fullHeight: number;
        offsetX: number;
        offsetY: number;
        width: number;
        height: number;
    };
    setEnableUpdate(enabled: boolean): void;
    setType(type: CameraType, trackingMode?: CameraTrackingMode): this;
    setProjectionMode(projectionMode: CameraProjectionMode): this;
    setTrackingMode(trackingMode: CameraTrackingMode): this;
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
    setWorldRotation(flag: boolean): this;
    /**
     * 计算 MV 矩阵，为相机矩阵的逆矩阵
     */
    getViewTransform(): mat4;
    getWorldTransform(): mat4;
    jitterProjectionMatrix(x: number, y: number): void;
    clearJitterProjectionMatrix(): void;
    /**
     * 设置相机矩阵
     */
    setMatrix(matrix: mat4): this;
    /**
     * Set projection matrix manually.
     */
    setProjectionMatrix(matrix: mat4): void;
    setFov(fov: number): this;
    setAspect(aspect: number): this;
    setNear(near: number): this;
    setFar(far: number): this;
    /**
     * Sets an offset in a larger frustum, used in PixelPicking
     */
    setViewOffset(fullWidth: number, fullHeight: number, x: number, y: number, width: number, height: number): this;
    clearViewOffset(): this;
    setZoom(zoom: number): this;
    /**
     * Zoom by specified point in viewport coordinates.
     */
    setZoomByViewportPoint(zoom: number, viewportPoint: vec2): this;
    setPerspective(near: number, far: number, fov: number, aspect: number): this;
    setOrthographic(l: number, r: number, t: number, b: number, near: number, far: number): this;
    /**
     * Move the camera in world coordinates.
     * It will keep looking at the current focal point.
     *
     * support scalars or vectors.
     * @example
     * setPosition(1, 2, 3);
     * setPosition([1, 2, 3]);
     */
    setPosition(x: number | vec2 | vec3, y?: number, z?: number): this;
    /**
     * Sets the focal point of this camera in world coordinates.
     *
     * support scalars or vectors.
     * @example
     * setFocalPoint(1, 2, 3);
     * setFocalPoint([1, 2, 3]);
     */
    setFocalPoint(x: number | vec2 | vec3, y?: number, z?: number): this;
    getDistance(): number;
    getDistanceVector(): vec3;
    /**
     * Moves the camera towards/from the focal point.
     */
    setDistance(d: number): this;
    setMaxDistance(d: number): this;
    setMinDistance(d: number): this;
    /**
     * 设置相机方位角，不同相机模式下需要重新计算相机位置或者是视点位置
     * the azimuth in degrees
     */
    setAzimuth(az: number): this;
    getAzimuth(): number;
    /**
     * 设置相机方位角，不同相机模式下需要重新计算相机位置或者是视点位置
     */
    setElevation(el: number): this;
    getElevation(): number;
    /**
     * 设置相机方位角，不同相机模式下需要重新计算相机位置或者是视点位置
     */
    setRoll(angle: number): this;
    getRoll(): number;
    /**
     * 根据相机矩阵重新计算各种相机参数
     */
    protected _update(): void;
    /**
     * 计算相机矩阵
     */
    protected computeMatrix(): void;
    /**
     * Sets the camera position in the camera matrix
     */
    protected _setPosition(x: number | vec3, y?: number, z?: number): void;
    /**
     * Recalculates axes based on the current matrix
     */
    protected _getAxes(): void;
    /**
     * Recalculates euler angles based on the current state
     */
    protected _getAngles(): void;
    /**
     * 重新计算相机位置，只有 ORBITING 模式相机位置才会发生变化
     */
    protected _getPosition(): void;
    /**
     * 重新计算视点，只有 TRACKING 模式视点才会发生变化
     */
    protected _getFocalPoint(): void;
    /**
     * 重新计算视距
     */
    protected _getDistance(): void;
    protected _getOrthoMatrix(): void;
    protected triggerUpdate(): void;
    rotate(azimuth: number, elevation: number, roll: number): this;
    pan(tx: number, ty: number): this;
    dolly(value: number): this;
    createLandmark(name: string, params?: Partial<{
        position: [number, number, number] | Float32Array | [number, number];
        focalPoint: [number, number, number] | Float32Array | [number, number];
        zoom: number;
        roll: number;
    }>): Landmark;
    gotoLandmark(name: string | Landmark, options?: number | Partial<{
        easing: string;
        easingFunction: TypeEasingFunction;
        duration: number;
        onfinish: () => void;
    }>): void;
    cancelLandmarkAnimation(): void;
}
//# sourceMappingURL=Camera.d.ts.map