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
exports.Mark = void 0;
// @todo Move this to runtime.
const Mark = ({ static: isStatic = false, } = {}) => {
    return (options) => {
        const { width, height, depth, paddingLeft, paddingRight, paddingTop, paddingBottom, padding, inset, insetLeft, insetTop, insetRight, insetBottom, margin, marginLeft, marginBottom, marginTop, marginRight, data, coordinate, theme, component, interaction, x, y, z, key, frame, labelTransform, parentKey, clip, viewStyle, title } = options, mark = __rest(options, ["width", "height", "depth", "paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "padding", "inset", "insetLeft", "insetTop", "insetRight", "insetBottom", "margin", "marginLeft", "marginBottom", "marginTop", "marginRight", "data", "coordinate", "theme", "component", "interaction", "x", "y", "z", "key", "frame", "labelTransform", "parentKey", "clip", "viewStyle", "title"]);
        return [
            Object.assign(Object.assign({ type: 'standardView', x,
                y,
                z,
                key,
                width,
                height,
                depth,
                padding,
                paddingLeft,
                paddingRight,
                paddingTop,
                inset,
                insetLeft,
                insetTop,
                insetRight,
                insetBottom,
                paddingBottom,
                theme,
                coordinate,
                component,
                interaction,
                frame,
                labelTransform,
                margin,
                marginLeft,
                marginBottom,
                marginTop,
                marginRight,
                parentKey,
                clip, style: viewStyle }, (!isStatic && { title })), { marks: [Object.assign(Object.assign(Object.assign({}, mark), { key: `${key}-0`, data }), (isStatic && { title }))] }),
        ];
    };
};
exports.Mark = Mark;
exports.Mark.props = {};
//# sourceMappingURL=mark.js.map