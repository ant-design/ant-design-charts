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
exports.View = void 0;
const util_1 = require("@antv/util");
const utils_1 = require("./utils");
/**
 * @todo Propagate more options to children.(e.g. filter)
 * @todo Propagate encode options to children. This is useful for Matrix composition.
 * @todo Move this to runtime, do not treat it as a composition to cause confusion.
 */
const View = () => {
    return (options) => {
        const { children } = options, restOptions = __rest(options, ["children"]);
        if (!Array.isArray(children))
            return [];
        const { data: viewData, scale: viewScale = {}, axis: viewAxis = {}, legend: viewLegend = {}, encode: viewEncode = {}, transform: viewTransform = [], slider: viewSlider = {} } = restOptions, rest = __rest(restOptions, ["data", "scale", "axis", "legend", "encode", "transform", "slider"]);
        const marks = children.map((_a) => {
            var { data, scale = {}, axis = {}, legend = {}, encode = {}, transform = [], slider = {} } = _a, rest = __rest(_a, ["data", "scale", "axis", "legend", "encode", "transform", "slider"]);
            return (Object.assign({ data: (0, utils_1.mergeData)(data, viewData), scale: (0, util_1.deepMix)({}, viewScale, scale), encode: (0, util_1.deepMix)({}, viewEncode, encode), transform: [...viewTransform, ...transform], axis: axis && viewAxis ? (0, util_1.deepMix)({}, viewAxis, axis) : false, legend: legend && viewLegend ? (0, util_1.deepMix)({}, viewLegend, legend) : false, slider: (0, util_1.deepMix)({}, viewSlider, slider) }, rest));
        });
        return [Object.assign(Object.assign({}, rest), { marks, type: 'standardView', slider: viewSlider })];
    };
};
exports.View = View;
exports.View.props = {};
//# sourceMappingURL=view.js.map