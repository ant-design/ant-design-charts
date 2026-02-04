import { LinearAxis, rotateAxis } from './axis';
/**
 * LinearAxis component bind to y scale.
 */
export const AxisY = (options) => {
    return (...args) => {
        const axisY = LinearAxis(Object.assign({}, { crossPadding: 10 }, options))(...args);
        rotateAxis(axisY, options);
        return axisY;
    };
};
AxisY.props = Object.assign(Object.assign({}, LinearAxis.props), { defaultPosition: 'left' });
//# sourceMappingURL=axisY.js.map