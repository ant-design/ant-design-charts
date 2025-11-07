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
    ellipticF: function() {
        return ellipticF;
    },
    ellipticFi: function() {
        return ellipticFi;
    },
    ellipticJ: function() {
        return ellipticJ;
    },
    ellipticJi: function() {
        return ellipticJi;
    }
});
var _math = require("./math.js");
function ellipticJi(u, v, m) {
    var a, b, c;
    if (!u) {
        b = ellipticJ(v, 1 - m);
        return [
            [
                0,
                b[0] / b[1]
            ],
            [
                1 / b[1],
                0
            ],
            [
                b[2] / b[1],
                0
            ]
        ];
    }
    a = ellipticJ(u, m);
    if (!v) return [
        [
            a[0],
            0
        ],
        [
            a[1],
            0
        ],
        [
            a[2],
            0
        ]
    ];
    b = ellipticJ(v, 1 - m);
    c = b[1] * b[1] + m * a[0] * a[0] * b[0] * b[0];
    return [
        [
            a[0] * b[2] / c,
            a[1] * a[2] * b[0] * b[1] / c
        ],
        [
            a[1] * b[1] / c,
            -a[0] * a[2] * b[0] * b[2] / c
        ],
        [
            a[2] * b[1] * b[2] / c,
            -m * a[0] * a[1] * b[0] / c
        ]
    ];
}
function ellipticJ(u, m) {
    var ai, b, phi, t, twon;
    if (m < _math.epsilon) {
        t = (0, _math.sin)(u);
        b = (0, _math.cos)(u);
        ai = m * (u - t * b) / 4;
        return [
            t - ai * b,
            b + ai * t,
            1 - m * t * t / 2,
            u - ai
        ];
    }
    if (m >= 1 - _math.epsilon) {
        ai = (1 - m) / 4;
        b = (0, _math.cosh)(u);
        t = (0, _math.tanh)(u);
        phi = 1 / b;
        twon = b * (0, _math.sinh)(u);
        return [
            t + ai * (twon - u) / (b * b),
            phi - ai * t * phi * (twon - u),
            phi + ai * t * phi * (twon + u),
            2 * (0, _math.atan)((0, _math.exp)(u)) - _math.halfPi + ai * (twon - u) / b
        ];
    }
    var a = [
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
    ], c = [
        (0, _math.sqrt)(m),
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
    ], i = 0;
    b = (0, _math.sqrt)(1 - m);
    twon = 1;
    while((0, _math.abs)(c[i] / a[i]) > _math.epsilon && i < 8){
        ai = a[i++];
        c[i] = (ai - b) / 2;
        a[i] = (ai + b) / 2;
        b = (0, _math.sqrt)(ai * b);
        twon *= 2;
    }
    phi = twon * a[i] * u;
    do {
        t = c[i] * (0, _math.sin)(b = phi) / a[i];
        phi = ((0, _math.asin)(t) + phi) / 2;
    }while (--i);
    return [
        (0, _math.sin)(phi),
        t = (0, _math.cos)(phi),
        t / (0, _math.cos)(phi - b),
        phi
    ];
}
function ellipticFi(phi, psi, m) {
    var r = (0, _math.abs)(phi), i = (0, _math.abs)(psi), sinhPsi = (0, _math.sinh)(i);
    if (r) {
        var cscPhi = 1 / (0, _math.sin)(r), cotPhi2 = 1 / ((0, _math.tan)(r) * (0, _math.tan)(r)), b = -(cotPhi2 + m * (sinhPsi * sinhPsi * cscPhi * cscPhi) - 1 + m), c = (m - 1) * cotPhi2, cotLambda2 = (-b + (0, _math.sqrt)(b * b - 4 * c)) / 2;
        return [
            ellipticF((0, _math.atan)(1 / (0, _math.sqrt)(cotLambda2)), m) * (0, _math.sign)(phi),
            ellipticF((0, _math.atan)((0, _math.sqrt)((cotLambda2 / cotPhi2 - 1) / m)), 1 - m) * (0, _math.sign)(psi)
        ];
    }
    return [
        0,
        ellipticF((0, _math.atan)(sinhPsi), 1 - m) * (0, _math.sign)(psi)
    ];
}
function ellipticF(phi, m) {
    if (!m) return phi;
    if (m === 1) return (0, _math.log)((0, _math.tan)(phi / 2 + _math.quarterPi));
    var a = 1, b = (0, _math.sqrt)(1 - m), c = (0, _math.sqrt)(m);
    for(var i = 0; (0, _math.abs)(c) > _math.epsilon; i++){
        if (phi % _math.pi) {
            var dPhi = (0, _math.atan)(b * (0, _math.tan)(phi) / a);
            if (dPhi < 0) dPhi += _math.pi;
            phi += dPhi + ~~(phi / _math.pi) * _math.pi;
        } else phi += phi;
        c = (a + b) / 2;
        b = (0, _math.sqrt)(a * b);
        c = ((a = c) - b) / 2;
    }
    return phi / ((0, _math.pow)(2, i) * a);
}
