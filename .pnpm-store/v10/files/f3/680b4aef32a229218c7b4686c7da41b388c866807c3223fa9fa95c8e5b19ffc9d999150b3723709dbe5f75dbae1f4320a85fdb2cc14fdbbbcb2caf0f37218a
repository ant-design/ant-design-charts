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
    default: function() {
        return _default;
    },
    mercatorProjection: function() {
        return mercatorProjection;
    },
    mercatorRaw: function() {
        return mercatorRaw;
    }
});
var _math = require("../math.js");
var _rotation = /*#__PURE__*/ _interop_require_default(require("../rotation.js"));
var _index = /*#__PURE__*/ _interop_require_default(require("./index.js"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function mercatorRaw(lambda, phi) {
    return [
        lambda,
        (0, _math.log)((0, _math.tan)((_math.halfPi + phi) / 2))
    ];
}
mercatorRaw.invert = function(x, y) {
    return [
        x,
        2 * (0, _math.atan)((0, _math.exp)(y)) - _math.halfPi
    ];
};
function _default() {
    return mercatorProjection(mercatorRaw).scale(961 / _math.tau);
}
function mercatorProjection(project) {
    var m = (0, _index.default)(project), center = m.center, scale = m.scale, translate = m.translate, clipExtent = m.clipExtent, x0 = null, y0, x1, y1; // clip extent
    m.scale = function(_) {
        return arguments.length ? (scale(_), reclip()) : scale();
    };
    m.translate = function(_) {
        return arguments.length ? (translate(_), reclip()) : translate();
    };
    m.center = function(_) {
        return arguments.length ? (center(_), reclip()) : center();
    };
    m.clipExtent = function(_) {
        return arguments.length ? (_ == null ? x0 = y0 = x1 = y1 = null : (x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]), reclip()) : x0 == null ? null : [
            [
                x0,
                y0
            ],
            [
                x1,
                y1
            ]
        ];
    };
    function reclip() {
        var k = _math.pi * scale(), t = m((0, _rotation.default)(m.rotate()).invert([
            0,
            0
        ]));
        return clipExtent(x0 == null ? [
            [
                t[0] - k,
                t[1] - k
            ],
            [
                t[0] + k,
                t[1] + k
            ]
        ] : project === mercatorRaw ? [
            [
                Math.max(t[0] - k, x0),
                y0
            ],
            [
                Math.min(t[0] + k, x1),
                y1
            ]
        ] : [
            [
                x0,
                Math.max(t[1] - k, y0)
            ],
            [
                x1,
                Math.min(t[1] + k, y1)
            ]
        ]);
    }
    return reclip();
}
