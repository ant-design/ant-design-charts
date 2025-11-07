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
var _index = require("../../d3-array/src/index.js");
var _cartesian = require("./cartesian.js");
var _math = require("./math.js");
function longitude(point) {
    return (0, _math.abs)(point[0]) <= _math.pi ? point[0] : (0, _math.sign)(point[0]) * (((0, _math.abs)(point[0]) + _math.pi) % _math.tau - _math.pi);
}
function _default(polygon, point) {
    var lambda = longitude(point), phi = point[1], sinPhi = (0, _math.sin)(phi), normal = [
        (0, _math.sin)(lambda),
        -(0, _math.cos)(lambda),
        0
    ], angle = 0, winding = 0;
    var sum = new _index.Adder();
    if (sinPhi === 1) phi = _math.halfPi + _math.epsilon;
    else if (sinPhi === -1) phi = -_math.halfPi - _math.epsilon;
    for(var i = 0, n = polygon.length; i < n; ++i){
        if (!(m = (ring = polygon[i]).length)) continue;
        var ring, m, point0 = ring[m - 1], lambda0 = longitude(point0), phi0 = point0[1] / 2 + _math.quarterPi, sinPhi0 = (0, _math.sin)(phi0), cosPhi0 = (0, _math.cos)(phi0);
        for(var j = 0; j < m; ++j, lambda0 = lambda1, sinPhi0 = sinPhi1, cosPhi0 = cosPhi1, point0 = point1){
            var point1 = ring[j], lambda1 = longitude(point1), phi1 = point1[1] / 2 + _math.quarterPi, sinPhi1 = (0, _math.sin)(phi1), cosPhi1 = (0, _math.cos)(phi1), delta = lambda1 - lambda0, sign = delta >= 0 ? 1 : -1, absDelta = sign * delta, antimeridian = absDelta > _math.pi, k = sinPhi0 * sinPhi1;
            sum.add((0, _math.atan2)(k * sign * (0, _math.sin)(absDelta), cosPhi0 * cosPhi1 + k * (0, _math.cos)(absDelta)));
            angle += antimeridian ? delta + sign * _math.tau : delta;
            // Are the longitudes either side of the point’s meridian (lambda),
            // and are the latitudes smaller than the parallel (phi)?
            if (antimeridian ^ lambda0 >= lambda ^ lambda1 >= lambda) {
                var arc = (0, _cartesian.cartesianCross)((0, _cartesian.cartesian)(point0), (0, _cartesian.cartesian)(point1));
                (0, _cartesian.cartesianNormalizeInPlace)(arc);
                var intersection = (0, _cartesian.cartesianCross)(normal, arc);
                (0, _cartesian.cartesianNormalizeInPlace)(intersection);
                var phiArc = (antimeridian ^ delta >= 0 ? -1 : 1) * (0, _math.asin)(intersection[2]);
                if (phi > phiArc || phi === phiArc && (arc[0] || arc[1])) {
                    winding += antimeridian ^ delta >= 0 ? 1 : -1;
                }
            }
        }
    }
    // First, determine whether the South pole is inside or outside:
    //
    // It is inside if:
    // * the polygon winds around it in a clockwise direction.
    // * the polygon does not (cumulatively) wind around it, but has a negative
    //   (counter-clockwise) area.
    //
    // Second, count the (signed) number of times a segment crosses a lambda
    // from the point to the South pole.  If it is zero, then the point is the
    // same side as the South pole.
    return (angle < -_math.epsilon || angle < _math.epsilon && sum < -_math.epsilon2) ^ winding & 1;
}
