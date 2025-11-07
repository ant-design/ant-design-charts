"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseShape = void 0;
const g_1 = require("@antv/g");
const util_1 = require("@antv/util");
const constants_1 = require("../../constants");
const animation_1 = require("../../utils/animation");
const element_1 = require("../../utils/element");
const prefix_1 = require("../../utils/prefix");
const print_1 = require("../../utils/print");
const style_1 = require("../../utils/style");
const transform_1 = require("../../utils/transform");
const visibility_1 = require("../../utils/visibility");
const get_1 = require("./../../registry/get");
/**
 * <zh/> 图形基类
 *
 * <en/> Base class for shapes
 */
class BaseShape extends g_1.CustomElement {
    constructor(options) {
        applyTransform(options.style);
        super(options);
        /**
         * <zh/> 图形实例映射表
         *
         * <en/> shape instance map
         * @internal
         */
        this.shapeMap = {};
        /**
         * <zh/> 动画实例映射表
         *
         * <en/> animation instance map
         * @internal
         */
        this.animateMap = {};
        this.render(this.attributes, this);
        this.setVisibility();
        this.bindEvents();
    }
    /**
     * <zh/> 解析后的属性
     *
     * <en/> parsed attributes
     * @returns <zh/> 解析后的属性 | <en/> parsed attributes
     * @internal
     */
    get parsedAttributes() {
        return this.attributes;
    }
    /**
     * <zh/> 创建、更新或删除图形
     *
     * <en/> create, update or remove shape
     * @param className - <zh/> 图形名称 | <en/> shape name
     * @param Ctor - <zh/> 图形类型 | <en/> shape type
     * @param style - <zh/> 图形样式。若要删除图形，传入 false | <en/> shape style. Pass false to remove the shape
     * @param container - <zh/> 容器 | <en/> container
     * @param hooks - <zh/> 钩子函数 | <en/> hooks
     * @returns <zh/> 图形实例 | <en/> shape instance
     */
    upsert(className, Ctor, style, container, hooks) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const target = this.shapeMap[className];
        // remove
        // 如果 style 为 false，则删除图形 / remove shape if style is false
        if (style === false) {
            if (target) {
                (_a = hooks === null || hooks === void 0 ? void 0 : hooks.beforeDestroy) === null || _a === void 0 ? void 0 : _a.call(hooks, target);
                container.removeChild(target);
                delete this.shapeMap[className];
                (_b = hooks === null || hooks === void 0 ? void 0 : hooks.afterDestroy) === null || _b === void 0 ? void 0 : _b.call(hooks, target);
            }
            return;
        }
        const _Ctor = typeof Ctor === 'string' ? (0, get_1.getExtension)(constants_1.ExtensionCategory.SHAPE, Ctor) : Ctor;
        if (!_Ctor) {
            throw new Error((0, print_1.format)(`Shape ${Ctor} not found`));
        }
        // create
        if (!target || target.destroyed || !(target instanceof _Ctor)) {
            if (target) {
                (_c = hooks === null || hooks === void 0 ? void 0 : hooks.beforeDestroy) === null || _c === void 0 ? void 0 : _c.call(hooks, target);
                target === null || target === void 0 ? void 0 : target.destroy();
                (_d = hooks === null || hooks === void 0 ? void 0 : hooks.afterDestroy) === null || _d === void 0 ? void 0 : _d.call(hooks, target);
            }
            (_e = hooks === null || hooks === void 0 ? void 0 : hooks.beforeCreate) === null || _e === void 0 ? void 0 : _e.call(hooks);
            const instance = new _Ctor({ className, style });
            container.appendChild(instance);
            this.shapeMap[className] = instance;
            (_f = hooks === null || hooks === void 0 ? void 0 : hooks.afterCreate) === null || _f === void 0 ? void 0 : _f.call(hooks, instance);
            return instance;
        }
        // update
        (_g = hooks === null || hooks === void 0 ? void 0 : hooks.beforeUpdate) === null || _g === void 0 ? void 0 : _g.call(hooks, target);
        (0, element_1.updateStyle)(target, style);
        (_h = hooks === null || hooks === void 0 ? void 0 : hooks.afterUpdate) === null || _h === void 0 ? void 0 : _h.call(hooks, target);
        return target;
    }
    update(attr = {}) {
        const attributes = Object.assign({}, this.attributes, attr);
        applyTransform(attributes);
        (0, element_1.setAttributes)(this, attributes);
        this.render(attributes, this);
        this.setVisibility();
    }
    bindEvents() { }
    /**
     * <zh/> 从给定的属性对象中提取图形样式属性。删除特定的属性，如位置、变换和类名
     *
     * <en/> Extracts the shape styles from a given attribute object.
     * Removes specific styles like position, transformation, and class name.
     * @param style - <zh/> 属性对象 | <en/> attribute object
     * @returns <zh/> 仅包含样式属性的对象 | <en/> An object containing only the style properties.
     */
    getGraphicStyle(style) {
        return (0, style_1.getSubShapeStyle)(style);
    }
    /**
     * Get the prefix pairs for composite shapes used to handle animation
     * @returns tuples array where each tuple contains a key corresponding to a method `get${key}Style` and its shape prefix
     * @internal
     */
    get compositeShapes() {
        return [
            ['badges', 'badge-'],
            ['ports', 'port-'],
        ];
    }
    animate(keyframes, options) {
        if (keyframes.length === 0)
            return null;
        const animationMap = [];
        // 如果 keyframes 中存在 x/y/z ，替换为 transform
        // if x/y/z exists in keyframes, replace them with transform
        if (keyframes[0].x !== undefined || keyframes[0].y !== undefined || keyframes[0].z !== undefined) {
            const { x: _x = 0, y: _y = 0, z: _z = 0 } = this.attributes;
            keyframes.forEach((keyframe) => {
                const { x = _x, y = _y, z = _z } = keyframe;
                Object.assign(keyframe, { transform: z ? [['translate3d', x, y, z]] : [['translate', x, y]] });
            });
        }
        const result = super.animate(keyframes, options);
        if (result) {
            releaseAnimation(this, result);
            animationMap.push(result);
        }
        if (Array.isArray(keyframes) && keyframes.length > 0) {
            // 如果 keyframes 中仅存在 skippedAttrs 中的属性，则仅更新父元素属性（跳过子图形）
            // if only skippedAttrs exist in keyframes, only update parent element attributes (skip child shapes)
            const skippedAttrs = ['transform', 'transformOrigin', 'x', 'y', 'z', 'zIndex'];
            if (Object.keys(keyframes[0]).some((attr) => !skippedAttrs.includes(attr))) {
                Object.entries(this.shapeMap).forEach(([key, shape]) => {
                    // 如果存在方法名为 `get${key}Style` 的方法，则使用该方法获取样式，并自动为该图形实例创建动画
                    // if there is a method named `get${key}Style`, use this method to get style and automatically create animation for the shape instance
                    const methodName = `get${(0, util_1.upperFirst)(key)}Style`;
                    const method = this[methodName];
                    if ((0, util_1.isFunction)(method)) {
                        const subKeyframes = keyframes.map((style) => method.call(this, Object.assign(Object.assign({}, this.attributes), style)));
                        const result = shape.animate((0, animation_1.preprocessKeyframes)(subKeyframes), options);
                        if (result) {
                            releaseAnimation(shape, result);
                            animationMap.push(result);
                        }
                    }
                });
                const handleCompositeShapeAnimation = (shapeSet, name) => {
                    if (!(0, util_1.isEmpty)(shapeSet)) {
                        const methodName = `get${(0, util_1.upperFirst)(name)}Style`;
                        const method = this[methodName];
                        if ((0, util_1.isFunction)(method)) {
                            const itemsKeyframes = keyframes.map((style) => method.call(this, Object.assign(Object.assign({}, this.attributes), style)));
                            Object.entries(itemsKeyframes[0]).map(([key]) => {
                                const subKeyframes = itemsKeyframes.map((styles) => styles[key]);
                                const shape = shapeSet[key];
                                if (shape) {
                                    const result = shape.animate((0, animation_1.preprocessKeyframes)(subKeyframes), options);
                                    if (result) {
                                        releaseAnimation(shape, result);
                                        animationMap.push(result);
                                    }
                                }
                            });
                        }
                    }
                };
                this.compositeShapes.forEach(([key, prefix]) => {
                    const shapeSet = (0, prefix_1.subObject)(this.shapeMap, prefix);
                    handleCompositeShapeAnimation(shapeSet, key);
                });
            }
        }
        return (0, animation_1.createAnimationsProxy)(animationMap);
    }
    getShape(name) {
        return this.shapeMap[name];
    }
    setVisibility() {
        const { visibility } = this.attributes;
        (0, visibility_1.setVisibility)(this, visibility);
    }
    destroy() {
        this.shapeMap = {};
        this.animateMap = {};
        super.destroy();
    }
}
exports.BaseShape = BaseShape;
/**
 * <zh/> 释放动画
 *
 * <en/> Release animation
 * @param target - <zh/> 目标对象 | <en/> target object
 * @param animation - <zh/> 动画实例 | <en/> animation instance
 * @description see: https://github.com/antvis/G/issues/1731
 */
function releaseAnimation(target, animation) {
    animation === null || animation === void 0 ? void 0 : animation.finished.then(() => {
        // @ts-expect-error private property
        const index = target.activeAnimations.findIndex((_) => _ === animation);
        // @ts-expect-error private property
        if (index > -1)
            target.activeAnimations.splice(index, 1);
    });
}
/**
 * <zh/> 应用 transform
 *
 * <en/> Apply transform
 * @param style - <zh/> 样式 | <en/> style
 * @returns <zh/> 样式 | <en/> style
 */
function applyTransform(style) {
    if (!style)
        return {};
    if ('x' in style || 'y' in style || 'z' in style) {
        const { x = 0, y = 0, z, transform } = style;
        const newTransform = (0, transform_1.replaceTranslateInTransform)(x, y, z, transform);
        if (newTransform)
            style.transform = newTransform;
    }
    return style;
}
//# sourceMappingURL=base-shape.js.map