import { Polar } from './polar';
export const getRadialOptions = (options = {}) => {
    const defaultOptions = {
        startAngle: -Math.PI / 2,
        endAngle: (Math.PI * 3) / 2,
        innerRadius: 0,
        outerRadius: 1,
    };
    return Object.assign(Object.assign({}, defaultOptions), options);
};
/**
 * Radial
 */
export const Radial = (options) => {
    const { startAngle, endAngle, innerRadius, outerRadius } = getRadialOptions(options);
    return [
        ['transpose'],
        ['translate', 0.5, 0.5],
        ['reflect'],
        ['translate', -0.5, -0.5],
        ...Polar({ startAngle, endAngle, innerRadius, outerRadius }),
    ];
};
Radial.props = {};
//# sourceMappingURL=radial.js.map