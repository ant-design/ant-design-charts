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
exports.ElementPointMove = void 0;
const g_1 = require("@antv/g");
const util_1 = require("@antv/util");
const helper_1 = require("../utils/helper");
const utils_1 = require("./utils");
const DEFAULT_STYLE = {
    pointR: 6,
    pointStrokeWidth: 1,
    pointStroke: '#888',
    pointActiveStroke: '#f5f5f5',
    pathStroke: '#888',
    pathLineDash: [3, 4],
    labelFontSize: 12,
    labelFill: '#888',
    labelStroke: '#fff',
    labelLineWidth: 1,
    labelY: -6,
    labelX: 2,
};
// point shape name.
const MOVE_POINT_NAME = 'movePoint';
// Element mouseenter change style.
const elementMouseenter = (e) => {
    const element = e.target;
    const { markType } = element;
    // Mark line.
    if (markType === 'line') {
        element.attr('_lineWidth', element.attr('lineWidth') || 1);
        element.attr('lineWidth', element.attr('_lineWidth') + 3);
    }
    // Mark interval.
    if (markType === 'interval') {
        element.attr('_opacity', element.attr('opacity') || 1);
        element.attr('opacity', 0.7 * element.attr('_opacity'));
    }
};
// Element mouseleave change style.
const elementMouseleave = (e) => {
    const element = e.target;
    const { markType } = element;
    // Mark line.
    if (markType === 'line') {
        element.attr('lineWidth', element.attr('_lineWidth'));
    }
    // Mark interval.
    if (markType === 'interval') {
        element.attr('opacity', element.attr('_opacity'));
    }
};
// Get the latest overall data based on the individual data changes.
const getNewData = (newChangeData, data, encode) => {
    return data.map((d) => {
        const isUpdate = ['x', 'color'].reduce((v, key) => {
            const field = encode[key];
            if (!field)
                return v;
            if (d[field] !== newChangeData[field])
                return false;
            return v;
        }, true);
        return isUpdate ? Object.assign(Object.assign({}, d), newChangeData) : d;
    });
};
// Find mark interval origin element data.
const getIntervalDataRatioTransformFn = (element) => {
    const y = (0, util_1.get)(element, ['__data__', 'y']);
    const y1 = (0, util_1.get)(element, ['__data__', 'y1']);
    const v = y1 - y;
    const { __data__: { data, encode, transform }, childNodes, } = element.parentNode;
    const isNormalizeY = (0, util_1.find)(transform, ({ type }) => type === 'normalizeY');
    const yField = (0, util_1.get)(encode, ['y', 'field']);
    const value = data[childNodes.indexOf(element)][yField];
    return (newValue, isTheta = false) => {
        if (isNormalizeY || isTheta) {
            return (newValue / (1 - newValue) / (v / (1 - v))) * value;
        }
        return newValue;
    };
};
// Find origin path data.
const getPathDataRatioTransformFn = (element, index) => {
    const v = (0, util_1.get)(element, ['__data__', 'seriesItems', index, '0', 'value']);
    const i = (0, util_1.get)(element, ['__data__', 'seriesIndex', index]);
    const { __data__: { data, encode, transform }, } = element.parentNode;
    const isNormalizeY = (0, util_1.find)(transform, ({ type }) => type === 'normalizeY');
    const yField = (0, util_1.get)(encode, ['y', 'field']);
    const value = data[i][yField];
    return (newValue) => {
        if (isNormalizeY) {
            if (v === 1) {
                return newValue;
            }
            return (newValue / (1 - newValue) / (v / (1 - v))) * value;
        }
        return newValue;
    };
};
// Point shape select change style.
const selectedPointsStyle = (pointsShape, selection, defaultStyle) => {
    pointsShape.forEach((shape, index) => {
        shape.attr('stroke', selection[1] === index
            ? defaultStyle['activeStroke']
            : defaultStyle['stroke']);
    });
};
// Create help show message shape.
const createHelpShape = (group, circle, pathStyle, labelStyle) => {
    const pathShape = new g_1.Path({
        style: pathStyle,
    });
    const labelShape = new g_1.Text({
        style: labelStyle,
    });
    circle.appendChild(labelShape);
    group.appendChild(pathShape);
    return [pathShape, labelShape];
};
// Get color scale type.
const getColorType = (scaleColor, color) => {
    const indexOf = (0, util_1.get)(scaleColor, ['options', 'range', 'indexOf']);
    if (!indexOf)
        return;
    const i = scaleColor.options.range.indexOf(color);
    return scaleColor.sortedDomain[i];
};
// Get the same direction new point.
const getSamePointPosition = (center, point, target) => {
    const oldR = (0, utils_1.getPointsR)(center, point);
    const newR = (0, utils_1.getPointsR)(center, target);
    const ratio = newR / oldR;
    const newX = center[0] + (point[0] - center[0]) * ratio;
    const newY = center[1] + (point[1] - center[1]) * ratio;
    return [newX, newY];
};
/**
 * ElementPointMove interaction.
 */
