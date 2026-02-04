"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeoView = void 0;
const scale_1 = require("@antv/scale");
const util_1 = require("@antv/util");
const d3_geo_1 = require("@antv/vendor/d3-geo");
const mark_1 = require("../utils/mark");
const d3Projection = __importStar(require("./d3Projection"));
const utils_1 = require("./utils");
/**
 * Get projection factory from d3-projection.
 */
function normalizeProjection(type) {
    if (typeof type === 'function')
        return type;
    const name = `geo${(0, util_1.upperFirst)(type)}`;
    const projection = d3Projection[name];
    if (!projection)
        throw new Error(`Unknown coordinate: ${type}`);
    return projection;
}
/**
 * @see https://github.com/mapbox/geojson-merge/blob/master/index.js
 */
function mergeGeoJSON(gjs) {
    return {
        type: 'FeatureCollection',
        features: gjs.flatMap((gj) => normalizeGeoJSON(gj).features),
    };
}
function normalizeGeoJSON(gj) {
    const types = {
        Point: 'geometry',
        MultiPoint: 'geometry',
        LineString: 'geometry',
        MultiLineString: 'geometry',
        Polygon: 'geometry',
        MultiPolygon: 'geometry',
        GeometryCollection: 'geometry',
        Feature: 'feature',
        FeatureCollection: 'featureCollection',
    };
    if (!gj || !gj.type)
        return null;
    const type = types[gj.type];
    if (!type)
        return null;
    if (type === 'geometry') {
        return {
            type: 'FeatureCollection',
            features: [
                {
                    type: 'Feature',
                    properties: {},
                    geometry: gj,
                },
            ],
        };
    }
    else if (type === 'feature') {
        return {
            type: 'FeatureCollection',
            features: [gj],
        };
    }
    else if (type === 'featureCollection') {
        return gj;
    }
}
/**
 * Specify the options for d3 projection
 * @see https://github.com/d3/d3-geo#projections
 * @todo Specify key each by each.
 */
function setProjectionOptions(projection, options) {
    var _a;
    for (const [key, value] of Object.entries(options)) {
        (_a = projection[key]) === null || _a === void 0 ? void 0 : _a.call(projection, value);
    }
}
function setProjectionSize(projection, nodes, layout, options) {
    const defaultOutline = () => {
        const geoNodes = nodes.filter(isGeoPath);
        // For geoPath with sphere mark, use it as outline.
        const sphere = geoNodes.find((d) => d.sphere);
        if (sphere)
            return { type: 'Sphere' };
        // Merge all GeoJSON as the outline.
        return mergeGeoJSON(geoNodes.filter((d) => !d.sphere).flatMap((d) => d.data.value));
    };
    const { outline = defaultOutline() } = options;
    const { size = 'fitExtent' } = options;
    if (size === 'fitExtent') {
        return setFitExtent(projection, outline, layout);
    }
    else if (size === 'fitWidth') {
        return setFitWidth(projection, outline, layout);
    }
}
function setFitExtent(projection, object, layout) {
    const { x, y, width, height } = layout;
    projection.fitExtent([
        [x, y],
        [width, height],
    ], object);
}
function setFitWidth(projection, object, layout) {
    const { width, height } = layout;
    const [[x0, y0], [x1, y1]] = (0, d3_geo_1.geoPath)(projection.fitWidth(width, object)).bounds(object);
    const dy = Math.ceil(y1 - y0);
    const l = Math.min(Math.ceil(x1 - x0), dy);
    const s = (projection.scale() * (l - 1)) / l;
    const [tx, ty] = projection.translate();
    const t = ty + (height - dy) / 2;
    projection.scale(s).translate([tx, t]).precision(0.2);
}
/**
 * @todo Remove this.
 */
function normalizeDataSource(node) {
    const { data } = node;
    if (Array.isArray(data))
        return Object.assign(Object.assign({}, node), { data: { value: data } });
    const { type } = data;
    if (type === 'graticule10') {
        return Object.assign(Object.assign({}, node), { data: { value: [(0, d3_geo_1.geoGraticule10)()] } });
    }
    else if (type === 'sphere') {
        // Sphere is not a standard type of GeoJSON.
        // Mark this geoPath as sphere geoPath.
        return Object.assign(Object.assign({}, node), { sphere: true, data: { value: [{ type: 'Sphere' }] } });
    }
    return node;
}
function isGeoPath(d) {
    return d.type === 'geoPath';
}
/**
 * A view with geo coordinate.
 */
const GeoView = () => {
    return (options) => {
        const { children, coordinate: projection = {} } = options;
        if (!Array.isArray(children))
            return [];
        // Get projection factory.
        const { type = 'equalEarth' } = projection, projectionOptions = __rest(projection, ["type"]);
        const createProjection = normalizeProjection(type);
        const nodes = children
            .map((c) => {
            return Object.assign(Object.assign({}, c), { data: (0, utils_1.mergeData)(c.data, options.data) });
        })
            .map(normalizeDataSource);
        // Set path generator lazily.
        let path;
        // A custom geo coordinate.
        function Geo() {
            return [
                [
                    'custom',
                    (x, y, width, height) => {
                        // Create and set projection.
                        const visual = createProjection();
                        const layout = { x, y, width, height };
                        setProjectionSize(visual, nodes, layout, projectionOptions);
                        setProjectionOptions(visual, projectionOptions);
                        // Create path generator.
                        path = (0, d3_geo_1.geoPath)(visual);
                        // Normalize projection and projection.invert,
                        // which normalize projected points.
                        const scaleX = new scale_1.Linear({
                            domain: [x, x + width],
                        });
                        const scaleY = new scale_1.Linear({
                            domain: [y, y + height],
                        });
                        const normalize = (point) => {
                            const visualPoint = visual(point);
                            if (!visualPoint)
                                return [null, null];
                            const [vx, vy] = visualPoint;
                            return [scaleX.map(vx), scaleY.map(vy)];
                        };
                        const normalizeInvert = (point) => {
                            if (!point)
                                return null;
                            const [px, py] = point;
                            const visualPoint = [scaleX.invert(px), scaleY.invert(py)];
                            return visual.invert(visualPoint);
                        };
                        return {
                            transform: (point) => normalize(point),
                            untransform: (point) => normalizeInvert(point),
                        };
                    },
                ],
            ];
        }
        function GeoPath(options) {
            const { style, tooltip = {} } = options;
            return Object.assign(Object.assign({}, options), { type: 'path', tooltip: (0, mark_1.maybeTooltip)(tooltip, {
                    title: 'id',
                    items: [{ channel: 'color' }],
                }), style: Object.assign(Object.assign({}, style), { d: (d) => path(d) || [] }) });
        }
        const t = (d) => (isGeoPath(d) ? GeoPath(d) : d);
        return [
            Object.assign(Object.assign({}, options), { type: 'view', scale: {
                    x: { type: 'identity' },
                    y: { type: 'identity' },
                }, axis: false, coordinate: { type: Geo }, children: nodes.flatMap(t) }),
        ];
    };
};
exports.GeoView = GeoView;
exports.GeoView.props = {};
//# sourceMappingURL=geoView.js.map