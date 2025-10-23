"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrushYHighlight = exports.brushYRegion = void 0;
const brushHighlight_1 = require("./brushHighlight");
function brushYRegion(x, y, x1, y1, extent) {
    const [minX, , maxX] = extent;
    return [minX, y, maxX, y1];
}
exports.brushYRegion = brushYRegion;
function BrushYHighlight(options) {
    return (0, brushHighlight_1.BrushHighlight)(Object.assign(Object.assign({}, options), { brushRegion: brushYRegion, selectedHandles: ['handle-n', 'handle-s'] }));
}
exports.BrushYHighlight = BrushYHighlight;
//# sourceMappingURL=brushYHighlight.js.map