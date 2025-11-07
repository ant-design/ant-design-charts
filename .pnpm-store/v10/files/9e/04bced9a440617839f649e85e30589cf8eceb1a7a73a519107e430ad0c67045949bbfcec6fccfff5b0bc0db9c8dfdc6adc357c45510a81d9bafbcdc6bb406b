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
    robinsonRaw: function() {
        return robinsonRaw;
    }
});
var _index = require("../../d3-geo/src/index.js");
var _math = require("./math.js");
var K = [
    [
        0.9986,
        -0.062
    ],
    [
        1.0000,
        0.0000
    ],
    [
        0.9986,
        0.0620
    ],
    [
        0.9954,
        0.1240
    ],
    [
        0.9900,
        0.1860
    ],
    [
        0.9822,
        0.2480
    ],
    [
        0.9730,
        0.3100
    ],
    [
        0.9600,
        0.3720
    ],
    [
        0.9427,
        0.4340
    ],
    [
        0.9216,
        0.4958
    ],
    [
        0.8962,
        0.5571
    ],
    [
        0.8679,
        0.6176
    ],
    [
        0.8350,
        0.6769
    ],
    [
        0.7986,
        0.7346
    ],
    [
        0.7597,
        0.7903
    ],
    [
        0.7186,
        0.8435
    ],
    [
        0.6732,
        0.8936
    ],
    [
        0.6213,
        0.9394
    ],
    [
        0.5722,
        0.9761
    ],
    [
        0.5322,
        1.0000
    ]
];
K.forEach(function(d) {
    d[1] *= 1.593415793900743;
});
function robinsonRaw(lambda, phi) {
    var i = (0, _math.min)(18, (0, _math.abs)(phi) * 36 / _math.pi), i0 = (0, _math.floor)(i), di = i - i0, ax = (k = K[i0])[0], ay = k[1], bx = (k = K[++i0])[0], by = k[1], cx = (k = K[(0, _math.min)(19, ++i0)])[0], cy = k[1], k;
    return [
        lambda * (bx + di * (cx - ax) / 2 + di * di * (cx - 2 * bx + ax) / 2),
        (0, _math.sign)(phi) * (by + di * (cy - ay) / 2 + di * di * (cy - 2 * by + ay) / 2)
    ];
}
robinsonRaw.invert = function(x, y) {
    var phi = y * 90, i = (0, _math.min)(18, (0, _math.abs)(phi / 5)), i0 = (0, _math.max)(0, (0, _math.floor)(i));
    do {
        var ay = K[i0][1], by = K[i0 + 1][1], cy = K[(0, _math.min)(19, i0 + 2)][1], u = cy - ay, v = cy - 2 * by + ay, t = 2 * ((0, _math.abs)(y) - by) / u, c = v / u, di = t * (1 - c * t * (1 - 2 * c * t));
        if (di >= 0 || i0 === 1) {
            phi = (y >= 0 ? 5 : -5) * (di + i);
            var j = 50, delta;
            do {
                i = (0, _math.min)(18, (0, _math.abs)(phi) / 5);
                i0 = (0, _math.floor)(i);
                di = i - i0;
                ay = K[i0][1];
                by = K[i0 + 1][1];
                cy = K[(0, _math.min)(19, i0 + 2)][1];
                phi -= (delta = (0, _math.sign)(y) * (by + di * (cy - ay) / 2 + di * di * (cy - 2 * by + ay) / 2) - y) * _math.degrees;
            }while ((0, _math.abs)(delta) > _math.epsilon2 && --j > 0);
            break;
        }
    }while (--i0 >= 0);
    var ax = K[i0][0], bx = K[i0 + 1][0], cx = K[(0, _math.min)(19, i0 + 2)][0];
    return [
        x / (bx + di * (cx - ax) / 2 + di * di * (cx - 2 * bx + ax) / 2),
        phi * _math.radians
    ];
};
function _default() {
    return (0, _index.geoProjection)(robinsonRaw).scale(152.63);
}
