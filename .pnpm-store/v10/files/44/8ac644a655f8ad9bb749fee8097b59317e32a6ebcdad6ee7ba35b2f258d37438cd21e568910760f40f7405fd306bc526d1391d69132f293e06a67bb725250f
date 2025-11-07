"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lines = void 0;
var tslib_1 = require("tslib");
var util_1 = require("@antv/util");
var shapes_1 = require("../../shapes");
var util_2 = require("../../util");
var Lines = /** @class */ (function (_super) {
    tslib_1.__extends(Lines, _super);
    function Lines(_a) {
        var _this = this;
        var style = _a.style, rest = tslib_1.__rest(_a, ["style"]);
        _this = _super.call(this, (0, util_1.deepMix)({}, { type: 'lines' }, tslib_1.__assign({ style: style }, rest))) || this;
        _this.linesGroup = _this.appendChild(new shapes_1.Group());
        _this.areasGroup = _this.appendChild(new shapes_1.Group());
        _this.render();
        return _this;
    }
    Lines.prototype.render = function () {
        var _a = this.attributes, lines = _a.lines, areas = _a.areas, x = _a.x, y = _a.y;
        this.style.transform = "translate(".concat(x, ", ").concat(y, ")");
        if (lines)
            this.renderLines(lines);
        if (areas)
            this.renderAreas(areas);
    };
    Lines.prototype.clear = function () {
        this.linesGroup.removeChildren();
        this.areasGroup.removeChildren();
    };
    Lines.prototype.update = function (attr) {
        this.attr((0, util_2.deepAssign)({}, this.attributes, attr));
        this.render();
    };
    Lines.prototype.renderLines = function (lines) {
        (0, util_2.select)(this.linesGroup)
            .selectAll('.line')
            .data(lines)
            .join(function (enter) {
            return enter
                .append('path')
                .attr('className', 'line')
                .each(function (style) {
                this.attr(style);
            });
        }, function (update) {
            return update.each(function (style) {
                this.attr(style);
            });
        }, function (exit) { return exit.remove(); });
    };
    Lines.prototype.renderAreas = function (areas) {
        (0, util_2.select)(this.linesGroup)
            .selectAll('.area')
            .data(areas)
            .join(function (enter) {
            return enter
                .append('path')
                .attr('className', 'area')
                .each(function (style) {
                this.attr(style);
            });
        }, function (update) {
            return update.each(function (style) {
                this.style(style);
            });
        }, function (exit) { return exit.remove(); });
    };
    return Lines;
}(shapes_1.DisplayObject));
exports.Lines = Lines;
//# sourceMappingURL=lines.js.map