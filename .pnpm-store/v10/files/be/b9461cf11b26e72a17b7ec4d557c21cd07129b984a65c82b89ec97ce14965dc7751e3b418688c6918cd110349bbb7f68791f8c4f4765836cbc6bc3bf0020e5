var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { upperFirst } from '@antv/util';
import { createAnimationsProxy, inferDefaultValue, preprocessKeyframes } from '../utils/animation';
import { replaceTranslateInTransform } from '../utils/transform';
/**
 * <zh/> 动画语法执行器
 *
 * <en/> Animation syntax executor
 * @param element - <zh/> 要执行动画的图形 | <en/> shape to execute animation
 * @param keyframes - <zh/> 动画关键帧 | <en/> animation keyframes
 * @param options - <zh/> 动画语法 | <en/> animation syntax
 * @returns <zh/> 动画实例 | <en/> animation instance
 */
export const executor = (element, keyframes, options) => {
    if (!options.length)
        return null;
    const [originalStyle, modifiedStyle] = keyframes;
    /**
     * <zh/> 获取图形关键帧样式
     *
     * <en/> Get the keyframe style of the shape
     * @param shapeID - <zh/> 图形 ID | <en/> shape ID
     * @returns <zh/> 图形关键帧样式 | <en/> keyframe style of the shape
     */
    const getKeyframeStyle = (shapeID) => {
        var _a;
        if (shapeID) {
            const shape = element.getShape(shapeID);
            if (!shape)
                return null;
            const name = `get${upperFirst(shapeID)}Style`;
            const styler = ((_a = element === null || element === void 0 ? void 0 : element[name]) === null || _a === void 0 ? void 0 : _a.bind(element)) || ((attrs) => attrs);
            const fromStyle = (styler === null || styler === void 0 ? void 0 : styler(originalStyle)) || {};
            const toStyle = (styler === null || styler === void 0 ? void 0 : styler(modifiedStyle)) || {};
            return { shape, fromStyle, toStyle };
        }
        else {
            const shape = element;
            return { shape, fromStyle: originalStyle, toStyle: modifiedStyle };
        }
    };
    let mainResult;
    const subResults = options
        .map((_a) => {
        var { fields, shape: shapeID, states: enabledStates } = _a, effectTiming = __rest(_a, ["fields", "shape", "states"]);
        const keyframeStyle = getKeyframeStyle(shapeID);
        if (!keyframeStyle)
            return null;
        const { shape, fromStyle, toStyle } = keyframeStyle;
        const keyframes = [{}, {}];
        fields.forEach((attr) => {
            var _a, _b;
            Object.assign(keyframes[0], { [attr]: (_a = fromStyle[attr]) !== null && _a !== void 0 ? _a : inferDefaultValue(attr) });
            Object.assign(keyframes[1], { [attr]: (_b = toStyle[attr]) !== null && _b !== void 0 ? _b : inferDefaultValue(attr) });
        });
        // x/y -> translate
        if (keyframes.some((keyframe) => Object.keys(keyframe).some((attr) => ['x', 'y', 'z'].includes(attr)))) {
            const { x = 0, y = 0, z, transform = '' } = shape.attributes || {};
            keyframes.forEach((keyframe) => {
                var _a, _b, _c;
                // @ts-expect-error ignore type error
                keyframe.transform = replaceTranslateInTransform((_a = keyframe.x) !== null && _a !== void 0 ? _a : x, (_b = keyframe.y) !== null && _b !== void 0 ? _b : y, (_c = keyframe.z) !== null && _c !== void 0 ? _c : z, transform);
            });
        }
        const result = shape.animate(preprocessKeyframes(keyframes), effectTiming);
        if (shapeID === undefined)
            mainResult = result;
        return result;
    })
        .filter(Boolean);
    const result = mainResult || (subResults === null || subResults === void 0 ? void 0 : subResults[0]);
    if (!result)
        return null;
    return createAnimationsProxy(result, subResults.filter((result) => result !== result));
};
//# sourceMappingURL=executor.js.map