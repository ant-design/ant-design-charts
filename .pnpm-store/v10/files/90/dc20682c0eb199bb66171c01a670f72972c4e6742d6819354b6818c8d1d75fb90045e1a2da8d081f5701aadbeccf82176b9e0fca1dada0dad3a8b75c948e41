import { curveStep } from '@antv/vendor/d3-shape';
import { Curve } from './curve';
export const HVH = (options, context) => {
    return (...params) => {
        return Curve(Object.assign({ curve: curveStep }, options), context)(...params);
    };
};
HVH.props = Object.assign(Object.assign({}, Curve.props), { defaultMarker: 'hvh' });
//# sourceMappingURL=hvh.js.map