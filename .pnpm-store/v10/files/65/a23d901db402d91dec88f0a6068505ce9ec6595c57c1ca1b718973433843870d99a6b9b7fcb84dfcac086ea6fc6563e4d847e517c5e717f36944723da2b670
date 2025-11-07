"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    fitExtent: function() {
        return fitExtent;
    },
    fitHeight: function() {
        return fitHeight;
    },
    fitSize: function() {
        return fitSize;
    },
    fitWidth: function() {
        return fitWidth;
    }
});
var _stream = /*#__PURE__*/ _interop_require_default(require("../stream.js"));
var _bounds = /*#__PURE__*/ _interop_require_default(require("../path/bounds.js"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function fit(projection, fitBounds, object) {
    var clip = projection.clipExtent && projection.clipExtent();
    projection.scale(150).translate([
        0,
        0
    ]);
    if (clip != null) projection.clipExtent(null);
    (0, _stream.default)(object, projection.stream(_bounds.default));
    fitBounds(_bounds.default.result());
    if (clip != null) projection.clipExtent(clip);
    return projection;
}
function fitExtent(projection, extent, object) {
    return fit(projection, function(b) {
        var w = extent[1][0] - extent[0][0], h = extent[1][1] - extent[0][1], k = Math.min(w / (b[1][0] - b[0][0]), h / (b[1][1] - b[0][1])), x = +extent[0][0] + (w - k * (b[1][0] + b[0][0])) / 2, y = +extent[0][1] + (h - k * (b[1][1] + b[0][1])) / 2;
        projection.scale(150 * k).translate([
            x,
            y
        ]);
    }, object);
}
function fitSize(projection, size, object) {
    return fitExtent(projection, [
        [
            0,
            0
        ],
        size
    ], object);
}
function fitWidth(projection, width, object) {
    return fit(projection, function(b) {
        var w = +width, k = w / (b[1][0] - b[0][0]), x = (w - k * (b[1][0] + b[0][0])) / 2, y = -k * b[0][1];
        projection.scale(150 * k).translate([
            x,
            y
        ]);
    }, object);
}
function fitHeight(projection, height, object) {
    return fit(projection, function(b) {
        var h = +height, k = h / (b[1][1] - b[0][1]), x = -k * b[0][0], y = (h - k * (b[1][1] + b[0][1])) / 2;
        projection.scale(150 * k).translate([
            x,
            y
        ]);
    }, object);
}
