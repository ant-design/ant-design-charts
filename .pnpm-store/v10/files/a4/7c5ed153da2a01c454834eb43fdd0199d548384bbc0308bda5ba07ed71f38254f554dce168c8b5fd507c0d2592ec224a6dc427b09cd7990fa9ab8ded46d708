import { mat4, quat, vec2, vec3 } from 'gl-matrix';
import { type Transform } from '../components';
import type { DisplayObject } from '../display-objects';
import type { IElement, INode, IParentNode } from '../dom';
import { GlobalRuntime } from '../global-runtime';
import { AABB, Rectangle } from '../shapes';
import type { SceneGraphService } from './interfaces';
/**
 * update transform in scene graph
 *
 * @see https://community.khronos.org/t/scene-graphs/50542/7
 */
export declare class DefaultSceneGraphService implements SceneGraphService {
    private runtime;
    private pendingEvents;
    private boundsChangedEvent;
    constructor(runtime: GlobalRuntime);
    matches<T extends IElement>(query: string, root: T): boolean;
    querySelector<R extends IElement, T extends IElement>(query: string, root: R): T | null;
    querySelectorAll<R extends IElement, T extends IElement>(query: string, root: R): T[];
    attach<C extends INode, P extends INode & IParentNode>(child: C, parent: P, index?: number): void;
    detach<C extends INode>(child: C): void;
    getLocalPosition(element: INode): vec3;
    getLocalRotation(element: INode): quat;
    getLocalScale(element: INode): vec3;
    getLocalSkew(element: INode): vec2;
    getLocalTransform(element: INode): mat4;
    /**
     * move to position in local space
     */
    setLocalPosition(element: INode, position: vec3 | vec2, dirtify?: boolean): void;
    /**
     * translate in local space
     *
     * @example
     * ```
     * translateLocal(x, y, z)
     * translateLocal(vec3(x, y, z))
     * ```
     */
    translateLocal(element: INode, translation: vec3 | number, y?: number, z?: number): void;
    setLocalRotation(element: INode, rotation: quat | number, y?: number, z?: number, w?: number, dirtify?: boolean): void;
    /**
     * rotate in local space
     * @see @see https://docs.microsoft.com/en-us/windows/win32/api/directxmath/nf-directxmath-xmquaternionrotationrollpitchyaw
     */
    rotateLocal(element: INode, degrees: vec3 | number, y?: number, z?: number): void;
    setLocalScale(element: INode, scaling: vec3 | vec2, dirtify?: boolean): void;
    /**
     * scale in local space
     */
    scaleLocal(element: INode, scaling: vec3 | vec2): void;
    setLocalSkew(element: INode, skew: vec2 | number, y?: number, dirtify?: boolean): void;
    /**
     * set euler angles(degrees) in local space
     */
    setLocalEulerAngles(element: INode, degrees: vec3 | number, y?: number, z?: number, dirtify?: boolean): void;
    setLocalTransform(element: INode, transform: mat4): void;
    resetLocalTransform(element: INode): void;
    getPosition(element: INode): vec3;
    getRotation(element: INode): quat;
    getScale(element: INode): vec3;
    getOrigin(element: INode): vec3;
    getWorldTransform(element: INode, transform?: Transform): mat4;
    /**
     * move to position in world space
     *
     * 对应 g 原版的 move/moveTo
     * @see https://github.com/antvis/g/blob/master/packages/g-base/src/abstract/element.ts#L684-L689
     */
    setPosition(element: INode, position: vec3 | vec2): void;
    /**
     * translate in world space
     *
     * @example
     * ```
     * translate(x, y, z)
     * translate(vec3(x, y, z))
     * ```
     *
     * 对应 g 原版的 translate 2D
     * @see https://github.com/antvis/g/blob/master/packages/g-base/src/abstract/element.ts#L665-L676
     */
    translate(element: INode, translation: vec3 | number, y?: number, z?: number): void;
    setRotation(element: INode, rotation: quat | number, y?: number, z?: number, w?: number): void;
    /**
     * rotate in world space
     */
    rotate(element: INode, degrees: vec3 | number, y?: number, z?: number): void;
    /**
     * same as pivot in Pixi.js
     *
     * @see https://stackoverflow.com/questions/40748452/how-to-change-css-transform-origin-but-preserve-transformation
     */
    setOrigin(element: INode, origin: vec3 | number, y?: number, z?: number): void;
    /**
     * set euler angles(degrees) in world space
     */
    setEulerAngles(element: INode, degrees: vec3 | number, y?: number, z?: number): void;
    private getTransformedGeometryBounds;
    /**
     * won't account for children
     */
    getGeometryBounds(element: INode, render?: boolean): AABB;
    /**
     * account for children in world space
     */
    getBounds(element: INode, render?: boolean): AABB;
    /**
     * account for children in local space
     */
    getLocalBounds(element: INode): AABB;
    getBoundingClientRect(element: INode): Rectangle;
    private internalUpdateTransform;
    private internalUpdateElement;
    syncHierarchy(rootNode: INode): void;
    dirtyLocalTransform(element: INode, transform: Transform): void;
    dirtyWorldTransform(element: INode, transform: Transform): void;
    private dirtifyWorldInternal;
    dirtyToRoot(element: INode, affectChildren?: boolean): void;
    dirtifyFragment(element: INode): void;
    triggerPendingEvents(): void;
    clearPendingEvents(): void;
    private displayObjectDependencyMap;
    updateDisplayObjectDependency(name: string, oldPath: DisplayObject, newPath: DisplayObject, object: DisplayObject): void;
    informDependentDisplayObjects(object: DisplayObject): void;
}
//# sourceMappingURL=SceneGraphService.d.ts.map