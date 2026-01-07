"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.brushXRegion = brushXRegion;
exports.BrushXHighlight = BrushXHighlight;
const brushHighlight_1 = require("./brushHighlight");
function brushXRegion(x, y, x1, y1, extent) {
    const [, minY, , maxY] = extent;
    return [x, minY, x1, maxY];
}
function BrushXHighlight(options) {
    return (0, brushHighlight_1.BrushHighlight)(Object.assign(Object.assign({}, options), { brushRegion: brushXRegion, selectedHandles: ['handle-e', 'handle-w'] }));
}
//# sourceMappingURL=brushXHighlight.js.map