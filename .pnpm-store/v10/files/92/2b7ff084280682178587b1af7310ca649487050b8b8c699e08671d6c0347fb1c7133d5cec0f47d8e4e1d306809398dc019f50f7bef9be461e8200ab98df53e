import { curveStepBefore } from '@antv/vendor/d3-shape';
import { Curve } from './curve';
export const VH = (options, context) => {
    return (...params) => {
        return Curve(Object.assign({ curve: curveStepBefore }, options), context)(...params);
    };
};
VH.props = Object.assign(Object.assign({}, Curve.props), { defaultMarker: 'vh' });
//# sourceMappingURL=vh.js.map