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
var _index = require("../../../d3-geo/src/index.js");
var _collignon = require("../collignon.js");
var _math = require("../math.js");
var _index1 = /*#__PURE__*/ _interop_require_default(require("./index.js"));
var _octahedron = /*#__PURE__*/ _interop_require_default(require("./octahedron.js"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var kx = 2 / (0, _math.sqrt)(3);
function collignonK(a, b) {
    var p = (0, _collignon.collignonRaw)(a, b);
    return [
        p[0] * kx,
        p[1]
    ];
}
collignonK.invert = function(x, y) {
    return _collignon.collignonRaw.invert(x / kx, y);
};
function _default(faceProjection) {
    faceProjection = faceProjection || function(face) {
        var c = (0, _index.geoCentroid)({
            type: "MultiPoint",
            coordinates: face
        });
        return (0, _index.geoProjection)(collignonK).translate([
            0,
            0
        ]).scale(1).rotate(c[1] > 0 ? [
            -c[0],
            0
        ] : [
            180 - c[0],
            180
        ]);
    };
    var faces = _octahedron.default.map(function(face) {
        return {
            face: face,
            project: faceProjection(face)
        };
    });
    [
        -1,
        0,
        0,
        1,
        0,
        1,
        4,
        5
    ].forEach(function(d, i) {
        var node = faces[d];
        node && (node.children || (node.children = [])).push(faces[i]);
    });
    return (0, _index1.default)(faces[0], function(lambda, phi) {
        return faces[lambda < -_math.pi / 2 ? phi < 0 ? 6 : 4 : lambda < 0 ? phi < 0 ? 2 : 0 : lambda < _math.pi / 2 ? phi < 0 ? 3 : 1 : phi < 0 ? 7 : 5];
    }).angle(-30).scale(121.906).center([
        0,
        48.5904
    ]);
}
