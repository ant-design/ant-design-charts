import { MaybeKey, MaybeTitle, MaybeTooltip } from '../transform';
export function baseChannels(options = {}) {
    const { shapes } = options;
    return [
        { name: 'color' },
        { name: 'opacity' },
        { name: 'shape', range: shapes },
        { name: 'enterType' },
        { name: 'enterDelay', scaleKey: 'enter' },
        { name: 'enterDuration', scaleKey: 'enter' },
        { name: 'enterEasing' },
        { name: 'key', scale: 'identity' },
        { name: 'groupKey', scale: 'identity' },
        { name: 'label', scale: 'identity' },
    ];
}
export function baseGeometryChannels(options = {}) {
    return [...baseChannels(options), { name: 'title', scale: 'identity' }];
}
export function tooltip3d() {
    return [
        { type: MaybeTitle, channel: 'color' },
        { type: MaybeTooltip, channel: ['x', 'y', 'z'] },
    ];
}
export function tooltip2d() {
    return [
        { type: MaybeTitle, channel: 'color' },
        { type: MaybeTooltip, channel: ['x', 'y'] },
    ];
}
export function tooltip1d() {
    return [
        { type: MaybeTitle, channel: 'x' },
        { type: MaybeTooltip, channel: ['y'] },
    ];
}
export function tooltipXd() {
    return [
        { type: MaybeTitle, channel: 'color' },
        { type: MaybeTooltip, channel: ['position'] },
    ];
}
export function baseAnnotationChannels(options = {}) {
    return baseChannels(options);
}
export function basePreInference() {
    return [{ type: MaybeKey }];
}
export function basePostInference() {
    return [];
}
export function bandWidth(scale, x) {
    return scale.getBandWidth(scale.invert(x));
}
export function createBandOffset(scale, value, options = {}) {
    const { x: X, y: Y, series: S } = value;
    const { x, y, series } = scale;
    const { style: { bandOffset = series ? 0 : 0.5, bandOffsetX = bandOffset, bandOffsetY = bandOffset, } = {}, } = options;
    const isBandX = !!(x === null || x === void 0 ? void 0 : x.getBandWidth);
    const isBandY = !!(y === null || y === void 0 ? void 0 : y.getBandWidth);
    const isSeries = !!(series === null || series === void 0 ? void 0 : series.getBandWidth);
    if (!isBandX && !isBandY)
        return (d) => d;
    return (d, i) => {
        const widthX = isBandX ? bandWidth(x, X[i]) : 0;
        const widthY = isBandY ? bandWidth(y, Y[i]) : 0;
        const f = () => (bandWidth(series, S[i]) / 2 + +S[i]) * widthX;
        const offset = isSeries && S ? f() : 0;
        const [x0, y0] = d;
        return [x0 + bandOffsetX * widthX + offset, y0 + bandOffsetY * widthY];
    };
}
export function p(d) {
    return parseFloat(d) / 100;
}
export function visualMark(index, scale, value, coordinate) {
    const { x: X, y: Y } = value;
    const { innerWidth, innerHeight } = coordinate.getOptions();
    const P = Array.from(index, (i) => {
        const x0 = X[i];
        const y0 = Y[i];
        const x = typeof x0 === 'string' ? p(x0) * innerWidth : +x0;
        const y = typeof y0 === 'string' ? p(y0) * innerHeight : +y0;
        return [[x, y]];
    });
    return [index, P];
}
export function field(encode) {
    return typeof encode === 'function' ? encode : (d) => d[encode];
}
export function valueof(data, encode) {
    return Array.from(data, field(encode));
}
/**
 * Normalizes data input for graph charts (sankey, chord, forceGraph) to ensure consistent format
 * Supports both array input (like other charts) and object input (original format)
 *
 * @param data - Input data, can be array or object with links/nodes properties
 * @returns Normalized data object with links and optional nodes properties
 */
function normalizeGraphData(data) {
    // Handle array input - convert to { links: data } format
    if (Array.isArray(data)) {
        return { links: data };
    }
    // Handle object input - return as is (original format)
    if (data && typeof data === 'object') {
        return {
            links: data.links || [],
            nodes: data.nodes,
        };
    }
    // Handle null/undefined and unexpected input types
    return { links: [] };
}
export function initializeData(data, encode) {
    const normalizedData = normalizeGraphData(data);
    const { source = (d) => d.source, target = (d) => d.target, value = (d) => d.value, } = encode;
    const { links, nodes } = normalizedData;
    // Early return for empty links
    if (!links.length) {
        return {
            links: [],
            nodes: nodes || [],
        };
    }
    const LS = valueof(links, source);
    const LT = valueof(links, target);
    const LV = valueof(links, value);
    return {
        links: links.map((_, i) => ({
            target: LT[i],
            source: LS[i],
            value: LV[i],
        })),
        nodes: nodes || Array.from(new Set([...LS, ...LT]), (key) => ({ key })),
    };
}
//# sourceMappingURL=utils.js.map