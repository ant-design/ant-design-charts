import { scaleOf } from './utils';
import { LegendContinuous } from './legendContinuous';
export const LegendContinuousSize = (options) => {
    return (context) => {
        const { scales } = context;
        const sizeScale = scaleOf(scales, 'size');
        return LegendContinuous(Object.assign({}, {
            type: 'size',
            data: sizeScale.getTicks().map((value, index) => ({
                value,
                label: String(value),
            })),
        }, options))(context);
    };
};
LegendContinuousSize.props = Object.assign(Object.assign({}, LegendContinuous.props), { defaultPosition: 'top', defaultOrientation: 'horizontal' });
//# sourceMappingURL=legendContinuousSize.js.map