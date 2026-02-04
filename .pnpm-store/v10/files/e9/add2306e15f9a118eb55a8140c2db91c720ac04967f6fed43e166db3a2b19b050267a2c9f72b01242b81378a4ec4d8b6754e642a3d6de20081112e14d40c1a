import { Polar } from './polar';
import { Parallel } from './parallel';
/**
 *  Radar = Parallel + Polar.
 */
export const Radar = (options) => {
    const { startAngle = -Math.PI / 2, endAngle = (Math.PI * 3) / 2, innerRadius = 0, outerRadius = 1, } = options;
    return [
        ...Parallel(),
        ...Polar({ startAngle, endAngle, innerRadius, outerRadius }),
    ];
};
Radar.props = {};
//# sourceMappingURL=radar.js.map