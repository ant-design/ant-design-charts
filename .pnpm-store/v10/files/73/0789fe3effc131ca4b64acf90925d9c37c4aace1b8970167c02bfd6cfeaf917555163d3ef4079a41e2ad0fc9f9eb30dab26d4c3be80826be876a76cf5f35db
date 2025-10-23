"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Axis = void 0;
var tslib_1 = require("tslib");
var animation_1 = require("../../animation");
var core_1 = require("../../core");
var util_1 = require("../../util");
var constant_1 = require("./constant");
var grid_1 = require("./guides/grid");
var labels_1 = require("./guides/labels");
var line_1 = require("./guides/line");
var ticks_1 = require("./guides/ticks");
var title_1 = require("./guides/title");
function renderAxisMain(attributes, container, data, animation) {
    var showLine = attributes.showLine, showTick = attributes.showTick, showLabel = attributes.showLabel;
    /** line */
    var lineGroup = container.maybeAppendByClassName(constant_1.CLASS_NAMES.lineGroup, 'g');
    var lineTransitions = (0, util_1.ifShow)(showLine, lineGroup, function (group) {
        return (0, line_1.renderAxisLine)(group, attributes, animation);
    }) || [];
    /** tick */
    var tickGroup = container.maybeAppendByClassName(constant_1.CLASS_NAMES.tickGroup, 'g');
    var tickTransitions = (0, util_1.ifShow)(showTick, tickGroup, function (group) {
        return (0, ticks_1.renderTicks)(group, data, attributes, animation);
    }) || [];
    /** label */
    var labelGroup = container.maybeAppendByClassName(constant_1.CLASS_NAMES.labelGroup, 'g');
    var labelTransitions = (0, util_1.ifShow)(showLabel, labelGroup, function (group) {
        return (0, labels_1.renderLabels)(group, data, attributes, animation, container.node());
    }) || [];
    return tslib_1.__spreadArray(tslib_1.__spreadArray(tslib_1.__spreadArray([], tslib_1.__read(lineTransitions), false), tslib_1.__read(tickTransitions), false), tslib_1.__read(labelTransitions), false).filter(function (t) { return !!t; });
}
var Axis = /** @class */ (function (_super) {
    tslib_1.__extends(Axis, _super);
    function Axis(options) {
        return _super.call(this, options, constant_1.AXIS_BASE_DEFAULT_ATTR) || this;
    }
    Axis.prototype.render = function (attributes, container, specificAnimation) {
        var _this = this;
        var titleText = attributes.titleText, data = attributes.data, animate = attributes.animate, showTitle = attributes.showTitle, showGrid = attributes.showGrid, dataThreshold = attributes.dataThreshold, truncRange = attributes.truncRange;
        var sampledData = (0, util_1.sampling)(data, dataThreshold).filter(function (_a) {
            var value = _a.value;
            if (truncRange && value > truncRange[0] && value < truncRange[1])
                return false;
            return true;
        });
        var finalAnimation = (0, animation_1.parseAnimationOption)(specificAnimation === undefined ? animate : specificAnimation);
        /** grid */
        var gridGroup = (0, util_1.select)(container).maybeAppendByClassName(constant_1.CLASS_NAMES.gridGroup, 'g');
        var gridTransitions = (0, util_1.ifShow)(showGrid, gridGroup, function (group) { return (0, grid_1.renderGrid)(group, sampledData, attributes, finalAnimation); }) || [];
        /** main group */
        var mainGroup = (0, util_1.select)(container).maybeAppendByClassName(constant_1.CLASS_NAMES.mainGroup, 'g');
        if (titleText && ((!this.initialized && finalAnimation.enter) || (this.initialized && finalAnimation.update))) {
            renderAxisMain(attributes, (0, util_1.select)(this.offscreenGroup), sampledData, (0, animation_1.parseAnimationOption)(false));
        }
        // render
        var mainTransitions = renderAxisMain(attributes, (0, util_1.select)(mainGroup.node()), sampledData, finalAnimation);
        /** title */
        var titleGroup = (0, util_1.select)(container).maybeAppendByClassName(constant_1.CLASS_NAMES.titleGroup, 'g');
        var titleTransitions = (0, util_1.ifShow)(showTitle, titleGroup, function (group) {
            return (0, title_1.renderTitle)(group, _this, attributes, finalAnimation);
        }) || [];
        return tslib_1.__spreadArray(tslib_1.__spreadArray(tslib_1.__spreadArray([], tslib_1.__read(gridTransitions), false), tslib_1.__read(mainTransitions), false), tslib_1.__read(titleTransitions), false).flat().filter(function (t) { return !!t; });
    };
    return Axis;
}(core_1.Component));
exports.Axis = Axis;
//# sourceMappingURL=axis.js.map