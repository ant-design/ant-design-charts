"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
exports.AxisBreaks = exports.BREAKS_GAP = void 0;
const g_1 = require("@antv/g");
const util_1 = require("@antv/util");
const constant_1 = require("../../runtime/constant");
exports.BREAKS_GAP = 0.03; // Default gap ratio for axis breaks
const DEFAULT_STYLE = {
    fill: '#fff',
    stroke: '#aaa',
    lineDash: '4 3',
    lineWidth: 0.5,
    fillOpacity: 1,
    strokeOpacity: 1,
};
const PADDING = 0;
/**
 * Create path points and corresponding clip paths.
 * @param y baseline Y coordinate
 * @param width total width of the path
 * @param offset vertical offset of wave
 * @param vertices number of generated points
 * @param isLowerBoundary whether it is the lower boundary
 * @param lineWidth line width of path
 * @returns tuple of [pathPoints, clipPoints]
 */
const createPathPoints = (y, width, offset, vertices, isLowerBoundary, lineWidth) => {
    const pathPoints = [];
    const clipPoints = [];
    const segments = vertices - 1;
    for (let i = 1; i < segments; i++) {
        const x = (i / segments) * width;
        const offsetY = y + (i % 2 === 0 ? offset : -offset);
        pathPoints.push(`${x},${offsetY}`);
        clipPoints.push(`${x},${isLowerBoundary ? offsetY - lineWidth : offsetY + lineWidth}`);
    }
    // Ensure last point reaches width
    pathPoints.push(`${width},${y}`);
    clipPoints.push(`${width + lineWidth},${y}`);
    return [pathPoints, clipPoints];
};
const AxisBreaks = (_, params) => {
    const { context, selection, view } = params;
    const layer = selection.select(`.${constant_1.PLOT_CLASS_NAME}`).node();
    const { document } = context.canvas;
    const { scale } = view;
    const collapsed = new Map();
    const handleCollapseToggle = (key, start, end) => __awaiter(void 0, void 0, void 0, function* () {
        const { update, setState } = context.externals;
        setState('options', (prev) => {
            const { marks } = prev;
            if (!marks || !marks.length)
                return prev;
            const newMarks = marks.map((mark) => {
                const breaks = (0, util_1.get)(mark, 'scale.y.breaks', []);
                const newBreaks = breaks.filter((b) => b.start !== start && b.end !== end && !b.collapsed);
                // add collapsed: true flag to the corresponding breaks
                breaks.forEach((b) => {
                    if (b.start === start && b.end === end) {
                        b.collapsed = true;
                    }
                });
                console.log('breaks group:', breaks, newBreaks);
                return (0, util_1.deepMix)({}, mark, { scale: { y: { breaks: newBreaks } } });
            });
            collapsed.set(key, { start, end });
            return Object.assign(Object.assign({}, prev), { marks: newMarks });
        });
        yield update();
    });
    const resetCollapsed = () => __awaiter(void 0, void 0, void 0, function* () {
        if (!collapsed.size)
            return;
        const { update, setState } = context.externals;
        setState('options', (prev) => {
            const { marks } = prev;
            const newMarks = marks.map((mark) => {
                const breaks = (0, util_1.get)(mark, 'scale.y.breaks', []);
                (0, util_1.set)(mark, 'scale.y.breaks', breaks.map((b) => (Object.assign(Object.assign({}, b), { collapsed: false }))));
                return mark;
            });
            collapsed.clear();
            return Object.assign(Object.assign({}, prev), { marks: newMarks });
        });
        yield update();
    });
    return (option) => {
        const { key, start, end, gap = exports.BREAKS_GAP, vertices = 50, lineWidth = 0.5, verticeOffset = 3 } = option, style = __rest(option, ["key", "start", "end", "gap", "vertices", "lineWidth", "verticeOffset"]);
        const g = document.createElement('g', {
            id: `break-group-${key}`,
            className: constant_1.BREAK_GROUP_CLASS_NAME,
        });
        const xDomain = (0, util_1.get)(scale, 'x.sortedDomain', []);
        const yScale = scale['y'].getOptions();
        const { range, domain } = yScale;
        const startIndex = domain.indexOf(start);
        const endIndex = domain.indexOf(end);
        const { width: plotWidth, height: plotHeight } = layer.getBBox();
        if (startIndex === -1 || endIndex === -1 || !xDomain.length)
            return g;
        const reverse = range[0] > range[1];
        const lowerY = range[startIndex] * plotHeight;
        const upperY = range[endIndex] * plotHeight;
        let linePath = '';
        let clipPath = '';
        for (const [boundaryIndex, { y, isLower }] of [
            { y: upperY, isLower: false },
            { y: lowerY, isLower: true },
        ].entries()) {
            const clipOffset = reverse ? lineWidth : -lineWidth;
            const [pathPoints, clipPoints] = createPathPoints(y, plotWidth - PADDING, verticeOffset, vertices, isLower, clipOffset);
            if (boundaryIndex === 0) {
                // start point + Top boundary path
                linePath = `M ${PADDING},${y} L ${pathPoints.join(' L ')} `;
                clipPath = `M ${PADDING - lineWidth},${y + clipOffset} L ${clipPoints.join(' L ')} `;
            }
            else {
                // Bottom boundary path + close point
                linePath += `L ${plotWidth - PADDING},${y} L ${[...pathPoints]
                    .reverse()
                    .join(' L ')} L ${PADDING},${y} Z`;
                clipPath += `L ${plotWidth - PADDING + lineWidth + 2},${y - clipOffset} L ${[...clipPoints].reverse().join(' L ')} L ${PADDING - lineWidth},${y - clipOffset} Z`;
            }
        }
        const pathAttrs = Object.assign(Object.assign({}, DEFAULT_STYLE), style);
        try {
            const path1 = new g_1.Path({ style: Object.assign(Object.assign({}, pathAttrs), { d: linePath }) });
            const path2 = new g_1.Path({
                style: Object.assign(Object.assign({}, pathAttrs), { d: clipPath, lineWidth: 0, cursor: 'pointer' }),
            });
            // double click to remove break
            path2.addEventListener('click', (e) => __awaiter(void 0, void 0, void 0, function* () {
                e.stopPropagation();
                if (e.detail === 2) {
                    yield handleCollapseToggle(key, start, end);
                }
            }));
            g.appendChild(path1);
            g.appendChild(path2);
            // reset collapsed breaks on double click the plot background
            layer.addEventListener('click', (e) => __awaiter(void 0, void 0, void 0, function* () {
                if (e.detail === 2) {
                    yield resetCollapsed();
                }
            }));
            layer.appendChild(g);
        }
        catch (e) {
            console.error('Failed to create break path:', e);
        }
        return g;
    };
};
exports.AxisBreaks = AxisBreaks;
exports.AxisBreaks.props = {};
//# sourceMappingURL=axis-breaks.js.map