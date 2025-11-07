"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _polygonContains = /*#__PURE__*/ _interop_require_default(require("./polygonContains.js"));
var _distance = /*#__PURE__*/ _interop_require_default(require("./distance.js"));
var _math = require("./math.js");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var containsObjectType = {
    Feature: function Feature(object, point) {
        return containsGeometry(object.geometry, point);
    },
    FeatureCollection: function FeatureCollection(object, point) {
        var features = object.features, i = -1, n = features.length;
        while(++i < n)if (containsGeometry(features[i].geometry, point)) return true;
        return false;
    }
};
var containsGeometryType = {
    Sphere: function Sphere() {
        return true;
    },
    Point: function Point(object, point) {
        return containsPoint(object.coordinates, point);
    },
    MultiPoint: function MultiPoint(object, point) {
        var coordinates = object.coordinates, i = -1, n = coordinates.length;
        while(++i < n)if (containsPoint(coordinates[i], point)) return true;
        return false;
    },
    LineString: function LineString(object, point) {
        return containsLine(object.coordinates, point);
    },
    MultiLineString: function MultiLineString(object, point) {
        var coordinates = object.coordinates, i = -1, n = coordinates.length;
        while(++i < n)if (containsLine(coordinates[i], point)) return true;
        return false;
    },
    Polygon: function Polygon(object, point) {
        return containsPolygon(object.coordinates, point);
    },
    MultiPolygon: function MultiPolygon(object, point) {
        var coordinates = object.coordinates, i = -1, n = coordinates.length;
        while(++i < n)if (containsPolygon(coordinates[i], point)) return true;
        return false;
    },
    GeometryCollection: function GeometryCollection(object, point) {
        var geometries = object.geometries, i = -1, n = geometries.length;
        while(++i < n)if (containsGeometry(geometries[i], point)) return true;
        return false;
    }
};
function containsGeometry(geometry, point) {
    return geometry && containsGeometryType.hasOwnProperty(geometry.type) ? containsGeometryType[geometry.type](geometry, point) : false;
}
function containsPoint(coordinates, point) {
    return (0, _distance.default)(coordinates, point) === 0;
}
function containsLine(coordinates, point) {
    var ao, bo, ab;
    for(var i = 0, n = coordinates.length; i < n; i++){
        bo = (0, _distance.default)(coordinates[i], point);
        if (bo === 0) return true;
        if (i > 0) {
            ab = (0, _distance.default)(coordinates[i], coordinates[i - 1]);
            if (ab > 0 && ao <= ab && bo <= ab && (ao + bo - ab) * (1 - Math.pow((ao - bo) / ab, 2)) < _math.epsilon2 * ab) return true;
        }
        ao = bo;
    }
    return false;
}
function containsPolygon(coordinates, point) {
    return !!(0, _polygonContains.default)(coordinates.map(ringRadians), pointRadians(point));
}
function ringRadians(ring) {
    return ring = ring.map(pointRadians), ring.pop(), ring;
}
function pointRadians(point) {
    return [
        point[0] * _math.radians,
        point[1] * _math.radians
    ];
}
function _default(object, point) {
    return (object && containsObjectType.hasOwnProperty(object.type) ? containsObjectType[object.type] : containsGeometry)(object, point);
}
