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
var _sinuMollweide = require("../sinuMollweide.js");
var _index = /*#__PURE__*/ _interop_require_default(require("./index.js"));
var _newton = require("../newton.js");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var lobes = [
    [
        [
            [
                -180,
                35
            ],
            [
                -30,
                90
            ],
            [
                0,
                35
            ]
        ],
        [
            [
                0,
                35
            ],
            [
                30,
                90
            ],
            [
                180,
                35
            ]
        ]
    ],
    [
        [
            [
                -180,
                -10
            ],
            [
                -102,
                -90
            ],
            [
                -65,
                -10
            ]
        ],
        [
            [
                -65,
                -10
            ],
            [
                5,
                -90
            ],
            [
                77,
                -10
            ]
        ],
        [
            [
                77,
                -10
            ],
            [
                103,
                -90
            ],
            [
                180,
                -10
            ]
        ]
    ]
];
function _default() {
    return (0, _index.default)(_sinuMollweide.sinuMollweideRaw, lobes, _newton.solve2d).rotate([
        -20,
        -55
    ]).scale(164.263).center([
        0,
        -5.4036
    ]);
}
