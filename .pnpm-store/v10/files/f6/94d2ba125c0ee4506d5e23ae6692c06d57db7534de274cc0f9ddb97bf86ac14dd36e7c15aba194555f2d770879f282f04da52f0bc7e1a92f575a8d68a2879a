import type { mat3, vec2 } from 'gl-matrix';
import { mat4, quat, vec3 } from 'gl-matrix';
import type { PropertyParseOptions } from '../css';
import type { DisplayObjectConfig, IAnimation, IChildNode } from '../dom';
import { Element } from '../dom/Element';
import { MutationEvent } from '../dom/MutationEvent';
import type { BaseStyleProps, ParsedBaseStyleProps } from '../types';
export declare function isDisplayObject(value: any): value is DisplayObject;
export declare const attrModifiedEvent: MutationEvent;
/**
 * prototype chains: DisplayObject -> Element -> Node -> EventTarget
 *
 * mixins: Animatable, Transformable, Visible
 * @see https://github.com/tannerntannern/ts-mixer/blob/master/README.md#mixing-generic-classes
 *
 * Provide abilities in scene graph, such as:
 * * transform `translate/rotate/scale`
 * * add/remove child
 * * visibility and z-index
 *
 * Those abilities are implemented with those components: `Transform/Sortable/Visible`.
 *
 * Emit following events:
 * * init
 * * destroy
 * * attributeChanged
 */
