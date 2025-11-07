"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fisheyeCircular = exports.fisheye = exports.fisheyeY = exports.fisheyeX = void 0;
/* eslint-disable @typescript-eslint/no-unused-vars */
// https://github.com/d3/d3-plugins/blob/master/fisheye/fisheye.js
var scale_1 = require("@antv/scale");
function fisheyeTransform(x, focus, distortion, min, max) {
    var left = x < focus;
    var m = (left ? focus - min : max - focus) || max - min;
    var f = left ? -1 : 1;
    return (f * m * (distortion + 1)) / (distortion + m / ((x - focus) * f)) + focus;
}
function fisheyeUntransform(tx, focus, distortion, min, max) {
    var left = tx < focus;
    var m = (left ? focus - min : max - focus) || max - min;
    var f = left ? -1 : 1;
    return m / ((m * (distortion + 1)) / (tx - focus) - distortion * f) + focus;
}
/**
 * Map actual visual point to abstract focus point(0, 1)
 */
function normalize(focus, length, isVisual) {
    if (!isVisual)
        return focus;
    var s = new scale_1.Linear({
        range: [0, 1],
        domain: [0, length],
    });
    return s.map(focus);
}
/**
 * Applies cartesian fisheye transforms for the first dimension of vector2.
 * @param params [focus, distortion]
 * @param x x of the the bounding box of coordinate
 * @param y y of the the bounding box of coordinate
 * @param width width of the the bounding box of coordinate
 * @param height height of the the bounding box of coordinate
 * @returns transformer
 */
var fisheyeX = function (params, x, y, width, height) {
    var _a = __read(params, 3), focus = _a[0], distortion = _a[1], _b = _a[2], isVisual = _b === void 0 ? false : _b;
    var normalizedFocusX = normalize(focus, width, isVisual);
    return {
        transform: function (vector) {
            var _a = __read(vector, 2), vx = _a[0], vy = _a[1];
            var fx = fisheyeTransform(vx, normalizedFocusX, distortion, 0, 1);
            return [fx, vy];
        },
        untransform: function (vector) {
            var _a = __read(vector, 2), fx = _a[0], vy = _a[1];
            var vx = fisheyeUntransform(fx, normalizedFocusX, distortion, 0, 1);
            return [vx, vy];
        },
    };
};
exports.fisheyeX = fisheyeX;
/**
 * Applies cartesian fisheye transforms for the second dimension of vector2.
 * @param params [focus, distortion]
 * @param x x of the the bounding box of coordinate
 * @param y y of the the bounding box of coordinate
 * @param width width of the the bounding box of coordinate
 * @param height height of the the bounding box of coordinate
 * @returns transformer
 */
var fisheyeY = function (params, x, y, width, height) {
    var _a = __read(params, 3), focus = _a[0], distortion = _a[1], _b = _a[2], isVisual = _b === void 0 ? false : _b;
    var normalizedFocusY = normalize(focus, height, isVisual);
    return {
        transform: function (vector) {
            var _a = __read(vector, 2), vx = _a[0], vy = _a[1];
            var fy = fisheyeTransform(vy, normalizedFocusY, distortion, 0, 1);
            return [vx, fy];
        },
        untransform: function (vector) {
            var _a = __read(vector, 2), vx = _a[0], fy = _a[1];
            var vy = fisheyeUntransform(fy, normalizedFocusY, distortion, 0, 1);
            return [vx, vy];
        },
    };
};
exports.fisheyeY = fisheyeY;
/**
 * Applies cartesian fisheye transforms for both dimensions of vector2.
 * @param params [focusX, focusY, distortionX, distortionY]
 * @param x x of the the bounding box of coordinate
 * @param y y of the the bounding box of coordinate
 * @param width width of the the bounding box of coordinate
 * @param height height of the the bounding box of coordinate
 * @returns transformer
 */
var fisheye = function (params, x, y, width, height) {
    var _a = __read(params, 5), focusX = _a[0], focusY = _a[1], distortionX = _a[2], distortionY = _a[3], _b = _a[4], isVisual = _b === void 0 ? false : _b;
    var normalizedFocusX = normalize(focusX, width, isVisual);
    var normalizedFocusY = normalize(focusY, height, isVisual);
    return {
        transform: function (vector) {
            var _a = __read(vector, 2), vx = _a[0], vy = _a[1];
            var fx = fisheyeTransform(vx, normalizedFocusX, distortionX, 0, 1);
            var fy = fisheyeTransform(vy, normalizedFocusY, distortionY, 0, 1);
            return [fx, fy];
        },
        untransform: function (vector) {
            var _a = __read(vector, 2), fx = _a[0], fy = _a[1];
            var vx = fisheyeUntransform(fx, normalizedFocusX, distortionX, 0, 1);
            var vy = fisheyeUntransform(fy, normalizedFocusY, distortionY, 0, 1);
            return [vx, vy];
        },
    };
};
exports.fisheye = fisheye;
/**
 * Applies circular fisheye transforms.
 * @param params [focusX, focusY, radius, distortion, isVisual?]
 * @param x x of the the bounding box of coordinate
 * @param y y of the the bounding box of coordinate
 * @param width width of the the bounding box of coordinate
 * @param height height of the the bounding box of coordinate
 * @returns transformer
 */
var fisheyeCircular = function (params, x, y, width, height) {
    var _a = __read(params, 5), focusX = _a[0], focusY = _a[1], radius = _a[2], distortion = _a[3], _b = _a[4], isVisual = _b === void 0 ? false : _b;
    var scaleX = new scale_1.Linear({
        range: [0, width],
    });
    var scaleY = new scale_1.Linear({
        range: [0, height],
    });
    // focus point => visual point
    var nx = isVisual ? focusX : scaleX.map(focusX);
    var ny = isVisual ? focusY : scaleY.map(focusY);
    return {
        transform: function (vector) {
            var _a = __read(vector, 2), x = _a[0], y = _a[1];
            // focus point => visual point
            var dx = scaleX.map(x) - nx;
            var dy = scaleY.map(y) - ny;
            var dd = Math.sqrt(dx * dx + dy * dy);
            if (dd > radius)
                return [x, y];
            var r = fisheyeTransform(dd, 0, distortion, 0, radius);
            var theta = Math.atan2(dy, dx);
            var fx = nx + r * Math.cos(theta);
            var fy = ny + r * Math.sin(theta);
            // visual point => focus point
            return [scaleX.invert(fx), scaleY.invert(fy)];
        },
        untransform: function (vector) {
            var _a = __read(vector, 2), tx = _a[0], ty = _a[1];
            var dx = scaleX.map(tx) - nx;
            var dy = scaleY.map(ty) - ny;
            var dd = Math.sqrt(dx * dx + dy * dy);
            if (dd > radius)
                return [tx, ty];
            var x = fisheyeUntransform(dd, 0, distortion, 0, radius);
            var theta = Math.atan2(dy, dx);
            var fx = nx + x * Math.cos(theta);
            var fy = ny + x * Math.sin(theta);
            return [scaleX.invert(fx), scaleY.invert(fy)];
        },
    };
};
exports.fisheyeCircular = fisheyeCircular;
//# sourceMappingURL=fisheye.js.map