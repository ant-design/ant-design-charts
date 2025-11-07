import { __assign, __read } from "tslib";
/* global Keyframe */
import { isNil } from '@antv/util';
import { show, hide } from '../util';
function isStandardAnimationOption(option) {
    if (typeof option === 'boolean')
        return false;
    return 'enter' in option && 'update' in option && 'exit' in option;
}
export function parseAnimationOption(option) {
    // option is false => all animation is false
    // option is { enter: {}, update: {}, exit: {}, ...baseOption } =>
    //    { enter: { ...enter, ...baseOption }, update: { ...update, ...baseOption }, exit: { ...exit, ...baseOption } }
    // option is { enter: {}, update: {}, exit: {} } => option
    if (!option)
        return { enter: false, update: false, exit: false };
    var keys = ['enter', 'update', 'exit'];
    var baseOption = Object.fromEntries(Object.entries(option).filter(function (_a) {
        var _b = __read(_a, 1), k = _b[0];
        return !keys.includes(k);
    }));
    return Object.fromEntries(keys.map(function (k) {
        if (isStandardAnimationOption(option)) {
            if (option[k] === false)
                return [k, false];
            return [k, __assign(__assign({}, option[k]), baseOption)];
        }
        return [k, baseOption];
    }));
}
export function onAnimateFinished(animation, callback) {
    if (!animation)
        callback();
    else
        animation.finished.then(callback);
}
export function onAnimatesFinished(animations, callback) {
    if (animations.length === 0)
        callback();
    else
        Promise.all(animations.map(function (a) { return a === null || a === void 0 ? void 0 : a.finished; })).then(callback);
}
function attr(target, value) {
    if ('update' in target)
        target.update(value);
    else
        target.attr(value);
}
export function animate(target, keyframes, options) {
    if (keyframes.length === 0)
        return null;
    if (!options) {
        var state = keyframes.slice(-1)[0];
        attr(target, { style: state });
        return null;
    }
    return target.animate(keyframes, options);
}
function identicalTextNode(source, target) {
    if (source.nodeName !== 'text' || target.nodeName !== 'text')
        return false;
    if (source.attributes.text !== target.attributes.text)
        return false;
    return true;
}
/**
 * transition source shape to target shape
 * @param source
 * @param target
 * @param options
 * @param after destroy or hide source shape after transition
 */
export function transitionShape(source, target, options, after) {
    if (after === void 0) { after = 'destroy'; }
    // If source and target are both text node and with same text,
    // do not apply shape animation.
    if (identicalTextNode(source, target)) {
        source.remove();
        return [null];
    }
    var afterTransition = function () {
        if (after === 'destroy')
            source.destroy();
        else if (after === 'hide')
            hide(source);
        if (target.isVisible())
            show(target);
    };
    if (!options) {
        afterTransition();
        return [null];
    }
    var _a = options.duration, duration = _a === void 0 ? 0 : _a, _b = options.delay, delay = _b === void 0 ? 0 : _b;
    var middle = Math.ceil(+duration / 2);
    var offset = +duration / 4;
    var _c = __read(source.getGeometryBounds().center, 2), sx = _c[0], sy = _c[1];
    var _d = __read(target.getGeometryBounds().center, 2), ex = _d[0], ey = _d[1];
    var _e = __read([(sx + ex) / 2 - sx, (sy + ey) / 2 - sy], 2), mx = _e[0], my = _e[1];
    var _f = source.style.opacity, so = _f === void 0 ? 1 : _f;
    var _g = target.style.opacity, to = _g === void 0 ? 1 : _g;
    var st = source.style.transform || '';
    var tt = target.style.transform || '';
    // const st = source.style._transform || '';
    // const tt = target.style._transform || '';
    var sourceAnimation = source.animate([
        { opacity: so, transform: "translate(0, 0) ".concat(st) },
        { opacity: 0, transform: "translate(".concat(mx, ", ").concat(my, ") ").concat(st) },
    ], __assign(__assign({ fill: 'both' }, options), { duration: delay + middle + offset }));
    var targetAnimation = target.animate([
        { opacity: 0, transform: "translate(".concat(-mx, ", ").concat(-my, ") ").concat(tt), offset: 0.01 },
        { opacity: to, transform: "translate(0, 0) ".concat(tt) },
    ], __assign(__assign({ fill: 'both' }, options), { duration: middle + offset, delay: delay + middle - offset }));
    onAnimateFinished(targetAnimation, afterTransition);
    return [sourceAnimation, targetAnimation];
}
/**
 * execute transition animation on element
 * @description in the current stage, only support the following properties:
 * x, y, width, height, opacity, fill, stroke, lineWidth, radius
 * @param target element to be animated
 * @param state target properties or element
 * @param options transition options
 * @param animate whether to animate
 * @returns transition instance
 */
export function transition(target, state, options) {
    var from = {};
    var to = {};
    Object.entries(state).forEach(function (_a) {
        var _b = __read(_a, 2), key = _b[0], tarStyle = _b[1];
        if (!isNil(tarStyle)) {
            // 关闭 CSS 解析后，attr / getAttribute 只能获取到用户显式传入的属性，此时可以
            // 获取解析值，如果仍获取不到（例如 x/y），则使用 0 作为默认值
            var currStyle = target.style[key] || target.parsedStyle[key] || 0; // x/y
            if (currStyle !== tarStyle) {
                from[key] = currStyle;
                to[key] = tarStyle;
            }
        }
    });
    if (!options) {
        attr(target, to);
        return null;
    }
    return animate(target, [from, to], __assign({ fill: 'both' }, options));
}
//# sourceMappingURL=utils.js.map