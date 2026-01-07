import { BrushHighlight } from './brushHighlight';
export function brushXRegion(x, y, x1, y1, extent) {
    const [, minY, , maxY] = extent;
    return [x, minY, x1, maxY];
}
export function BrushXHighlight(options) {
    return BrushHighlight(Object.assign(Object.assign({}, options), { brushRegion: brushXRegion, selectedHandles: ['handle-e', 'handle-w'] }));
}
//# sourceMappingURL=brushXHighlight.js.map