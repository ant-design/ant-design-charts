"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.keyframeInterpolate = keyframeInterpolate;
var tslib_1 = require("tslib");
var interpolate_1 = require("./interpolate");
function keyframeInterpolate(element, from, to, options) {
    if (!options) {
        element.attr('__keyframe_data__', to);
        return null;
    }
    var _a = options.duration, duration = _a === void 0 ? 0 : _a;
    var int = (0, interpolate_1.interpolate)(from, to);
    var count = Math.ceil(+duration / 16);
    var keyframes = new Array(count)
        .fill(0)
        .map(function (datum, index, array) { return ({ __keyframe_data__: int(index / (array.length - 1)) }); });
    // @ts-ignore
    return element.animate(keyframes, tslib_1.__assign({ fill: 'both' }, options));
}
//# sourceMappingURL=keyframe-interpolate.js.map