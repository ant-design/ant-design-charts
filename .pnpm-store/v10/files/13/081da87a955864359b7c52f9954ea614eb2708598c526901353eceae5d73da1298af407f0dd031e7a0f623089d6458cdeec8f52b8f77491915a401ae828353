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
import { Coordinate, Coordinate3D } from '@antv/coord';
import { useLibrary } from './library';
export function createCoordinate(layout, partialOptions, library) {
    const [useCoordinate] = useLibrary('coordinate', library);
    const { innerHeight, innerWidth, insetLeft, insetTop, insetRight, insetBottom, } = layout;
    const { coordinates: partialTransform = [] } = partialOptions;
    const transform = inferCoordinate(partialTransform);
    const isCartesian3D = transform[0].type === 'cartesian3D';
    const options = Object.assign(Object.assign({}, layout), { x: insetLeft, y: insetTop, width: innerWidth - insetLeft - insetRight, height: innerHeight - insetBottom - insetTop, transformations: transform.flatMap(useCoordinate) });
    const coordinate = isCartesian3D
        ? // @ts-ignore
            new Coordinate3D(options)
        : new Coordinate(options);
    return coordinate;
}
export function coordinate2Transform(node, library) {
    // @ts-ignore
    const { coordinate = {}, coordinates } = node, rest = __rest(node, ["coordinate", "coordinates"]);
    // If coordinates are already set, it means that the coordinate has been processed
    // during the initialization. There is not need to process it during update.
    if (coordinates)
        return node;
    const { type, transform = [] } = coordinate, options = __rest(coordinate, ["type", "transform"]);
    if (!type)
        return Object.assign(Object.assign({}, rest), { coordinates: transform });
    const [, createCoordinate] = useLibrary('coordinate', library);
    const { transform: isTransform = false } = createCoordinate(type).props || {};
    if (isTransform) {
        throw new Error(`Unknown coordinate: ${type}.`);
    }
    return Object.assign(Object.assign({}, rest), { coordinates: [Object.assign({ type }, options), ...transform] });
}
export function coordOf(coordinates, type) {
    return coordinates.filter((d) => d.type === type);
}
/**
 * todo Duplication is not considered
 */
export function isPolar(coordinates) {
    return coordOf(coordinates, 'polar').length > 0;
}
export function isHelix(coordinates) {
    return coordOf(coordinates, 'helix').length > 0;
}
/**
 * todo The number of transposes matters
 */
export function isTranspose(coordinates) {
    return coordOf(coordinates, 'transpose').length % 2 === 1;
}
export function isParallel(coordinates) {
    return coordOf(coordinates, 'parallel').length > 0;
}
export function isTheta(coordinates) {
    return coordOf(coordinates, 'theta').length > 0;
}
export function isReflect(coordinates) {
    return coordOf(coordinates, 'reflect').length > 0;
}
export function isRadial(coordinates) {
    return coordOf(coordinates, 'radial').length > 0;
}
export function isRadar(coordinates) {
    return coordOf(coordinates, 'radar').length > 0;
}
/**
 * todo The axis corresponding to the Y reversal is not reversed
 */
export function isReflectY(coordinates) {
    return coordOf(coordinates, 'reflectY').length > 0;
}
function inferCoordinate(coordinates) {
    if (coordinates.find((d) => d.type === 'cartesian' || d.type === 'cartesian3D'))
        return coordinates;
    return [...coordinates, { type: 'cartesian' }];
}
//# sourceMappingURL=coordinate.js.map