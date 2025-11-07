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
        return modifiedStereographic;
    },
    modifiedStereographicAlaska: function() {
        return modifiedStereographicAlaska;
    },
    modifiedStereographicGs48: function() {
        return modifiedStereographicGs48;
    },
    modifiedStereographicGs50: function() {
        return modifiedStereographicGs50;
    },
    modifiedStereographicLee: function() {
        return modifiedStereographicLee;
    },
    modifiedStereographicMiller: function() {
        return modifiedStereographicMiller;
    },
    modifiedStereographicRaw: function() {
        return modifiedStereographicRaw;
    }
});
var _index = require("../../d3-geo/src/index.js");
var _math = require("./math.js");
function modifiedStereographicRaw(C) {
    var m = C.length - 1;
    function forward(lambda, phi) {
        var cosPhi = (0, _math.cos)(phi), k = 2 / (1 + cosPhi * (0, _math.cos)(lambda)), zr = k * cosPhi * (0, _math.sin)(lambda), zi = k * (0, _math.sin)(phi), i = m, w = C[i], ar = w[0], ai = w[1], t;
        while(--i >= 0){
            w = C[i];
            ar = w[0] + zr * (t = ar) - zi * ai;
            ai = w[1] + zr * ai + zi * t;
        }
        ar = zr * (t = ar) - zi * ai;
        ai = zr * ai + zi * t;
        return [
            ar,
            ai
        ];
    }
    forward.invert = function(x, y) {
        var i = 20, zr = x, zi = y;
        do {
            var j = m, w = C[j], ar = w[0], ai = w[1], br = 0, bi = 0, t;
            while(--j >= 0){
                w = C[j];
                br = ar + zr * (t = br) - zi * bi;
                bi = ai + zr * bi + zi * t;
                ar = w[0] + zr * (t = ar) - zi * ai;
                ai = w[1] + zr * ai + zi * t;
            }
            br = ar + zr * (t = br) - zi * bi;
            bi = ai + zr * bi + zi * t;
            ar = zr * (t = ar) - zi * ai - x;
            ai = zr * ai + zi * t - y;
            var denominator = br * br + bi * bi, deltar, deltai;
            zr -= deltar = (ar * br + ai * bi) / denominator;
            zi -= deltai = (ai * br - ar * bi) / denominator;
        }while ((0, _math.abs)(deltar) + (0, _math.abs)(deltai) > _math.epsilon * _math.epsilon && --i > 0);
        if (i) {
            var rho = (0, _math.sqrt)(zr * zr + zi * zi), c = 2 * (0, _math.atan)(rho * 0.5), sinc = (0, _math.sin)(c);
            return [
                (0, _math.atan2)(zr * sinc, rho * (0, _math.cos)(c)),
                rho ? (0, _math.asin)(zi * sinc / rho) : 0
            ];
        }
    };
    return forward;
}
var alaska = [
    [
        0.9972523,
        0
    ],
    [
        0.0052513,
        -0.0041175
    ],
    [
        0.0074606,
        0.0048125
    ],
    [
        -0.0153783,
        -0.1968253
    ],
    [
        0.0636871,
        -0.1408027
    ],
    [
        0.3660976,
        -0.2937382
    ]
], gs48 = [
    [
        0.98879,
        0
    ],
    [
        0,
        0
    ],
    [
        -0.050909,
        0
    ],
    [
        0,
        0
    ],
    [
        0.075528,
        0
    ]
], gs50 = [
    [
        0.9842990,
        0
    ],
    [
        0.0211642,
        0.0037608
    ],
    [
        -0.1036018,
        -0.0575102
    ],
    [
        -0.0329095,
        -0.0320119
    ],
    [
        0.0499471,
        0.1223335
    ],
    [
        0.0260460,
        0.0899805
    ],
    [
        0.0007388,
        -0.1435792
    ],
    [
        0.0075848,
        -0.1334108
    ],
    [
        -0.0216473,
        0.0776645
    ],
    [
        -0.0225161,
        0.0853673
    ]
], miller = [
    [
        0.9245,
        0
    ],
    [
        0,
        0
    ],
    [
        0.01943,
        0
    ]
], lee = [
    [
        0.721316,
        0
    ],
    [
        0,
        0
    ],
    [
        -0.00881625,
        -0.00617325
    ]
];
function modifiedStereographicAlaska() {
    return modifiedStereographic(alaska, [
        152,
        -64
    ]).scale(1400).center([
        -160.908,
        62.4864
    ]).clipAngle(30).angle(7.8);
}
function modifiedStereographicGs48() {
    return modifiedStereographic(gs48, [
        95,
        -38
    ]).scale(1000).clipAngle(55).center([
        -96.5563,
        38.8675
    ]);
}
function modifiedStereographicGs50() {
    return modifiedStereographic(gs50, [
        120,
        -45
    ]).scale(359.513).clipAngle(55).center([
        -117.474,
        53.0628
    ]);
}
function modifiedStereographicMiller() {
    return modifiedStereographic(miller, [
        -20,
        -18
    ]).scale(209.091).center([
        20,
        16.7214
    ]).clipAngle(82);
}
function modifiedStereographicLee() {
    return modifiedStereographic(lee, [
        165,
        10
    ]).scale(250).clipAngle(130).center([
        -165,
        -10
    ]);
}
function modifiedStereographic(coefficients, rotate) {
    var p = (0, _index.geoProjection)(modifiedStereographicRaw(coefficients)).rotate(rotate).clipAngle(90), r = (0, _index.geoRotation)(rotate), center = p.center;
    delete p.rotate;
    p.center = function(_) {
        return arguments.length ? center(r(_)) : r.invert(center());
    };
    return p;
}
