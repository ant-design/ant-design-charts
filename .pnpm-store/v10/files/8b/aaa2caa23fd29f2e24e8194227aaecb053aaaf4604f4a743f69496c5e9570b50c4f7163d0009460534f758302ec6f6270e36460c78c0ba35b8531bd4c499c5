import { Polygon as GPolygon } from '@antv/g';
import { getPolygonIntersectPoint } from '../../utils/point';
import { BaseNode } from '../nodes/base-node';
/**
 * Abstract class for polygon nodes,i.e triangle, diamond, hexagon, etc.
 */
export class Polygon extends BaseNode {
    constructor(options) {
        super(options);
    }
    get parsedAttributes() {
        return this.attributes;
    }
    drawKeyShape(attributes, container) {
        return this.upsert('key', GPolygon, this.getKeyStyle(attributes), container);
    }
    getKeyStyle(attributes) {
        const keyStyle = super.getKeyStyle(attributes);
        return Object.assign(Object.assign({}, keyStyle), { points: this.getPoints(attributes) });
    }
    getIntersectPoint(point, useExtendedLine = false) {
        var _a, _b;
        const { points } = this.getShape('key').attributes;
        const center = [+(((_a = this.attributes) === null || _a === void 0 ? void 0 : _a.x) || 0), +(((_b = this.attributes) === null || _b === void 0 ? void 0 : _b.y) || 0)];
        return getPolygonIntersectPoint(point, center, points, true, useExtendedLine).point;
    }
}
//# sourceMappingURL=polygon.js.map