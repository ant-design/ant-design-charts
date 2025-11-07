import { curveLinearClosed, curveLinear } from '@antv/vendor/d3-shape';
import { isPolar } from '../../utils/coordinate';
import { Curve } from './curve';
export const Area = (options, context) => {
    const { coordinate } = context;
    return (...params) => {
        const curve = isPolar(coordinate) ? curveLinearClosed : curveLinear;
        return Curve(Object.assign({ curve: curve }, options), context)(...params);
    };
};
Area.props = Object.assign(Object.assign({}, Curve.props), { defaultMarker: 'square' });
//# sourceMappingURL=area.js.map