function ElementPointMove(elementPointMoveOptions = {}) {
    const { selection = [], precision = 2 } = elementPointMoveOptions, style = __rest(elementPointMoveOptions, ["selection", "precision"]);
    const defaultStyle = Object.assign(Object.assign({}, DEFAULT_STYLE), (style || {}));
    // Shape default style.
    const pathDefaultStyle = (0, helper_1.subObject)(defaultStyle, 'path');
    const labelDefaultStyle = (0, helper_1.subObject)(defaultStyle, 'label');
    const pointDefaultStyle = (0, helper_1.subObject)(defaultStyle, 'point');
    return (context, _, emitter) => {
        const { update, setState, container, view, options: { marks, coordinate: coordinateOptions }, } = context;
        const plotArea = (0, utils_1.selectPlotArea)(container);
        let elements = (0, utils_1.getElements)(plotArea);
        let newState;
        let newSelection = selection;
        const { transform = [], type: coordinateType } = coordinateOptions;
        const isTranspose = !!(0, util_1.find)(transform, ({ type }) => type === 'transpose');
        const isPolar = coordinateType === 'polar';
        const isTheta = coordinateType === 'theta';
        const isArea = !!(0, util_1.find)(elements, ({ markType }) => markType === 'area');
        if (isArea) {
            elements = elements.filter(({ markType }) => markType === 'area');
        }
        // Create points
        const pointsGroup = new g_1.Group({
            style: {
                // Tooltip point need down.
                zIndex: 2,
            },
        });
        plotArea.appendChild(pointsGroup);
        const selectedChange = () => {
            emitter.emit('element-point:select', {
                nativeEvent: true,
                data: {
                    selection: newSelection,
                },
            });
        };
        const dataChange = (changeData, data) => {
            emitter.emit('element-point:moved', {
                nativeEvent: true,
                data: {
                    changeData,
                    data,
                },
            });
        };
        // Element click change style.
        const elementClick = (e) => {
            const element = e.target;
            newSelection = [element.parentNode.childNodes.indexOf(element)];
            selectedChange();
            createPoints(element);
        };
        const elementSelect = (d) => {
            const { data: { selection }, nativeEvent, } = d;
            if (nativeEvent)
                return;
            newSelection = selection;
            const element = (0, util_1.get)(elements, [newSelection === null || newSelection === void 0 ? void 0 : newSelection[0]]);
            if (element) {
                createPoints(element);
            }
        };
        // Create select element points.
        const createPoints = (element) => {
            const { attributes, markType, __data__: data } = element;
            const { stroke: fill } = attributes;
            const { points, seriesTitle, color, title, seriesX, y1 } = data;
            // Transpose Currently only do mark interval;
            if (isTranspose && markType !== 'interval')
                return;
            const { scale, coordinate } = (newState === null || newState === void 0 ? void 0 : newState.view) || view;
            const { color: scaleColor, y: scaleY, x: scaleX } = scale;
            const center = coordinate.getCenter();
            pointsGroup.removeChildren();
            let downPoint;
            const updateView = (x, y, color, markTypes) => __awaiter(this, void 0, void 0, function* () {
                setState('elementPointMove', (viewOptions) => {
                    var _a;
                    // Update marks.
                    const newMarks = (((_a = newState === null || newState === void 0 ? void 0 : newState.options) === null || _a === void 0 ? void 0 : _a.marks) || marks).map((mark) => {
                        if (!markTypes.includes(mark.type))
                            return mark;
                        const { data, encode } = mark;
                        const encodeKeys = Object.keys(encode);
                        // Get change new one element data.
                        const newChangeData = encodeKeys.reduce((value, key) => {
                            const dataKey = encode[key];
                            if (key === 'x') {
                                value[dataKey] = x;
                            }
                            if (key === 'y') {
                                value[dataKey] = y;
                            }
                            if (key === 'color') {
                                value[dataKey] = color;
                            }
                            return value;
                        }, {});
                        // Get change new all data.
                        const newData = getNewData(newChangeData, data, encode);
                        dataChange(newChangeData, newData);
                        return (0, util_1.deepMix)({}, mark, {
                            data: newData,
                            // No need animate
                            animate: false,
                        });
                    });
                    return Object.assign(Object.assign({}, viewOptions), { marks: newMarks });
                });
                return yield update('elementPointMove');
            });
            if (['line', 'area'].includes(markType)) {
                points.forEach((p, index) => {
                    const title = scaleX.invert(seriesX[index]);
                    // Area points have bottom point.
                    if (!title)
                        return;
                    const circle = new g_1.Circle({
                        name: MOVE_POINT_NAME,
                        style: Object.assign({ cx: p[0], cy: p[1], fill }, pointDefaultStyle),
                    });
                    const ratioTransform = getPathDataRatioTransformFn(element, index);
                    circle.addEventListener('mousedown', (e) => {
                        const oldPoint = coordinate.output([seriesX[index], 0]);
                        const pathLength = seriesTitle === null || seriesTitle === void 0 ? void 0 : seriesTitle.length;
                        container.attr('cursor', 'move');
                        if (newSelection[1] !== index) {
                            newSelection[1] = index;
                            selectedChange();
                        }
                        selectedPointsStyle(pointsGroup.childNodes, newSelection, pointDefaultStyle);
                        const [pathShape, labelShape] = createHelpShape(pointsGroup, circle, pathDefaultStyle, labelDefaultStyle);
                        // Point move change text
                        const pointMousemove = (e) => {
                            const newCy = p[1] + e.clientY - downPoint[1];
                            // Area/Radar chart.
                            if (isArea) {
                                // Radar chart.
                                if (isPolar) {
                                    const newCx = p[0] + e.clientX - downPoint[0];
                                    const [newX, newY] = getSamePointPosition(center, oldPoint, [
                                        newCx,
                                        newCy,
                                    ]);
                                    const [, initY] = coordinate.output([1, scaleY.output(0)]);
                                    const [, y] = coordinate.invert([
                                        newX,
                                        initY - (points[index + pathLength][1] - newY),
                                    ]);
                                    const nextIndex = (index + 1) % pathLength;
                                    const lastIndex = (index - 1 + pathLength) % pathLength;
                                    const newPath = (0, utils_1.getPointsPath)([
                                        points[lastIndex],
                                        [newX, newY],
                                        seriesTitle[nextIndex] && points[nextIndex],
                                    ]);
                                    labelShape.attr('text', ratioTransform(scaleY.invert(y)).toFixed(precision));
                                    pathShape.attr('d', newPath);
                                    circle.attr('cx', newX);
                                    circle.attr('cy', newY);
                                }
                                else {
                                    // Area chart.
                                    const [, initY] = coordinate.output([1, scaleY.output(0)]);
                                    const [, y] = coordinate.invert([
                                        p[0],
                                        initY - (points[index + pathLength][1] - newCy),
                                    ]);
                                    const newPath = (0, utils_1.getPointsPath)([
                                        points[index - 1],
                                        [p[0], newCy],
                                        seriesTitle[index + 1] && points[index + 1],
                                    ]);
                                    labelShape.attr('text', ratioTransform(scaleY.invert(y)).toFixed(precision));
                                    pathShape.attr('d', newPath);
                                    circle.attr('cy', newCy);
                                }
                            }
                            else {
                                // Line chart.
                                const [, y] = coordinate.invert([p[0], newCy]);
                                const newPath = (0, utils_1.getPointsPath)([
                                    points[index - 1],
                                    [p[0], newCy],
                                    points[index + 1],
                                ]);
                                labelShape.attr('text', scaleY.invert(y).toFixed(precision));
                                pathShape.attr('d', newPath);
                                circle.attr('cy', newCy);
                            }
                        };
                        downPoint = [e.clientX, e.clientY];
                        window.addEventListener('mousemove', pointMousemove);
                        const mouseupFn = () => __awaiter(this, void 0, void 0, function* () {
                            container.attr('cursor', 'default');
                            window.removeEventListener('mousemove', pointMousemove);
                            container.removeEventListener('mouseup', mouseupFn);
                            if ((0, util_1.isUndefined)(labelShape.attr('text')))
                                return;
                            const y = Number(labelShape.attr('text'));
                            const colorType = getColorType(scaleColor, color);
                            newState = yield updateView(title, y, colorType, [
                                'line',
                                'area',
                            ]);
                            labelShape.remove();
                            pathShape.remove();
                            createPoints(element);
                        });
                        container.addEventListener('mouseup', mouseupFn);
                    });
                    pointsGroup.appendChild(circle);
                });
                selectedPointsStyle(pointsGroup.childNodes, newSelection, pointDefaultStyle);
            }
            else if (markType === 'interval') {
                // Column chart point.
                let circlePoint = [(points[0][0] + points[1][0]) / 2, points[0][1]];
                // Bar chart point.
                if (isTranspose) {
                    circlePoint = [points[0][0], (points[0][1] + points[1][1]) / 2];
                }
                else if (isTheta) {
                    // Pie chart point.
                    circlePoint = points[0];
                }
                const ratioTransform = getIntervalDataRatioTransformFn(element);
                const circle = new g_1.Circle({
                    name: MOVE_POINT_NAME,
                    style: Object.assign(Object.assign({ cx: circlePoint[0], cy: circlePoint[1], fill }, pointDefaultStyle), { stroke: pointDefaultStyle['activeStroke'] }),
                });
                circle.addEventListener('mousedown', (e) => {
                    container.attr('cursor', 'move');
                    const colorType = getColorType(scaleColor, color);
                    const [pathShape, labelShape] = createHelpShape(pointsGroup, circle, pathDefaultStyle, labelDefaultStyle);
                    // Point move change text
                    const pointMousemove = (e) => {
                        if (isTranspose) {
                            // Bar chart.
                            const newCx = circlePoint[0] + e.clientX - downPoint[0];
                            const [initX] = coordinate.output([
                                scaleY.output(0),
                                scaleY.output(0),
                            ]);
                            const [, x] = coordinate.invert([
                                initX + (newCx - points[2][0]),
                                circlePoint[1],
                            ]);
                            const newPath = (0, utils_1.getPointsPath)([
                                [newCx, points[0][1]],
                                [newCx, points[1][1]],
                                points[2],
                                points[3],
                            ], true);
                            labelShape.attr('text', ratioTransform(scaleY.invert(x)).toFixed(precision));
                            pathShape.attr('d', newPath);
                            circle.attr('cx', newCx);
                        }
                        else if (isTheta) {
                            // Pie chart.
                            const newCy = circlePoint[1] + e.clientY - downPoint[1];
                            const newCx = circlePoint[0] + e.clientX - downPoint[0];
                            const [newXOut, newYOut] = getSamePointPosition(center, [newCx, newCy], circlePoint);
                            const [newXIn, newYIn] = getSamePointPosition(center, [newCx, newCy], points[1]);
                            const lastPercent = coordinate.invert([newXOut, newYOut])[1];
                            const percent = y1 - lastPercent;
                            if (percent < 0)
                                return;
                            const newPath = (0, utils_1.getThetaPath)(center, [[newXOut, newYOut], [newXIn, newYIn], points[2], points[3]], percent > 0.5 ? 1 : 0);
                            labelShape.attr('text', ratioTransform(percent, true).toFixed(precision));
                            pathShape.attr('d', newPath);
                            circle.attr('cx', newXOut);
                            circle.attr('cy', newYOut);
                        }
                        else {
                            // Column chart.
                            const newCy = circlePoint[1] + e.clientY - downPoint[1];
                            const [, initY] = coordinate.output([1, scaleY.output(0)]);
                            const [, y] = coordinate.invert([
                                circlePoint[0],
                                initY - (points[2][1] - newCy),
                            ]);
                            const newPath = (0, utils_1.getPointsPath)([
                                [points[0][0], newCy],
                                [points[1][0], newCy],
                                points[2],
                                points[3],
                            ], true);
                            labelShape.attr('text', ratioTransform(scaleY.invert(y)).toFixed(precision));
                            pathShape.attr('d', newPath);
                            circle.attr('cy', newCy);
                        }
                    };
                    downPoint = [e.clientX, e.clientY];
                    window.addEventListener('mousemove', pointMousemove);
                    // Change mosueup change data and update 、clear shape.
                    const mouseupFn = () => __awaiter(this, void 0, void 0, function* () {
                        container.attr('cursor', 'default');
                        container.removeEventListener('mouseup', mouseupFn);
                        window.removeEventListener('mousemove', pointMousemove);
                        if ((0, util_1.isUndefined)(labelShape.attr('text')))
                            return;
                        const y = Number(labelShape.attr('text'));
                        newState = yield updateView(title, y, colorType, [markType]);
                        labelShape.remove();
                        pathShape.remove();
                        createPoints(element);
                    });
                    container.addEventListener('mouseup', mouseupFn);
                });
                pointsGroup.appendChild(circle);
            }
        };
        // Add EventListener.
        elements.forEach((element, index) => {
            if (newSelection[0] === index) {
                createPoints(element);
            }
            element.addEventListener('click', elementClick);
            element.addEventListener('mouseenter', elementMouseenter);
            element.addEventListener('mouseleave', elementMouseleave);
        });
        const rootClick = (e) => {
            const element = e === null || e === void 0 ? void 0 : e.target;
            if (!element ||
                (element.name !== MOVE_POINT_NAME && !elements.includes(element))) {
                newSelection = [];
                selectedChange();
                pointsGroup.removeChildren();
            }
        };
        emitter.on('element-point:select', elementSelect);
        emitter.on('element-point:unselect', rootClick);
        container.addEventListener('mousedown', rootClick);
        // Remove EventListener.
        return () => {
            pointsGroup.remove();
            emitter.off('element-point:select', elementSelect);
            emitter.off('element-point:unselect', rootClick);
            container.removeEventListener('mousedown', rootClick);
            elements.forEach((element) => {
                element.removeEventListener('click', elementClick);
                element.removeEventListener('mouseenter', elementMouseenter);
                element.removeEventListener('mouseleave', elementMouseleave);
            });
        };
    };
}
exports.ElementPointMove = ElementPointMove;
//# sourceMappingURL=elementPointMove.js.map