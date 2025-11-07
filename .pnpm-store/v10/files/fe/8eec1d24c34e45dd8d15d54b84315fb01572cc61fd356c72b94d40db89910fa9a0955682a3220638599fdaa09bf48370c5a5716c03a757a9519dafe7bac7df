"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "findAllWithinRadius", {
    enumerable: true,
    get: function() {
        return findAllWithinRadius;
    }
});
var distance = function(x1, y1, z1, x2, y2, z2) {
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2) + Math.pow(z1 - z2, 2));
};
function findAllWithinRadius(x, y, z, radius) {
    var _this = this;
    var result = [];
    var xMin = x - radius;
    var yMin = y - radius;
    var zMin = z - radius;
    var xMax = x + radius;
    var yMax = y + radius;
    var zMax = z + radius;
    this.visit(function(node, x1, y1, z1, x2, y2, z2) {
        if (!node.length) {
            do {
                var d = node.data;
                if (distance(x, y, z, _this._x(d), _this._y(d), _this._z(d)) <= radius) {
                    result.push(d);
                }
            }while (node = node.next);
        }
        return x1 > xMax || y1 > yMax || z1 > zMax || x2 < xMin || y2 < yMin || z2 < zMin;
    });
    return result;
}
