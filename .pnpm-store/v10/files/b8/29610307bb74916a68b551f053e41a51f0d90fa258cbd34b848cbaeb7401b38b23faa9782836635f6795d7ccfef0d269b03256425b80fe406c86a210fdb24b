import { BrushHighlight } from './brushHighlight';
export function brushYRegion(x, y, x1, y1, extent) {
    const [minX, , maxX] = extent;
    return [minX, y, maxX, y1];
}
export function BrushYHighlight(options) {
    return BrushHighlight(Object.assign(Object.assign({}, options), { brushRegion: brushYRegion, selectedHandles: ['handle-n', 'handle-s'] }));
}
//# sourceMappingURL=brushYHighlight.js.map