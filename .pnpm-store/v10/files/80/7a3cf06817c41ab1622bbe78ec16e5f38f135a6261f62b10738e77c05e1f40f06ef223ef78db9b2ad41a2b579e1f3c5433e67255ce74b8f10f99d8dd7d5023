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
var _math = require("../math.js");
var phi1 = (0, _math.atan)(_math.sqrt1_2) * _math.degrees;
var cube = [
    [
        0,
        phi1
    ],
    [
        90,
        phi1
    ],
    [
        180,
        phi1
    ],
    [
        -90,
        phi1
    ],
    [
        0,
        -phi1
    ],
    [
        90,
        -phi1
    ],
    [
        180,
        -phi1
    ],
    [
        -90,
        -phi1
    ]
];
var _default = [
    [
        0,
        3,
        2,
        1
    ],
    [
        0,
        1,
        5,
        4
    ],
    [
        1,
        2,
        6,
        5
    ],
    [
        2,
        3,
        7,
        6
    ],
    [
        3,
        0,
        4,
        7
    ],
    [
        4,
        5,
        6,
        7
    ] // S
].map(function(face) {
    return face.map(function(i) {
        return cube[i];
    });
});