export declare class DisplayObject<StyleProps extends BaseStyleProps = any, ParsedStyleProps extends ParsedBaseStyleProps = any> extends Element<StyleProps, ParsedStyleProps> {
    static PARSED_STYLE_LIST: Set<string>;
    /**
     * contains style props in constructor's params, eg. fill, stroke...
     */
    config: DisplayObjectConfig<StyleProps>;
    isCustomElement: boolean;
    isMutationObserved: boolean;
    /**
     * push to active animations after calling `animate()`
     */
    private activeAnimations;
    constructor(config: DisplayObjectConfig<StyleProps>);
    destroy(): void;
    cloneNode(deep?: boolean, customCloneFunc?: (name: string, attribute: any) => any): this;
    private initAttributes;
    setAttribute<Key extends keyof StyleProps>(name: Key, value: StyleProps[Key], force?: boolean, memoize?: boolean): void;
    /**
     * called when attributes get changed or initialized
     */
    internalSetAttribute<Key extends keyof StyleProps>(name: Key, value: StyleProps[Key], parseOptions?: Partial<PropertyParseOptions>): void;
    /**
     * returns different values than getBoundingClientRect(), as the latter returns value relative to the viewport
     * @see https://developer.mozilla.org/en-US/docs/Web/API/SVGGraphicsElement/getBBox
     *
     * FIXME: It is worth noting that getBBox responds to original untransformed values of a drawn object.
     * @see https://www.w3.org/Graphics/SVG/IG/resources/svgprimer.html#getBBox
     */
    getBBox(): DOMRect;
    setOrigin(position: vec3 | vec2 | number, y?: number, z?: number): this;
    getOrigin(): vec3;
    /**
     * set position in world space
     */
    setPosition(position: vec3 | vec2 | number, y?: number, z?: number): this;
    /**
     * set position in local space
     */
    setLocalPosition(position: vec3 | vec2 | number, y?: number, z?: number): this;
    /**
     * translate in world space
     */
    translate(position: vec3 | vec2 | number, y?: number, z?: number): this;
    /**
     * translate in local space
     */
    translateLocal(position: vec3 | vec2 | number, y?: number, z?: number): this;
    getPosition(): vec3;
    getLocalPosition(): vec3;
    /**
     * compatible with G 3.0
     *
     * scaling in local space
     * scale(10) = scale(10, 10, 10)
     *
     * we can't set scale in world space
     */
    scale(scaling: vec3 | vec2 | number, y?: number, z?: number): this;
    scaleLocal(scaling: vec3 | vec2 | number, y?: number, z?: number): this;
    /**
     * set scaling in local space
     */
    setLocalScale(scaling: vec3 | vec2 | number, y?: number, z?: number): this;
    /**
     * get scaling in local space
     */
    getLocalScale(): vec3;
    /**
     * get scaling in world space
     */
    getScale(): vec3;
    /**
     * only return degrees of Z axis in world space
     */
    getEulerAngles(): number;
    /**
     * only return degrees of Z axis in local space
     */
    getLocalEulerAngles(): number;
    /**
     * set euler angles(degrees) in world space
     */
    setEulerAngles(z: number): this;
    /**
     * set euler angles(degrees) in local space
     */
    setLocalEulerAngles(z: number): this;
    rotateLocal(x: number, y?: number, z?: number): this;
    rotate(x: number, y?: number, z?: number): this;
    setRotation(rotation: quat | number, y?: number, z?: number, w?: number): this;
    setLocalRotation(rotation: quat | number, y?: number, z?: number, w?: number): this;
    setLocalSkew(skew: vec2 | number, y?: number): this;
    getRotation(): quat;
    getLocalRotation(): quat;
    getLocalSkew(): vec2;
    getLocalTransform(): mat4;
    getWorldTransform(): mat4;
    setLocalTransform(transform: mat4): this;
    resetLocalTransform(): void;
    /**
     * returns an array of all Animation objects affecting this element
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/getAnimations
     */
    getAnimations(): IAnimation[];
    /**
     * create an animation with WAAPI
     * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Element/animate
     */
    animate(keyframes: Keyframe[] | PropertyIndexedKeyframes | null, options?: number | KeyframeAnimationOptions): IAnimation | null;
    /**
     * shortcut for Used value of `visibility`
     */
    isVisible(): boolean;
    get interactive(): boolean;
    set interactive(b: boolean);
    isInteractive(): boolean;
    isCulled(): boolean;
    /**
     * bring to front in current group
     */
    toFront(): this;
    /**
     * send to back in current group
     */
    toBack(): this;
    /**
     * compatible with G 3.0
     * @alias object.config
     * @deprecated
     */
    getConfig(): DisplayObjectConfig<StyleProps>;
    /**
     * @alias style
     * @example
     * circle.style.r = 10;
     * const r = circle.style;
     * @deprecated
     */
    attr(): StyleProps;
    attr(name: Partial<StyleProps>): DisplayObject<StyleProps>;
    attr<Key extends keyof StyleProps>(name: Key): StyleProps[Key];
    attr<Key extends keyof StyleProps>(name: Key, value: StyleProps[Key]): DisplayObject<StyleProps>;
    /**
     * return 3x3 matrix in world space
     * @deprecated
     */
    getMatrix(transformMat4?: mat4): mat3;
    /**
     * return 3x3 matrix in local space
     * @deprecated
     */
    getLocalMatrix(): mat3;
    /**
     * set 3x3 matrix in world space
     * @deprecated
     */
    setMatrix(mat: mat3): void;
    /**
     * set 3x3 matrix in local space
     * @deprecated
     */
    setLocalMatrix(mat: mat3): void;
    /**
     * Use `visibility: visible` instead.
     * @deprecated
     */
    show(): void;
    /**
     * Use `visibility: hidden` instead.
     * @deprecated
     */
    hide(): void;
    /**
     * Use `childElementCount` instead.
     * @deprecated
     */
    getCount(): number;
    /**
     * Use `parentElement` instead.
     * @deprecated
     */
    getParent(): DisplayObject | null;
    /**
     * Use `children` instead.
     * @deprecated
     */
    getChildren(): DisplayObject[];
    /**
     * Use `firstElementChild` instead.
     * @deprecated
     */
    getFirst(): DisplayObject | null;
    /**
     * Use `lastElementChild` instead.
     * @deprecated
     */
    getLast(): DisplayObject | null;
    /**
     * Use `this.children[index]` instead.
     * @deprecated
     */
    getChildByIndex(index: number): DisplayObject | null;
    /**
     * Use `appendChild` instead.
     * @deprecated
     */
    add<T extends IChildNode>(child: T, index?: number): T;
    /**
     * @deprecated
     */
    set<StyleProps extends BaseStyleProps, Key extends keyof DisplayObjectConfig<StyleProps>>(name: Key, value: DisplayObjectConfig<StyleProps>[Key]): void;
    /**
     * @deprecated
     */
    get<StyleProps extends BaseStyleProps>(name: keyof DisplayObjectConfig<StyleProps>): any;
    /**
     * Use `setPosition` instead.
     * @deprecated
     */
    moveTo(position: vec3 | vec2 | number, y?: number, z?: number): this;
    /**
     * Use `setPosition` instead.
     * @deprecated
     */
    move(position: vec3 | vec2 | number, y?: number, z?: number): this;
    /**
     * Use `this.style.zIndex` instead.
     * @deprecated
     */
    setZIndex(zIndex: number): this;
}
//# sourceMappingURL=DisplayObject.d.ts.map