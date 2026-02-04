"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isTranspose = isTranspose;
exports.isPolar = isPolar;
exports.isRadial = isRadial;
exports.isHelix = isHelix;
exports.isParallel = isParallel;
exports.isFisheye = isFisheye;
exports.isRadar = isRadar;
exports.isCircular = isCircular;
exports.isTheta = isTheta;
exports.isNonCartesian = isNonCartesian;
exports.getRadius = getRadius;
exports.radiusOf = radiusOf;
exports.angleOf = angleOf;
exports.getTransformOptions = getTransformOptions;
function isTranspose(coordinate) {
    const { transformations } = coordinate.getOptions();
    const transposes = transformations
        .map(([type]) => type)
        .filter((type) => type === 'transpose');
    return transposes.length % 2 !== 0;
}
function isPolar(coordinate) {
    const { transformations } = coordinate.getOptions();
    return transformations.some(([type]) => type === 'polar');
}
function isRadial(coordinate) {
    const { transformations } = coordinate.getOptions();
    return (
    // distinguish radial from theta.
    transformations.some(([type]) => type === 'reflect') &&
        transformations.some(([type]) => type.startsWith('transpose')));
}
function isHelix(coordinate) {
    const { transformations } = coordinate.getOptions();
    return transformations.some(([type]) => type === 'helix');
}
function isParallel(coordinate) {
    const { transformations } = coordinate.getOptions();
    return transformations.some(([type]) => type === 'parallel');
}
function isFisheye(coordinate) {
    const { transformations } = coordinate.getOptions();
    return transformations.some(([type]) => type === 'fisheye');
}
function isRadar(coordinate) {
    return isParallel(coordinate) && isPolar(coordinate);
}
function isCircular(coordinate) {
    return isHelix(coordinate) || isPolar(coordinate);
}
function isTheta(coordinate) {
    return isPolar(coordinate) && isTranspose(coordinate);
}
function isNonCartesian(coordinate) {
    return (isPolar(coordinate) ||
        isParallel(coordinate) ||
        isRadial(coordinate) ||
        isTheta(coordinate));
}
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
function radiusOf(coordinate) {
    const { transformations } = coordinate.getOptions();
    const [, , , innerRadius, outerRadius] = transformations.find((d) => d[0] === 'polar');
    return [+innerRadius, +outerRadius];
}
function angleOf(coordinate, isRadius = true) {
    const { transformations } = coordinate.getOptions();
    const [, startAngle, endAngle] = transformations.find((d) => d[0] === 'polar');
    return isRadius
        ? [(+startAngle * 180) / Math.PI, (+endAngle * 180) / Math.PI]
        : [startAngle, endAngle];
}
function getTransformOptions(coordinate, type) {
    const { transformations } = coordinate.getOptions();
    const [, ...args] = transformations.find((d) => d[0] === type);
    return args;
}
//# sourceMappingURL=coordinate.js.map