import { __extends, __read, __spreadArray } from "tslib";
import { parseAnimationOption } from '../../animation';
import { Component } from '../../core';
import { ifShow, sampling, select } from '../../util';
import { AXIS_BASE_DEFAULT_ATTR, CLASS_NAMES } from './constant';
import { renderGrid } from './guides/grid';
import { renderLabels } from './guides/labels';
import { renderAxisLine } from './guides/line';
import { renderTicks } from './guides/ticks';
import { renderTitle } from './guides/title';
import { applyClassName } from './utils/classname';
import { CLASSNAME_SUFFIX_MAP } from './classname-map';
function renderAxisMain(attributes, container, data, animation) {
    var showLine = attributes.showLine, showTick = attributes.showTick, showLabel = attributes.showLabel, classNamePrefix = attributes.classNamePrefix;
    /** line */
    var lineGroup = container.maybeAppendByClassName(CLASS_NAMES.lineGroup, 'g');
    applyClassName(lineGroup, CLASS_NAMES.lineGroup, CLASSNAME_SUFFIX_MAP.lineGroup, classNamePrefix);
    var lineTransitions = ifShow(showLine, lineGroup, function (group) {
        return renderAxisLine(group, attributes, animation);
    }) || [];
    /** tick */
    var tickGroup = container.maybeAppendByClassName(CLASS_NAMES.tickGroup, 'g');
    applyClassName(tickGroup, CLASS_NAMES.tickGroup, CLASSNAME_SUFFIX_MAP.tickGroup, classNamePrefix);
    var tickTransitions = ifShow(showTick, tickGroup, function (group) {
        return renderTicks(group, data, attributes, animation);
    }) || [];
    /** label */
    var labelGroup = container.maybeAppendByClassName(CLASS_NAMES.labelGroup, 'g');
    applyClassName(labelGroup, CLASS_NAMES.labelGroup, CLASSNAME_SUFFIX_MAP.labelGroup, classNamePrefix);
    var labelTransitions = ifShow(showLabel, labelGroup, function (group) {
        return renderLabels(group, data, attributes, animation, container.node());
    }) || [];
    return __spreadArray(__spreadArray(__spreadArray([], __read(lineTransitions), false), __read(tickTransitions), false), __read(labelTransitions), false).filter(function (t) { return !!t; });
}
var Axis = /** @class */ (function (_super) {
    __extends(Axis, _super);
    function Axis(options) {
        return _super.call(this, options, AXIS_BASE_DEFAULT_ATTR) || this;
    }
    Axis.prototype.render = function (attributes, container, specificAnimation) {
        var _this = this;
        var titleText = attributes.titleText, data = attributes.data, animate = attributes.animate, showTitle = attributes.showTitle, showGrid = attributes.showGrid, dataThreshold = attributes.dataThreshold, truncRange = attributes.truncRange, classNamePrefix = attributes.classNamePrefix;
        // Set root container className
        var baseClassName = container.className || 'axis';
        if (classNamePrefix) {
            container.attr('className', "".concat(baseClassName, " ").concat(classNamePrefix, "axis"));
        }
        else if (!container.className) {
            container.attr('className', 'axis');
        }
        var sampledData = sampling(data, dataThreshold).filter(function (_a) {
            var value = _a.value;
            if (truncRange && value > truncRange[0] && value < truncRange[1])
                return false;
            return true;
        });
        var finalAnimation = parseAnimationOption(specificAnimation === undefined ? animate : specificAnimation);
        /** grid */
        var gridGroup = select(container).maybeAppendByClassName(CLASS_NAMES.gridGroup, 'g');
        applyClassName(gridGroup, CLASS_NAMES.gridGroup, CLASSNAME_SUFFIX_MAP.gridGroup, classNamePrefix);
        var gridTransitions = ifShow(showGrid, gridGroup, function (group) { return renderGrid(group, sampledData, attributes, finalAnimation); }) || [];
        /** main group */
        var mainGroup = select(container).maybeAppendByClassName(CLASS_NAMES.mainGroup, 'g');
        applyClassName(mainGroup, CLASS_NAMES.mainGroup, CLASSNAME_SUFFIX_MAP.mainGroup, classNamePrefix);
        if (titleText && ((!this.initialized && finalAnimation.enter) || (this.initialized && finalAnimation.update))) {
            renderAxisMain(attributes, select(this.offscreenGroup), sampledData, parseAnimationOption(false));
        }
        // render
        var mainTransitions = renderAxisMain(attributes, select(mainGroup.node()), sampledData, finalAnimation);
        /** title */
        var titleGroup = select(container).maybeAppendByClassName(CLASS_NAMES.titleGroup, 'g');
        applyClassName(titleGroup, CLASS_NAMES.titleGroup, CLASSNAME_SUFFIX_MAP.titleGroup, classNamePrefix);
        var titleTransitions = ifShow(showTitle, titleGroup, function (group) {
            return renderTitle(group, _this, attributes, finalAnimation);
        }) || [];
        return __spreadArray(__spreadArray(__spreadArray([], __read(gridTransitions), false), __read(mainTransitions), false), __read(titleTransitions), false).flat().filter(function (t) { return !!t; });
    };
    return Axis;
}(Component));
export { Axis };
//# sourceMappingURL=axis.js.map