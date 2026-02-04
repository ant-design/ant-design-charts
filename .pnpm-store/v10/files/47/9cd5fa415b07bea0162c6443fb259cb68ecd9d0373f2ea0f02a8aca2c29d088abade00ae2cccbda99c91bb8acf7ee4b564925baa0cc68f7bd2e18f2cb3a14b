import { __read } from "tslib";
/**
 * from: https://github.com/zqlu/svg2marker
 * translate svg string to G.Marker
 */
import svgPathParser from 'svg-path-parser';
/**
 *  Return function to register a Marker Symbol for give SVG Path
 *
 * @param svgPath SVG Path string
 * @param viewBoxWidth SVG view box width, default to 1024
 * @param viewBoxHeight SVG view box height, default to 1024
 */
export function path2marker(svgPath, viewBoxWidth, viewBoxHeight) {
    if (viewBoxWidth === void 0) { viewBoxWidth = 1024; }
    if (viewBoxHeight === void 0) { viewBoxHeight = 1014; }
    return function (x, y, r) {
        // @ts-ignore
        var paths = svgPathParser(svgPath);
        return paths.map(function (path) {
            var arr = [];
            arr.push(path.relative === true ? path.code.toLowerCase() : path.code.toUpperCase());
            var pairs = [
                [path.x1, path.y1],
                [path.x2, path.y2],
                [path.x, path.y],
            ];
            pairs.forEach(function (pair) {
                var _a = __read(pair, 2), px = _a[0], py = _a[1];
                if (px !== undefined) {
                    arr.push(path.relative === true ? (px / viewBoxWidth) * 2 * r : x - r + r * 2 * (px / viewBoxWidth));
                }
                if (py !== undefined) {
                    arr.push(path.relative === true ? (py / viewBoxHeight) * 2 * r : y - r + r * 2 * (py / viewBoxHeight));
                }
            });
            return arr;
        });
    };
}
/**
 * Return function to register a Marker symbol for give svg file
 *
 * @param icon SVG file content
 */
export function svg2marker(icon) {
    var pathMatch = /<path\s+d="(.*?)"/i.exec(icon);
    var viewBoxMatch = /viewBox="\d+\s+\d+\s+(\d+)\s+(\d+)"/i.exec(icon);
    if (pathMatch === null || pathMatch.length < 2) {
        return function () { return []; };
    }
    var width = 1024;
    var height = 1024;
    if (viewBoxMatch !== null && viewBoxMatch.length >= 3) {
        if (!Number.isNaN(parseInt(viewBoxMatch[1], 10))) {
            width = parseInt(viewBoxMatch[1], 10);
        }
        if (!Number.isNaN(parseInt(viewBoxMatch[2], 10))) {
            height = parseInt(viewBoxMatch[2], 10);
        }
    }
    return path2marker(pathMatch[1], width, height);
}
//# sourceMappingURL=svg2marker.js.map