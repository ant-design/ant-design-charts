"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.interpolatize = void 0;
const util_1 = require("@antv/util");
const compose_1 = require("./compose");
const createInterpolatorRound = (interpolator) => {
    return (t) => {
        // If result is not number, it can't be rounded.
        const res = interpolator(t);
        return (0, util_1.isNumber)(res) ? Math.round(res) : res;
    };
};
function interpolatize(rangeOf, normalizeDomain) {
    return (Scale) => {
        Scale.prototype.rescale = function () {
            this.initRange();
            this.nice();
            const [transform] = this.chooseTransforms();
            this.composeOutput(transform, this.chooseClamp(transform));
        };
        Scale.prototype.initRange = function () {
            const { interpolator } = this.options;
            this.options.range = rangeOf(interpolator);
        };
        Scale.prototype.composeOutput = function (transform, clamp) {
            const { domain, interpolator, round } = this.getOptions();
            const normalize = normalizeDomain(domain.map(transform));
            const interpolate = round ? createInterpolatorRound(interpolator) : interpolator;
            this.output = (0, compose_1.compose)(interpolate, normalize, clamp, transform);
        };
        Scale.prototype.invert = undefined;
    };
}
exports.interpolatize = interpolatize;
//# sourceMappingURL=interpolatize.js.map