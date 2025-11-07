"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isReflectY = exports.isRadar = exports.isRadial = exports.isReflect = exports.isTheta = exports.isParallel = exports.isTranspose = exports.isHelix = exports.isPolar = exports.coordOf = exports.coordinate2Transform = exports.createCoordinate = void 0;
const coord_1 = require("@antv/coord");
const library_1 = require("./library");
function createCoordinate(layout, partialOptions, library) {
    const [useCoordinate] = (0, library_1.useLibrary)('coordinate', library);
    const { innerHeight, innerWidth, insetLeft, insetTop, insetRight, insetBottom, } = layout;
    const { coordinates: partialTransform = [] } = partialOptions;
    const transform = inferCoordinate(partialTransform);
    const isCartesian3D = transform[0].type === 'cartesian3D';
    const options = Object.assign(Object.assign({}, layout), { x: insetLeft, y: insetTop, width: innerWidth - insetLeft - insetRight, height: innerHeight - insetBottom - insetTop, transformations: transform.flatMap(useCoordinate) });
    const coordinate = isCartesian3D
        ? // @ts-ignore
            new coord_1.Coordinate3D(options)
        : new coord_1.Coordinate(options);
    return coordinate;
}
exports.createCoordinate = createCoordinate;
function coordinate2Transform(node, library) {
    // @ts-ignore
    const { coordinate = {}, coordinates } = node, rest = __rest(node, ["coordinate", "coordinates"]);
    // If coordinates are already set, it means that the coordinate has been processed
    // during the initialization. There is not need to process it during update.
    if (coordinates)
        return node;
    const { type, transform = [] } = coordinate, options = __rest(coordinate, ["type", "transform"]);
    if (!type)
        return Object.assign(Object.assign({}, rest), { coordinates: transform });
    const [, createCoordinate] = (0, library_1.useLibrary)('coordinate', library);
    const { transform: isTransform = false } = createCoordinate(type).props || {};
    if (isTransform) {
        throw new Error(`Unknown coordinate: ${type}.`);
    }
    return Object.assign(Object.assign({}, rest), { coordinates: [Object.assign({ type }, options), ...transform] });
}
exports.coordinate2Transform = coordinate2Transform;
function coordOf(coordinates, type) {
    return coordinates.filter((d) => d.type === type);
}
exports.coordOf = coordOf;
/**
 * todo Duplication is not considered
 */
function isPolar(coordinates) {
    return coordOf(coordinates, 'polar').length > 0;
}
exports.isPolar = isPolar;
function isHelix(coordinates) {
    return coordOf(coordinates, 'helix').length > 0;
}
exports.isHelix = isHelix;
/**
 * todo The number of transposes matters
 */
function isTranspose(coordinates) {
    return coordOf(coordinates, 'transpose').length % 2 === 1;
}
exports.isTranspose = isTranspose;
function isParallel(coordinates) {
    return coordOf(coordinates, 'parallel').length > 0;
}
exports.isParallel = isParallel;
function isTheta(coordinates) {
    return coordOf(coordinates, 'theta').length > 0;
}
exports.isTheta = isTheta;
function isReflect(coordinates) {
    return coordOf(coordinates, 'reflect').length > 0;
}
exports.isReflect = isReflect;
function isRadial(coordinates) {
    return coordOf(coordinates, 'radial').length > 0;
}
exports.isRadial = isRadial;
function isRadar(coordinates) {
    return coordOf(coordinates, 'radar').length > 0;
}
exports.isRadar = isRadar;
/**
 * todo The axis corresponding to the Y reversal is not reversed
 */
function isReflectY(coordinates) {
    return coordOf(coordinates, 'reflectY').length > 0;
}
exports.isReflectY = isReflectY;
function inferCoordinate(coordinates) {
    if (coordinates.find((d) => d.type === 'cartesian' || d.type === 'cartesian3D'))
        return coordinates;
    return [...coordinates, { type: 'cartesian' }];
}
//# sourceMappingURL=coordinate.js.map