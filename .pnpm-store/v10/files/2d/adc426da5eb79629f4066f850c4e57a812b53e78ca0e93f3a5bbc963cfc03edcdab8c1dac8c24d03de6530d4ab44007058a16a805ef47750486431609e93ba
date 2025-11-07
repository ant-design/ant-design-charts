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
import { Container } from '../utils/container';
import { angleWithQuadrant, angleBetween, dist, sub } from '../utils/vector';
import { inferColor, setAnimation, setStyle, toCell, setChildren, setData, } from './facetRect';
import { useDefaultAdaptor } from './utils';
const setScale = useDefaultAdaptor((options) => {
    return {
        scale: {
            x: { guide: { type: 'axisArc' }, paddingOuter: 0, paddingInner: 0.1 },
            y: { guide: null, range: [0, 1], paddingOuter: 0, paddingInner: 0.1 },
        },
    };
});
const setCoordinate = useDefaultAdaptor((options) => {
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
    const sr = dist(p0, p3); // radius of sector
    const v0 = sub(p0, p3);
    const v1 = sub(p1, p2);
    const a01 = angleBetween(v0, v1);
    // sr = ir + ir / sin(theta/2)
    const t = 1 / Math.sin(a01 / 2);
    const ir = sr / (1 + t); // radius of inscribed circle
    const s = ir * Math.sqrt(2); // size of the bbox.
    // This assume the innerRadius of polar is 0.
    // @todo Compute the right origin if it's not 0,
    // or maybe pass the coordinates to get the right center.
    const [x0, y0] = p2;
    const a0 = angleWithQuadrant(v0);
    const a3 = a0 + a01 / 2;
    const d = ir * t;
    const cx = x0 + d * Math.sin(a3); // center x of inscribed circle
    const cy = y0 - d * Math.cos(a3); // center y of inscribed circle
    return [cx - s / 2, cy - s / 2, s, s];
}
/**
 * @todo Pack.
 */
export const FacetCircle = () => {
    return (options) => {
        const newOptions = Container.of(options)
            .call(toCell)
            .call(setEncode)
            .call(inferColor)
            .call(setCoordinate)
            .call(setData)
            .call(setChildren, subLayoutFacetCircle, createGuideFacetCircle, createGuideFacetCircle, { frame: false })
            .call(setAnimation)
            .call(setStyle)
            .call(setScale)
            .value();
        return [newOptions];
    };
};
//# sourceMappingURL=facetCircle.js.map