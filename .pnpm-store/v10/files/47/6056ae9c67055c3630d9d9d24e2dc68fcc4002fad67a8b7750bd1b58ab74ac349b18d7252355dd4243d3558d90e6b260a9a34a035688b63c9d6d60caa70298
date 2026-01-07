import { Polar } from './polar';
import { Transpose } from './transpose';
export const getThetaOptions = (options = {}) => {
    const defaultOptions = {
        startAngle: -Math.PI / 2,
        endAngle: (Math.PI * 3) / 2,
        innerRadius: 0,
        outerRadius: 1,
    };
    return Object.assign(Object.assign({}, defaultOptions), options);
};
/**
 * Theta = Transpose + Polar.
 */
export const Theta = (options) => {
    const { startAngle, endAngle, innerRadius, outerRadius } = getThetaOptions(options);
    return [
        ...Transpose(),
        ...Polar({ startAngle, endAngle, innerRadius, outerRadius }),
    ];
};
Theta.props = {};
//# sourceMappingURL=theta.js.map