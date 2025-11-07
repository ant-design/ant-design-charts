import type { AbsoluteArray } from '@antv/util';
import { mat4 } from 'gl-matrix';
import type { Circle, Ellipse, Line, Path, PathSegment, Polygon, Polyline, Rect } from '../display-objects';
export declare function getOrCalculatePathTotalLength(path: Path): number;
export declare function getOrCalculatePolylineTotalLength(polyline: Polyline): number;
export declare function removeRedundantMCommand(path: AbsoluteArray): void;
export declare function hasArcOrBezier(path: AbsoluteArray): boolean;
export declare function extractPolygons(pathArray: AbsoluteArray): {
    polygons: [number, number][][];
    polylines: [number, number][][];
};
export declare function getPathBBox(segments: any[], lineWidth: number): {
    x: number;
    y: number;
    width: number;
    height: number;
};
export declare function path2Segments(path: AbsoluteArray): PathSegment[];
/**
 * convert object to path, should account for:
 * * transform & origin
 * * lineWidth
 */
export declare function convertToPath(object: Circle | Ellipse | Rect | Line | Polyline | Polygon | Path, transform?: mat4): string;
export declare function translatePathToString(absolutePath: AbsoluteArray, startOffsetX?: number, startOffsetY?: number, endOffsetX?: number, endOffsetY?: number): string;
//# sourceMappingURL=path.d.ts.map