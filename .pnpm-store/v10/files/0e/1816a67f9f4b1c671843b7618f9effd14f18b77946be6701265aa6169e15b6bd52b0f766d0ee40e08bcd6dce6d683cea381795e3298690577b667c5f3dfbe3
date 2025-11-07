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
var _index = require("../../../d3-geo/src/index.js");
var _noop = /*#__PURE__*/ _interop_require_default(require("../noop.js"));
var _clockwise = /*#__PURE__*/ _interop_require_default(require("./clockwise.js"));
var _contains = /*#__PURE__*/ _interop_require_default(require("./contains.js"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _default(object, projection) {
    var stream = projection.stream, project;
    if (!stream) throw new Error("invalid projection");
    switch(object && object.type){
        case "Feature":
            project = projectFeature;
            break;
        case "FeatureCollection":
            project = projectFeatureCollection;
            break;
        default:
            project = projectGeometry;
            break;
    }
    return project(object, stream);
}
function projectFeatureCollection(o, stream) {
    return {
        type: "FeatureCollection",
        features: o.features.map(function(f) {
            return projectFeature(f, stream);
        })
    };
}
function projectFeature(o, stream) {
    return {
        type: "Feature",
        id: o.id,
        properties: o.properties,
        geometry: projectGeometry(o.geometry, stream)
    };
}
function projectGeometryCollection(o, stream) {
    return {
        type: "GeometryCollection",
        geometries: o.geometries.map(function(o) {
            return projectGeometry(o, stream);
        })
    };
}
function projectGeometry(o, stream) {
    if (!o) return null;
    if (o.type === "GeometryCollection") return projectGeometryCollection(o, stream);
    var sink;
    switch(o.type){
        case "Point":
            sink = sinkPoint;
            break;
        case "MultiPoint":
            sink = sinkPoint;
            break;
        case "LineString":
            sink = sinkLine;
            break;
        case "MultiLineString":
            sink = sinkLine;
            break;
        case "Polygon":
            sink = sinkPolygon;
            break;
        case "MultiPolygon":
            sink = sinkPolygon;
            break;
        case "Sphere":
            sink = sinkPolygon;
            break;
        default:
            return null;
    }
    (0, _index.geoStream)(o, stream(sink));
    return sink.result();
}
var points = [], lines = [];
var sinkPoint = {
    point: function point(x, y) {
        points.push([
            x,
            y
        ]);
    },
    result: function result() {
        var result = !points.length ? null : points.length < 2 ? {
            type: "Point",
            coordinates: points[0]
        } : {
            type: "MultiPoint",
            coordinates: points
        };
        points = [];
        return result;
    }
};
var sinkLine = {
    lineStart: _noop.default,
    point: function point(x, y) {
        points.push([
            x,
            y
        ]);
    },
    lineEnd: function lineEnd() {
        if (points.length) lines.push(points), points = [];
    },
    result: function result() {
        var result = !lines.length ? null : lines.length < 2 ? {
            type: "LineString",
            coordinates: lines[0]
        } : {
            type: "MultiLineString",
            coordinates: lines
        };
        lines = [];
        return result;
    }
};
var sinkPolygon = {
    polygonStart: _noop.default,
    lineStart: _noop.default,
    point: function point(x, y) {
        points.push([
            x,
            y
        ]);
    },
    lineEnd: function lineEnd() {
        var n = points.length;
        if (n) {
            do points.push(points[0].slice());
            while (++n < 4);
            lines.push(points), points = [];
        }
    },
    polygonEnd: _noop.default,
    result: function result() {
        if (!lines.length) return null;
        var polygons = [], holes = [];
        // https://github.com/d3/d3/issues/1558
        lines.forEach(function(ring) {
            if ((0, _clockwise.default)(ring)) polygons.push([
                ring
            ]);
            else holes.push(ring);
        });
        holes.forEach(function(hole) {
            var point = hole[0];
            polygons.some(function(polygon) {
                if ((0, _contains.default)(polygon[0], point)) {
                    polygon.push(hole);
                    return true;
                }
            }) || polygons.push([
                hole
            ]);
        });
        lines = [];
        return !polygons.length ? null : polygons.length > 1 ? {
            type: "MultiPolygon",
            coordinates: polygons
        } : {
            type: "Polygon",
            coordinates: polygons[0]
        };
    }
};
