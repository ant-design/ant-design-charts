import { __read, __spreadArray } from "tslib";
import { clone, isEqual, clamp } from '@antv/util';
import { catmullRom2Bezier } from '../../util';
/**
 * 根据数据获得每条线各点x，y值
 */
export function dataToLines(data, scales) {
    var _a;
    var x = scales.x, y = scales.y;
    var _b = __read((y.getOptions().range || [0, 0]), 2), max = _b[0], min = _b[1];
    if (min > max)
        _a = __read([max, min], 2), min = _a[0], max = _a[1];
    return data.map(function (points) {
        var lines = points.map(function (val, idx) {
            return [x.map(idx), clamp(y.map(val), min, max)];
        });
        return lines;
    });
}
/**
 * 根据线的点数据生成折线path
 */
export function lineToLinePath(line, reverse) {
    if (reverse === void 0) { reverse = false; }
    var M = reverse ? line.length - 1 : 0;
    var linePath = line.map(function (point, idx) { return __spreadArray([idx === M ? 'M' : 'L'], __read(point), false); });
    return reverse ? linePath.reverse() : linePath;
}
/**
 * 根据点数据生成曲线path
 * @param points 点数据
 * @param reverse 是否倒序生成
 */
export function lineToCurvePath(line, reverse) {
    if (reverse === void 0) { reverse = false; }
    if (line.length <= 2) {
        return lineToLinePath(line);
    }
    var data = [];
    var len = line.length;
    for (var idx = 0; idx < len; idx += 1) {
        var point = reverse ? line[len - idx - 1] : line[idx];
        if (!isEqual(point, data.slice(-2))) {
            data.push.apply(data, __spreadArray([], __read(point), false));
        }
    }
    var path = catmullRom2Bezier(data, false);
    if (reverse) {
        path.unshift(__spreadArray(['M'], __read(line[len - 1]), false));
    }
    else {
        path.unshift(__spreadArray(['M'], __read(line[0]), false));
    }
    return path;
}
/**
 * 根据baseline将path闭合
 */
export function closePathByBaseLine(path, width, baseline) {
    var closedPath = clone(path);
    closedPath.push(['L', width, baseline], ['L', 0, baseline], ['Z']);
    return closedPath;
}
/**
 * 将多条线的点数据生成区域path
 * 可以是折线或曲线
 */
export function linesToAreaPaths(lines, smooth, width, baseline) {
    return lines.map(function (line) {
        return closePathByBaseLine(smooth ? lineToCurvePath(line) : lineToLinePath(line), width, baseline);
    });
}
/**
 * 生成折线堆叠区域封闭图形路径
 */
export function linesToStackAreaPaths(lines, width, baseline) {
    var paths = [];
    for (var idx = lines.length - 1; idx >= 0; idx -= 1) {
        var currLine = lines[idx];
        var currCurvePath = lineToLinePath(currLine);
        var path = void 0;
        if (idx === 0) {
            // 最底部的线直接与y=0连接成闭合区域
            path = closePathByBaseLine(currCurvePath, width, baseline);
        }
        else {
            // 计算下一根曲线的反向路径
            var belowLine = lines[idx - 1];
            var belowCurvePath = lineToLinePath(belowLine, true);
            belowCurvePath[0][0] = 'L';
            // 连接路径
            path = __spreadArray(__spreadArray(__spreadArray([], __read(currCurvePath), false), __read(belowCurvePath), false), [['Z']], false);
        }
        paths.push(path);
    }
    return paths;
}
/**
 * 生成曲线堆叠区域封闭图形路径
 */
export function linesToStackCurveAreaPaths(lines, width, baseline) {
    var paths = [];
    for (var idx = lines.length - 1; idx >= 0; idx -= 1) {
        var currLine = lines[idx];
        var currCurvePath = lineToCurvePath(currLine);
        var path = void 0;
        if (idx === 0) {
            // 最底部的线直接与y=0连接成闭合区域
            path = closePathByBaseLine(currCurvePath, width, baseline);
        }
        else {
            // 计算下一根曲线的反向路径
            var belowLine = lines[idx - 1];
            var belowCurvePath = lineToCurvePath(belowLine, true);
            /**
             * 将线条连接成闭合路径
             *  M C C C C C
             *  A ～ -> ～ B
             *  ⬆        ⬇
             *  D ～ <- ～ C
             *  C C C C C M
             *
             */
            var A = currLine[0];
            // const B = currLine[currLine.length - 1];
            // const C = belowLine[belowLine.length - 1];
            // const D = belowLine[0];
            // 将反向曲线开头 M X Y 改为 L X Y
            belowCurvePath[0][0] = 'L';
            // 连接路径
            path = __spreadArray(__spreadArray(__spreadArray([], __read(currCurvePath), false), __read(belowCurvePath), false), [__spreadArray(['M'], __read(A), false), ['Z']], false);
        }
        paths.push(path);
    }
    return paths;
}
//# sourceMappingURL=path.js.map