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
var _buffer = /*#__PURE__*/ _interop_require_default(require("./buffer.js"));
var _rejoin = /*#__PURE__*/ _interop_require_default(require("./rejoin.js"));
var _math = require("../math.js");
var _polygonContains = /*#__PURE__*/ _interop_require_default(require("../polygonContains.js"));
var _index = require("../../../d3-array/src/index.js");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _default(pointVisible, clipLine, interpolate, start) {
    return function(sink) {
        var line = clipLine(sink), ringBuffer = (0, _buffer.default)(), ringSink = clipLine(ringBuffer), polygonStarted = false, polygon, segments, ring;
        var clip = {
            point: point,
            lineStart: lineStart,
            lineEnd: lineEnd,
            polygonStart: function polygonStart() {
                clip.point = pointRing;
                clip.lineStart = ringStart;
                clip.lineEnd = ringEnd;
                segments = [];
                polygon = [];
            },
            polygonEnd: function polygonEnd() {
                clip.point = point;
                clip.lineStart = lineStart;
                clip.lineEnd = lineEnd;
                segments = (0, _index.merge)(segments);
                var startInside = (0, _polygonContains.default)(polygon, start);
                if (segments.length) {
                    if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
                    (0, _rejoin.default)(segments, compareIntersection, startInside, interpolate, sink);
                } else if (startInside) {
                    if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
                    sink.lineStart();
                    interpolate(null, null, 1, sink);
                    sink.lineEnd();
                }
                if (polygonStarted) sink.polygonEnd(), polygonStarted = false;
                segments = polygon = null;
            },
            sphere: function sphere() {
                sink.polygonStart();
                sink.lineStart();
                interpolate(null, null, 1, sink);
                sink.lineEnd();
                sink.polygonEnd();
            }
        };
        function point(lambda, phi) {
            if (pointVisible(lambda, phi)) sink.point(lambda, phi);
        }
        function pointLine(lambda, phi) {
            line.point(lambda, phi);
        }
        function lineStart() {
            clip.point = pointLine;
            line.lineStart();
        }
        function lineEnd() {
            clip.point = point;
            line.lineEnd();
        }
        function pointRing(lambda, phi) {
            ring.push([
                lambda,
                phi
            ]);
            ringSink.point(lambda, phi);
        }
        function ringStart() {
            ringSink.lineStart();
            ring = [];
        }
        function ringEnd() {
            pointRing(ring[0][0], ring[0][1]);
            ringSink.lineEnd();
            var clean = ringSink.clean(), ringSegments = ringBuffer.result(), i, n = ringSegments.length, m, segment, _$point;
            ring.pop();
            polygon.push(ring);
            ring = null;
            if (!n) return;
            // No intersections.
            if (clean & 1) {
                segment = ringSegments[0];
                if ((m = segment.length - 1) > 0) {
                    if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
                    sink.lineStart();
                    for(i = 0; i < m; ++i)sink.point((_$point = segment[i])[0], _$point[1]);
                    sink.lineEnd();
                }
                return;
            }
            // Rejoin connected segments.
            // TODO reuse ringBuffer.rejoin()?
            if (n > 1 && clean & 2) ringSegments.push(ringSegments.pop().concat(ringSegments.shift()));
            segments.push(ringSegments.filter(validSegment));
        }
        return clip;
    };
}
function validSegment(segment) {
    return segment.length > 1;
}
// Intersections are sorted along the clip edge. For both antimeridian cutting
// and circle clipping, the same comparison is used.
function compareIntersection(a, b) {
    return ((a = a.x)[0] < 0 ? a[1] - _math.halfPi - _math.epsilon : _math.halfPi - a[1]) - ((b = b.x)[0] < 0 ? b[1] - _math.halfPi - _math.epsilon : _math.halfPi - b[1]);
}
