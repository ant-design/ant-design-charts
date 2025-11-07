"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _identity = /*#__PURE__*/ _interop_require_default(require("../identity.js"));
var _stream = /*#__PURE__*/ _interop_require_default(require("../stream.js"));
var _area = /*#__PURE__*/ _interop_require_default(require("./area.js"));
var _bounds = /*#__PURE__*/ _interop_require_default(require("./bounds.js"));
var _centroid = /*#__PURE__*/ _interop_require_default(require("./centroid.js"));
var _context = /*#__PURE__*/ _interop_require_default(require("./context.js"));
var _measure = /*#__PURE__*/ _interop_require_default(require("./measure.js"));
var _string = /*#__PURE__*/ _interop_require_default(require("./string.js"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _default(projection, context) {
    var digits = 3, pointRadius = 4.5, projectionStream, contextStream;
    function path(object) {
        if (object) {
            if (typeof pointRadius === "function") contextStream.pointRadius(+pointRadius.apply(this, arguments));
            (0, _stream.default)(object, projectionStream(contextStream));
        }
        return contextStream.result();
    }
    path.area = function(object) {
        (0, _stream.default)(object, projectionStream(_area.default));
        return _area.default.result();
    };
    path.measure = function(object) {
        (0, _stream.default)(object, projectionStream(_measure.default));
        return _measure.default.result();
    };
    path.bounds = function(object) {
        (0, _stream.default)(object, projectionStream(_bounds.default));
        return _bounds.default.result();
    };
    path.centroid = function(object) {
        (0, _stream.default)(object, projectionStream(_centroid.default));
        return _centroid.default.result();
    };
    path.projection = function(_) {
        if (!arguments.length) return projection;
        projectionStream = _ == null ? (projection = null, _identity.default) : (projection = _).stream;
        return path;
    };
    path.context = function(_) {
        if (!arguments.length) return context;
        contextStream = _ == null ? (context = null, new _string.default(digits)) : new _context.default(context = _);
        if (typeof pointRadius !== "function") contextStream.pointRadius(pointRadius);
        return path;
    };
    path.pointRadius = function(_) {
        if (!arguments.length) return pointRadius;
        pointRadius = typeof _ === "function" ? _ : (contextStream.pointRadius(+_), +_);
        return path;
    };
    path.digits = function(_) {
        if (!arguments.length) return digits;
        if (_ == null) digits = null;
        else {
            var d = Math.floor(_);
            if (!(d >= 0)) throw new RangeError("invalid digits: ".concat(_));
            digits = d;
        }
        if (context === null) contextStream = new _string.default(digits);
        return path;
    };
    return path.projection(projection).digits(digits).context(context);
}
