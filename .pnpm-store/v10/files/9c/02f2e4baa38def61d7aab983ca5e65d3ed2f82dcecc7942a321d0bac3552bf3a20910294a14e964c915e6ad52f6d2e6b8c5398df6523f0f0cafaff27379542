import { executor } from '../animations/executor';
import { createAnimationsProxy, getElementAnimationOptions, inferDefaultValue } from '../utils/animation';
import { getCachedStyle } from '../utils/cache';
export class Animation {
    constructor(context) {
        this.tasks = [];
        this.animations = new Set();
        this.context = context;
    }
    getTasks() {
        const tasks = [...this.tasks];
        this.tasks = [];
        return tasks;
    }
    add(context, callbacks) {
        this.tasks.push([context, callbacks]);
    }
    animate(localAnimation, callbacks, extendOptions) {
        var _a, _b, _c;
        (_a = callbacks === null || callbacks === void 0 ? void 0 : callbacks.before) === null || _a === void 0 ? void 0 : _a.call(callbacks);
        const animations = this.getTasks()
            .map(([context, cb]) => {
            var _a, _b, _c;
            const { element, elementType, stage } = context;
            const options = getElementAnimationOptions(this.context.options, elementType, stage, localAnimation);
            (_a = cb === null || cb === void 0 ? void 0 : cb.before) === null || _a === void 0 ? void 0 : _a.call(cb);
            const animation = options.length ? executor(element, this.inferStyle(context, extendOptions), options) : null;
            if (animation) {
                (_b = cb === null || cb === void 0 ? void 0 : cb.beforeAnimate) === null || _b === void 0 ? void 0 : _b.call(cb, animation);
                animation.finished.then(() => {
                    var _a, _b;
                    (_a = cb === null || cb === void 0 ? void 0 : cb.afterAnimate) === null || _a === void 0 ? void 0 : _a.call(cb, animation);
                    (_b = cb === null || cb === void 0 ? void 0 : cb.after) === null || _b === void 0 ? void 0 : _b.call(cb);
                    this.animations.delete(animation);
                });
            }
            else
                (_c = cb === null || cb === void 0 ? void 0 : cb.after) === null || _c === void 0 ? void 0 : _c.call(cb);
            return animation;
        })
            .filter(Boolean);
        animations.forEach((animation) => this.animations.add(animation));
        const animation = createAnimationsProxy(animations);
        if (animation) {
            (_b = callbacks === null || callbacks === void 0 ? void 0 : callbacks.beforeAnimate) === null || _b === void 0 ? void 0 : _b.call(callbacks, animation);
            animation.finished.then(() => {
                var _a, _b;
                (_a = callbacks === null || callbacks === void 0 ? void 0 : callbacks.afterAnimate) === null || _a === void 0 ? void 0 : _a.call(callbacks, animation);
                (_b = callbacks === null || callbacks === void 0 ? void 0 : callbacks.after) === null || _b === void 0 ? void 0 : _b.call(callbacks);
                this.release();
            });
        }
        else
            (_c = callbacks === null || callbacks === void 0 ? void 0 : callbacks.after) === null || _c === void 0 ? void 0 : _c.call(callbacks);
        return animation;
    }
    /**
     * <zh/> 推断额外的动画样式
     *
     * <en/> Infer additional animation styles
     * @param context - <zh/> 动画上下文 | <en/> Animation context
     * @param options - <zh/> 扩展选项 | <en/> Extend options
     * @returns <zh/> 始态样式与终态样式 | <en/> Initial style and final style
     */
    inferStyle(context, options) {
        var _a, _b;
        const { element, elementType, stage, originalStyle, updatedStyle = {} } = context;
        if (!context.modifiedStyle)
            context.modifiedStyle = Object.assign(Object.assign({}, originalStyle), updatedStyle);
        const { modifiedStyle } = context;
        const fromStyle = {};
        const toStyle = {};
        if (stage === 'enter') {
            Object.assign(fromStyle, { opacity: 0 });
        }
        else if (stage === 'exit') {
            Object.assign(toStyle, { opacity: 0 });
        }
        else if (stage === 'show') {
            Object.assign(fromStyle, { opacity: 0 });
            Object.assign(toStyle, { opacity: (_a = getCachedStyle(element, 'opacity')) !== null && _a !== void 0 ? _a : inferDefaultValue('opacity') });
        }
        else if (stage === 'hide') {
            Object.assign(fromStyle, { opacity: (_b = getCachedStyle(element, 'opacity')) !== null && _b !== void 0 ? _b : inferDefaultValue('opacity') });
            Object.assign(toStyle, { opacity: 0 });
        }
        else if (stage === 'collapse') {
            const { collapse } = options || {};
            const { target, descendants, position } = collapse;
            if (elementType === 'node') {
                // 为即将被删除的元素设置目标位置
                // Set the target position for the element to be deleted
                if (descendants.includes(element.id)) {
                    const [x, y, z] = position;
                    Object.assign(toStyle, { x, y, z });
                }
            }
            else if (elementType === 'combo') {
                if (element.id === target || descendants.includes(element.id)) {
                    const [x, y] = position;
                    Object.assign(toStyle, { x, y, childrenNode: originalStyle.childrenNode });
                }
            }
            else if (elementType === 'edge') {
                Object.assign(toStyle, { sourceNode: modifiedStyle.sourceNode, targetNode: modifiedStyle.targetNode });
            }
        }
        else if (stage === 'expand') {
            const { expand } = options || {};
            const { target, descendants, position } = expand;
            if (elementType === 'node') {
                // 设置展开节点的起点位置
                // Set the starting position of the expanded node
                if (element.id === target || descendants.includes(element.id)) {
                    const [x, y, z] = position;
                    Object.assign(fromStyle, { x, y, z });
                }
            }
            else if (elementType === 'combo') {
                // 设置展开后的组合子元素
                // Set the child elements of the expanded combo
                if (element.id === target || descendants.includes(element.id)) {
                    const [x, y, z] = position;
                    Object.assign(fromStyle, { x, y, z, childrenNode: modifiedStyle.childrenNode });
                }
            }
            else if (elementType === 'edge') {
                // 设置展开后的边的起点和终点
                // Set the starting point and end point of the edge after expansion
                Object.assign(fromStyle, { sourceNode: modifiedStyle.sourceNode, targetNode: modifiedStyle.targetNode });
            }
        }
        return [
            Object.keys(fromStyle).length > 0 ? Object.assign({}, originalStyle, fromStyle) : originalStyle,
            Object.keys(toStyle).length > 0 ? Object.assign({}, modifiedStyle, toStyle) : modifiedStyle,
        ];
    }
    stop() {
        this.animations.forEach((animation) => animation.cancel());
    }
    clear() {
        this.tasks = [];
    }
    /**
     * <zh/> 释放存量动画对象
     *
     * <en/> Release stock animation objects
     * @description see: https://github.com/antvis/G/issues/1731
     */
    release() {
        var _a, _b;
        const { canvas } = this.context;
        // @ts-expect-error private property
        const animationsWithPromises = (_b = (_a = canvas.document) === null || _a === void 0 ? void 0 : _a.timeline) === null || _b === void 0 ? void 0 : _b.animationsWithPromises;
        if (animationsWithPromises) {
            // @ts-expect-error private property
            canvas.document.timeline.animationsWithPromises = animationsWithPromises.filter((animation) => animation.playState !== 'finished');
        }
    }
    destroy() {
        this.stop();
        this.animations.clear();
        this.tasks = [];
    }
}
//# sourceMappingURL=animation.js.map