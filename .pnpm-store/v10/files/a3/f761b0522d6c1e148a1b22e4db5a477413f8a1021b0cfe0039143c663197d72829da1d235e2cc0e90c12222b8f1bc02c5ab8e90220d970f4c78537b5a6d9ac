"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.elementHoverScale = elementHoverScale;
exports.ElementHoverScale = ElementHoverScale;
const util_1 = require("@antv/util");
const d3_array_1 = require("@antv/vendor/d3-array");
const coordinate_1 = require("../utils/coordinate");
const utils_1 = require("./utils");
/**
 * Scale up elements on hover.
 */
function elementHoverScale(root, { elements: elementsof, datum, groupKey = (element) => element, scaleFactor = 1.04, shadow = true, shadowColor = 'rgba(0, 0, 0, 0.4)', shadowBlur = 10, shadowOffsetX = 0, shadowOffsetY = 2, zIndex = 10, delay = 60, emitter, state = {}, coordinate, }) {
    // Helper function to get current valid elements
    const getCurrentElements = () => {
        var _a;
        return (_a = elementsof(root)) !== null && _a !== void 0 ? _a : [];
    };
    const initialElements = getCurrentElements();
    const valueof = (0, utils_1.createValueof)(initialElements, datum);
    const elementStyle = (0, util_1.deepMix)(state, {
        active: {},
    });
    const useState = (0, utils_1.createUseState)(elementStyle, initialElements);
    const { updateState, removeState, hasState } = useState(valueof);
    const originalStyles = new Map();
    let out;
    const applyHoverEffect = (element) => {
        if (originalStyles.has(element))
            return;
        const currentTransform = element.style.transform || '';
        const currentTransformOrigin = element.style.transformOrigin || '';
        // Normalize 'none' to empty string as 'none' is not a valid transform value for concatenation
        const normalizedTransform = currentTransform === 'none' ? '' : currentTransform;
        // Save original styles for restoration
        originalStyles.set(element, {
            transform: currentTransform,
            transformOrigin: currentTransformOrigin,
            zIndex: element.style.zIndex || 0,
            shadowColor: element.style.shadowColor || '',
            shadowBlur: element.style.shadowBlur || 0,
            shadowOffsetX: element.style.shadowOffsetX || 0,
            shadowOffsetY: element.style.shadowOffsetY || 0,
        });
        // For polar coordinates without transform, set transformOrigin to coordinate center
        // When legend filtering occurs, element positioning changes from translate to absolute path coords
        // Setting transformOrigin to center ensures consistent radial growth in both cases
        if (coordinate && (0, coordinate_1.isPolar)(coordinate) && !normalizedTransform) {
            const center = coordinate.getCenter();
            element.style.transformOrigin = `${center[0]}px ${center[1]}px`;
        }
        // Apply scale transform
        const scaleTransform = `scale(${scaleFactor})`;
        element.style.transform = normalizedTransform
            ? `${normalizedTransform} ${scaleTransform}`
            : scaleTransform;
        // Apply visual effects
        element.style.zIndex = zIndex;
        if (shadow) {
            element.style.shadowColor = shadowColor;
            element.style.shadowBlur = shadowBlur;
            element.style.shadowOffsetX = shadowOffsetX;
            element.style.shadowOffsetY = shadowOffsetY;
        }
    };
    const removeHoverEffect = (element) => {
        const original = originalStyles.get(element);
        if (!original)
            return;
        // Restore all original styles
        element.style.transform = original.transform;
        element.style.transformOrigin = original.transformOrigin;
        element.style.zIndex = original.zIndex;
        element.style.shadowColor = original.shadowColor;
        element.style.shadowBlur = original.shadowBlur;
        element.style.shadowOffsetX = original.shadowOffsetX;
        element.style.shadowOffsetY = original.shadowOffsetY;
        originalStyles.delete(element);
    };
    const pointerover = (event) => {
        const { nativeEvent = true } = event;
        const element = event.target;
        // Get current elements dynamically to handle chart updates (e.g., legend filter)
        const validElements = getCurrentElements();
        const currentElementSet = new Set(validElements);
        if (!currentElementSet.has(element))
            return;
        if (out)
            clearTimeout(out);
        const currentKeyGroup = (0, d3_array_1.group)(validElements, groupKey);
        const currentKey = groupKey(element);
        const currentGroup = currentKeyGroup.get(currentKey);
        if (!currentGroup)
            return;
        const groupSet = new Set(currentGroup);
        // Remove hover effects from elements not in current group
        for (const element of validElements) {
            if (!groupSet.has(element)) {
                removeState(element, 'active');
                removeHoverEffect(element);
            }
        }
        // Apply hover effects to current group
        for (const element of currentGroup) {
            if (!hasState(element, 'active'))
                updateState(element, 'active');
            applyHoverEffect(element);
        }
        // Emit events
        if (!nativeEvent)
            return;
        emitter.emit('element:hoverscale', {
            nativeEvent,
            data: {
                data: datum(element),
                group: currentGroup.map(datum),
            },
        });
    };
    const delayReset = () => {
        if (out)
            clearTimeout(out);
        out = setTimeout(() => {
            reset();
            out = null;
        }, delay);
    };
    const reset = (nativeEvent = true) => {
        const validElements = getCurrentElements();
        // Remove hover effects and states from all valid elements
        for (const element of validElements) {
            removeState(element, 'active');
            removeHoverEffect(element);
        }
        if (nativeEvent) {
            emitter.emit('element:unhoverscale', { nativeEvent });
        }
    };
    const pointerout = () => {
        delay > 0 ? delayReset() : reset();
    };
    const pointerleave = () => {
        reset();
    };
    root.addEventListener('pointerover', pointerover);
    root.addEventListener('pointermove', pointerover);
    root.addEventListener('pointerout', pointerout);
    root.addEventListener('pointerleave', pointerleave);
    const onReset = (e) => {
        const { nativeEvent } = e;
        if (nativeEvent)
            return;
        reset(false);
    };
    const onHoverScale = (e) => {
        const { nativeEvent } = e;
        if (nativeEvent)
            return;
        const { data } = e.data;
        const currentElements = getCurrentElements();
        const element = (0, utils_1.selectElementByData)(currentElements, data, datum);
        if (!element)
            return;
        pointerover({ target: element, nativeEvent: false });
    };
    emitter.on('element:hoverscale', onHoverScale);
    emitter.on('element:unhoverscale', onReset);
    return () => {
        root.removeEventListener('pointerover', pointerover);
        root.removeEventListener('pointermove', pointerover);
        root.removeEventListener('pointerout', pointerout);
        root.removeEventListener('pointerleave', pointerleave);
        emitter.off('element:hoverscale', onHoverScale);
        emitter.off('element:unhoverscale', onReset);
        // Clean up all hover effects from current elements
        const validElements = getCurrentElements();
        for (const element of validElements) {
            removeHoverEffect(element);
        }
        originalStyles.clear();
    };
}
function ElementHoverScale(_a) {
    var { delay, createGroup, scale: scaleFactorParam, shadow, shadowColor, shadowBlur, shadowOffsetX, shadowOffsetY, zIndex } = _a, rest = __rest(_a, ["delay", "createGroup", "scale", "shadow", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY", "zIndex"]);
    return (context, _contexts, emitter) => {
        const { container, view, options } = context;
        const plotArea = (0, utils_1.selectPlotArea)(container);
        const datumof = (0, utils_1.createDatumof)(view);
        const { coordinate } = view;
        return elementHoverScale(plotArea, Object.assign({ elements: utils_1.selectG2Elements, datum: datumof, groupKey: createGroup
                ? (element) => createGroup(view)(datumof(element))
                : undefined, state: (0, utils_1.mergeState)(options, ['active']), scaleFactor: scaleFactorParam, shadow,
            shadowColor,
            shadowBlur,
            shadowOffsetX,
            shadowOffsetY,
            zIndex,
            delay,
            emitter,
            coordinate }, rest));
    };
}
ElementHoverScale.props = {
    reapplyWhenUpdate: true,
};
//# sourceMappingURL=elementHoverScale.js.map