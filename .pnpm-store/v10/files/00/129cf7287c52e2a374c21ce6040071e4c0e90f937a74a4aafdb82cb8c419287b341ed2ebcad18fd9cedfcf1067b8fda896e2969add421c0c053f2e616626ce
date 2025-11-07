"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Line = void 0;
const style_1 = require("../../utils/style");
const base_edge_1 = require("./base-edge");
/**
 * <zh/> 直线
 *
 * <en/> Line
 */
class Line extends base_edge_1.BaseEdge {
    constructor(options) {
        super((0, style_1.mergeOptions)({ style: Line.defaultStyleProps }, options));
    }
    getKeyPath(attributes) {
        const [sourcePoint, targetPoint] = this.getEndpoints(attributes);
        return [
            ['M', sourcePoint[0], sourcePoint[1]],
            ['L', targetPoint[0], targetPoint[1]],
        ];
    }
}
exports.Line = Line;
Line.defaultStyleProps = {};
//# sourceMappingURL=line.js.map