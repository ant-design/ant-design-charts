import { curveLinear, curveLinearClosed } from '@antv/vendor/d3-shape';
import { isPolar } from '../../utils/coordinate';
import { Curve } from './curve';
export const Line = (options, context) => {
    const { coordinate } = context;
    return (...params) => {
        const curve = isPolar(coordinate) ? curveLinearClosed : curveLinear;
        return Curve(Object.assign({ curve }, options), context)(...params);
    };
};
Line.props = Object.assign(Object.assign({}, Curve.props), { defaultMarker: 'line' });
//# sourceMappingURL=line.js.map