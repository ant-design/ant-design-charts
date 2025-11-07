"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Polygon = void 0;
const g_1 = require("@antv/g");
const point_1 = require("../../utils/point");
const base_node_1 = require("../nodes/base-node");
/**
 * Abstract class for polygon nodes,i.e triangle, diamond, hexagon, etc.
 */
class Polygon extends base_node_1.BaseNode {
    constructor(options) {
        super(options);
    }
    get parsedAttributes() {
        return this.attributes;
    }
    drawKeyShape(attributes, container) {
        return this.upsert('key', g_1.Polygon, this.getKeyStyle(attributes), container);
    }
    getKeyStyle(attributes) {
        const keyStyle = super.getKeyStyle(attributes);
        return Object.assign(Object.assign({}, keyStyle), { points: this.getPoints(attributes) });
    }
    getIntersectPoint(point, useExtendedLine = false) {
        var _a, _b;
        const { points } = this.getShape('key').attributes;
        const center = [+(((_a = this.attributes) === null || _a === void 0 ? void 0 : _a.x) || 0), +(((_b = this.attributes) === null || _b === void 0 ? void 0 : _b.y) || 0)];
        return (0, point_1.getPolygonIntersectPoint)(point, center, points, true, useExtendedLine).point;
    }
}
exports.Polygon = Polygon;
//# sourceMappingURL=polygon.js.map