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
import { path as d3path } from '@antv/vendor/d3-path';
import { select } from '../../utils/selection';
import { applyStyle } from '../utils';
import { angle, sub, add } from '../../utils/vector';
import { defined } from '../../utils/helper';
import { Curve } from './curve';
/**
 *
 * x9-x0---------x1-x2
 * /   |r1        |r2 \
 *x8---p0---------p1---x3
 * \ r4|          | r3 /
 *  x7-x6--------x5-x4
 */
function stroke(path, p0, p1, s0, s1) {
    const v = sub(p1, p0);
    const a = angle(v);
    const a1 = a + Math.PI / 2;
    const r1 = [(s0 / 2) * Math.cos(a1), (s0 / 2) * Math.sin(a1)];
    const r2 = [(s1 / 2) * Math.cos(a1), (s1 / 2) * Math.sin(a1)];
    const r3 = [(s1 / 2) * Math.cos(a), (s1 / 2) * Math.sin(a)];
    const r4 = [(s0 / 2) * Math.cos(a), (s0 / 2) * Math.sin(a)];
    const x0 = add(p0, r1);
    const x1 = add(p1, r2);
    const x2 = add(x1, r3);
    const x3 = add(p1, r3);
    const x4 = sub(x3, r2);
    const x5 = sub(p1, r2);
    const x6 = sub(p0, r1);
    const x7 = sub(x6, r4);
    const x8 = sub(p0, r4);
    const x9 = sub(x0, r4);
    path.moveTo(...x0);
    path.lineTo(...x1);
    path.arcTo(...x2, ...x3, s1 / 2);
    path.arcTo(...x4, ...x5, s1 / 2);
    path.lineTo(...x6);
    path.arcTo(...x7, ...x8, s0 / 2);
    path.arcTo(...x9, ...x0, s0 / 2);
    path.closePath();
}
// @todo Support connect and connectStyle.
export const Trail = (options, context) => {
    const { document } = context;
    return (P, value, defaults) => {
        const { seriesSize, color } = value;
        const { color: defaultColor } = defaults, rest = __rest(defaults, ["color"]);
        const path = d3path();
        for (let i = 0; i < P.length - 1; i++) {
            const p0 = P[i];
            const p1 = P[i + 1];
            const s0 = seriesSize[i];
            const s1 = seriesSize[i + 1];
            if ([...p0, ...p1].every(defined))
                stroke(path, p0, p1, s0, s1);
        }
        return select(document.createElement('path', {}))
            .call(applyStyle, rest)
            .style('fill', color || defaultColor)
            .style('d', path.toString())
            .call(applyStyle, options)
            .node();
    };
};
Trail.props = Object.assign(Object.assign({}, Curve.props), { defaultMarker: 'line' });
//# sourceMappingURL=trail.js.map