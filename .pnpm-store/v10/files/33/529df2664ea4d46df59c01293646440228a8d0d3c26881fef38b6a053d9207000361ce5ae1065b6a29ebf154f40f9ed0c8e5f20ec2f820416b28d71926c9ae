import { __assign, __read, __rest, __spreadArray } from "tslib";
import { get, isFunction } from '@antv/util';
import { fadeOut, onAnimateFinished, onAnimatesFinished, transition, transitionShape } from '../../../animation';
import { add, ellipsisIt, getCallbackValue, hide, inRange, percentTransform, radToDeg, renderExtDo, scale, select, show, splitStyle, subStyleProps, wrapIt, renderHtmlExtDo, parseHeightFromHTML, omit, } from '../../../util';
import { CLASS_NAMES } from '../constant';
import { processOverlap } from '../overlap';
import { getFactor } from '../utils';
import { getValuePos } from './line';
import { filterExec, getCallbackStyle, getLabelVector, getLineTangentVector } from './utils';
import { applyClassName } from '../utils/classname';
import { CLASSNAME_SUFFIX_MAP } from '../classname-map';
function angleNormalizer(angle) {
    var normalizedAngle = angle;
    while (normalizedAngle < 0)
        normalizedAngle += 360;
    return Math.round(normalizedAngle % 360);
}
function getAngle(v1, v2) {
    var _a = __read(v1, 2), x1 = _a[0], y1 = _a[1];
    var _b = __read(v2, 2), x2 = _b[0], y2 = _b[1];
    var _c = __read([x1 * x2 + y1 * y2, x1 * y2 - y1 * x2], 2), dot = _c[0], det = _c[1];
    return Math.atan2(det, dot);
}
/** to correct label rotation to avoid inverted character */
function correctLabelRotation(_rotate) {
    var rotate = (_rotate + 360) % 180;
    if (!inRange(rotate, -90, 90))
        rotate += 180;
    return rotate;
}
/** get rotation from preset or layout */
function getLabelRotation(datum, label, attr) {
    var _a;
    var labelAlign = attr.labelAlign;
    // if label rotate is set, use it
    var customRotate = (_a = label.style.transform) === null || _a === void 0 ? void 0 : _a.includes('rotate');
    if (customRotate)
        return label.getLocalEulerAngles();
    var rotate = 0;
    var labelVector = getLabelVector(datum.value, attr);
    var tangentVector = getLineTangentVector(datum.value, attr);
    if (labelAlign === 'horizontal')
        return 0;
    if (labelAlign === 'perpendicular')
        rotate = getAngle([1, 0], labelVector);
    else
        rotate = getAngle([tangentVector[0] < 0 ? -1 : 1, 0], tangentVector);
    return correctLabelRotation(radToDeg(rotate));
}
/** get the label align according to its tick and label angle  */
function getLabelStyle(value, rotate, attr) {
    var type = attr.type, labelAlign = attr.labelAlign;
    var labelVector = getLabelVector(value, attr);
    var labelAngle = angleNormalizer(rotate);
    var tickAngle = angleNormalizer(radToDeg(getAngle([1, 0], labelVector)));
    var textAlign = 'center';
    var textBaseline = 'middle';
    if (type === 'linear') {
        // tick 和 label 均为水平或垂直时，做快速判断
        if ([90, 270].includes(tickAngle) && labelAngle === 0) {
            textAlign = 'center';
            textBaseline = labelVector[1] === 1 ? 'top' : 'bottom';
        }
        else if (!(tickAngle % 180) && [90, 270].includes(labelAngle)) {
            textAlign = 'center';
        }
        // 根据 tick 和 label 的角度，判断 label 的对齐方式
        else if (tickAngle === 0) {
            if (inRange(labelAngle, 0, 90, false, true)) {
                textAlign = 'start';
            }
            else if (inRange(labelAngle, 0, 90) || inRange(labelAngle, 270, 360)) {
                textAlign = 'start';
            }
        }
        else if (tickAngle === 90) {
            if (inRange(labelAngle, 0, 90, false, true)) {
                textAlign = 'start';
            }
            else if (inRange(labelAngle, 90, 180) || inRange(labelAngle, 270, 360)) {
                textAlign = 'end';
            }
        }
        else if (tickAngle === 270) {
            if (inRange(labelAngle, 0, 90, false, true)) {
                textAlign = 'end';
            }
            else if (inRange(labelAngle, 90, 180) || inRange(labelAngle, 270, 360)) {
                textAlign = 'start';
            }
        }
        else if (tickAngle === 180) {
            if (labelAngle === 90) {
                textAlign = 'start';
            }
            else if (inRange(labelAngle, 0, 90) || inRange(labelAngle, 270, 360)) {
                textAlign = 'end';
            }
        }
        /**
         * todo tick 倾斜时的判断逻辑，该情况下坐标轴非垂直或水平
         */
    }
    else {
        // 弧线坐标轴 label 的对齐方式判断逻辑
        if (labelAlign === 'parallel') {
            if (inRange(tickAngle, 0, 180, true)) {
                textBaseline = 'top';
            }
            else {
                textBaseline = 'bottom';
            }
        }
        else if (labelAlign === 'horizontal') {
            if (inRange(tickAngle, 90, 270, false)) {
                textAlign = 'end';
            }
            else if (inRange(tickAngle, 270, 360, false) || inRange(tickAngle, 0, 90)) {
                textAlign = 'start';
            }
        }
        else if (labelAlign === 'perpendicular') {
            if (inRange(tickAngle, 90, 270)) {
                textAlign = 'end';
            }
            else {
                textAlign = 'start';
            }
        }
    }
    return { textAlign: textAlign, textBaseline: textBaseline };
}
function setRotateAndAdjustLabelAlign(rotate, group, attr) {
    group.setLocalEulerAngles(rotate);
    var value = group.__data__.value;
    var textStyle = getLabelStyle(value, rotate, attr);
    var label = group.querySelector(CLASS_NAMES.labelItem.class);
    if (label)
        applyTextStyle(label, textStyle);
}
function getLabelPos(datum, data, attr) {
    var showTick = attr.showTick, tickLength = attr.tickLength, tickDirection = attr.tickDirection, labelDirection = attr.labelDirection, labelSpacing = attr.labelSpacing;
    var index = data.indexOf(datum);
    var finalLabelSpacing = getCallbackValue(labelSpacing, [datum, index, data]);
    var _a = __read([getLabelVector(datum.value, attr), getFactor(labelDirection, tickDirection)], 2), labelVector = _a[0], unionFactor = _a[1];
    var extraLength = unionFactor === 1 ? getCallbackValue(showTick ? tickLength : 0, [datum, index, data]) : 0;
    var _b = __read(add(scale(labelVector, finalLabelSpacing + extraLength), getValuePos(datum.value, attr)), 2), x = _b[0], y = _b[1];
    return { x: x, y: y };
}
function formatter(datum, index, data, attr) {
    var labelFormatter = attr.labelFormatter;
    var element = isFunction(labelFormatter)
        ? function () { return renderExtDo(getCallbackValue(labelFormatter, [datum, index, data, getLabelVector(datum.value, attr)])); }
        : function () { return renderExtDo(datum.label || ''); };
    return element;
}
function renderHTMLLabel(datum, index, data, attr) {
    var labelRender = attr.labelRender;
    var elementWidth = (get(attr, 'endPos.0', 400) - get(attr, 'startPos.0', 0)) / data.length;
    var elStr = isFunction(labelRender)
        ? getCallbackValue(labelRender, [datum, index, data, getLabelVector(datum.value, attr)])
        : datum.label || '';
    var elementHeight = parseHeightFromHTML(elStr) || 30;
    return function () {
        return renderHtmlExtDo(elStr, {
            width: elementWidth,
            height: elementHeight,
        });
    };
}
var STYLE_OMIT_MAP = {
    html: ['fill'],
    text: [],
};
function applyTextStyle(node, style) {
    if (['text', 'html'].includes(node.nodeName))
        node.attr(omit(style, STYLE_OMIT_MAP[node.nodeName]));
}
function overlapHandler(attr, main) {
    processOverlap(this.node().childNodes, attr, main, {
        hide: hide,
        show: show,
        rotate: function (label, angle) {
            setRotateAndAdjustLabelAlign(+angle, label, attr);
        },
        ellipsis: function (label, len, suffix) {
            label && ellipsisIt(label, len || Infinity, suffix);
        },
        wrap: function (label, width, lines) {
            label && wrapIt(label, width, lines);
        },
        getTextShape: function (label) {
            return label.querySelector(CLASS_NAMES.labelItem.class);
        },
    });
}
function renderLabel(container, datum, data, style, attr) {
    var index = data.indexOf(datum);
    var labelRender = attr.labelRender, classNamePrefix = attr.classNamePrefix;
    var label = select(container)
        .append(labelRender ? renderHTMLLabel(datum, index, data, attr) : formatter(datum, index, data, attr))
        .attr('className', CLASS_NAMES.labelItem.name)
        .node();
    applyClassName(select(label), CLASS_NAMES.labelItem, CLASSNAME_SUFFIX_MAP.labelItem, classNamePrefix);
    var _a = __read(splitStyle(getCallbackStyle(style, [datum, index, data])), 2), labelStyle = _a[0], _b = _a[1], transform = _b.transform, groupStyle = __rest(_b, ["transform"]);
    percentTransform(label, transform);
    var rotate = getLabelRotation(datum, label, attr);
    if (!label.getLocalEulerAngles()) {
        label.setLocalEulerAngles(rotate);
    }
    applyTextStyle(label, __assign(__assign({}, getLabelStyle(datum.value, rotate, attr)), labelStyle));
    // For HTML labels, adjust x position to center align.
    if (label.nodeName === 'html') {
        var bbox = label.getBBox();
        var currentX = label.style.x || 0;
        label.attr('x', currentX - bbox.width / 2);
    }
    container.attr(groupStyle);
    return label;
}
export function renderLabels(container, data, attr, animate, main) {
    var classNamePrefix = attr.classNamePrefix;
    var finalData = filterExec(data, attr.labelFilter);
    var style = subStyleProps(attr, 'label');
    var _exit;
    var transitions = container
        .selectAll(CLASS_NAMES.label.class)
        .data(finalData, function (d, i) { return i; })
        .join(function (enter) {
        var labels = enter
            .append('g')
            .attr('className', CLASS_NAMES.label.name)
            .transition(function (datum) {
            renderLabel(this, datum, data, style, attr);
            var _a = getLabelPos(datum, data, attr), x = _a.x, y = _a.y;
            this.style.transform = "translate(".concat(x, ", ").concat(y, ")");
            return null;
        });
        applyClassName(labels, CLASS_NAMES.label, CLASSNAME_SUFFIX_MAP.label, classNamePrefix);
        return labels;
    }, function (update) {
        return update.transition(function (datum) {
            var prevLabel = this.querySelector(CLASS_NAMES.labelItem.class);
            var label = renderLabel(this, datum, data, style, attr);
            var shapeAnimation = transitionShape(prevLabel, label, animate.update);
            var _a = getLabelPos(datum, data, attr), x = _a.x, y = _a.y;
            var animation = transition(this, { transform: "translate(".concat(x, ", ").concat(y, ")") }, animate.update);
            return __spreadArray(__spreadArray([], __read(shapeAnimation), false), [animation], false);
            // return [animation];
        });
    }, function (exit) {
        _exit = exit;
        exit.transition(function () {
            var _this = this;
            var animation = fadeOut(this.childNodes[0], animate.exit);
            onAnimateFinished(animation, function () { return select(_this).remove(); });
            return animation;
        });
        return _exit;
    })
        .transitions();
    // handle overlapping after transitions finished
    onAnimatesFinished(transitions, function () {
        overlapHandler.call(container, attr, main);
    });
    return transitions;
}
//# sourceMappingURL=labels.js.map