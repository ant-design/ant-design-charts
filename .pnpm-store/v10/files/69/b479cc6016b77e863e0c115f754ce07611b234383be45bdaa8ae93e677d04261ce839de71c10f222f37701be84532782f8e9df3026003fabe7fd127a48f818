export function isTranspose(coordinate) {
    const { transformations } = coordinate.getOptions();
    const transposes = transformations
        .map(([type]) => type)
        .filter((type) => type === 'transpose');
    return transposes.length % 2 !== 0;
}
export function isPolar(coordinate) {
    const { transformations } = coordinate.getOptions();
    return transformations.some(([type]) => type === 'polar');
}
export function isRadial(coordinate) {
    const { transformations } = coordinate.getOptions();
    return (
    // distinguish radial from theta.
    transformations.some(([type]) => type === 'reflect') &&
        transformations.some(([type]) => type.startsWith('transpose')));
}
export function isHelix(coordinate) {
    const { transformations } = coordinate.getOptions();
    return transformations.some(([type]) => type === 'helix');
}
export function isParallel(coordinate) {
    const { transformations } = coordinate.getOptions();
    return transformations.some(([type]) => type === 'parallel');
}
export function isFisheye(coordinate) {
    const { transformations } = coordinate.getOptions();
    return transformations.some(([type]) => type === 'fisheye');
}
export function isRadar(coordinate) {
    return isParallel(coordinate) && isPolar(coordinate);
}
export function isCircular(coordinate) {
    return isHelix(coordinate) || isPolar(coordinate);
}
export function isTheta(coordinate) {
    return isPolar(coordinate) && isTranspose(coordinate);
}
export function isNonCartesian(coordinate) {
    return (isPolar(coordinate) ||
        isParallel(coordinate) ||
        isRadial(coordinate) ||
        isTheta(coordinate));
}
export function getRadius(coordinate) {
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
export function radiusOf(coordinate) {
    const { transformations } = coordinate.getOptions();
    const [, , , innerRadius, outerRadius] = transformations.find((d) => d[0] === 'polar');
    return [+innerRadius, +outerRadius];
}
export function angleOf(coordinate, isRadius = true) {
    const { transformations } = coordinate.getOptions();
    const [, startAngle, endAngle] = transformations.find((d) => d[0] === 'polar');
    return isRadius
        ? [(+startAngle * 180) / Math.PI, (+endAngle * 180) / Math.PI]
        : [startAngle, endAngle];
}
export function getTransformOptions(coordinate, type) {
    const { transformations } = coordinate.getOptions();
    const [, ...args] = transformations.find((d) => d[0] === type);
    return args;
}
//# sourceMappingURL=coordinate.js.map