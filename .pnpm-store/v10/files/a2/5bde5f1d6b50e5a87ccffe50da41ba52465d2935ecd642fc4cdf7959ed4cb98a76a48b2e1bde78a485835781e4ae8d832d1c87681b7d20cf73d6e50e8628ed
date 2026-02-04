import { curveStepAfter } from '@antv/vendor/d3-shape';
import { Curve } from './curve';
export const HV = (options, context) => {
    return (...params) => {
        return Curve(Object.assign({ curve: curveStepAfter }, options), context)(...params);
    };
};
HV.props = Object.assign(Object.assign({}, Curve.props), { defaultMarker: 'hv' });
//# sourceMappingURL=hv.js.map