import { LinearAxis, rotateAxis } from './axis';
/**
 * LinearAxis component bind to x scale.
 */
export const AxisX = (options) => {
    return (...args) => {
        // empirical value for crossPadding
        const axisX = LinearAxis(Object.assign({}, { crossPadding: 50 }, options))(...args);
        rotateAxis(axisX, options);
        return axisX;
    };
};
AxisX.props = Object.assign(Object.assign({}, LinearAxis.props), { defaultPosition: 'bottom' });
export function axisXConfig() { }
//# sourceMappingURL=axisX.js.map