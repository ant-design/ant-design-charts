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
import { curveMonotoneX, curveMonotoneY, curveCatmullRomClosed, } from '@antv/vendor/d3-shape';
import { isPolar, isTranspose } from '../../utils/coordinate';
import { Curve } from './curve';
export const Smooth = (options, context) => {
    const rest = __rest(options, []);
    const { coordinate } = context;
    return (...params) => {
        const curve = isPolar(coordinate)
            ? curveCatmullRomClosed
            : isTranspose(coordinate)
                ? curveMonotoneY
                : curveMonotoneX;
        return Curve(Object.assign({ curve }, rest), context)(...params);
    };
};
Smooth.props = Object.assign(Object.assign({}, Curve.props), { defaultMarker: 'smooth' });
//# sourceMappingURL=smooth.js.map