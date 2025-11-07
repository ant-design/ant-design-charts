"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPointInStroke = isPointInStroke;
var get_properties_at_point_1 = require("./get-properties-at-point");
/**
 * Checks if a given point is in the stroke of a path.
 */
function isPointInStroke(pathInput, point) {
    var distance = (0, get_properties_at_point_1.getPropertiesAtPoint)(pathInput, point).distance;
    return Math.abs(distance) < 0.001; // 0.01 might be more permissive
}
//# sourceMappingURL=is-point-in-stroke.js.map