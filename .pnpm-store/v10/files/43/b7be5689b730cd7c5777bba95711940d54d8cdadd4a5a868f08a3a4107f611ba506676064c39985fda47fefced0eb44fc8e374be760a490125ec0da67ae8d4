"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.focus = exports.button = exports.hvh = exports.vh = exports.hv = exports.smooth = exports.dash = exports.dot = exports.hyphen = exports.plus = exports.tick = exports.cross = exports.line = exports.bowtie = exports.hexagon = exports.triangleDown = exports.triangle = exports.diamond = exports.square = exports.point = exports.circle = void 0;
exports.vhv = vhv;
/**
 * ○
 */
var circle = function (x, y, r) {
    return [['M', x - r, y], ['A', r, r, 0, 1, 0, x + r, y], ['A', r, r, 0, 1, 0, x - r, y], ['Z']];
};
exports.circle = circle;
/**
 * Cname circle to point.
 */
exports.point = exports.circle;
/**
 * □
 */
var square = function (x, y, r) {
    return [['M', x - r, y - r], ['L', x + r, y - r], ['L', x + r, y + r], ['L', x - r, y + r], ['Z']];
};
exports.square = square;
/**
 * ◇
 */
var diamond = function (x, y, r) {
    return [['M', x - r, y], ['L', x, y - r], ['L', x + r, y], ['L', x, y + r], ['Z']];
};
exports.diamond = diamond;
/**
 * △
 */
var triangle = function (x, y, r) {
    var diffY = r * Math.sin((1 / 3) * Math.PI);
    return [['M', x - r, y + diffY], ['L', x, y - diffY], ['L', x + r, y + diffY], ['Z']];
};
exports.triangle = triangle;
/**
 * ▽
 */
var triangleDown = function (x, y, r) {
    var diffY = r * Math.sin((1 / 3) * Math.PI);
    return [['M', x - r, y - diffY], ['L', x + r, y - diffY], ['L', x, y + diffY], ['Z']];
};
exports.triangleDown = triangleDown;
/**
 * ⬡
 */
var hexagon = function (x, y, r) {
    var diffX = (r / 2) * Math.sqrt(3);
    return [
        ['M', x, y - r],
        ['L', x + diffX, y - r / 2],
        ['L', x + diffX, y + r / 2],
        ['L', x, y + r],
        ['L', x - diffX, y + r / 2],
        ['L', x - diffX, y - r / 2],
        ['Z'],
    ];
};
exports.hexagon = hexagon;
/**
 * ▷◁
 */
var bowtie = function (x, y, r) {
    var diffY = r - 1.5;
    return [['M', x - r, y - diffY], ['L', x + r, y + diffY], ['L', x + r, y - diffY], ['L', x - r, y + diffY], ['Z']];
};
exports.bowtie = bowtie;
/** -- 非闭合图形 ------------------------------------------------------------------------------- */
/**
 * |
 */
var line = function (x, y, r) {
    return [
        ['M', x, y + r],
        ['L', x, y - r],
    ];
};
exports.line = line;
/**
 * ✕
 */
var cross = function (x, y, r) {
    return [
        ['M', x - r, y - r],
        ['L', x + r, y + r],
        ['M', x + r, y - r],
        ['L', x - r, y + r],
    ];
};
exports.cross = cross;
/**
 * 工
 */
var tick = function (x, y, r) {
    return [
        ['M', x - r / 2, y - r],
        ['L', x + r / 2, y - r],
        ['M', x, y - r],
        ['L', x, y + r],
        ['M', x - r / 2, y + r],
        ['L', x + r / 2, y + r],
    ];
};
exports.tick = tick;
/**
 * +
 */
var plus = function (x, y, r) {
    return [
        ['M', x - r, y],
        ['L', x + r, y],
        ['M', x, y - r],
        ['L', x, y + r],
    ];
};
exports.plus = plus;
/**
 * -
 */
var hyphen = function (x, y, r) {
    return [
        ['M', x - r, y],
        ['L', x + r, y],
    ];
};
exports.hyphen = hyphen;
/** -- 用于图例的 marker ------------------------------------------------------------------------------- */
/**
 * ---
 */
var dot = function (x, y, r) {
    return [
        ['M', x - r, y],
        ['L', x + r, y],
    ];
};
exports.dot = dot;
exports.dash = exports.dot;
var smooth = function (x, y, r) {
    return [
        ['M', x - r, y],
        ['A', r / 2, r / 2, 0, 1, 1, x, y],
        ['A', r / 2, r / 2, 0, 1, 0, x + r, y],
    ];
};
exports.smooth = smooth;
var hv = function (x, y, r) {
    return [
        ['M', x - r - 1, y - 2.5],
        ['L', x, y - 2.5],
        ['L', x, y + 2.5],
        ['L', x + r + 1, y + 2.5],
    ];
};
exports.hv = hv;
var vh = function (x, y, r) {
    return [
        ['M', x - r - 1, y + 2.5],
        ['L', x, y + 2.5],
        ['L', x, y - 2.5],
        ['L', x + r + 1, y - 2.5],
    ];
};
exports.vh = vh;
var hvh = function (x, y, r) {
    return [
        ['M', x - (r + 1), y + 2.5],
        ['L', x - r / 2, y + 2.5],
        ['L', x - r / 2, y - 2.5],
        ['L', x + r / 2, y - 2.5],
        ['L', x + r / 2, y + 2.5],
        ['L', x + r + 1, y + 2.5],
    ];
};
exports.hvh = hvh;
function vhv(x, y) {
    // 宽 13px，高 8px
    return [
        ['M', x - 5, y + 2.5],
        ['L', x - 5, y],
        ['L', x, y],
        ['L', x, y - 3],
        ['L', x, y + 3],
        ['L', x + 6.5, y + 3],
    ];
}
/** --------------------------------------------------------------------------------- */
var button = function (x, y, r) {
    return [['M', x - r, y - r], ['L', x + r, y], ['L', x - r, y + r], ['Z']];
};
exports.button = button;
var focus = function (x, y, r) {
    var outerRadius = r;
    var innerRadius = r * 0.2;
    var crossLength = r * 0.7;
    return [
        // 外圆
        ['M', x - outerRadius, y],
        ['A', outerRadius, outerRadius, 0, 1, 0, x + outerRadius, y],
        ['A', outerRadius, outerRadius, 0, 1, 0, x - outerRadius, y],
        ['Z'],
        // 水平十字线 (简单线条)
        ['M', x - crossLength, y],
        ['L', x - innerRadius, y],
        ['M', x + innerRadius, y],
        ['L', x + crossLength, y],
        // 垂直十字线 (简单线条)
        ['M', x, y - crossLength],
        ['L', x, y - innerRadius],
        ['M', x, y + innerRadius],
        ['L', x, y + crossLength],
    ];
};
exports.focus = focus;
//# sourceMappingURL=symbol.js.map