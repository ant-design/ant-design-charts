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
exports.ChartIndex = void 0;
const g_1 = require("@antv/g");
const util_1 = require("@antv/util");
const d3_array_1 = require("@antv/vendor/d3-array");
const helper_1 = require("../utils/helper");
const runtime_1 = require("../runtime");
const utils_1 = require("./utils");
function maybeTransform(options) {
    const { transform = [] } = options;
    const normalizeY = transform.find((d) => d.type === 'normalizeY');
    if (normalizeY)
        return normalizeY;
    const newNormalizeY = { type: 'normalizeY' };
    transform.push(newNormalizeY);
    options.transform = transform;
    return newNormalizeY;
}
function markValue(markState, markName, channels) {
    const [value] = Array.from(markState.entries())
        .filter(([mark]) => mark.type === markName)
        .map(([mark]) => {
        const { encode } = mark;
        const channel = (name) => {
            const channel = encode[name];
            return [name, channel ? channel.value : undefined];
        };
        return Object.fromEntries(channels.map(channel));
    });
    return value;
}
/**
 * @todo Perf
 */
function ChartIndex(_a) {
    var { wait = 20, leading, trailing = false, labelFormatter = (date) => `${date}` } = _a, style = __rest(_a, ["wait", "leading", "trailing", "labelFormatter"]);
    return (context) => {
        const { view, container, update, setState } = context;
        const { markState, scale, coordinate } = view;
        // Get line mark value, exit if it is not existed.
        const value = markValue(markState, 'line', ['x', 'y', 'series']);
        if (!value)
            return;
        // Prepare channel value.
        const { y: Y, x: X, series: S = [] } = value;
        const I = Y.map((_, i) => i);
        const sortedX = (0, d3_array_1.sort)(I.map((i) => X[i]));
        // Prepare shapes.
        const plotArea = (0, utils_1.selectPlotArea)(container);
        const lines = container.getElementsByClassName(runtime_1.ELEMENT_CLASS_NAME);
        const labels = container.getElementsByClassName(runtime_1.LABEL_CLASS_NAME);
        // The format of label key: `${elementKey}-index`,
        // group labels by elementKey.
        const keyofLabel = (d) => d.__data__.key.split('-')[0];
        const keyLabels = (0, d3_array_1.group)(labels, keyofLabel);
        const rule = new g_1.Line({
            style: Object.assign({ x1: 0, y1: 0, x2: 0, y2: plotArea.getAttribute('height'), stroke: 'black', lineWidth: 1 }, (0, helper_1.subObject)(style, 'rule')),
        });
        const text = new g_1.Text({
            style: Object.assign({ x: 0, y: plotArea.getAttribute('height'), text: '', fontSize: 10 }, (0, helper_1.subObject)(style, 'label')),
        });
        rule.append(text);
        plotArea.appendChild(rule);
        // Get the closet date to the rule.
        const dateByFocus = (coordinate, scaleX, focus) => {
            const [normalizedX] = coordinate.invert(focus);
            const date = scaleX.invert(normalizedX);
            return sortedX[(0, d3_array_1.bisectCenter)(sortedX, date)];
        };
        // Update rule and label content.
        const updateRule = (focus, date) => {
            rule.setAttribute('x1', focus[0]);
            rule.setAttribute('x2', focus[0]);
            text.setAttribute('text', labelFormatter(date));
        };
        // Store the new inner state alter rerender the view.
        let newView;
        // Rerender the view to update basis for each line.
        const updateBasisByRerender = (focus) => __awaiter(this, void 0, void 0, function* () {
            // Find the closetDate to the rule.
            const { x: scaleX } = scale;
            const date = dateByFocus(coordinate, scaleX, focus);
            updateRule(focus, date);
            setState('chartIndex', (options) => {
                // Clone options and get line mark.
                const clonedOptions = (0, util_1.deepMix)({}, options);
                const lineMark = clonedOptions.marks.find((d) => d.type === 'line');
                // Update domain of y scale for the line mark.
                const r = (I) => (0, d3_array_1.max)(I, (i) => +Y[i]) / (0, d3_array_1.min)(I, (i) => +Y[i]);
                const k = (0, d3_array_1.max)((0, d3_array_1.rollup)(I, r, (i) => S[i]).values());
                const domainY = [1 / k, k];
                (0, util_1.deepMix)(lineMark, {
                    scale: { y: { domain: domainY } },
                });
                // Update normalize options.
                const normalizeY = maybeTransform(lineMark);
                normalizeY.groupBy = 'color';
                normalizeY.basis = (I, Y) => {
                    const i = I[(0, d3_array_1.bisector)((i) => X[+i]).center(I, date)];
                    return Y[i];
                };
                // Disable animation.
                for (const mark of clonedOptions.marks)
                    mark.animate = false;
                return clonedOptions;
            });
            const newState = yield update('chartIndex');
            newView = newState.view;
        });
        // Only apply translate to update basis for each line.
        // If performance is ok, there is no need to use this
        // strategy to update basis.
        const updateBasisByTranslate = (focus) => {
            // Find the closetDate to the rule.
            const { scale, coordinate } = newView;
            const { x: scaleX, y: scaleY } = scale;
            const date = dateByFocus(coordinate, scaleX, focus);
            updateRule(focus, date);
            // Translate mark and label for better performance.
            for (const line of lines) {
                // Compute transform in y direction.
                const { seriesIndex: SI, key } = line.__data__;
                const i = SI[(0, d3_array_1.bisector)((i) => X[+i]).center(SI, date)];
                const p0 = [0, scaleY.map(1)]; // basis point
                const p1 = [0, scaleY.map(Y[i] / Y[SI[0]])];
                const [, y0] = coordinate.map(p0);
                const [, y1] = coordinate.map(p1);
                const dy = y0 - y1;
                line.setAttribute('transform', `translate(0, ${dy})`);
                // Update line and related label.
                const labels = keyLabels.get(key) || [];
                for (const label of labels) {
                    // @todo Replace with style.transform.
                    // It now has unexpected behavior.
                    label.setAttribute('dy', dy);
                }
            }
        };
        const updateBasis = (0, util_1.throttle)((event) => {
            const focus = (0, utils_1.mousePosition)(plotArea, event);
            if (!focus)
                return;
            updateBasisByTranslate(focus);
        }, wait, { leading, trailing });
        updateBasisByRerender([0, 0]);
        plotArea.addEventListener('pointerenter', updateBasis);
        plotArea.addEventListener('pointermove', updateBasis);
        plotArea.addEventListener('pointerleave', updateBasis);
        return () => {
            rule.remove();
            plotArea.removeEventListener('pointerenter', updateBasis);
            plotArea.removeEventListener('pointermove', updateBasis);
            plotArea.removeEventListener('pointerleave', updateBasis);
        };
    };
}
exports.ChartIndex = ChartIndex;
ChartIndex.props = {
    reapplyWhenUpdate: true,
};
//# sourceMappingURL=chartIndex.js.map