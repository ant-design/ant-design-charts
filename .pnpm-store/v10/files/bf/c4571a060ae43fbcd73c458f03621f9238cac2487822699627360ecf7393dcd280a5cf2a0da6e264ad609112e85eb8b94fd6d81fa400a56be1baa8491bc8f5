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
exports.FacetCircle = void 0;
const container_1 = require("../utils/container");
const vector_1 = require("../utils/vector");
const facetRect_1 = require("./facetRect");
const utils_1 = require("./utils");
const setScale = (0, utils_1.useDefaultAdaptor)((options) => {
    return {
        scale: {
            x: { guide: { type: 'axisArc' }, paddingOuter: 0, paddingInner: 0.1 },
            y: { guide: null, range: [0, 1], paddingOuter: 0, paddingInner: 0.1 },
        },
    };
});
const setCoordinate = (0, utils_1.useDefaultAdaptor)((options) => {
    return {
        coordinate: { type: 'polar' },
    };
});
const setEncode = (options) => {
    const { encode } = options, rest = __rest(options, ["encode"]);
    const { position } = encode;
    return Object.assign(Object.assign({}, rest), { encode: { x: position } });
};
/**
 * Every facet should do not show both axisX and axisY by default.
 */
function createGuideFacetCircle(guide) {
    return (facet) => null;
}
/**
 * Use the inscribed circle of the sector as the
 * circumscribed circle of the new bbox.
 */
function subLayoutFacetCircle(data) {
    const { points } = data;
    const [p0, p1, p2, p3] = points;
    const sr = (0, vector_1.dist)(p0, p3); // radius of sector
    const v0 = (0, vector_1.sub)(p0, p3);
    const v1 = (0, vector_1.sub)(p1, p2);
    const a01 = (0, vector_1.angleBetween)(v0, v1);
    // sr = ir + ir / sin(theta/2)
    const t = 1 / Math.sin(a01 / 2);
    const ir = sr / (1 + t); // radius of inscribed circle
    const s = ir * Math.sqrt(2); // size of the bbox.
    // This assume the innerRadius of polar is 0.
    // @todo Compute the right origin if it's not 0,
    // or maybe pass the coordinates to get the right center.
    const [x0, y0] = p2;
    const a0 = (0, vector_1.angleWithQuadrant)(v0);
    const a3 = a0 + a01 / 2;
    const d = ir * t;
    const cx = x0 + d * Math.sin(a3); // center x of inscribed circle
    const cy = y0 - d * Math.cos(a3); // center y of inscribed circle
    return [cx - s / 2, cy - s / 2, s, s];
}
/**
 * @todo Pack.
 */
const FacetCircle = () => {
    return (options) => {
        const newOptions = container_1.Container.of(options)
            .call(facetRect_1.toCell)
            .call(setEncode)
            .call(facetRect_1.inferColor)
            .call(setCoordinate)
            .call(facetRect_1.setData)
            .call(facetRect_1.setChildren, subLayoutFacetCircle, createGuideFacetCircle, createGuideFacetCircle, { frame: false })
            .call(facetRect_1.setAnimation)
            .call(facetRect_1.setStyle)
            .call(setScale)
            .value();
        return [newOptions];
    };
};
exports.FacetCircle = FacetCircle;
//# sourceMappingURL=facetCircle.js.map