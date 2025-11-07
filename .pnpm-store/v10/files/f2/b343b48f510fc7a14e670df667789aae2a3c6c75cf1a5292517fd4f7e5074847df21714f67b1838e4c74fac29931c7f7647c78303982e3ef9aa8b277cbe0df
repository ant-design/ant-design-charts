"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTransformOptions = exports.angleOf = exports.radiusOf = exports.getRadius = exports.isNonCartesian = exports.isTheta = exports.isCircular = exports.isRadar = exports.isFisheye = exports.isParallel = exports.isHelix = exports.isRadial = exports.isPolar = exports.isTranspose = void 0;
function isTranspose(coordinate) {
    const { transformations } = coordinate.getOptions();
    const transposes = transformations
        .map(([type]) => type)
        .filter((type) => type === 'transpose');
    return transposes.length % 2 !== 0;
}
exports.isTranspose = isTranspose;
function isPolar(coordinate) {
    const { transformations } = coordinate.getOptions();
    return transformations.some(([type]) => type === 'polar');
}
exports.isPolar = isPolar;
function isRadial(coordinate) {
    const { transformations } = coordinate.getOptions();
    return (
    // distinguish radial from theta.
    transformations.some(([type]) => type === 'reflect') &&
        transformations.some(([type]) => type.startsWith('transpose')));
}
exports.isRadial = isRadial;
function isHelix(coordinate) {
    const { transformations } = coordinate.getOptions();
    return transformations.some(([type]) => type === 'helix');
}
exports.isHelix = isHelix;
function isParallel(coordinate) {
    const { transformations } = coordinate.getOptions();
    return transformations.some(([type]) => type === 'parallel');
}
exports.isParallel = isParallel;
function isFisheye(coordinate) {
    const { transformations } = coordinate.getOptions();
    return transformations.some(([type]) => type === 'fisheye');
}
exports.isFisheye = isFisheye;
function isRadar(coordinate) {
    return isParallel(coordinate) && isPolar(coordinate);
}
exports.isRadar = isRadar;
function isCircular(coordinate) {
    return isHelix(coordinate) || isPolar(coordinate);
}
exports.isCircular = isCircular;
function isTheta(coordinate) {
    return isPolar(coordinate) && isTranspose(coordinate);
}
exports.isTheta = isTheta;
function isNonCartesian(coordinate) {
    return (isPolar(coordinate) ||
        isParallel(coordinate) ||
        isRadial(coordinate) ||
        isTheta(coordinate));
}
exports.isNonCartesian = isNonCartesian;
function getRadius(coordinate) {
    if (isCircular(coordinate)) {
        const [width, height] = coordinate.getSize();
        const polar = coordinate
            .getOptions()
            .transformations.find((t) => t[0] === 'polar');
        // coordinate.size * outerRadius.
        if (polar)
            return (Math.max(width, height) / 2) * polar[4];
    }
    return 0;
}
exports.getRadius = getRadius;
function radiusOf(coordinate) {
    const { transformations } = coordinate.getOptions();
    const [, , , innerRadius, outerRadius] = transformations.find((d) => d[0] === 'polar');
    return [+innerRadius, +outerRadius];
}
exports.radiusOf = radiusOf;
function angleOf(coordinate, isRadius = true) {
    const { transformations } = coordinate.getOptions();
    const [, startAngle, endAngle] = transformations.find((d) => d[0] === 'polar');
    return isRadius
        ? [(+startAngle * 180) / Math.PI, (+endAngle * 180) / Math.PI]
        : [startAngle, endAngle];
}
exports.angleOf = angleOf;
function getTransformOptions(coordinate, type) {
    const { transformations } = coordinate.getOptions();
    const [, ...args] = transformations.find((d) => d[0] === type);
    return args;
}
exports.getTransformOptions = getTransformOptions;
//# sourceMappingURL=coordinate.js.map