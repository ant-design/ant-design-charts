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
var _mollweide = require("../mollweide.js");
var _index = /*#__PURE__*/ _interop_require_default(require("./index.js"));
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
                0
            ],
            [
                -90,
                90
            ],
            [
                0,
                0
            ]
        ],
        [
            [
                0,
                0
            ],
            [
                90,
                90
            ],
            [
                180,
                0
            ]
        ]
    ],
    [
        [
            [
                -180,
                0
            ],
            [
                -90,
                -90
            ],
            [
                0,
                0
            ]
        ],
        [
            [
                0,
                0
            ],
            [
                90,
                -90
            ],
            [
                180,
                0
            ]
        ]
    ]
];
function _default() {
    return (0, _index.default)(_mollweide.mollweideRaw, lobes).scale(169.529).rotate([
        20,
        0
    ]);
}
